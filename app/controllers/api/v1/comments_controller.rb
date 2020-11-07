module Api
    module v1
        class CommentsController < ApplicationController

            http_basic_authenticate_with name: "dhh", password: "secret", only: :destroy

            def create
                article = Article.find(params[:article_id])
                comment = article.comments.create(comment_params)

                if comment.save
                    render json: ArticleSerializer.new(article).serialized_json
                else
                    render json: { error: comment.errors.messages }, status: 422
                end
            end

            def destroy
                article = Article.find(params[:article_id])
                comment = article.comments.find(params[:id])

                if comment.destroy
                    render json: ArticleSerializer.new(article).serialized_json
                else
                    render json: { error: comment.errors.messages }, status: 422
                end
            end

            private
            def comment_params
                params.require(:comment).permit(:commenter, :body)
            end

        end


    end 
end
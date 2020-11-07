module Api
    module V1
        class ArticlesController < ApplicationController

            protect_from_forgery with: :null_session

            def index
                articles = Article.all
                render json: ArticleSerializer.new(articles, options).serialized_json
            end

            def show
                article = Article.find(params[:id])
                render json: ArticleSerializer.new(article, options).serialized_json
            end

            def new
                article = Article.new
            end

            def edit
                article = Article.find(params[:id])
            end

            def create
                article = Article.new(article_params)

                if article.save
                    render json: ArticleSerializer.new(article).serialized_json
                else
                    render json: { error: article.errors.messages }, status: 422
                end
            end

            def update
                article = Article.find(params[:id])

                if article.update(article_params)
                    render json: ArticleSerializer.new(article, options).serialized_json
                else
                    render json: { error: article.errors.messages }, status: 422
                end
            end

            def destroy
                article = Article.find(params[:id])

                if article.destroy
                    head :no_content
                else
                    render json: { error: article.errors.messages }, status: 422
                end
            end

            private
            def article_params
                params.require(:article).permit(:title, :text)
            end

            # ensures associated comment data for an article is included in the JSON payload
            def options
                @options ||= { include: %i[comments] }
            end


        end


    end 
end
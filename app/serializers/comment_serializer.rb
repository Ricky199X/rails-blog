class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :commenter, :body
end

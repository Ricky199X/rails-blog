class ArticleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :text

  has_many :comments
end

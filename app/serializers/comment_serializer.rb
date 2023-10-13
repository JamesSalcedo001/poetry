class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :name
  has_one :user
  has_one :posting
end

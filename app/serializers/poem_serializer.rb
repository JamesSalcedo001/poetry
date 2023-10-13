class PoemSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :date_posted
  has_one :user
end

class PostingSerializer < ActiveModel::Serializer
  attributes :id, :title, :preview
  # has_one :poem
end

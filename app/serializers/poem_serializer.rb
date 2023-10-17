class PoemSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at
  belongs_to :user
  has_many :comments 

  def preview
    object.content.truncate(50)
  end

end

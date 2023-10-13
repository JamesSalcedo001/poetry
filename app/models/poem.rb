class Poem < ApplicationRecord
  belongs_to :user
  has_many :comments

  def preview
     self.content.truncate(50)
  end

end

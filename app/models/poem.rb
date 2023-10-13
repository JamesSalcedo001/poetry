class Poem < ApplicationRecord
  belongs_to :user
  after_create :create_posting

  def create_posting
    Posting.create(title: self.title, preview: self.content.truncate(50), poem: self)
  end

end

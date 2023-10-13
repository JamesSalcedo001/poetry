class Posting < ApplicationRecord
  belongs_to :poem
  has_many :comments
end

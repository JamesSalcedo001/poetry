class User < ApplicationRecord
    has_secure_password

    has_many :comments
    has_many :postings

    validates :username, presence: true, uniqueness: true

end

class User < ApplicationRecord
    has_secure_password

    has_many :comments
    has_many :poems

    validates :username, presence: true, uniqueness: true

end

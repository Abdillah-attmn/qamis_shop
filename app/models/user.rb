class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # ,:confirmable, :lockable, :timeoutable, :trackableand :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Validation
  validates :firstname, uniqueness: {scope: :lastname}
  validates :email, uniqueness: true

  # Association
  has_many :orders
end

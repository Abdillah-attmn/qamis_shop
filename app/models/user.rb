class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # ,:confirmable, :lockable, :timeoutable, :trackableand :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

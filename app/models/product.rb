class Product < ApplicationRecord
  # Validation
  CATEGORIES = %w[Qatari Omani Emirati Sultan]
  validates :name, presence: true
  validates :price, presence: true
  validates :stock_quantity, presence: true
  validates :category, presence: true, inclusion: {in: CATEGORIES}
  validates :color, presence: true
  validates :size, presence: true
end

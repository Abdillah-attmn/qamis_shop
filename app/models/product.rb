class Product < ApplicationRecord
  # Validation
  CATEGORIES = %w[Qatari Omani Emirati Sultan]
  SIZES = %w[48 50 52 54 56 58 60 62]

  validates :name, :price, :color, :size, :stock_quantity, presence: true
  validates :category, presence: true, inclusion: {in: CATEGORIES}
end

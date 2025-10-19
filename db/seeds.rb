# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require 'faker'

Product.destroy_all

product = Product.create!(name: "Satiné Col Bahraini", price: rand(25..45),
                          description: Faker::Lorem.paragraph(sentence_count: 10),
                          stock_quantity: 45, category: "Emirati",
                          color: "Noir", size: "58")

14.times do |number|
  Product.create!(name: "Satiné Col Bahraini", price: rand(25..45),
                  description: Faker::Lorem.paragraph(sentence_count: 10),
                  stock_quantity: rand(100.200), category: Product::CATEGORIES.sample,
                  color: Faker::Color.color_name, size: "#{rand(24..31)*2}")
end

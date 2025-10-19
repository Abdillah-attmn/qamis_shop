class CreateProducts < ActiveRecord::Migration[8.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.integer :stock_quantity
      t.string :category
      t.string :color
      t.string :size

      t.timestamps
    end
  end
end

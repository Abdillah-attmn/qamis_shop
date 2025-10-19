class CreateOrders < ActiveRecord::Migration[8.0]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.date :order_date
      t.float :total_amont
      t.string :status
      t.string :shipping_address
      t.string :billing_address

      t.timestamps
    end
  end
end

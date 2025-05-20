class ChangeAdminFromUser < ActiveRecord::Migration[8.0]
  def change
    change_column_null :users, :admin, false
    change_column_default :users, :admin, false
  end
end

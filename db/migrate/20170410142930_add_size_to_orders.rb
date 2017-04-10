class AddSizeToOrders < ActiveRecord::Migration[5.0]
  def change
    add_reference :orders, :size, foreign_key: true
  end
end

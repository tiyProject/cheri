class AddStyleToOrders < ActiveRecord::Migration[5.0]
  def change
    add_reference :orders, :style, foreign_key: true
  end
end

class AddStatusofToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :statusof, :string, default: 'empty'
  end
end

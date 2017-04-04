class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :firstname
      t.string :lastname
      t.text :billing
      t.text :shipping
      t.string :stripeid

      t.timestamps
    end
  end
end

class ReoveProductFromStyles < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :styles, column: :product_id
    remove_column      :styles, :product_id
  end
end

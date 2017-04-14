class AddSizeToStyles < ActiveRecord::Migration[5.0]
  def change
    add_reference :styles, :size, foreign_key: true
  end
end

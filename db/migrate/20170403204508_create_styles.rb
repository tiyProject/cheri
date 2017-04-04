class CreateStyles < ActiveRecord::Migration[5.0]
  def change
    create_table :styles do |t|
      t.string :photo
      t.text :description
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end

class CreateSizes < ActiveRecord::Migration[5.0]
  def change
    create_table :sizes do |t|
      t.string :title
      t.string :photo
      t.string :audio
      t.text :description
      t.references :product, foreign_key: true

      t.timestamps
    end
  end
end

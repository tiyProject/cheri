class AddStyleaudioToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :styleaudio, :string
  end
end

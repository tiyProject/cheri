class RemoveStyleaudioFromProducts < ActiveRecord::Migration[5.0]
  def change
    remove_column :products, :styleaudio, :string
  end
end

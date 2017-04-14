class AddAudioToStyles < ActiveRecord::Migration[5.0]
  def change
    add_column :styles, :audio, :string
  end
end

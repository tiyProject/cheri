class RemoveDescriptionFromStyles < ActiveRecord::Migration[5.0]
  def change
    remove_column :styles, :description, :string
  end
end

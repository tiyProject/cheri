class StyleSerializer < ActiveModel::Serializer
  attributes :id, :photo, :description

  def photo
    object.photo.url
  end

end

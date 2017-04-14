class StyleSerializer < ActiveModel::Serializer
  attributes :id, :photo, :audio

  def photo
    object.photo.url
  end

  def audio
    object.audio.url
  end

end

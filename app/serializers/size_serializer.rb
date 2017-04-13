class SizeSerializer < ActiveModel::Serializer
  attributes :id, :title, :photo, :audio, :description

  def photo
    object.photo.url
  end

  def audio
    object.audio.url
  end

end

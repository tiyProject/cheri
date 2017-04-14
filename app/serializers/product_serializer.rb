class ProductSerializer < ActiveModel::Serializer
  attributes :id, :price, :collection_id, :audio
  has_many :sizes

  def audio
    object.audio.url
  end

  def styleaudio
    object.styleaudio.url
  end

end

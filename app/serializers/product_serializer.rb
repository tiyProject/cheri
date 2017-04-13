class ProductSerializer < ActiveModel::Serializer
  attributes :id, :price, :collection_id, :audio
  has_many :styles
  has_many :sizes

  def audio
    object.audio.url
  end

end

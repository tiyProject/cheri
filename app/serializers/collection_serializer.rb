class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :photo
  has_many :products

  def photo
    object.photo.url
  end

end

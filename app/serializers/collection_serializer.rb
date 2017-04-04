class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :photo
  has_many :products
end

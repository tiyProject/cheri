class ProductSerializer < ActiveModel::Serializer
  attributes :id, :price, :colltion_id, :audio
  has_many :styles
  has_many :sizes
end

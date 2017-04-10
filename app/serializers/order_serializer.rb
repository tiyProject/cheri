class OrderSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :billing, :shipping,
    :stripeid, :product_id, :size_id, :style_id, :email
end

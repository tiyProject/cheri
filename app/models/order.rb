class Order < ApplicationRecord
  belongs_to      :product
  belongs_to      :size
  belongs_to      :style
  validates_presence_of   :firstname
  validates_presence_of   :lastname
  validates_presence_of   :billing
  validates_presence_of   :shipping
  validates_presence_of   :email
  validates_presence_of   :product_id
  validates_presence_of   :size_id
  validates_presence_of   :style_id
end

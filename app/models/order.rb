class Order < ApplicationRecord
  has_one :product, presence: true
  has_one :size,    presence: true
  has_one :style,   presence: true
end

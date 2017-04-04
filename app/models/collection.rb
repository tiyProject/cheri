class Collection < ApplicationRecord
  has_many   :products
  has_many   :styles, through:  :products
  has_many   :sizes,  through:  :products

end

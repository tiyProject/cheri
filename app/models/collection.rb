class Collection < ApplicationRecord
  have_many   :products
  have_many   :style, through:  :products
  have_many   :sizes, through:  :products
  
end

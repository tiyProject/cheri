class Product < ApplicationRecord
  belongs_to :collection
  have_many   :styles
  have_many   :sizes
  
end

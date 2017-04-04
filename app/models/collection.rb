class Collection < ApplicationRecord
  has_many   :products
  has_many   :styles, through:  :products
  has_many   :sizes,  through:  :products
  validates_presence_of :title
  mount_uploader :photo, PhotoUploader

end

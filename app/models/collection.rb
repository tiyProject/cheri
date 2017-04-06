class Collection < ApplicationRecord
  has_many   :products
  validates_presence_of :title
  mount_uploader :photo, PhotoUploader

end

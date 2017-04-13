class Product < ApplicationRecord
  belongs_to :collection
  has_many   :styles
  has_many   :sizes
  mount_uploader :audio,      AudioUploader
  mount_uploader :styleaudio, AudioUploader
  validates_presence_of   :price

end

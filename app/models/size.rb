class Size < ApplicationRecord
  belongs_to :product
  mount_uploader :photo, PhotoUploader
  mount_uploader :audio, AudioUploader
  validates_presence_of  :title
  validates_presence_of  :description

end

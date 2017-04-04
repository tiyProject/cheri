class Size < ApplicationRecord
  belongs_to :product
  mount_uploader :photo, PhotoUploader
  mount_uploader :audio, AudioUploader    

end

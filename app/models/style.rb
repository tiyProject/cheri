class Style < ApplicationRecord
  belongs_to :size
  mount_uploader :photo, PhotoUploader
  mount_uploader :audio, AudioUploader
end

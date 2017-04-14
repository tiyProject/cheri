class Style < ApplicationRecord
  belongs_to :size
  mount_uploader :photo, PhotoUploader
end

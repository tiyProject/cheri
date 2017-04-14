class Style < ApplicationRecord
  belongs_to :size
  mount_uploader :photo, PhotoUploader
  validates_presence_of  :description
end

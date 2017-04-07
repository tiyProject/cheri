class Style < ApplicationRecord
  belongs_to :product
  mount_uploader :photo, PhotoUploader
  validates_presence_of  :description
end

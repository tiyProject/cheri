class SizeSerializer < ActiveModel::Serializer
  attributes :id, :title, :photo, :audio, :description
end

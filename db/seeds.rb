# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# File.open(Rails.root + 'db/images/filename' )
# 

4.times do
  collection = Collection.create(
    title:  'a title',
    photo:  'photo_url'
  )
  4.times do
    product = Product.create(
      price: rand(50000..30000).to_s,
      audio: 'audio_url'
    )
    5.times do
      size = Size.create(
        title        'a title',
        description: 'a description',
        photo:       'photo_url',
        audio:       'audio_url'
      )
      product.sizes << size
    end
    5.times do
      style = Style.create(
        description: 'a description',
        photo:       'photo_url'
      )
      product.styles << style
    end
  collection.products << product
  end
end

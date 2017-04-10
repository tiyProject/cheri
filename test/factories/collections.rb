FactoryGirl.define do
  factory :collection do
    title { 'a title' }
    photo { 'https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr03/enhanced-873-1433359232-20.jpg?downsize=715:*&output-format=auto&output-quality=auto' }

    # trait :with_products do
    #   after(:create) do |collection|
    #     create_list :collection_with_products, 5, collection: collection
    #   end
    # end
  end
end

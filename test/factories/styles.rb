FactoryGirl.define do
  factory :style do
    description { 'a style description' }

    # trait :with_products do
    #   after(:create) do |collection|
    #     create_list :collection_with_products, 5, collection: collection
    #   end
    # end
  end
end

FactoryGirl.define do
  factory :size do
    title { 'a size title' }
    description { 'a size description' }
    # trait :with_products do
    #   after(:create) do |collection|
    #     create_list :collection_with_products, 5, collection: collection
    #   end
    # end
  end
end

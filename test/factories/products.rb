FactoryGirl.define do
  factory :product do
    price { '111' }

    # trait :with_products do
    #   after(:create) do |collection|
    #     create_list :collection_with_products, 5, collection: collection
    #   end
    # end
  end
end

FactoryGirl.define do
  factory :order do
    firstname     { 'Sam' }
    lastname      { 'Shepard' }
    shipping      { '475 Market' }
    billing       { '475 Market' }
    email         { 'shepard@tiy.com' }
    statusof      { 'empty'}
    product
    style
    size
  end
end

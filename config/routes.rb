Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope 'api' do
    resources :collections, only: [:show, :index] do
      resources :products,  only: [:show, :index]
    end
    resources :orders
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

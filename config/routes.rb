Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  scope 'api' do
    resources :collections, only: [:show, :index] do
      resources :products,  only: [:index]
    end
    resources :products,  only: [:show]
    resources :orders,    only: [:create, :demo]
  end
  get '*path' => 'application#static'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

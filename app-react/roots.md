    Prefix Verb   URI Pattern                                            Controller#Action
        rails_admin        /admin                                                 RailsAdmin::Engine
collection_products GET    /api/collections/:collection_id/products(.:format)     products#index
 collection_product GET    /api/collections/:collection_id/products/:id(.:format) products#show
        collections GET    /api/collections(.:format)                             collections#index
         collection GET    /api/collections/:id(.:format)                         collections#show
             orders GET    /api/orders(.:format)                                  orders#index
                    POST   /api/orders(.:format)                                  orders#create
          new_order GET    /api/orders/new(.:format)                              orders#new
         edit_order GET    /api/orders/:id/edit(.:format)                         orders#edit
              order GET    /api/orders/:id(.:format)                              orders#show
                    PATCH  /api/orders/:id(.:format)                              orders#update
                    PUT    /api/orders/:id(.:format)                              orders#update
                    DELETE /api/orders/:id(.:format)                              orders#destroy
Routes for RailsAdmin::Engine:
    dashboard GET         /                                      rails_admin/main#dashboard
        index GET|POST    /:model_name(.:format)                 rails_admin/main#index
          new GET|POST    /:model_name/new(.:format)             rails_admin/main#new
       export GET|POST    /:model_name/export(.:format)          rails_admin/main#export
  bulk_delete POST|DELETE /:model_name/bulk_delete(.:format)     rails_admin/main#bulk_delete
history_index GET         /:model_name/history(.:format)         rails_admin/main#history_index
  bulk_action POST        /:model_name/bulk_action(.:format)     rails_admin/main#bulk_action
         show GET         /:model_name/:id(.:format)             rails_admin/main#show
         edit GET|PUT     /:model_name/:id/edit(.:format)        rails_admin/main#edit
       delete GET|DELETE  /:model_name/:id/delete(.:format)      rails_admin/main#delete
 history_show GET         /:model_name/:id/history(.:format)     rails_admin/main#history_show
  show_in_app GET         /:model_name/:id/show_in_app(.:format) rails_admin/main#show_in_app
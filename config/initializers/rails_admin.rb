RailsAdmin.config do |config|

   config.authorize_with do
     authenticate_or_request_with_http_basic('Site Message') do |username, password|
       User.find_by(username: username).try(:authenticate, password).try(:admin?)
     end
   end
end

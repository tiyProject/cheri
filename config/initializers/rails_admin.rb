RailsAdmin.config do |config|
  config.authenticate_with do
    authenticate_or_request_with_http_basic do |username, password|
      username == 'user' &&
      password == 'password'
    end
  end

  # Other config stuff should go here
end

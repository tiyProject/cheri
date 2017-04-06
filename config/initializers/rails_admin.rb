RailsAdmin.config do |config|
  config.authenticate_with do
    authenticate_or_request_with_http_basic do |username, password|
      username == ENV['httpbasic_user'] &&
      password == ENV['httpbasic_pass']
    end
  end

  # Other config stuff should go here
end

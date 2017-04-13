ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

DatabaseCleaner.strategy = :truncation

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all
  self.use_transactional_tests = false

  def setup
    DatabaseCleaner.start
  end

  def teardown
    DatabaseCleaner.clean
  end

  def new_mail( charset="UTF-8" )
    mail = Mail.new
    mail.mime_version = "1.0"
    if charset
      mail.content_type ["text", "html", { "charset" => charset }]
    end
    mail
  end

  # Add more helper methods to be used by all tests here...

end

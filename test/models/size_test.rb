require 'test_helper'
require 'minitest/autorun'

class Minitest::Unit::TestCase
  include FactoryGirl::Syntax::Methods
end

class SizeTest < Minitest::Test
  def test_size_can_be_created
    size = FactoryGirl.build(:size, title: 'a title')
    assert size.title == 'a title'
  end

end

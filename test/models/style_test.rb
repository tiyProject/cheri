require 'test_helper'
require 'minitest/autorun'

class Minitest::Unit::TestCase
  include FactoryGirl::Syntax::Methods
end

class StyleTest < Minitest::Test

  def test_style_can_be_created
    style = FactoryGirl.build(:style, description: 'a description')
    assert style.description == 'a description'
  end

end

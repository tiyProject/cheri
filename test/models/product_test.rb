require 'test_helper'
require 'minitest/autorun'

class Minitest::Unit::TestCase
  include FactoryGirl::Syntax::Methods
end

class ProductTest < Minitest::Test

  def test_product_can_be_created
    prod = FactoryGirl.build(:product, price: 111)
    assert prod.price > 0
  end

end

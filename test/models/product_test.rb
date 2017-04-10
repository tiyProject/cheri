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

  def test_product_without_price_fails
    prod = FactoryGirl.build(:product, price: 111)
    prod.price = nil
    before = Product.count
    prod.save
    after  = Product.count
    assert before = after
  end

  def test_product_with_price_saves
    prod = FactoryGirl.build(:product, price: 111)
    before = Product.count
    prod.save
    after  = Product.count
    assert after = before + 1
  end

end

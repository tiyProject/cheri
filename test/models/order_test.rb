require 'test_helper'
require 'minitest/autorun'

class Minitest::Unit::TestCase
  include FactoryGirl::Syntax::Methods
end

class OrderTest < ActiveSupport::TestCase

  def test_order_can_be_created
    @order = FactoryGirl.build(:order,
          firstname:    'Sam',
          lastname:     'Shepard',
          email:        'shepard@tiy.com',
          shipping:     '475 Market St, Indianapolis, IN, 55555',
          billing:      '475 Market St, Indianapolis, IN, 55555',
    )
    assert @order.save
  end

  def test_order_requires_firstname_field
    @order = FactoryGirl.build(:order,
          firstname:    nil,
          lastname:     'Shepard',
          email:        'shepard@tiy.com',
          shipping:     '475 Market St, Indianapolis, IN, 55555',
          billing:      '475 Market St, Indianapolis, IN, 55555',
          product_id:   products,
          style_id:     styles,
          size_id:      sizes
    )
    refute @order.save
  end

  def test_order_requires_lastname_field
    @order = FactoryGirl.build(:order,
          firstname:    'Sam',
          lastname:     nil,
          email:        'shepard@tiy.com',
          shipping:     '475 Market St, Indianapolis, IN, 55555',
          billing:      '475 Market St, Indianapolis, IN, 55555',
          product_id:   products,
          style_id:     styles,
          size_id:      sizes
    )
    refute @order.save
  end

  def test_order_requires_email_field
    @order = FactoryGirl.build(:order,
          firstname:    'Sam',
          lastname:     'Shepard',
          # email:        'shepard@tiy.com',
          shipping:     '475 Market St, Indianapolis, IN, 55555',
          billing:      '475 Market St, Indianapolis, IN, 55555',
          product_id:   products,
          style_id:     styles,
          size_id:      sizes
    )
    refute @order.save
  end

  def test_order_requires_productid_field
    @order = FactoryGirl.build(:order,
          firstname:    'Sam',
          lastname:     'Shepard',
          email:        'shepard@tiy.com',
          shipping:     '475 Market St, Indianapolis, IN, 55555',
          billing:      '475 Market St, Indianapolis, IN, 55555',
          product_id:   nil,
          style_id:     styles,
          size_id:      sizes
    )
    refute @order.save
  end

  def test_order_requires_styletid_field
    @order = FactoryGirl.build(:order,
          firstname:    'Sam',
          lastname:     'Shepard',
          email:        'shepard@tiy.com',
          shipping:     '475 Market St, Indianapolis, IN, 55555',
          billing:      '475 Market St, Indianapolis, IN, 55555',
          product_id:   products,
          style_id:     nil,
          size_id:      sizes
    )
    refute @order.save
  end

  def test_order_requires_sizeid_field
    @order = FactoryGirl.build(:order,
          firstname:    'Sam',
          lastname:     'Shepard',
          email:        'shepard@tiy.com',
          shipping:     '475 Market St, Indianapolis, IN, 55555',
          billing:      '475 Market St, Indianapolis, IN, 55555',
          product_id:   products,
          style_id:     styles,
          size_id:      nil
    )
    refute @order.save
  end

end

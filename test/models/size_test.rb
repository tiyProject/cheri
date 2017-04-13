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

  def test_size_without_title_fails
    @size = FactoryGirl.build(:size, title: nil)
    refute @size.save
  end

  def test_size_without_description_fails
    @size = FactoryGirl.build(:size, title: 'a title', description: nil)
    refute @size.save
  end

  def test_size_with_description_saves
    @size = FactoryGirl.build(:size, title: 'a title', description: 'a description')
    assert @size.save
  end

end

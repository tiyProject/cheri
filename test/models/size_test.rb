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
    size = FactoryGirl.build(:size, title: 'a title')
    size.title = nil
    before = Size.count
    size.save
    after  = Size.count
    assert before == after
  end

  def test_size_with_title_saves
    size = FactoryGirl.build(:size, title: 'a title')
    before = Size.count
    size.save
    after  = Size.count
    assert after == before + 1
  end

  def test_size_without_description_fails
    size = FactoryGirl.build(:size, title: 'a title')
    size.description = nil
    before = Size.count
    size.save
    after  = Size.count
    assert before == after
  end

  def test_size_with_description_saves
    size = FactoryGirl.build(:size, title: 'a title')
    before = Size.count
    size.save
    after  = Size.count
    assert after == before + 1
  end

end

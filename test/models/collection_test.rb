require 'test_helper'
require 'minitest/autorun'

class Minitest::Unit::TestCase
  include FactoryGirl::Syntax::Methods
end

class CollectionTest < Minitest::Test

  def test_collection_can_be_created
    collect = FactoryGirl.build(:collection, title: 'a title')
    assert collect.title == 'a title'
  end

end

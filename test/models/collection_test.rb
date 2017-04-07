require 'test_helper'
require 'minitest/autorun'

class Minitest::Unit::TestCase
  include FactoryGirl::Syntax::Methods
end
 
# class CollectionTest < ActiveSupport::TestCase
#   # test "the truth" do
#   #   assert true
#   # end
# end

class MagicBallTest < Minitest::Test
  def test_collection_can_be_created
    collection = Collection.create{
      title:  'Collection #1'
    }
    assert Collection.count != nil
  end
end

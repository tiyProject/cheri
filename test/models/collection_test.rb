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

  def test_verify_collection_without_title_fails_to_save
    collect = FactoryGirl.build(:collection, photo: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr03/enhanced-873-1433359232-20.jpg?downsize=715:*&output-format=auto&output-quality=auto')
    collect.title = nil   # No title shoudl make it fail
    before = Collection.count
    collect.save
    after  = Collection.count
    assert before == after
  end

end

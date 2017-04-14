require 'test_helper'

class NumberofcollectionsTest < ActionDispatch::IntegrationTest

  def setup
    2.times do
      FactoryGirl.create(:collection)
    end
  end

  def test_number_of_collections_as_expected
    get '/api/collections'
    assert_equal 200, status
    # json = JSON.parse(response)

    # assert json['collection']
    # assert json['notes'].length == 10
  end

end

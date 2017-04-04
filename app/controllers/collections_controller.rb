class CollectionsController < ApplicationController

  def index
    @collections = Collection.all
  end

  def show
    @collection = Collection.find(controller_params[:id])
  end

  def controller_params
    params.permit(:title, :photo)
  end

end

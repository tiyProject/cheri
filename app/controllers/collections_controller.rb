class CollectionsController < ApplicationController

  def index
    @collections = Collection.all
    render json: @collections, include: [:products, :styles, :sizes]
  end

  def show
    @collection = Collection.find(controller_params[:id])
    render json: @collection, include: [:products, :styles, :sizes]
  end

  def controller_params
    params.permit(:title, :photo)
  end

end

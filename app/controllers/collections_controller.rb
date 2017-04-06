class CollectionsController < ApplicationController

  def index
    @collections = Collection.all
    if @collections
      render json: @collections, include: [:products, include: [:styles, :sizes]]
    else
      render json: {errors: @collections.errors.full_messages }, status: 404
    end
  end

  def show
    @collection = Collection.find_by_id(controller_params[:id])
    if @collection
      render json: @collection, include: [:products, include: [:styles, :sizes]]
    else
      render json: {errors: @collection.errors.full_messages }, status: 404
    end
  end

  def controller_params
    params.permit(:id)
  end

end

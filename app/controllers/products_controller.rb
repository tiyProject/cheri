class ProductsController < ApplicationController

  def index
    @collection = Collection.find_by_id(product_params[:collection_id])
    if @collection
      # @products   = Product.all.order(:id)
      @products  = @collection.products.all
      if @products
        render json: @products, include: [:styles, :sizes]
      else
        render json: 'No Products found', status: 404
      end
    else
      render json: 'No such Collection id', status: 404
    end
  end

  def show
    @product  = Product.find_by_id(product_params[:id])
    if @product
      render json: @product, include: [:styles, :sizes]
    else
      render json: 'No such product id', status: 404
    end
  end

  def product_params
    params.permit(:id, :collection_id)
  end

end

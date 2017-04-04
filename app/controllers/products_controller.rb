class ProductsController < ApplicationController

  def index
    @products = Product.all
    redner json: @products, include: [:styles, :sizes]
  end

  def show
    @product  = Product.find(product_params[:id])
    render json: @product, include: [:styles, :sizes]
  end

  def product_params
    params.permit(:price, :audio)
  end

end

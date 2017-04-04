class ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def show
    @product  = Product.find(product_params[:id])
  end

  def product_params
    params.permit(:price, :audio)
  end

end

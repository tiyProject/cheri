class OrdersController < ApplicationController

  def new
  end

  def create
    @order = Order.new(order_params)
    if @order
      if @order.save
        serNotifier.send_signup_email(@order.email).deliver
        render json: @order
        redirect_to order_path
      else
        render json: 'order failed to save'
        redirect_to new_order_path
      end
    else
      render json: 'unable to create that order'
      redirect_to new_order_path
    end
  end

  private

  def order_params
    params.permit(:id, :firstname, :lastname,
      :billing, :shipping, :stripeid, :product_id,
      :size_id, :style_id, :email)
  end

end

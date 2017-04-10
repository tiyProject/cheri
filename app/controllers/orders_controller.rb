class OrdersController < ApplicationController


  def create
    @order = Order.new(order_params)
    if @order
      @order.statusof = 'active'
      if @order.save
        OrderNotifier.send_signup_email(@order).deliver
        render json: @order
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
      :size_id, :style_id, :email, :statusof)
  end

end

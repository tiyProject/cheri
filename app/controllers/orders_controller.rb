class OrdersController < ApplicationController

  def create
    begin
      @order = Order.new(order_params)
      if @order.save
        @order.statusof = 'active'
        @product = Product.find_by_id(@order.product_id)
        @amount  = @product.price
        customer = Stripe::Customer.create(
          :email   => @order.email,
          :source  => params[:stripeToken]
        )
        @order.stripeid = customer.id
        charge = Stripe::Charge.create(
          :customer    => customer.id,
          :amount      => @amount,
          :description => 'Cheri clothing product purchase',
          :currency    => 'usd'
        )
        @order.statusof = 'charged'
        @order.update
        OrderNotifier.send_signup_email(@order).deliver
        render json: @order
      else
        render json: {message: 'order failed to save'}, status: 402
      end
    rescue Stripe::CardError => e
      error_string = e.type
      render json: {message: error_string}, status: 402
    end
  end

  def demo
    demo_order   = 1
    demo_product = 1
    demo_style   = 1
    demo_size    = 1
    begin
      @order = Order.find_by_id(demo_order)
      if @order.save
        @order.statusof = 'active'
        @product = Product.find_by_id(demo_product)
        # @order.style = demo_style   #set up ahead of time
        # @order.size  = demo_size    #set up ahead of time
        @amount  = @product.price
        customer = Stripe::Customer.create(
          :email   => @order.email,
          :source  => params[:stripeToken]
        )
        @order.stripeid = customer.id
        charge = Stripe::Charge.create(
          :customer    => customer.id,
          :amount      => @amount,
          :description => 'Cheri clothing product purchase',
          :currency    => 'usd'
        )
        @order.statusof = 'charged'
        @order.update
        OrderNotifier.send_signup_email(@order).deliver
        render json: @order
      else
        render json: {message: 'order failed to save'}, status: 402
      end
    rescue Stripe::CardError => e
      error_string = e.type
      render json: {message: error_string}, status: 402
    end
  end

  private

  def order_params
    params.permit(:id, :firstname, :lastname,
      :billing, :shipping, :stripeid, :product_id,
      :size_id, :style_id, :email, :statusof,
      :stripeToken)
  end

end

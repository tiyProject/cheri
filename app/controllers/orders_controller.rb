class OrdersController < ApplicationController

  def new
  end

  def create
    #after this is filled in, after the .save
    #include the following line
    # UserNotifier.send_signup_email(@order).deliver
  end

end

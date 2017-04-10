class OrderNotifierMailer < ApplicationMailer

  class OrderNotifier < ActionMailer::Base
    default :from => 'any_from_address@example.com'

    # send a signup email to the user, pass in the user object that contains the user's email address
    def send_signup_email(order)
      @order = order
      mail( :to => @order.email,
      :subject => 'Thanks for ordering out amazing clothing!' )
    end
  end

end

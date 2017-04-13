class NotificationMailer < ApplicationMailer
  default from: 'info@cheri.tut'
  default   to: 'somelist@cheri.tut'

  def notification_mailer(notification)
    @notification = notification
    @url  = "http://cheri.tut/"
    mail(:subject => "New Notification")
  end

end

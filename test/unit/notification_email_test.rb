require 'test_helper'
class NotificationMailerTest < ActionMailer::TestCase

  tests NotificationMailer

  test "notification_email" do

    expected         = new_mail
    expected.from    = 'info@cheri.tut'
    expected.to      = 'somelist@cheri.tut'
    expected.subject = 'New Notification'
    expected.date    = Time.now

    actual = nil
    assert_nothing_raised { actual = NotificationMailer.notification_mailer(@recipient) }
    assert_not_nil actual

    expected.message_id = '<123@456>'
    actual.message_id   = '<123@456>'

    assert_equal expected.subject, actual.subject

   end

end

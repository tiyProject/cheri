# README

* Ruby version
    2.3.3

* System dependencies
    Carrierwave		allows file uploading
    MiniMagick		allows user to resize & crop images
    Fog			      upload images to AWS S3
    Rails-Admin		allows for http:basic authentication
    Figaro			  for security, keeps application.yml from being uploaded to GitHub
    Stripe			  handles payments
    Send-grid		  email
    Factory-Girl  create object to facilitate testing
    Letter-Opener view emails on screen

* Gems not fully implemented
    The backend portion for Stripe & Send-Grid are implemented, but due to time contsraints, not fully deployed.  Since Letter-Opener is dependent on SendGrid, it does not function.   Note that the HTML files are only there for reference, for future use.

* Configuration

* Database creation
    rails db:create
    rails db:migrate

* Database initialization
    localhost:3000/admin  #user & pass by request

* How to run the test suite
    rails test     #currently no tests available

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* Routes
/api/collections              collections#index  show all collections             		
/api/collections/x            collections#show   show collection x
/api/collections/x/products   products#index     show all products in collection x
/api/products/y               products#show      show procuct y

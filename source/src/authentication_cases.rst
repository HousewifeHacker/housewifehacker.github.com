Authentication Cases You Could Handle
##############################################

:date: 2019-09-08
:category: Code

Authentication is a big job at the start of building a web application. \
These days, there are a lot of options on how to do it. The technical \
implementation and possibly 3rd party service you choose can depend on \
what use cases you want to support. This is the start of a series on \
authentication and authorization. Authentication is determining "who" \
is using the app, while authorization is determining "what" that person \
can access within the app. 

Below are some cases that you could choose to \
handle or not worry about with designing your authentication.

 - User is able to enable staying logged in or remembering username the next time they visit

 - Logging in or out in one tab is reflected in other browser tabs

 - Enable users to log out of all devices

 - A user can request a password change or password reset

 - Changing password logs out all devices

 - Failed password attempts are handled to increase wait time and decrease remaining attempts on all devices

 - An excessive amount of failed attempts forces a password change and logs out all devices

 - Force a user to change a password for an expiration date on the password

 - Force a user to change a compromised password

 - Automatically log out a user for inactivity

 - Allow users to enable or require 2 factor Authentication

 - Detect IP to require additional authentication steps on a computer the user hasn't used previously

 - Oauth option with multiple providers available that result in same user

 - Allow Active Directory

 - Set rules on passwords that can include a variety of possibly good or terrible restrictions

 - Encrypt password wherever a browser user or server hacker could access them



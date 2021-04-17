Stateless versus Stateful Authentication
#############################################

:category: Code

Stateless is when operations are not dependent on state. For authentication, \
this means that nothing is dependent on earlier requests including logging in. \
There is no logging out on the server either. The server does not know or \
track what users or user sessions are logged in. JWTs (JSON Web Tokens), get a \
lot of attention for being stateless. This is a bit misleading though. JWTs \
can be used to make both authentication and authorization stateless

about JWT for being stateless. They can be stateless, but they dont have to be. \
So why would someone want to implement stateless authentication? One reason \
is a myth for nearly all the world, the idea that you cannot scale to use \
multiple servers if you need to depend on your server to check the session state. \
This scaling problem is not a problem though, thanks to syncing and centralized \
databases. You can have multiple servers that use identical databases. \
The other reason for stateless is to reduce communicating with the server. \
The server is still involved with validating the user's login credentials, \
creating and sending the token, but the server's role once a user has that \
token is diminished. Instead of checking if that token is logged in, \
it just checks that it matches what it expects. Why do I care so much about \
the server knowing who is logged in? Take a look at the earlier blog post of \
cases that your authentication implementation could handle or ignore. \
I have used computers at libraries, hostels, cyber cafes, and schools. \
Maybe I am old fashioned, but the inability to log out an authorization token \
can be a problem

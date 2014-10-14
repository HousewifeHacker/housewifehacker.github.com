Bcrypt with Rails
#################
:category: Code
:date: 2014-10-13

Bcrypt is an algorithm for hashing passwords that can be implemented in many programming languages. When a user signs up or logs in, the password they entered is sent to the server. SSL should be used for this stage, but that is separate from bcrypt. Bcrypt's job is to protect the password when it gets in the database. It does its job pretty well. Despite being first introduced in 1999 and being extremely popular, it has still not been compromised. 

Each new password sent to the database is salted and ciphered before being stored as a hash. In our database, the password hash is stored as password_digest. To verify a password on login, the password attempt is also ciphered to check if the hashes come from the same string, the actual password. A password hash is never unciphered. If someone does get the database, they could only try to guess each password, but bcrypt would actually slow down the more they try.  

Many auth libraries do use bcrypt, but the bcrypt gem makes it simple enough to roll our own auth in Rails. First, our Users table needs to have a password digest column.

.. code-block:: bash

		rails g model user username password_digest
		rake db:migrate


We need to add the bcrypt gem in our Gemfile. It is probably in your Gemfile already, but commented out. If so, you can just uncomment it. Don't forget bundle install after the change. This gem gives us methods we will use in our user model.

.. code-block:: ruby

		gem 'bcrypt'

Our User model needs a method to cipher the password when it is created. It also needs a method to cipher password attempts and return a boolean for if it is a match.

.. code-block:: ruby

		# app/models/user.rb
		class User < ActiveRecord::Base

		  def password=(password)
		    self.password_digest = BCrypt::Password.create(password)
		  end

		  def is_password?(password)
		    BCrypt::Password.new(self.password_digest) == password
		  end
		end

Now in our rails console, create a user. We can view it's password digest, and use the is_password? method. All bcrypt password digests start with "$2a$" or "2y".

.. code-block:: bash
		
		irb(main):001:0> u = User.new({username: "jessie", password: "jessiejessie"})
		=> #<User id: nil, username: "jessie", password_digest: "$2a$10$Q5UXCiS7hTHCJmL.ZBKVXeTxdyLij8.pdwYqlIR81bT...", created_at: nil, updated_at: nil>
		irb(main):002:0> u.save
		(0.3ms)  begin transaction
		Binary data inserted for `string` type on column `password_digest`
		SQL (0.4ms)  INSERT INTO "users" ("created_at", "password_digest", "updated_at", "username") VALUES (?, ?, ?, ?)  [["created_at", "2014-10-14 00:41:45.144329"], ["password_digest", "$2a$10$Q5UXCiS7hTHCJmL.ZBKVXeTxdyLij8.pdwYqlIR81bT6E.33WchK6"], ["updated_at", "2014-10-14 00:41:45.144329"], ["username", "jessie"]]
		(19.5ms)  commit transaction
		=> true
		irb(main):003:0> u
		=> #<User id: 1, username: "jessie", password_digest: "$2a$10$Q5UXCiS7hTHCJmL.ZBKVXeTxdyLij8.pdwYqlIR81bT...", created_at: "2014-10-14 00:41:45", updated_at: "2014-10-14 00:41:45">
		irb(main):004:0> u.is_password?("jessiejessie")
		=> true
		irb(main):005:0> u.is_password?("jessie")
		=> false

That's it, in it's simplest form of course. You'd most likely want a controller and view with a form on an actual project. A more robust auth would also include session tokens stored in the user table and in the client's cookies, which would be compared to each other and reset for logging in and logging out.

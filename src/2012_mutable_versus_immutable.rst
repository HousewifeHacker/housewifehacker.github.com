Mutable versus Immutable Object Types
#####################################

:date: 2012-05-07
:category: Code
:tags: python, lists, data structures, mutable and immutable

Strings, lists, tuples, integers, float, dictionaries, and sets are all types \
of python objects with different properties and uses. When using an object in \
a program or in your terminal, your session assigns an Id to access the \
computer's memory. The Id will be unique each session and on each computer, \
so the actual number returned by the id() function is irrelevant. What is \
relevant is when that number changes. If the id changes as the value changes, \
the computer had to assign a new id to the immutable object. If the id stays \
the same, then it is a mutable object, because the value associated with the \
id can be changed without changing the id. Integers are immutable:


.. code-block:: python

	>>> x = 5
	>>> y = x        # direct the reference of y to be the reference of x
	>>> id(x) == id(y)        # x and y point to same reference
	True
	>>> x = 4        # change the value of x
	>>> id(x) == id(y)        # the id of x changed when the value changed
	False
	>>> x == y        # the value of y did not change with x
	False


I'm the type of learner that skims through vocabulary lessons to get to the \
action, but understanding this next part will save you some headaches when \
trying to manipulate mutable objects. Look what happens when I try to do the \
same thing I just did to the integers, but now to a list:

.. code-block:: python

	>>> x = [5]
	>>> y = x        # direct the reference of y to be the reference of x
	>>> id(x) == id(y)        # x and y point to the same reference
	True
	>>> x.append(4)        #change x from [5] to [5, 4]
	>>> id(x) == id(y)        # x and y still point to the same reference
	True
	>>> x == y        # y changed with x
	True
	>>> y
	[5, 4]
	>>> z = [5, 5]    
	>>> id(z)        # will be a different number for everyone
	3075316972L
	>>> z.append(3)        # z is now [5, 5, 3]
	>>> id(z)        # id is constant, the list is mutable
	3075316972L


I stumbled upon this while using random.shuffle on a list, while wishing to \
keep a copy of the list in it's original form. As you can see by assigning x \
equal to y, the lists changed together. That was an ineffective way to make a \
copy because all I did was assign the same Id two different names. Try \
determining if the other object types are mutable or immutable. I don't want \
to spoil the fun for you.

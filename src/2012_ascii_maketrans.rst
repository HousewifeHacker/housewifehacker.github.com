Ascii, Maketrans, Caesar's Shift
################################
:status: draft

Comparing numbers and values in python is prety simple. But have you tried \
comparing strings?

.. code-block:: python

	>>> 'abc' < 'abcd'
	True
	>>> 'abc' < 'ABC'
	False
	>>> 'abc' < 'd'
	True
	>>> '1' < '2'
	True
	>>> '13' < '123'
	False

Woah! What was that? 13 IS less than 123, so why is python returning False? \
Maybe it's from the length of the string... But then why would 'abc' be less \
than 'd'. Well, it all traces back to compiling. That silly thing you thought \
python programmers didn't have to waste time with, waiting on our computers \
to translate our code for us to see if it worked, slowing down development \
and debugging.

Maybe you've noticed the lonely pyc file for every py file you've created. \
That is the automatically generated and updated byte code. Thanks CPython. \
But what is it? Python is a 'high level' language not because it is superior \
in quality, but because it happens on top of low level languages. The low \
level language, which is C in CPython, is compiled in what would appear to us \
as a bunch of numbers. Computers don't actually understand English, but they \
can do what the numbers tell them to do.

So back to our string comparisons. What is actually being compared are \
numbers. The numbers are determined by ASCII. Letters, numbers, new line, \
a tab, and other characters all have ASCII values. When comparing strings, \
the first index is compared first. If the ascii values are the same, then \
the second character is compared. The longer string is always greater. EOF \
(end of file) does not have an ASCII value. We can discover the ASCII value \
of a character by using ord().

.. code-block:: python

	>>> ord('a')
	97
	>>> ord('A')
	65
	>>> ord('b')
	98
	>>> ord('1')
	49
	>>> ord('2')
	50
	>>> 3 - 0
	3
	>>> ord('3') - ord('0')
	3

Notice that 'a' and 'b' ASCII values have a difference of 1. Also, numbers \
with a difference such as three minus zero have the same difference in \
their ASCII values.

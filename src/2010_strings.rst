Indexes, Strings, and Lists 
###########################

:date: 2010-10-18
:category: Code
:tags: python, beginner, data structures, lists, strings

A Python string's properties can be best understood by using sentences and \
words, although numbers can also be stored as strings. Be careful not to \
name a string as 'str' or 'string', because these are built in functions \
in Python. Let's play with some basic functions you can do to strings

.. code-block:: python
	
	[gypsychemist@inspidell ~]$ python
	Python 2.6.4 (r264:75706, Jun  4 2010, 18:20:16) 
	[GCC 4.4.4 20100503 (Red Hat 4.4.4-2)] on linux2
	Type "help", "copyright", "credits" or "license" for more 
	information.
	>>> sentence1 = 'This is two strings '
	>>> sentence2 = 'combined.'
	>>> sentence1 + sentence2
	'This is two strings combined.'
	>>> s = sentence1 + sentence2
	>>> print s
	This is two strings combined.
	>>> r = '''Three quotes will
	... preserve the formatting
	... for multiple lines'''
	>>> print r
	Three quotes will
	preserve the formatting
	for multiple lines 
	>>> s.split()
	['This', 'is', 'two', 'strings', 'combined.']
	>>> r.split('e')
	['Thr', '', ' quot', 's will\npr', 's', 'rv', ' th', 
	' formatting\nfor multipl', ' lin', 's']


The split command divides a string into a list based on the delimiter you \
define. In the example of splitting the s string, leaving the delimiter \
blank causes splitting on all white spaces (tab, enter, space). Anything can \
be the delimiter, such as using 'e' in the splitting of r example. '\n' is a \
new line.

.. code-block:: python

	>>> p = "  The extra white space on the ends     "
	>>> p.strip()+' is removed by the strip function'
	'The extra white space on the ends is removed by the 
	strip function'



Indexes are useful for both strings and lists. The letters or numbers in a \
string begin with the index 0, or you can work from the back with index of \
-1. When selecting a range of indexes, the last number is excluded.

.. code-block:: python

	>>> f = 'hello'
	>>> f[0:2]
	'he'
	>>> f[:2]        # a starting index of 0 is assumed
	'he'
	>>> f[2]
	'l'
	>>> f[-2:]        # completing until the end is assumed
	'lo'
	>>> f[-2:-1]
	'l'
	>>> f[:2] + f[-2:]
	'helo'
	>>> list=[0, 1, 2, 3, 4, 5]
	>>> list[1]
	1
	>>> list[-2:0]        # doesn't work
	[]
	>>> list[-2:]
	[4, 5]
	>>> list[:1]
	[0]


'#' is used in Python to write comments. They are ignored in programs and are \
very useful to solve problems, either to write out a plan or to type in a \
literal translation of how you expect your code to perform. If your code does \
not work correctly, you can go back through your notes to quickly find where \
your logic or syntax may be incorrect.

As I mentioned briefly in the beginning, a number can also be a string. If a \
number is a string, it will be used a returned with quotation marks \
surrounding it. In Python, single quotes and double quotes act the same; \
however, the opening and closing ends need to be the same. The example below \
shows why you may want to change a number to a string:

.. code-block:: python
	
	>>> pi = 3.14
	>>> # cannot add an integer to a string
	>>> print 'The value of pi is often rounded to ' + pi 
	Traceback (most recent call last):
  	File "", line 1, in 
	TypeError: cannot concatenate 'str' and 'float' objects
	>>> # so we change pi to a string
	>>>print 'The value of pi is often rounded to ' + str(pi) 
	The value of pi is often rounded to 3.14
	>>> # you can include a number after a string by using a comma
	>>>print 'The value of pi is often rounded to',3.14
	The value of pi is often rounded to 3.14



You can change a list of numbers to be a list of strings by using a for loop.

.. code-block:: python
	
	>>> list=[1,2,3,4,5]
	>>> str(list[1])       # returns the list index as a string without \
	changing the list
	'2'
	>>> list        # list is still composed of integers
	[1, 2, 3, 4, 5]
	>>> index = 0       # setting a variable to start at 0 because \
	index starts at 0
	>>> for x in list: #begins with index 0
	...   list[index] = str(list[index])         # assigns index 0 integer \
	as a string of the previous list[0]
	...   index += 1        # after the previous command is performed on \
	[0], it will be performed on [1]
	...   #for loop continues through indexes 1 to 4 after index 0
	>>> list        # our list is now changed to be strings
	['1', '2', '3', '4', '5']


Now lets play with some list commands that are nondiscriminate against strings or integers:

.. code-block:: python
	
	>>> list1 = ['8', '9', '10']
	>>> list.extend(list1)        # add list1 to end of list, list + list1
	>>> print list
	['3', '4', '5', '6', '7', '8', '9', '10']
	>>> list.insert(2, '3')        # inserts '3' at index 2
	>>> print list
	['3', '4', '3', '5', '6', '7', '8', '9', '10']
	>>> list.insert(2,3)        # now we'll insert an integer
	>>> print list        # list can have combination of strings & non \
	strings
	['3', '4', 3, '3', '5', '6', '7', '8', '9', '10']


For more documentation and to try writing example programs, visit Google's Python classroom: http://code.google.com/edu/languages/google-python-class/index.html 

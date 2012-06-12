Decimal to Change Number Precision
##################################

:category: Code
:tags: python, modules, math
:date: 2010-10-22

The built in math functions in Python use binary approximations, giving some \
funky results when dealing with numbers containing decimals:

.. code-block:: python
	
	>>> .1 + .2
	0.30000000000000004
	>>> round(100.00 / 3.000, 4)
	33.333300000000001


One way to appropriately find the sum of decimals is to use strings

.. code-block:: python

	>>> str(.1 + .2)
	'0.3'


Also, the default is to round to the nearest whole number when dividing

.. code-block:: python

	>>> 1 / 3
	0
	>>> 100 / 3
	33


The decimal library is a useful tool for floating point arithmetic. Instead of \
the command 'from decimal import * ' that would import everything from \
decimal, all I need to import is Decimal and getcontext. When importing \
modules, simplicity is preferred. There are less problems with naming in your \
code and you can be more aware of the tools at your disposal. I already \
imported decimal and looked through the directory to determine which modules \
I wanted. I'm only going to show the precision feature of decimal. You may \
want to import the entire library if you want to use other functions.

.. code-block:: python

	>>> from decimal import getcontext
	>>> from decimal import Decimal
	>>> getcontext()
	Context(prec=28, rounding=ROUND_HALF_UP, Emin=-999999999, 
	Emax=999999999, capitals=1, flags=[Inexact, Rounded], 
	traps=[DivisionByZero, Overflow, InvalidOperation])
	>>> #our precision is also known as significant figures, applied after arithmetic 
	... #let's change our precision
	... 
	>>> getcontext().prec = 6
	>>> Decimal('1') / Decimal('7')        # can be performed to strings
	Decimal('0.142857')
	>>> Decimal(1) / Decimal(7)        # can be performed to integers
	Decimal('0.142857')
	>>> Decimal(10) / Decimal(7)
	Decimal('1.42857')        # notice that 6 is the total number of figures, not the number after the decimal
	>>> Decimal(10) / Decimal(5)
	Decimal('2')        # not '2.00000,' which is considered more accurate than 2 by the science community


As someone with a science background, I found the decimal library's use of \
'significant figures' interesting. Decimal can also be used in financial \
reporting or billing. You can also find maximums and minimums, change rounding \
properties, and do anything that you can do with the math library. I \
personally prefer the math library for the algebraic functions performed by \
decimal, because math's syntax is simpler. To learn more about decimal, go to http://docs.python.org/library/decimal.html

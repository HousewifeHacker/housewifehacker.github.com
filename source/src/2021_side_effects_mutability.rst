Python Mutability and Side Effects
##################################

:date: 2021-04-21
:category: Code
:tags: python, beginner

I am back in school, to finally get my Bachelor's degree. \
This started as a writing assignment on void functions for my Programming \
fundamentals class, but I couldn't let it stop there.

If a Python function does not return a result, the output from a function \
is None and that function is a void function. Print is an example of a void\
function. Although it adds text to the \
standard output, that printed value isn’t stored when assigned to a value:

.. code-block:: python

    >>> r = print('r')
    'r'
    >>> r
    >>> 


Most Python data types are immutable, meaning their value cannot be modified without \
changing the object reference.  See Python \
`official documentation <https://docs.python.org/3/library/stdtypes.html>`_\
for more info on Python's built-in types.\
As a high level language, Python is taking care of our objects \
behind the scenes. We can continue to modify the same variable name, but the \
ID of the object changes when Python creates another \
object. This immutability has an effect of protecting a local value within a\
function from modifying the value of a variable outside of \
a function. In the following example, x references an integer that is \
modified with math, causing x to be recreated with a different value and ID:

.. code-block:: python

    >>> x = 10
    >>> id(x)
    2428003641936
    >>> x += 1
    >>> id(x)
    2428003641968

We can pass x as an argument that is modified within the function, without modifying\
the value of x outside of the function:

.. code-block:: python

    >>> x = 2
    >>> def add_two(y):
    ...   y += 2
    ...   return y
    ...
    >>> add_two(x)
    4
    >>> x
    2

However, dictionaries and lists are mutable. Notice how the ID is the same after a modification:

.. code-block:: python

    >>> r = [1]
    >>> id(r)
    2428004605312
    >>> r += [3]
    >>> r
    [1, 3]
    >>> id(r)
    2428004605312

This leads to a very interesting possibility of a void \
function with a side effect. Side effects make a change to \
something other than what it’s output is assigned to. The following shows \
the same mutability for a dictionary and then an \
example of a void function with a side effect of changing the dictionary:

.. code-block:: python

    >>> r = {}
    >>> id(r)
    2428004605824
    >>> r['name'] = 'Jessie'
    >>> id(r)
    2428004605824
    >>> def set_no_name(myDict):
    ...     if not myDict.get('name'):
    ...         myDict['name'] = 'stranger'
    ...
    >>> stranger = {}
    >>> set_no_name(stranger)
    >>> stranger
    {'name': 'stranger'}
    >>> jess = {'name': 'Jess'}
    >>> set_no_name(jess)
    >>> jess
    {'name': 'Jess'}

To add further complexity (to both our objects and understanding), the object \
types of lists, tuples, and dictionaries are container objects. \
The items within them that are mutable are stored by reference (to the IDs), not \
value. In the following example, a tuple is an immutable type containing a \
mutable list and an immutable integer. When we \
modify the list and the integer, neither the tuple ID nor the list ID is changed, but the \
list inside the tuple is changed and the integer is not changed.

.. code-block:: python

    >>> r = [1,2,3]
    >>> s = 3
    >>> t = (r, s)
    >>> id(r)
    2428009990336
    >>> id(s)
    2428003641712
    >>> id(t)
    2428009991424
    >>> r.append(4)
    >>> s+=1
    >>> t
    ([1, 2, 3, 4], 3)
    >>> id(t)
    2428009991424

The JavaScript community often uses “purity” to discuss side effects. A \
function with a side effect is impure, versus no side effects is called \
pure. Impure functions can be harder to test \
and harder to debug if the developer doesn’t realize there is a side\
effect. Functions with side effects are useful.\
Personally, I am fine with using side effects if it is a void function.\
A code comment of returning nothing would be \
useful for future me or someone else to understand the code, \
while a function with both a return and a side effect is a little messy. My confidence \
in this stance is boosted by how Python core uses this strategy for appending to a list:

.. code-block:: python

    >>> s = [1,2,3]
    >>> id(s)
    2428009990336
    >>> s.append(4)
    >>> s
    [1, 2, 3, 4]
    >>> id(s)
    2428009990336

Easy Anagram Dictionaries Practice
##################################

:date: 2012-05-15
:category: Code
:tags: python, dictionary, data structures, mutable and immutable, beginner

I do not use dictionaries very often. Friday, I was without internet all day, \
so I took the opportunity to play with dir() and help() to discover some \
dictionary properties. My short-lived obsession with Draw Something on the \
iPhone has gotten me interested in anagrams (kicked the habit by reading \
programming books). I believe using dictionaries is the fastest and most \
accurate way to determine if two words are anagrams of each other, at least \
without importing any other modules.

A dictionary is an unordered set of key: value pairs. Keys must be an \
immutable type. Values can be anything. Being unordered causes some \
interesting properties for working with dictionaries, different from any \
other python data structure. Instead of being indexed by numbers, dictionaries \
are indexed by keys. Because they are indexed by keys, each key is unique \
within it's dictionary. If two dictionaries with the same keys are added to \
each other, the values of the same data type combine. This is convenient for \
our anagram activity. But first, some dictionary review.

.. code-block:: python

	>>> sample_dict = {}        # creates an empty dictionary
	>>> type( sample_dict )
	<type 'dict'>
	>>> sample_dict['Name'] = 'Jessie'        # creating a key:value pair
	>>> sample_dict['Age'] = 23        # another key:value pair
	>>> sample_dict
	{'Age': 23, 'Name': 'Jessie'}
	>>> sample_dict2 = {'Name': 'Jessie', 'Age': 23}        # another way to create dict
	>>> type (sample_dict2)
	<type 'dict'>
	>>> sample_dict2
	{'Age': 23, 'Name': 'Jessie'}
	>>> sample_dict + sample_dict2        # cannot add dictionaries, only values
	Traceback (most recent call last):
	  File "<console>", line 1, in <module>
	TypeError: unsupported operand type(s) for +: 'dict' and 'dict'
	>>> sample_dict['Age'] + sample_dict2['Age']        # adds values
	46
	>>> sample_dict.keys()
	['Age', 'Name']
	>>> sample_dict.values()
	[23, 'Jessie']
	>>> type( sample_dict.values() )        # keys and values are returned as lists
	<type 'list'>
	>>> sample_dict.get('Age')        # gets the value at a specific key
	23
	>>> type( sample_dict.get('Age'))         # value maintains data type in dictionary
	<type 'int'>
	>>> sample_dict.has_key('Age')        # D.has_key() returns boolean
	True
	>>> sample_dict3 = {'Children': 'Graham'}
	>>> sample_dict3.update(sample_dict)        # update keys and values
	>>> sample_dict
	{'Age': 23, 'Name': 'Jessie'}
	>>> sample_dict3        # Children field is added as a key:value pair
	{'Age': 23, 'Children': 'Graham', 'Name': 'Jessie'}
	>>> {'Age': 23, 'Name': 'Jessie'} == {'Name': 'Jessie', 'Age': 23}        # different order is equal
	True


How do we know if two words are anagrams? Consider the anagrams odor and door. \
We could say that they are reshuffled strings. Each word uses the same \
letters, but in a different order: 2 o's, 1 r, and 1 d. My simple program \
creates empty dictionaries for the two words being compared, stores the \
letters as keys, and adds to the value for each occurrence of the same \
letter, then checks that the dictionaries are equivalent. I have not included \
exception handling and I made the design decision to count white space as part \
of the anagram such that 'abc def' is not an anagram of 'fdeabc,' but is an \
anagram of 'abc fed.'

.. code-block:: python

	def get_dict(word, count):
     	    for i in word.lower():
                if count.has_key(i):
                    count[i] += 1
         	else:
            	    count[i] = 1
     	    return count
	
 	def main():
     	    word1 = raw_input("What is the first word? \n")
     	    word2 = raw_input("What is the second? \n")
     	    count1 = {}
     	    count2 = {}
     	    count1 = get_dict(word1, count1)                               
     	    count2 = get_dict(word2, count2)
     	    if count1 == count2:
         	print("Yes, those are anagrams!\n")
     	    else:
         	print("No, you've failed \n")
	
 	if __name__ == "__main__":
     	    main()
 

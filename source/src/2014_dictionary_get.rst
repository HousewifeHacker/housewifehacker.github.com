Python's Dictionary Get
#######################

:category: Code
:date: 2014-10-16

In a Python dictionary, one way to return the value for a specific key is a_dictionary[key]. Another way is to use the get method: a_dictionary.get(key). The difference is when the key is not in the dictionary. The bracket method returns an error, but the get method is silent. Get is a method that not only returns the value at a key, but also sets a default return value. When not specified, the default is None, which is why it was silent. If you wrap a_dictionary.get("absent_key") in a print call, it prints None. An empty list or 0 are the default values I've used most.

A common exercise for a dictionary is an anagram detector. I've seen this problem so many times, but only recently discovered the get method to make it cleaner and more efficient. First, the solution from earlier times. This was from a blog post of mine in 2012:

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

Actually, Python 3 no longer includes: a_dictionary.has_key("example"). A suggested alternative mentioned in Dive Into Python 3 is: "example" in a_dictionary. That's great if you want a boolean returned, but we want to modify the value regardless. If the key exists, add 1. If it doesn't exist, add 1 to 0. We need a default value of 0 if the key does not already exist, which is what the get method does for us. Now just a small change to the helper get_dict function from 2012 version:

.. code-block:: python

	def get_dict(word, count):
     	    for i in word.lower():
                count[i] = count.get(i, 0) + 1
     	    return count

Passing in an empty dictionary is kind of silly. So one more change:

.. code-block:: python

	def get_dict(word):
	    count = {}
     	    for i in word.lower():
                count[i] = count.get(i, 0) + 1
     	    return count
	
 	def main():
     	    word1 = raw_input("What is the first word? \n")
     	    word2 = raw_input("What is the second? \n")
     	    count1 = get_dict(word1)                               
     	    count2 = get_dict(word2)
     	    if count1 == count2:
         	print("Yes, those are anagrams!\n")
     	    else:
         	print("No, you've failed \n")
	
 	if __name__ == "__main__":
     	    main()


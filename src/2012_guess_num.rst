Intermediate Guess Number Python Game
#####################################

:date: 2012-06-02
:category: Code
:tags: python, intermediate, games, string formatting, exception handling, debugging

In my first month of learning python, I wrote a simple guess the number game. \
It did not include exception handling, was not pep8 compliant, and was \
organized somewhat poorly. It also needed updating because it used what I \
like to call "C Print Formatting," which used to be correct in python \
but is now being replaced. http://www.python.org/dev/peps/pep-3101/ discusses \
why. I decided to include a little of my coding process in this post as a \
way to pre-empt debugging.

The following code example was my first iteration. I knew that the user would \
be making multiple guesses, so my prompt for guess had to be a separate \
function called multiple times. I also included exception handling with \
my prompt so that the guess had to be a number within range and not a letter. \
I didn't know yet if generating the random integer would be complicated, so \
I hard coded a value for the correct answer and had the program print when \
completed, so I knew if the program reached the final step. In this version, \
you get one guess and the program doesn't know if you are wrong or right. 

.. code-block:: python
	
	minm = 1
	maxm = 20
	max_guesses = 6

	def randomize():
    	    return 4

	def prompt_for_guess():
    	    try:
                message = "Guess a number between {:d} and {:d} \n"
        	guess = int(raw_input(message.format(minm, maxm)))
       	 	if guess not in range(minm, maxm + 1):
            	    return prompt_for_guess()
        	else:
            	    return guess
    	    except ValueError:
        	print("Must be a number.")
        	return prompt_for_guess()

	def main():
    	    message = "I'm thinking of a number. I'll give you {:d} guesses"
    	    print(message.format(max_guesses))
    	    guess = prompt_for_guess()
    	    answer = randomize()
    	    print("The answer was {:d}".format(answer))

	if __name__ == "__main__":
    	    main()

Running the program with inputs of a letter, a number out of range, and a \
number within range verified that my exception handling worked. At this time, \
I imported random in my terminal and read the directory and help to review use \
of randint. Randint includes the last boundary, unlike the built in python \
range. Because it was only one line of code, I decided it did not need its \
own function. Also because I only needed to use it one time. My next attempt \
looked like this:

.. code-block:: python

	import random

	# configs
	minm = 1
	maxm = 20
	max_guesses = 6


	guesses_taken = 1
	
	
	def prompt_for_guess():
    	    """Asks for a guess and repeats if input is not a number in range"""
    	    try:
                message = "Guess a number between {:d} and {:d}. \n"
        	guess = int(raw_input(message.format(minm, maxm)))
        	if guess not in range(minm, maxm + 1):
            	    return prompt_for_guess()
        	else:
            	    return guess
    	    except ValueError:
        	print("Must be a number.")
        	return prompt_for_guess()
	
	
	def main():
    	    message = "I'm thinking of a number. I'll give you {:d} guesses"
    	    print(message.format(max_guesses))
    	    answer = random.randint(minm, maxm)
    	    if guesses_taken <= max_guesses:
                guess = prompt_for_guess()
        	if guess == answer:
            	    print("That's it! You win!")
            	    break
        	else:
            	    if answer > guess:
                	reason = "low"
            	    else:
                        reason = "high"
            	print("Your guess is too {:s}".format(reason))
            	guesses_taken += 1
    	    print("The answer was {:d}".format(answer))
	
	
	if __name__ == "__main__":
    		main()

But this had some errors. First, my guesses taken cannot be assigned outside \
my main function without making it a global variable. Unlike my minm, maxm, \
and max guesses, I want to edit the value of guesses taken. My second error \
was using an if statement instead of a while loop for guesses taken less than \
max guesses. I want my loop to continue until the user exceeds the number of \
allowed guesses or they get the answer right. My third mistake was my final \
print statement. It was useful for my initial attempt to write the program, \
but now I only want to reveal the answer if the user loses. 

Now The Final Code

.. code-block:: python

        import random

        # configs
        minm = 1
        maxm = 20
        max_guesses = 6
        
        
        def prompt_for_guess():
            """Asks for a guess and repeats if input is not a number in range"""
            try:
                message = "Guess a number between {:d} and {:d}. \n"
                guess = int(raw_input(message.format(minm, maxm)))
                if guess not in range(minm, maxm + 1):
                    return prompt_for_guess()
                else:
                    return guess
            except ValueError:
                print("Must be a number.")
                return prompt_for_guess()
        
        
        def main():
            message = "I'm thinking of a number. I'll give you {:d} guesses"
            print(message.format(max_guesses))
            answer = random.randint(minm, maxm)
            guesses_taken = 1
            while guesses_taken <= max_guesses:
                guess = prompt_for_guess()
                if guess == answer:
                    print("That's it! You win!")
                    break
                else:
                    if answer > guess:
                        reason = "low"
                    else:
                        reason = "high"
	            print("Your guess is too {:s}".format(reason))
                guesses_taken += 1
	    if guesses_taken > max_guesses:
	        print("The answer was {:d}".format(answer))
        
        
        if __name__ == "__main__":
                main()


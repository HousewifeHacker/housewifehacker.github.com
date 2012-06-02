2010 Guess The Number Game
##########################

:date: 2010-10-25
:category: Code
:tags: python, games, string formatting, beginner


During my first month of learning python, I wrote a game to guess a number \
between 1 and 20 with six attempts. This simple game is good practice for a \
beginner. A better written and more advanced version can be found at \
http://housewifehacker.com/intermediate-guess-number-python-game.html. \
This example is written in Python 2.6.

.. code-block:: python

    import random

    guessesTaken = 0

    print 'Hello! What is your name?'
    myName = raw_input() #get user name

    number = random.randint(1,20) #random number between 1 and 20
    print '%s I am thinking of a number between 1 and 20.' % myName

    while guessesTaken < 6:
        print 'Take a guess.'
        guess = int(raw_input())
        guessesTaken += 1
        if guess < number:
            print 'Your guess is too low.'
        elif guess > number:
            print 'Your guess is too high.'
        else:
            break #breaks out of loop

    if guess == number:
        if guessesTaken == 1:
            print 'Good Job, %s! You guessed my number in 1 guess!'
        else:
            print 'Good Job, %s! You guessed my number in %d guesses!' % (myName,guessesTaken)

    if guess != number:
        print 'No. The number I was thinking of was %d' % number

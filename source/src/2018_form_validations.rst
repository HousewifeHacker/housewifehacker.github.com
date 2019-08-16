Form Validations
##################################

:category: Code
:tags: js, html, ux

I have an obsession with form validations. It's a topic that usually isn't covered \
by universities or software development bootcamps but is an important and practical \
part of front end development and UX. For those who aren't sure what I'm talking about, \
form validations are the errors that show up when you've tried to POST a form response with \
incorrect values like missing a required field, an email in a wrong format that doesnt \
look like an email address, too few characters, not having a number in a new password, \
a password verification that isn't the same as the first password input, etc... As a \
software user and as a developer, I love using the front end to stop a form submission. \
They make it easier to keep all the current user input on the screen, giving a user the \
chance to make corrections, understand how the corrections should be made from the helpful \
error messages, and not lose their progress.

Now having expressed my appreciation for them, let's go over some implementations that \
are poor use and result in a poor user experience. 1. Only showing first error found. \
If I have multiple errors in a form I'm completing, I want to correct all of them before \
clicking the submit button again. 2. Vague or misleading error messages. A user needs to \
understand the expectations correctly. 3. Not accepting a browser's autocomplete or pasted \
values. If the value is in the field, the js event taking place to get it there shouldn't \
effect the validation result. 4. Lacking obvious styling and events. If a user is scrolled \
down to the submit button and can't see the fields with the errors, they may be waiting for \
a page redirect that isn't coming. The errors need to be visible and noticeable. Scroll \
events to the first error and use of color (usually danger red) help avoid this confusion. \
How you implement form validations depends on your needs, stack, and preferences. Here are \
some solutions with their pros and cons.

The first example is DIY. I chose to use jQuery, \
but a benefit of this approach is you wouldn't need to. It could also be used with React \
or anything because it's so simple. Your inputs need a way to be caught and checked by a \
validations function. You could include the error message in your HTML, as I did with the \
required name field, or your validation function can determine the error message shown, as \
I did in the regex pattern field. Including the error message in the HTML gives a lot of \
flexibility, while relying on javascript validation function could give more consistency \
throughout an application. Instead of returning a boolean value when checking the \
validations, I could have returned a Map or Array with the errors or error messages found.



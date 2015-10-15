
Last week we started with the chessboard, which  it was our big assignment for the weekend. David explained to us
how to  pay with the jQuery part proper and more effectively. It was pretty interesting to see how all the pieces
in my mind were starting to get closer.

We talked about the rule of reference of transparency. It means that any 2 values that are exactly equivalents can
be exchange.

We learnt about Encapsulation (big word for a big meaning) and IIFE (globals) and we use it for defense, making
easier to read code and working with teams.

Last week we were still working on CSS and SCSS going into details  like how to make very good tabs and panels, very useful and clarify.
We talked about octicons and how to use them, download them in your local computer or add a link as a CDN link in your html page.
We add bower as a tool! Bower helps us installing options in our computer that we need to use in the browser and it stores them in bower_components. We learnt how to install bower in our computer with `bower init`  when bower is installed we can add more dependencies with `bower install —save lodash` (for example)

Talking about lodash. Last week we started with same basic _.template in lodash. Basically we use variables in `<%=user%>` templates tags (user is just an example) and we change the value of the variable for the values in this function ` compiled ( { ‘user’ : ’fred’ }); ` Where we have a dictionary inside the parenthesis a value ‘fred’ for the key ‘user’. If we have more values for ‘user’ we can change the profile to another user.

Continuing with last week, we were reviewing the homework about lodash and how to write a shorter and easier to read code such as

```
$('element').html()  is the same than document.querySelector('element').innerHTML

```
We talked about branches in Github and how to organize them in order to avoid conflicts. We learnt about topic branches and git flow, being this last one, git flow the best branch model

We had some confusing with browser-sync being opened more than once and why. The proper way to close this browser will be control+c.

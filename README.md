# Phase-1-project-The-Wheel

The Wheel README.md

Are you tired of just having way too much free time and way too much money? Always getting frustrated with never knowing where to jet set off to next with all your disposable income? We were too! That’s why we created “The Wheel”. No more having anxiety on where your next vacation should be, let fate decide! 

Our group project is a fun, animated wheel of chance that picks a travel destination for you, and then provides you with additional info to make booking your vacation a breeze! 

CORE DELIVERABLES:

The Wheel Spin Function:

Our spinWheel() JavaScript function does 4 things:
The function fires on a “click” event
The function computes a random angle value 
The function adds and removes classes
The function gives a timeout to give the effect of the wheel slowing down

First, we declare a maximum and minimum value. These numbers will be used for the minimum and maximum amount of times the wheel can spin. Next we create a variable for the degree angle that our function will compute (const deg = Math.Floor(Math.random() * (max - min +1) + min). A lot is going on here so let’s dive in. Math.random is a javascript method that returns a random number between 0 and 1. A cool method for sure but the value it would return would be too small for us to actually see a spinning effect. To counter this we use our min and max variables. We take the random number generated and multiply it by the range of numbers that we want generated. We add our minimum value to the number generated to make sure that our range is ALWAYS starting from our minimum value. Nice! Now we have generated a random number to use for our wheel. But this random number will be a float since it was multiplied by our Math.random() method. No bueno. To resolve this we use the Math.Floor() method which turns our float into a nice whole integer. Now we need to apply this number to our wheel so that each of our triangles knows where to land. We grab our wheel with the ID that we gave it (“box”) and dot-notate down into the CSS property we want to manipulate, in this case the transform property. Now we should have our wheel with a nice spinning animation. But we have to get the wheel to stop spinning now! Woe is me! 

First we grab the mainbox that our spinner is in and remove the animate class from it. Voila! Our wheel can now stop. Our finishing touch is our setTimeout() function within our spinWheel() function. This sets a timer which will add back our “animate” class to our wheel after 5 seconds. Behold, The Wheel.

Our addComment() function is much simpler. First we e.preventDefault() in order to make sure that the whole webpage doesn’t reload every time we submit our comments. We then create a variable to grab our HTML scroll box (document.getElementById(“scrollBox”)) where the comments will be displayed and a variable for the comments we want to create (document.createElement(“li”)). We set the innerText of our newly created li’s to be the value of what the user writes in our comment input box (li.innerText = e.target.commentInput.value). Since we are creating new elements, we append our created li’s to our scroll box (comment.append(li)). Finally, we link our function to an EventListener so that JavaScript knows when to execute it. (document.getElementById(“form”).addEventListener(“submit”, (e) => addComment(e))).

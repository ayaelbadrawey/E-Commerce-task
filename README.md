# E-Commerce-task

1- Description of the problem and solution:
-This is an e-commerce website that allow you to choose certain category to view all products within it then you can filter by three types of filters, price filter, color filter and rating filter.
-There was no problem in designing nor in implementing the code, front end was pretty easy , the conncetion to the api was simple and the backend of filters features required a little bit thinking.

2- Whether the solution focuses on back-end, front-end or if it's full stack:
-It's a fullstack project, i experienced working with front, back and api in it.

3- Reasoning behind your technical choices, including architectural:
-In front I chose material ui (Paper) to organize my sections and display them in acceptable and simple view.
-In architecture I chose to divide my components into 6 components (Header, Footer, Categories, Products, ProductCard, Filters) to able to call them/pass props to them easily in app.js.

4- Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project:
-I experienced one trade-off in this task, while i was trying to make our 3 filters work properly with each other. I decided to make a huge if/else statement instead of making 4 for loops in order to get best complex time and make the features responds as fast as possible.

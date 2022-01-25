# TIC-TAC-TOE

## Overview
For my final solo project of Module 1 at Turing School of Software and Design, I have built a fully functional game of tic-tac-toe from scratch in less than 5 days - after only 5 weeks learning to code. My goals were to solidify and demonstrate my understanding of:
  - DRY JavaScript
  - Event delegation to handle similar event listeners
  - Understand the difference between the data model and how the data is displayed on the DOM
  - Iterate through/filter DOM elements using for loops
  - Use my problem solving process to break down large problems, solve things step by step, and trust myself to not rely on an outside “answer” to a logical challenge

## [Deploy Link](https://gjax78.github.io/tic-tac-toe/)

## Contributors
​Geena Jackson - [GitHub](https://github.com/gjax78)​<br>
The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html)<br>
My planning process can be found [here](https://docs.google.com/document/d/19uE27XPzOmAvI7WPwjXlxb-KnbI1H75KPezCPxH5MgE/edit?usp=sharing)

## Technologies Used
​Built With: Javascript, HTML, CSS and JQuery<br>
Web Browser: Google Chrome/ Safari​<br>
Text Editor: Atom​​​


## Installment Instructions
- Fork this project to your own Github account
- Clone the repository to your local machine
- cd into the project
- Enjoy by using open index.html to view on the browser

## Code Architecture
My entire application consists of one HTML file and one CSS file. I have three JavaScript files:

1) A player.js file that contains a Player class
  - Player methods include a constructor - properties should include: id, token, and wins

2) A game.js file that contains a Game class:
- A Game should include:
  - Two Player instances
  - A way to keep track of the data for the game board
  - A way to keep track of which player’s turn it currently is
  - A way to check the Game’s board data for win conditions
  - A way to detect when a game is a draw (no one has won)
  - A way to reset the Game’s board to begin a new game

3) A main.js file that contains all DOM related JavaScript

## Project Roadmap
1) Upon load, the user will see an empty game board. The first user that makes a move is assigned the X token. After they have placed their token on the board, it will become the second user's turn, which will display on the screen:

![gif](https://user-images.githubusercontent.com/88151743/149823241-af969488-c0b8-42d6-b4ac-075fcd5e527b.gif)

2) A user cannot place their token on a square that's already occupied, and it remains their turn:

![gif](https://user-images.githubusercontent.com/88151743/149823275-1f15034a-b1db-4c28-a2cc-13f8ff80150f.gif)

3) When a user wins a game, the banner will display which user won and their win count will increment by one. After they have won, the game board will reset after a set amount of time, but the user's win count will remain:

![gif](https://user-images.githubusercontent.com/88151743/149823328-1337042c-ea5b-4d07-bd87-d5d7dcf04d86.gif)

4) If the game results in a tie, the banner will display the game was tied and no users' win counts will increment. The game will then reset after a set amount of time:

![gif](https://user-images.githubusercontent.com/88151743/149823391-feeb7e70-e13b-43e0-80ff-2ed7a41c3a22.gif)

5) After the board resets, the user who didn’t begin the previous game now is the first player to go in the new game:

![gif](https://user-images.githubusercontent.com/88151743/149823449-fb503d66-d3d7-409b-8f5e-206302290791.gif)

## Challenges
- A main challenge was organizing my code, as all of my functions work together. It was difficult after so many functions to figure out where to call each of them.
- One other challenge was when I got to the gameboard logic, I was missing one conditional - that the box could only be clicked if a token hadn't already been placed. This one conditional held me up for quite a bit, as I thought all my logic was sound. Turns out, it was (!), but that one missing conditional didn't allow for the game to be played correctly.

## Wins
- I absolutely loved researching CSS tricks and animations. Although I got the game fully functional, it didn't really feel good until the CSS was applied. I can't wait to see what else I can accomplish!
- One other win was my planning process. I took time to pseudocode the logic behind the game and set timelines for when I wanted certain features to be completed. I was able to stick to my planning document, and I referenced it frequently throughout my work.

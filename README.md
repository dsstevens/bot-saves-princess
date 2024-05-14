# Bot Saves Princess SESAC Challenge

The folder 'hackerrank-solutions' contains both solutions that are readymade to be copy and pasted and entirely replace the existing codeblock in the HackerRank IDE.

### Table of Contents
- [How To Install](#how-to-install)
- [Testing](#testing)
- [Running the App Locally](#running-the-app-locally)
- [Solving Bot Saves Princess 1](#solving-bot-saves-princess-1)
- [Solving Bot Saves Princess 2](#solving-bot-saves-princess-2)
- [Planning Documentation](#planning-documentation)

## Abstract

- This project was made over the course of four days as a technical challenge for SESAC. The original challenges can be found on the HackerRank website here:  
[Challenge 1](https://www.hackerrank.com/challenges/saveprincess)  
[Challenge 2](https://www.hackerrank.com/challenges/saveprincess2)  
- The solutions are in the `hackerrank-solutions` folder.
The rest of the repo demonstrates TDD, testing for both challenges and integration to receive the same output in your CLI for the first challenge. 
- The second challenge still needs improvement in order for the process function to be adapted for the node environment in terminal and to be properly tested to ensure that the tests written are functional.

## How To Install

```
git clone git@github.com:dsstevens/bot-saves-princess.git
cd bot_saves_princess
npm install
```

## Testing

- I ran into dependency issues with Mocha and Chai so I opted to learn Jest in less than four days. It was ready out of the box for testing and had much better integration in the application without the CommonJS module errors that Mocha had without a transpiler.
- Testing is currently completely covered for the first challenge but untested for the second challenge.
- Run this command to initiate Jest to test both challenges.
```
npm run test
```
## Running the App Locally

- In order to run the application in your CLI, enter this command followed by a grid formatted in a matrix convention with the bot (m) in the center and the princess (p) in any of the four corners. 
- I wrote a script in the package.json in order to simplify the node commands necessary to run the functionality for the first challenge.
```
npm run challenge:1 '|---|-m-|p--'
```

## Solving The Problem

### Repo Architecture
I followed JavaScript repo architecture conventions as taught by Turing School of Software & Design for this project.  
![Screenshot 2024-05-13 at 8 39 16 PM](https://github.com/dsstevens/bot-saves-princess/assets/132790719/ac260b5b-9c1d-433f-93a2-4c4f4cbfedbe)


## Solving Bot Saves Princess 1
- I started by doing research on pathfinding algorithms, reading about the A* method, Manhattan Distance, and looking at documentation for the matrix convention. I understood that there were three main parts to the solve the problem: finding the bot and princess positions, determining the direction the bot needed to move, and how to output the moves printed all at once.
- I wanted to create a grid from the input and knew that I would need to either loop or iterate over it. For the sake of readability, I chose to use a nested for loop which could find and compare the locations of the bot and princess
- From there, the distances between both are calculated by using another array which could become the output and print on a separate line. 
- I built in error handling to ensure that a grid is given as input locally
- The added challenge was adapting the solution from the HackerRank IDE to be "playable" on your local machine in the Command Line Interface. I adapted the processData function to parse through the input from the CLI with iterators. I also learned that using flags for the cells was interpreted as commands so I adapted by adding another '|' to the beginning of the string and spliced that out. 

## Solving Bot Saves Princess 2

- For this more dynamic scenario, I chose to use a similar layout to the first problem but needed to consider the added arguments and complexity of a more randomized grid. 
- I started by utlizing the split and map iterator methods. I again used the logic of creating an empty array to hold the matrix of the grid. 
- Although this algorithm can be categorized as a "greedy algorithm", its Big O calculation for time complexity determine it to be efficient: $O(n^2)$ for identifying the positions of the characters and $O(1)$ for determining the moves.
- Unlike more complex pathfinding algorithms such as A* or Dijkstra's, this solution focuses on incremental, step-by-step navigation, which aligns with the problem requirement to output only the next move.
- The HackerRank solution is completely functional, but the version to run locally still needs work to run in the CLI and be properly tested. Instead of doing TDD which I did for the first challenge, I wanted to ensure that I submitted a solution so based my approach on the first solution and coded in the IDE. 
- In order to complete this challenge, I would like to refactor how processData is taking in input for node functionality and create command line variables to simplify how the user enters the command to run the program.
- Click the image below to run the gif if it has already completed.  
   ![bot saves princess ](https://github.com/dsstevens/bot-saves-princess/assets/132790719/4174ca7e-0ee8-4a90-8e12-10dcc1bb0fdb)


## Planning Documentation
I started building this project by outlining my main goals by using tickets and the Kanban method through Github projects. I documented any relevant resources and acceptance criteria on each ticket.   
[Link to Project board](https://github.com/users/dsstevens/projects/7)

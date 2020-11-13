# Getting Started with Tic-Tac-Toe

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Task At Hand

We should be able to  make a working Tic-Tac-Toe game

## Entities

* GameBoard
    * GameTurn
    * GameRow
        * GameSquare or Square
* Reset

The players should take turns filling the board with X or O. You know the rules, if the lines are filled than the player wins.

1. Implement Taking turns and showing whose turn it is in GameTurn
1. Implement filling Squares with X or O according to GameTurn
1. Implement Reset functionality
2. Implement Game win mechanics if lines are filled with X or O
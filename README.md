<img align="right" width="240" height="300" src="https://i.ibb.co/m0PFxwB/WordGif.gif" alt="Word Gameplay"/>
<br/>

# Word
This is a recreation of a popular word game, where the user must guess a 5-letter target word within 6 guesses. Upon each accepted guess, each letter is evaluated and given a status that is displayed to the user through colored tiles that each letter is on. This project was bootstrapped with the Typescript template of Create React App to learn and share.

<br/>
<br/>

## How are guesses evaluated?

For a user's guess to be evaluated, it must be 5-letters and within a loaded dictionary. Upon submission, each letter is evaluated and assigned 1 of 3 possible statuses:

| Letter Status | Background Color | Description |
|---|---|---|
| Wrong-Letter | Dark Grey | Guessed letter is not included in the target word at all. |
| Wrong-Location | Yellow | Guessed letter is in the wrong location. If the guessed letter is guessed more than once, only one tile will be yellow if the target word has the letter only once. Only two for twice and so on. |
| Correct | Green | Guessed letter is in the correct location. If all the tiles are green, you win! |
<br/>

<img align="left" width="240" src="https://i.ibb.co/ZdtcCc7/WordJpeg.jpg" alt="Completed Game"/>
<br/>

## What is next?

I set up firebase authentication recently and will be working on storing user game data in firestore next. After that, I will be building the stats page to display game data to the user.
 
 

/* Step 1) You’re going to store the gameboard as an array inside of a Gameboard object, s
    Your players are also going to be stored in objects… and you’re probably going to want an object to control the 
    flow of the game itself.
    Your main goal here is to have as little global code as possible. 
    Try tucking everything away inside of a module or factory. 
    Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
    If you need multiples of something (players!), create them with factories. */


    /* Step 2) Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the 
    DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing 
    in spots that are already taken!
    Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit 
    in the game, player or gameboard objects.. but take care to put them in “logical” places. 
    Spending a little time brainstorming here can make your life much easier later! */
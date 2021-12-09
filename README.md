
A 'destination' for:
- player HP
- list of living goblins
- for each goblin show
      their name
      their HP
- defeated goblins

Clickables
- Each goblin is clickable
  on click . . .
     possibly decrmement this goblin's HP
     possibly decrment player HP
     possibly increment defeatedGoblins
     pdate the DOM with new goblin, player, and defeated goblin state. (render deated goblins differently)

- New goblin form
   On Submit . . .
      User has supplied a name and submitted the form
      Make a new goblin object with that user input
      Add that object to the array of goblins in state
      "update a list"
      clear out the list DOM
      loop through the goblins
      render a new goblin DOM element for each item
      append that element to the HTML

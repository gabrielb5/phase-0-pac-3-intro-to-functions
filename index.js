// Follow along with the examples here
function sayHello() {
    console.log("Hello!");
  }

  sayHello();

  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("I'm your father");

  function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

  say("Gabriel" , "Hola")

  function add(x, y) {
    return x + y;
  }

  console.log(add(100, 50))

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }

  say("Well hello" , "Laura")
1. To test all methods just copy/past this two rows and start Quokka.ts for testing in real time the 
    statement stackHolder.storage:

    onsole.log(stack("push",2));
    console.log(stackHolder.storage);

2. In test.js file, peek method is a origin method for using in production but 
   for testing this file it is better to use another one:

   var peek = () =>{
   let peekData = stackHolder.storage[stackHolder.storage.length - 1];
   stackHolder.storage=stackHolder.storage.filter(value => value == peekData);
   return stackHolder.storage
   } 
   how as the log method return the stackHolder.storage 
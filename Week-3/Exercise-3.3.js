function createIncrement() {
    
    let count = 0;
    
    function increment() {
        count++;
    }
    
    let message = `Count is :: ${count}`;
    
    function log() 
    {
        console.log(message);
    }

    return[increment,log];
}

const [increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?


//output is 0

//because the count is referring to global count which is Zero
//if we place the message in log function the o/p is 3 because now the count will refer to local variable of increment count


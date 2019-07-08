/*
setTimeout(arg1,arg2) has scheduled a task to be performed in the future(in this case 2000ms). 
so this task(arg1) will be called after 2000ms and during this time, the rest of program is executing.  
*/

console.log('Before');
setTimeout(() => {
	console.log('Reading a user from a database... ');
} , 2000);
console.log('After');
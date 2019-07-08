/*
3 ways to handle async programming
1.Callbacks
2.Promisses
3.Async/await
*/

console.log('Before');
const user = getUser(1);
console.log(user);
console.log('After');

function getUser(id) {
	setTimeout(() => {
	console.log('Reading a user from a database... ');
	return {id:id,gitHubUsername : 'mohsen'}
} , 2000);	

	return 1;
}



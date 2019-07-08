/*
 ways to get rid of callback hell
 1.using named functions instead of anonymous functions
 2. promises
*/

console.log('Before');
getUser(1 , getRepositories);
console.log('After');


function displayCommits(commits) {
    console.log(commits);
}

function getCommits(repos) {
    getCommits(commits , displayCommits);
}

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database... ');
        callback ({id : id , gitHubUsername: 'mohsen'}) ;
    } , 2000);
}

function getRepositories(username , callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1' , 'repo2' , 'repo3']); 

    }, 2000);
 }



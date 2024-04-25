function User(username, password) {
    this.username = username;
    this.password = password;
}
// Authentication factory function
function Authentication() {
    var users = [];  // storing the new users in an empty array

    function createUser(username, password) {
        var user = new User(username, password)
        users.push(user)
    }
    // when a new user is created it get's pushed in the users array (storage)

    function loginUser(username, password) {
        // using the find method we serch for the user in 
        //the users array
        
        var foundUser = users.find(function(user) {
            // the find method take an anonymos function as param that 
            //returns the users username and password
            return user.username === username && user.password === password
        })
        return foundUser // last step we return founduser 
    }}

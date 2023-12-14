const firebaseConfig = {
    apiKey: "AIzaSyBvwWmLowUcXvvsbwYVGbGQ7KAqQVazVYc",
    authDomain: "formlogin-a58a1.firebaseapp.com",
    projectId: "formlogin-a58a1",
    storageBucket: "formlogin-a58a1.appspot.com",
    messagingSenderId: "521178518257",
    appId: "1:521178518257:web:1b6ce9d0ec88f4f7ef8f50"
  };

// Initialise firebase
firebase.initializeApp(firebaseConfig);

//Initialize variables

const auth = firebase.auth()
const database = firebase.database()

// Set up our register function

function register(){
    user = document.getElementById("user").value
    pass = document.getElementById("pass").value
    email = document.getElementById("email").value

    // Validate the input fields
    if(validate_email(email) == false || validate_password(pass) == false){
        alert("Email or Password is Outta line!!")
        return 
        // Don't continue running the code
    }
    if(validate_field(user)==false){
        alert("User is Outta line !!")
        return
    }
    // Move on with auth 
    auth.createUserWithEmailPassword(email,password)
    .then(function(){
        // Declare user variable
        var user = auth.currentUser

        // Add this user to the firebase databse
        var database_ref = database.ref()

        // Create user data
        var user_data = {
            email : email,
            user : user,
            pass : pass,
            last_login : Date.now()
        }
        database_ref.child('users/'+ user.uid).set(user_data)

        alert('User Created !!')
    })
    .catch(function(error){
        // Firebase will use is as to display the errors
        var error_code = error_code
        var error_message = error_message

        alert(error_message)
    })
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if(expression.test(email)==true){
        //Email is good
        return true
    } else{
        // Email is not goood
        return false
    }
}

function validate_password(pass){
    // Firebase will only accept password greater than or equal to 8 
    if (pass < 8){
        return false
    }
    else{
        return true
    }
}
function validate_field(field){
    if(field == null){
        return false
    }
    if (field.length <= 0){
        return false
    }
    else{
        return true
    }
}
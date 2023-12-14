const firebaseConfig = {
    apiKey: "AIzaSyAEVcgW60oFoaMItj467Q1IAFPu2zAPZCE",
    authDomain: "contactform-240f3.firebaseapp.com",
    databaseURL: "https://contactform-240f3-default-rtdb.firebaseio.com",
    projectId: "contactform-240f3",
    storageBucket: "contactform-240f3.appspot.com",
    messagingSenderId: "461123376832",
    appId: "1:461123376832:web:7322da80722cb9c2cbbf25"
  };

/// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var Fname = getElementVal("Fname");
  var Lname = getElementVal("Lname");
  var emailid = getElementVal("emailid");
  var phone = getElementVal("phone");
  var msgContent = getElementVal("msgContent");

  saveMessages(Fname, Lname, emailid, phone, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (Fname, Lname, emailid, phone, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Fname: Fname,
    Lname: Lname,
    emailid: emailid,
    phone: phone,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
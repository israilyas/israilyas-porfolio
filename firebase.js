
  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAi0lIKttvjULXMda6W6vqY3NCOX1WsKZA",
    authDomain: "portfoliocontact-79d62.firebaseapp.com",
    databaseURL: "https://portfoliocontact-79d62-default-rtdb.firebaseio.com",
    projectId: "portfoliocontact-79d62",
    storageBucket: "portfoliocontact-79d62.appspot.com",
    messagingSenderId: "219776617931",
    appId: "1:219776617931:web:d7cee79e406377b02f3a4e"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference Your DataBase
const contactFormDB = firebase.database().ref('PContactForm')

document.getElementById('contactForm').addEventListener('submit',submitForm)

function submitForm(e){
    e.preventDefault()

    let name = getElementVal('name')
    let email = getElementVal('email')
    let sub = getElementVal('subject')
    let msg = getElementVal('msg')
    
    saveMessages(name,email,sub,msg);

    // Enable Alert
    Onsubmit()

  }

  // Save these values to firebase:
  const saveMessages = (uname,email,sub,msg) => {
    let newContactForm = contactFormDB.push()

    newContactForm.set({
      Uname:uname,
      emailId:email,
      subject:sub,
      message:msg
    });
  }

const getElementVal = (id) => {
    return document.getElementById(id).value
    
}

// On Form Submit

let sub_button = document.querySelectorAll('#submit')

function Onsubmit(){
  document.querySelector('.alert').style.display = 'block';

  // Remove alert after 3 sec

  setTimeout(()=>{
    document.querySelector('.alert').style.display = 'none';
  },4000)
  
  // Reset Form
  document.getElementById('contactForm').reset()
}

sub_button.addEventListener('click',onSubmit)
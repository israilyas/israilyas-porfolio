
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

    console.log(name,email,sub,msg)
}

const getElementVal = (id) => {
    document.getElementById(id).value
}
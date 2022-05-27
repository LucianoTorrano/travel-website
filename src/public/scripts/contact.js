// CONTACT PAGE ANIMATION

const tl = gsap.timeline()

tl.from('.container',{delay:.5,opacity:0,y:100,duration:1})

const form = document.querySelector('.contact_form');


// SEND EMAIL FUNCTION
function sendEmail(e){
    e.preventDefault();
    const email = document.getElementById('email'),
          name = document.getElementById('name'),
          msg = document.getElementById('message');

    Email.send({
        SecureToken: "3eaa2bcf-6895-4665-abe8-62a3b63161a6",
        To : 'lucianotorrano.dev@gmail.com',
        From : email.value,
        Subject : "Mail send from Aim & Travel Website",
        Body :  "Name: " + name.value +
                "<br> Message " + msg.value
    }).then(
      message => alert(message)
    );
}

//SUBMIT EVENT LISTENER
form.addEventListener('submit',sendEmail);
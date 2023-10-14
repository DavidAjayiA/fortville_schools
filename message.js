function sendEmail(){
    Email.send({
       secureToken: "cd649c9c-da38-4b43-bcc4-d55bdd9535db",
        To : 'davidajayi006@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> phone no: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}
function sendEmail(){
    var templateParams = {
        name:document.getElementById("name").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        messege:document.getElementById("messege").value,

      };
      
      emailjs.send('service_if1vp1s', 'template_gzl6s3u', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent successfully!")
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("phone").value="";
            document.getElementById("subject").value="";
            document.getElementById("messege").value="";
          
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}

    const btn = document.getElementById('button');
    document.getElementById('form')
     .addEventListener('submit', function(event) {
       event.preventDefault();
       const serviceID = 'default_service';
       const templateID = 'template_bpfyk2s';
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          alert("¡Email enviado con exito!")
          document.getElementById('from_name').value = '';
          document.getElementById('message').value = ''; 
          document.getElementById('reply_to').value = ''; 
        }, (err) => {
          console.log("error!");
        });
    });


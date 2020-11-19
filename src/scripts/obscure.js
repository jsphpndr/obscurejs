(function() {

  this.Obscure = function() {

    let obscure = document.querySelectorAll('[obscure]');

    for (let i = 0; i < obscure.length; i++) {
      // Get Email
      let local = obscure[i].getAttribute('data-local')
      let domain = obscure[i].getAttribute('data-domain')
      
      // Get Phone Number
      let country = obscure[i].getAttribute('data-country')
      let area = obscure[i].getAttribute('data-area')
      let prefix = obscure[i].getAttribute('data-prefix')
      let line = obscure[i].getAttribute('data-line')
      
      // Check if it's a phone number
      if (obscure[i].hasAttribute('data-country')) {
        
        // If it is, let's put out a phone number
        let tel = document.createElement('a');
        tel.className = 'tel';
        tel.href = `tel:+${country}${area}${prefix}${line}`;
        tel.appendChild(document.createTextNode(`(${area}) ${prefix}-${line}`));
        
        obscure[i].parentNode.insertBefore(tel, obscure[i]);
      
      } else {
        
        // Otherwise, we'll default to emails
        let email = document.createElement('a'); 
        email.className = 'mail';
        email.href = `mailto:${local}@${domain}`;
        email.appendChild(document.createTextNode(`${local}@${domain}`))
        
        obscure[i].parentNode.insertBefore(email, obscure[i]);
        
      }

    }

  }

} ());
(function () {
  this.Obscure = function () {
    var obscure = document.querySelectorAll('[obscure]');

    for (var i = 0; i < obscure.length; i++) {
      // Get Email
      var local = obscure[i].getAttribute('data-local');
      var domain = obscure[i].getAttribute('data-domain'); // Get Phone Number

      var country = obscure[i].getAttribute('data-country');
      var area = obscure[i].getAttribute('data-area');
      var prefix = obscure[i].getAttribute('data-prefix');
      var line = obscure[i].getAttribute('data-line'); // Check if it's a phone number

      if (obscure[i].hasAttribute('data-country')) {
        // If it is, let's put out a phone number
        var tel = document.createElement('a');
        tel.className = 'tel';
        tel.href = "tel:+".concat(country).concat(area).concat(prefix).concat(line);
        tel.appendChild(document.createTextNode("(".concat(area, ") ").concat(prefix, "-").concat(line)));
        obscure[i].parentNode.insertBefore(tel, obscure[i]);
      } else {
        // Otherwise, we'll default to emails
        var email = document.createElement('a');
        email.className = 'mail';
        email.href = "mailto:".concat(local, "@").concat(domain);
        email.appendChild(document.createTextNode("".concat(local, "@").concat(domain)));
        obscure[i].parentNode.insertBefore(email, obscure[i]);
      }
    }
  };
})();
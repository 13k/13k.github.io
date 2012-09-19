// adapted from http://practicalcryptography.com/ciphers/caesar-cipher/
function CaesarCipher() {
  this.encode = function(plaintext, shift) {
    var re = /[a-z]/, ciphertext = "";
    for (i=0; i < plaintext.length; i++) {
      if (re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + shift)%26 + 97); 
      else ciphertext += plaintext.charAt(i); 
    }
    return ciphertext;
  }

  this.decode = function(ciphertext, shift) {
    var plaintext = "", re = /[a-z]/;
    for (i=0; i<ciphertext.length; i++) {
      if (re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - shift)%26 + 97); 
      else plaintext += ciphertext.charAt(i); 
    }
    return plaintext;
  }
}

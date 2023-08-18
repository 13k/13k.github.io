(function () {
	// https://en.wikipedia.org/wiki/Caesar_cipher
	class CaesarCipher {
		static RE = /[a-z]/;

		constructor(shift) {
			this.shift = shift;
		}

		encode(plaintext) {
			let ciphertext = "";

			for (let i = 0; i < plaintext.length; i++) {
				if (this.constructor.RE.test(plaintext.charAt(i))) {
					ciphertext += String.fromCharCode(
						((plaintext.charCodeAt(i) - 97 + this.shift) % 26) + 97,
					);
				} else {
					ciphertext += plaintext.charAt(i);
				}
			}

			return ciphertext;
		}

		decode(ciphertext) {
			let plaintext = "";

			for (let i = 0; i < ciphertext.length; i++) {
				if (this.constructor.RE.test(ciphertext.charAt(i))) {
					plaintext += String.fromCharCode(
						((ciphertext.charCodeAt(i) - 97 + 26 - this.shift) % 26) + 97,
					);
				} else {
					plaintext += ciphertext.charAt(i);
				}
			}

			return plaintext;
		}
	}

	const encoded = "13x.0ns60@fvzcyrybtva.pbz";
	const cipher = new CaesarCipher(13);
	const decoded = cipher.decode(encoded);

	document.getElementById("email").href = `mailto:${decoded}`;
})();

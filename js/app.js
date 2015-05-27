(function($) {
  $(function() {
    var encoded = "xozhengn@tznvy.pbz",
        cipher = new CaesarCipher(),
        decoded = cipher.decode(encoded, 13);

    $("#email").text(decoded);
  });
})(window.jQuery);
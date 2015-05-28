(function($) {
  $(function() {
    var encoded = "xozhengn@tznvy.pbz",
        cipher = new CaesarCipher(),
        decoded = cipher.decode(encoded, 13);

    $("#email").attr("href", "mailto:" + decoded);
  });
})(window.jQuery);
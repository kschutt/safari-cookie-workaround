jQuery(function(){
  $('#iframe_test').modal('show');
  (function Safari_Iframe_Cookies() {
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    if ((is_chrome) && (is_safari)) {is_safari = false;}  
    if (is_safari) {
      if (!document.cookie.match(/^(.*;)?\s*fixed\s*=\s*[^;]+(.*)?$/)) {
        document.cookie = 'fixed=fixed; expires=Tue, 19 Jan 2038 03:14:07 UTC; path=/';
        window.location.replace("http://home.kammllc.com:3000/.well-known/safari-cookie-fix?page_uid=rv_page_mMorwSy3wzYHzrQcY8BDgZhW");
      };
    };
  })();
});

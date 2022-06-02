$(function() {
    page_location = window.location.toString();
    if(
    page_location.indexOf("/pl/lite/widget/widget")==-1
    &&
    page_location.indexOf("/pl/tasks")==-1
    )
    {
    var sgtm = document.createElement('script');
    sgtm.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5XCVP9N');";
    document.getElementsByTagName("head")[0].appendChild(sgtm);
    }
    });
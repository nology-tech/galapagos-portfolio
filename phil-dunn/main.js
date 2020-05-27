function sendMail() {
    var link = "mailto:phillipdunn@hotmail.com"
    + "?cc = "
    + "&subject=" + escape("Phil - let's connect")
    + "&body=" + escape("Hi Phil\n\nLet's connect - please reply to arrange a chat or give me a call on 07         .\n\nKind regards")
    ;
    window.location.href = link;
}

function myFunction(x) {
    x.classList.toggle("change");
}
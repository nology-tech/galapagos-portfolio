function sendMail() {
  var link = `mailto:phillipdunn@hotmail.com?cc = &subject=${escape('Phil - let\'s connect')}&body=${escape('Hi Phil\n\nLet\'s connect - please reply to arrange a chat or give me a call on 07         .\n\nKind regards')}`
    ;
  window.location.href = link;
}

function myFunction() {
  document.getElementById('burger').classList.toggle('change');
  //here
}

//document.getElementsByClassName('btn-outltine').addEventListener('click', sendMail);

document.getElementById('burger').addEventListener('click', myFunction);
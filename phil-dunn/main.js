
function myFunction() {
  document.getElementById('burger').classList.toggle('change');
  document.querySelector('nav').classList.toggle('open');
}

document.getElementById('burger').addEventListener('click', myFunction);

document.getElementById('mail').addEventListener('click', sendMail);

function sendMail() {
  let link ='mailto:phillipdunn@hotmail.com'
+ '?cc='
+ '&subject=' + escape('Phil - let\'s connect')
+ '&body=' + escape('Hi Phil\n\nLet\'s connect - please reply to arrange a chat or give me a call on 07         .\n\nKind regards');
  window.location.href = link;
}


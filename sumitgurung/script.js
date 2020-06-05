function wipe() {
  document.getElementById('form').reset();
};

function getData() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let comment = document.getElementById('comment').value;

  console.log(name, email, phone, comment);
};
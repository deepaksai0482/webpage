/*document.querySelector(".tablink").addEventListener("click", function () {
  var a = document.querySelector(".tabcontent").display;
  console.log(a);
});*/

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var closeModel = document.querySelector('.close-modal');
var button = document.querySelector('.button');
console.log(button);

button.addEventListener('click', function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
closeModel.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
var tablink = document.querySelector('.tablink');
var tabcontent = document.querySelector('.tabcontent');
var home = document.querySelector('.home');
var ul = document.querySelector('#check');
var ab = document.querySelector('.ab');
var about = document.querySelector('.section-title');
var cd = document.querySelector('.cd');
var ef = document.querySelector('.ef');
var gh = document.querySelector('.gh');
var skills = document.querySelector('.my-skills');
var projects = document.querySelector('.project');
var contact = document.querySelector('.touch');
console.log(tablink);

tablink.addEventListener('click', function () {
  console.log('button clicked');
  ul.classList.add('check');
  ul.remove();
  tabcontent.scrollIntoView({ behavior: 'smooth' });
});

ab.addEventListener('click', function () {
  console.log('button bt');
  ul.classList.add('check');
  ul.remove();
  about.scrollIntoView({ behavior: 'smooth' });
});
cd.addEventListener('click', function () {
  ul.classList.add('check');
  ul.remove();
  skills.scrollIntoView({ behavior: 'smooth' });
});
ef.addEventListener('click', function () {
  ul.classList.add('check');
  ul.remove();
  projects.scrollIntoView({ behavior: 'smooth' });
});
gh.addEventListener('click', function () {
  ul.classList.add('check');
  ul.remove();
  contact.scrollIntoView({ behavior: 'smooth' });
});

// const validate = function () {
//   var name = document.querySelector('#Name');
//   var subject = document.querySelector('#Subject').value;
//   var phone = document.querySelector('#Phone').value;
//   var message = document.querySelector('#message').value;
//   var subject = document.querySelector('#Email').value;
//   var error_message = document.querySelector('#error_message');
//   var form = document.querySelector('.myform');
//   var text;

//   error_message.style.padding = '10px';

//   if (name.length < 5) {
//     error_message.style.padding = '10px';
//     text = 'Please Enter valid Name';
//     error_message.innerHTML = text;
//     return false;
//   }
//   if (subject.length < 10) {
//     error_message.style.padding = '10px';
//     text = 'Please Enter Correct Subject';
//     error_message.innerHTML = text;
//     return false;
//   }
//   if (isNaN(phone) || phone.length != 10) {
//     error_message.style.padding = '10px';
//     text = 'Please Enter valid Phone Number';
//     error_message.innerHTML = text;
//     return false;
//   }
//   if (email.indexOf('@') == -1 || email.length < 6) {
//     error_message.style.padding = '10px';
//     text = 'Please Enter valid Email';
//     error_message.innerHTML = text;
//     return false;
//   }
//   if (message.length <= 14) {
//     error_message.style.padding = '10px';
//     text = 'Please Enter More Than 14 Characters';
//     error_message.innerHTML = text;
//     return false;
//   }

//   alert('Form Submitted Successfully!');
//   return true;
// };
// var form = document.querySelector('#myform');
// const isValidEmail = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const isValidPhone = (phone) => {
//   const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//   return re.test(String(phone).toLowerCase());
// };

var form = document.getElementById('myform');
form.addEventListener('submit', function (e) {
  alert('Thank you!!Form submitted sucessfully');
});

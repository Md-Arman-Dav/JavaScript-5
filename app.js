let words = document.querySelectorAll('.word');

words.forEach(word => {
  let letters = word.textContent.split('');
  word.textContent = '';
  letters.forEach(letter => {
    let span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter';
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = '1';

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = 'letter out';
    }, i * 80);
  });

  nextWord.style.opacity = '1';

  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = 'letter behind';
    setTimeout(() => {
      letter.className = 'letter in';
    }, 340 + i * 80);
  });

  setTimeout(() => {
    currentWord.style.opacity = '0';
  }, 340 + nextWord.children.length * 80);

  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// var mixer = mixityp('.portfolio-gallery');

document.addEventListener('DOMContentLoaded', function () {
  const togglePassword = document.getElementById('togglePassword');
  const passwordField = document.getElementById('password');
  const icon = togglePassword.querySelector('i');

  togglePassword.addEventListener('click', function () {
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      icon.classList.remove('bi-eye-slash');
      icon.classList.add('bi-eye');
    } else {
      passwordField.type = 'password';
      icon.classList.remove('bi-eye');
      icon.classList.add('bi-eye-slash');
    }
  });
});

var menul = mixitup('.portfolio-gallery');

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach(sec => sec.classList.remove('active'));
  menuLi[len].classList.add('active');
}
window.addEventListener('scroll', activeMenu);

//
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 50);
});
//

let menuIcone = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menuIcone.onclick = () => {
  menuIcone.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onclick = () => {
  menuIcone.classList.remove('bx-x');
  navlist.classList.remove('open');
};

//



function toggleFaq(header) {
  const faqBody = header.nextElementSibling; 
  faqBody.classList.toggle('show'); 

  const icon = header.querySelector('i');
  if (faqBody.classList.contains('show')) {
    icon.textContent = ''; 
  } else {
    icon.textContent = ''; 
  }
}

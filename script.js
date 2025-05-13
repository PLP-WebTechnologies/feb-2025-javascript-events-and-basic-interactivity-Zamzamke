// Tabs
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(c => c.classList.add('hidden'));
    document.getElementById(tab.dataset.target).classList.remove('hidden');
  });
});

// Button Events
const surpriseBtn = document.getElementById('surpriseBtn');
let colorToggle = false;

surpriseBtn.addEventListener('click', () => {
  surpriseBtn.textContent = colorToggle ? ' Surprise Me!' : ' You clicked me!';
  colorToggle = !colorToggle;
});

surpriseBtn.addEventListener('dblclick', () => {
  alert('Double-click detected!  Secret action unlocked!');
});

// Keypress Event
document.addEventListener('keypress', (e) => {
  if (e.key.toLowerCase() === 't') {
    alert('You pressed "T" for Travel! ');
  }
});

// Form Validation with Real-time Feedback
const form = document.getElementById('travelForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameFeedback = document.getElementById('nameFeedback');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

nameInput.addEventListener('input', () => {
  nameFeedback.textContent = nameInput.value.trim() === '' ? 'Name is required.' : '';
});

emailInput.addEventListener('input', () => {
  const valid = /^[^@]+@[^@]+\.[a-z]{2,}$/.test(emailInput.value);
  emailFeedback.textContent = valid ? '' : 'Enter a valid email.';
});

passwordInput.addEventListener('input', () => {
  passwordFeedback.textContent =
    passwordInput.value.length < 8 ? 'Password must be at least 8 characters.' : '';
});

form.addEventListener('submit', (e) => {
  if (
    nameInput.value.trim() === '' ||
    !/^[^@]+@[^@]+\.[a-z]{2,}$/.test(emailInput.value) ||
    passwordInput.value.length < 8
  ) {
    e.preventDefault();
    alert('Please fix the errors in the form.');
  }
});

function getDate() {
  const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

  const today = new Date();
  const dayName = days[today.getDay()];
  const dayNumber = today.getDate();
  const monthName = months[today.getMonth()];

  return `${dayName} ${dayNumber} ${monthName}`;
}


const dateDiv = document.querySelector('.date');
dateDiv.textContent = getDate();

const homePage = document.querySelector('#home-page');
const profilePage = document.querySelector('#profile-page');
const loadingPage = document.querySelector('#loading-page');

const closeProfileButton = document.querySelector('.close-profile-page');
const profileButton = document.querySelector('.profile');

profileButton.addEventListener('click', function() {
  profilePage.style.display = 'flex';
  homePage.style.display = 'none';
});

closeProfileButton.addEventListener('click', function() {
  profilePage.style.display = 'none';
  homePage.style.display = 'flex';
});



/* For iphone Home Screen */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(error => {
      console.log('Service Worker registration failed:', error);
    });
} 

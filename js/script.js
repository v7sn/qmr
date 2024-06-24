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



function addPoint(maxTime, event) {
  const taskElement = event.target.closest('.button-bar').parentElement;
  const taskTimeElement = taskElement.querySelector('.task-time');
  const progressBarElement = taskElement.querySelector('.progress-bar');

  let currentTime = parseInt(taskTimeElement.innerText.split(' / ')[0]);

  if (currentTime < maxTime) {
    currentTime += 1;
    taskTimeElement.innerText = `${currentTime} / ${maxTime}`;

    const progressPercentage = (currentTime / maxTime) * 100;
    progressBarElement.style.width = `${progressPercentage}%`;
  }

  if (currentTime === maxTime) {
    progressBarElement.style.borderRadius = "20px";

    const checkPoint = taskElement.querySelector('.add');
    checkPoint.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkPoint.style.color = "#fff";
  }
}

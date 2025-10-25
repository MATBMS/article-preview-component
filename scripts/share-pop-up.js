const shareBtn = document.querySelector('button');
const sharePopUp = document.querySelector('.card-profile-share-pop-up');

shareBtn.addEventListener('click', function () {
  sharePopUp.classList.toggle('hide');
});

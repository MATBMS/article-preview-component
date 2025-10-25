const shareBtn = document.querySelector('.card-profile-share');
const sharePopUp = document.querySelector('.card-profile-share-pop-up');

shareBtn.addEventListener('click', function () {
  shareBtn.classList.toggle('btn-active');
  sharePopUp.classList.toggle('hide');
});

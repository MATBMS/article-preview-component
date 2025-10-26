const shareBtn = document.querySelector('.card-profile-share');
const sharePopUp = document.querySelector('.card-profile-share-pop-up');

shareBtn.addEventListener('click', function () {
  shareBtn.classList.toggle('btn-active');
  sharePopUp.classList.toggle('hide');

  // Update aria-expanded attribute for accessibility
  const isExpanded = !sharePopUp.classList.contains('hide');
  shareBtn.setAttribute('aria-expanded', isExpanded);
});

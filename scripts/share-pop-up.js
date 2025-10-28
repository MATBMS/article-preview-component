// Interactivity
const shareBtn = document.querySelector('.card-profile-share');
const sharePopUp = document.querySelector('.card-profile-share-pop-up');

if (!shareBtn || !sharePopUp) {
  console.warn('Share component elements not found');
}

shareBtn.addEventListener('click', function () {
  shareBtn.classList.toggle('btn-active');
  sharePopUp.classList.toggle('hide');

  // Update aria-expanded attribute for accessibility
  const isExpanded = !sharePopUp.classList.contains('hide');
  shareBtn.setAttribute('aria-expanded', isExpanded);
});

// Accessiblity
// Add keyboard support for better UX
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !sharePopUp.classList.contains('hide')) {
    shareBtn.classList.remove('btn-active');
    sharePopUp.classList.add('hide');
    shareBtn.setAttribute('aria-expanded', false);
    shareBtn.focus(); // Return focus to trigger
  }
});

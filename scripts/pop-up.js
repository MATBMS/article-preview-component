const shareBtn = document.querySelector(".card-profile-share-icon");
const sharePopUp = document.querySelector("#card-profile-share-pop-up");

sharePopUp.toggleAttribute("hide");

shareBtn.addEventListener("click", function () {
  sharePopUp.toggleAttribute("hide");
});

const shareButton = document.querySelector('.share-button');
shareButton.addEventListener('click', () => {
  const popUp = document.querySelector('.share-pop-up');
  popUp.classList.toggle('activate-share-button');
});
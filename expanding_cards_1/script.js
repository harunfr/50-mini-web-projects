const backgroundImages = document.querySelectorAll(".img");

backgroundImages.forEach((image) => {
  const getRandomNum = () => Math.floor(Math.random() * 1100);
  image.style.backgroundImage = `url('https://source.unsplash.com/collection/11649432/${getRandomNum()}')`;
  image.addEventListener("click", expandImage);
});

function expandImage(e) {
  removeActiveClasses();
  e.target.classList.add("active");
}

function removeActiveClasses() {
  backgroundImages.forEach((image) => {
    image.classList.remove("active");
  });
};

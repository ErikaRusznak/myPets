// sound for the cat
const jinxSoundEl = document.querySelector(".btn.sound.ji");
const audioJinx = document.createElement("audio");
audioJinx.src = "sounds/jinx.mp3";
jinxSoundEl.addEventListener("click", () => {
  audioJinx.play();
});

// sound for the dog
const prettySoundEl = document.querySelector(".btn.sound.pr");
const audioPretty = document.createElement("audio");
audioPretty.src = "sounds/pretty.mp3";
prettySoundEl.addEventListener("click", () => {
  audioPretty.play();
});

// if u press j or k
window.addEventListener("keydown", (event) => {
  if (event.key == "j") {
    audioJinx.play();
    jinxSoundEl.style.transform = "scale(0.9)";
    setTimeout(() => {
      jinxSoundEl.style.transform = "scale(1)";
    }, 100);
  } else if (event.key == "p") {
    audioPretty.play();
    prettySoundEl.style.transform = "scale(0.9)";
    setTimeout(() => {
      prettySoundEl.style.transform = "scale(1)";
    }, 100);
  }
});

// to open and close the photos
const photosJinx = document.querySelector(".btn.photos.ji");
const photosPretty = document.querySelector(".btn.photos.pr");
const buttonsEl = document.querySelector(".buttons");
const headerEl = document.querySelector("h1");
const imageJinxEl = document.querySelector(".image-jinx");
const imagePrettyEl = document.querySelector(".image-pretty");
const closeIconEl = document.querySelector(".close-icon");

photosJinx.addEventListener("click", () => {
  imageJinxEl.classList.remove("active");
  buttonsEl.classList.add("active");
  headerEl.classList.add("active");
});

photosPretty.addEventListener("click", () => {
  imagePrettyEl.classList.remove("active");
  buttonsEl.classList.add("active");
  headerEl.classList.add("active");
});
closeIconEl.addEventListener("click", () => {
  imagePrettyEl.classList.add("active");
  imageJinxEl.classList.add("active");
  buttonsEl.classList.remove("active");
  headerEl.classList.remove("active");
});

const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgsJinxEl = document.querySelectorAll(".image-jinx img");
const imgsPrettyEl = document.querySelectorAll(".image-pretty img");
const imgsEl = document.querySelectorAll(".slider-container");
const imageJinxContainer = document.querySelector(".image-jinx");
const imagePrettyContainer = document.querySelector(".image-pretty");

// other photos for the cat

let currentImg = 1;

nextEl.addEventListener("click", () => {
  currentImg++;
  
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg < 1) {
    currentImg = imgsJinxEl.length;
  }

  if (currentImg > imgsJinxEl.length) {
    currentImg = 1;
  }
  imageJinxContainer.style.transform = `translateX(-${
    (currentImg - 1) * 535
  }px)`;
  imagePrettyContainer.style.transform = `translateX(-${
    (currentImg - 1) * 535
  }px)`;
}

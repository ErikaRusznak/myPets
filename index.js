// sunet pentru pisica
const jinxSoundEl = document.querySelector(".btn.sound.ji");
const audioJinx = document.createElement("audio");
audioJinx.src = "sounds/jinx.mp3";
jinxSoundEl.addEventListener("click", () => {
  audioJinx.play();
});

// sunet pentru caine
const prettySoundEl = document.querySelector(".btn.sound.pr");
const audioPretty = document.createElement("audio");
audioPretty.src = "sounds/pretty.mp3";
prettySoundEl.addEventListener("click", () => {
  audioPretty.play();
});

// daca apesi pe j sau pe p
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

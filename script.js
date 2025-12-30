const title = document.getElementById("title")
const wishScreen = document.getElementById("wishScreen")
const bgMusic = document.getElementById("bgMusic")

function openWish() {
  bgMusic.play()
  document.querySelector(".main").classList.add("hidden")
  wishScreen.classList.remove("hidden")
}

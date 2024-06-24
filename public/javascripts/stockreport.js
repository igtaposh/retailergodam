const closeBtn = document.querySelector(".close-btn");
const generateBtn = document.querySelector(".generate-btn");
const downloadSection = document.querySelector(".download-section");

generateBtn.onclick = () => {
    downloadSection.classList.remove("hidden");
}
closeBtn.onclick = () => {
    downloadSection.classList.add("hidden");
}
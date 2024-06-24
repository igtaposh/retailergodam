const back = document.getElementById('back-btn');
const navbar = document.getElementById('navbar');
const setting = document.getElementById('setting');
setting.addEventListener('click', () => {
    navbar.classList.remove('navbar');
});

back.addEventListener('click', () => {
    navbar.classList.add('navbar');
});

const optionSection = document.querySelector('.option-section');
const createBtn = document.querySelector('.create-btn');
const dshBtn = document.querySelector('.dashboad-btn');

createBtn.addEventListener('click', () => {
    createBtn.classList.toggle("bg-[#F1F1F1]");
    createBtn.classList.toggle("scale-90");
    createBtn.classList.toggle("hover:scale-95");
    createBtn.classList.toggle("opacity-80");
    dshBtn.classList.toggle("bg-[#F1F1F1]");
    dshBtn.classList.toggle("scale-90");
    dshBtn.classList.toggle("hover:scale-95");
    dshBtn.classList.toggle("opacity-80");
    optionSection.classList.toggle('hidden');

    dshBtn.addEventListener("click", () => {
        optionSection.classList.add('hidden');
        createBtn.classList.remove("bg-[#F1F1F1]");
        createBtn.classList.remove("scale-90");
        createBtn.classList.add("hover:scale-95");
        createBtn.classList.remove("opacity-80");
        dshBtn.classList.add("bg-[#F1F1F1]");
        dshBtn.classList.add("scale-90");
        dshBtn.classList.remove("hover:scale-95");
        dshBtn.classList.add("opacity-80");
    })
})




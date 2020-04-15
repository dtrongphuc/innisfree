
var showSearchBtn = document.querySelector('.header-navbar__search');
showSearchBtn.addEventListener('click', function() {
    let searchInput = document.querySelector('.header-navbar__search-show');
    if(searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "flex";
    } else {
        searchInput.style.display = "none";
    }
});

var languageOptions = document.querySelector('.header-navbar__language');
languageOptions.addEventListener('mouseover', function() {
    document.querySelector('.header-navbar__language-select').style.display = "block";
    document.querySelector('.select-down').classList.replace('fa-caret-down', 'fa-caret-up');
});

languageOptions.addEventListener('mouseout', function() {
    document.querySelector('.header-navbar__language-select').style.display = "none";
    document.querySelector('.select-down').classList.replace('fa-caret-up', 'fa-caret-down');
})

// welcome popup
languageOptions.addEventListener('click', function() {
    document.querySelector('.modal-container').classList.toggle('hidden');
    document.querySelector('.welcome-wrap').classList.toggle('hidden');
});

document.querySelector('.welcome-close-icon').addEventListener('click', function() {
    document.querySelector('.modal-container').classList.toggle('hidden');
    document.querySelector('.welcome-wrap').classList.toggle('hidden');
});


var slides = document.querySelectorAll('.slide');
var slideIndex;

function showSlides() {
    slides.forEach(slide => {
        slide.style.zIndex = -1;
        slide.style.opacity = 0;
    });
    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].style.zIndex = 999;
    slideIndex++;
    if(slideIndex === slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 6000);
}

showSlides(slideIndex = 0);
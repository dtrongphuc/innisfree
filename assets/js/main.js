var showSearchBtn = document.querySelector('.header-navbar__search');
showSearchBtn.addEventListener('click', function () {
    let searchInput = document.querySelector('.header-navbar__search-show');
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "flex";
    } else {
        searchInput.style.display = "none";
    }
});

var languageOptions = document.querySelector('.header-navbar__language');
languageOptions.addEventListener('mouseover', function () {
    document.querySelector('.header-navbar__language-select').style.display = "block";
    document.querySelector('.select-down').classList.replace('fa-caret-down', 'fa-caret-up');
});

languageOptions.addEventListener('mouseout', function () {
    document.querySelector('.header-navbar__language-select').style.display = "none";
    document.querySelector('.select-down').classList.replace('fa-caret-up', 'fa-caret-down');
})

// welcome popup
languageOptions.addEventListener('click', function () {
    document.querySelector('.modal-container').classList.toggle('hidden');
    document.querySelector('.welcome-wrap').classList.toggle('hidden');
});

document.querySelector('.welcome-close-icon').addEventListener('click', function () {
    document.querySelector('.modal-container').classList.toggle('hidden');
    document.querySelector('.welcome-wrap').classList.toggle('hidden');
});

var slides = document.querySelectorAll('.slide');
var slideIndex;
var timeoutId;

function showSlides() {
    slides.forEach(slide => {
        slide.style.zIndex = -1;
        slide.style.opacity = 0;
    });

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].querySelector('.loading-bar').classList.remove('loading-bar-animation');
    void slides[slideIndex].querySelector('.loading-bar').offsetWidth;
    slides[slideIndex].querySelector('.loading-bar').classList.add('loading-bar-animation');
    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].style.zIndex = 10;
    slideIndex++;
    timeoutId = setTimeout(showSlides, 6000);
}

document.querySelector('.slide-icon--left').addEventListener('click', function () {
    slideIndex = slideIndex - 2;
    clearTimeout(timeoutId);
    showSlides();
});

document.querySelector('.slide-icon--right').addEventListener('click', function () {
    clearTimeout(timeoutId);
    showSlides();
});



showSlides(slideIndex = 0);

var slideLink = document.querySelectorAll('.slide-link');

slideLink.forEach(Element => {
    Element.addEventListener('mouseover', function () {
        let slideIcon = document.querySelectorAll('.slide-icon');
        slideIcon.forEach(icon => {
            icon.style.opacity = 1;
        });
    });
});

slideLink.forEach(Element => {
    Element.addEventListener('mouseout', function () {
        let slideIcon = document.querySelectorAll('.slide-icon');
        slideIcon.forEach(icon => {
            icon.style.opacity = 0;
        });
    });
});

document.querySelectorAll('.slide-icon').forEach(icon => {
    icon.addEventListener('mouseover', function () {
        document.querySelectorAll('.slide-icon').forEach(icon => {
            icon.style.opacity = 1;
        });
    });
});
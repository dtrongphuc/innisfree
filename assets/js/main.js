
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
document.addEventListener('DOMContentLoaded', () => {
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

    var innistarListBg = [
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/93244090_226708491914223_436196715629151101_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=5nEAy9yjHI4AX-C6us9&oh=da9071917da47ade91fd1047b01fe4eb&oe=5EC11582',
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/93521084_2279788825657853_1669851788923943449_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=4zhEuqq2b18AX_RjJI0&oh=201d4757e411431fffc544a77e728dbe&oe=5EC22207',
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/92885897_598523020739272_8816635138965694160_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=HiSpmMh__qwAX_O_j86&oh=688d8ded822873dbdd758ce8d56447e1&oe=5EC263F5',
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/93803540_222029775530313_3380555312185870083_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=fe-SpkyWmbEAX_5WvMP&oh=8ccd719c3c188764a000eb4c2047bb1a&oe=5EBEC18A',
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/92562905_713045709433150_2612755459678033801_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=lnwp_pmmVgsAX-i9_-E&oh=d79a3ba92b2534741332d49cbbd639bd&oe=5EC159B3',
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/92566032_223971068822497_5702065511642632695_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=4oruk-rPcHYAX__osxH&oh=0bc67d2c2aecf67c6e7afe530b8a95ac&oe=5EC1B26C',
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/93565948_2630028240576547_7867685382297311923_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=_qTpkxUPmt4AX_ukX4E&oh=39fbaed4f9bf2e24a62aef1df7cf9aaf&oe=5EBEA22D',
        'https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/93039654_543121049676051_583681432376571124_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=gAJEB-34gzkAX9bw0Gs&oh=8d1fa05213921e4c82c5929f3edc3f21&oe=5EBFE3F6'
    ]

    function renderBg() {
        let starBgList = document.querySelectorAll('.innistar-bg');
        starBgList.forEach((item, index) => {
            item.style.backgroundImage = `url(${innistarListBg[index]})`;
        });
    }

    renderBg();

    var slickList = document.querySelector('.slick-track');
    var slickSlides = document.querySelectorAll('.slick-slide');
    var count = 1;
    var time = 10030;
    var size = slickSlides[0].offsetWidth + 50;
    var setTimeoutId;
    var intervalId;

    var hidden = "";
    var visibilityChange = "";

    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    function handleVisibilityChange() {
        if (document[hidden]) {
            clearTimeout(setTimeoutId);
            count--;
            // clearInterval(intervalId);
        } else {
            runInterval();
        }
    }

    document.addEventListener(visibilityChange, handleVisibilityChange, false);


    runInterval();

    function runInterval() {
        // intervalId = setInterval(() => {
        //     slickList.style.transition = "transform linear 500ms";
        //     slickList.style.transform = `translate3d(${-size*(++count)}px, 0, 0)`;
        // }, time);
        slickSlides[count-1].classList.remove('slide-active');
        slickList.style.transition = "transform linear 10000ms";
        slickList.style.transform = `translate3d(${-size*(++count)}px, 0, 0)`;
        slickSlides[count-1].classList.add('slide-active');
        setTimeoutId = setTimeout(runInterval, time);
        // intervalId = setInterval(runInterval, time);
    }


    slickList.addEventListener('transitionend', () => {
        let nameId = slickSlides[count].id;
        console.log(nameId);
        if (nameId === 'firstClone') {
            slickList.style.transition = "none";
            count = 1;
            slickList.style.transform = `translateX(${-size*count}px)`;
        }
    });


    var productItemWidth = document.querySelector('.left-product-item').offsetWidth;
    var productItemImg = document.querySelectorAll('.left-product-item__img');
    function setMarginItemImg() {
        for(item of productItemImg) {
            item.style.marginTop = `-${ (productItemWidth/2) + 40 }px`;
        }
    }
    setMarginItemImg();

}, false);
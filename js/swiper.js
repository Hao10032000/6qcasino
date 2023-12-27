
var sliderinit = function () {

    // basic options for all sliders
    let defaults = {
        spaceBetween: 0,
        slidesPerView: 1
    };
    // call init function
    initSwipers(defaults);
    function initSwipers(defaults = {}, selector = ".swiper-container") {
        let swipers = document.querySelectorAll(selector);
        swipers.forEach((swiper) => {
            // get options
            let optionsData = swiper.dataset.swiper
                ? JSON.parse(swiper.dataset.swiper)
                : {};
            // combine defaults and custom options
            let options = {
                ...defaults,
                ...optionsData
            };
            // init
            new Swiper(swiper, options);
        });
    }
}
var swiper = new Swiper(".partner", {
    slidesPerView: "auto",
    spaceBetween: 50,
    observer: true,
    observeParents: true,
    loop: true,
    autoplay: true,
    "breakpoints": {
        "768": {
            "slidesPerView": 2
        },
        "1200": {
            "slidesPerView": 5
        },
        "1440": {
            "slidesPerView": 7
        }
    },
});
sliderinit();

/**
 * Accordion page contact
 */
var acc = document.getElementsByClassName("faq-page__accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("faq-page__active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

/**
 * to up
 */
var btn = $('#to-up');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

/*
    Owl-carousel trusted by
*/

$('.carousel-trusted .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1440: {
            items: 7
        }
    }
});

/*
    Owl-carousel partners say about us
*/
$('.partners-say .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1440: {
            items: 1
        }
    }
});

/*
    wow js
*/
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: false,
    live: true
})
wow.init();

/*
    menu responsive
*/
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('header__active');
        //$('body').toggleClass('lock');
    });
});

/**
 *  Tabs Home
 */
$('.payment-experience__tab-list').each(function() {
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function(e) {
        e.preventDefault();
        var $link = $(this),
            id = this.hash;

        if (id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    });
});

/**
 * Feedback owl-carousel 
 */
document.addEventListener("DOMContentLoaded", () => {
    $('.js-rewievs').slick({
        arrows: false,
        infinite: true,
        dots: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        // touchMove: false,
        // slidesToShow: 1,
        // slidesToScroll: 1
    });
});

/**
 * POS Team owl-carousel 
 */
$('.pos-team .owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        460: {
            items: 1,
        },
        768: {
            items: 3,
        },
        1440: {
            items: 5,
        }
    }
});

/**
 * Go live owl-carousel 
 */
$('.go-live .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: 180,
    autoplay: true,
    responsive: {
        0: {
            items: 1.5,
        },
        460: {
            items: 1.5,
        },
        768: {
            items: 2.5,
        },
        1440: {
            items: 2.5,
        }
    }
});
/**
 * Tabs How It Works
 */
const tabsBtn = document.querySelectorAll('.toggleable-description');
const tabsItems = document.querySelectorAll('.description-content');

tabsBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});


document.querySelector('.toggleable-description').click();

/**
 * Tabs Faster Check-Ins
 */

/*Click events*/
const stepTitle = document.querySelectorAll(".tabs__nav-btn");
const stepText = document.querySelectorAll(".tabs__item");

stepTitle.forEach(function(item) {
    item.addEventListener("click", function(e) {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        const idx = +tabId.slice(tabId.length - 1) - 1

        document.querySelectorAll('.faster-check-ins__column-picture').forEach(function(item) {
            item.classList.remove('active');
        });

        document.querySelectorAll('.faster-check-ins__column-picture')[idx].classList.add('active');

        if (!currentBtn.classList.contains('active')) {
            stepTitle.forEach(function(item) {
                item.classList.remove('active');
            });

            stepText.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

document.querySelector('.tabs__nav-btn').click();

// scroll tabs
var controller = new ScrollMagic.Controller()
var scene = new ScrollMagic.Scene({ triggerElement: '.scroll-tabs-wrapper', duration: 1000, offset: window.innerHeight / 2 })
    .setPin('.scroll-tabs-wrapper')
    .addTo(controller);

scene.on('progress', function(event) {
    var progress = +event.progress * 130;

    if (progress >= 0 && progress < 29.99) {
        document.querySelectorAll('.tabs__nav-btn')[0].click();
    } else if (progress >= 30 && progress < 59.99) {
        document.querySelectorAll('.tabs__nav-btn')[1].click();
    } else if (progress >= 60 && progress < 99.99) {
        document.querySelectorAll('.tabs__nav-btn')[2].click();
    } else if (progress >= 100 && progress < 129.99) {
        document.querySelectorAll('.tabs__nav-btn')[3].click();
    } else if (progress >= 130) {
        document.querySelectorAll('.tabs__nav-btn')[4].click();
    }
});


/**
 * Integrates with your POS View More Btn
 */
const parentContainer = document.querySelector('.integrates-with-pos__logos');
parentContainer.addEventListener('click', event => {

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if (!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('View More') ? "View More" : "Hide Logos";
})
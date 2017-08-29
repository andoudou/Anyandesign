"use strict";

var startYPos = 0;
var endYPos = 0;

$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: true,
        navigation: false,
        navigationPosition: 'top',
        navigationTooltips: ['', ''],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 500,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: true,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: null,
        scrollOverflowOptions: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });

    $('.fullpage-scroll_projects').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    /**
     * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
     * this way we make sure that is really a touch event what IE is detecting.
     */
    var isReallyTouch = function(e) {
        //if is not IE   ||  IE is detecting `touch` or `pen`
        return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
    }

    $('#wrap').on('touchstart', function(e) {
        if (!isReallyTouch(e)) {
            return;
        }
        startYPos = e.originalEvent.touches[0].pageY;
    })

    $('#wrap').on('touchmove', function(e) {
        if (!isReallyTouch(e)) {
            return;
        }
        endYPos = e.originalEvent.touches[0].pageY;

        if (Math.abs(startYPos - endYPos) > ($(window).height() / 100 * 15)) {
            if (startYPos > endYPos) {
                console.log("fired");
                $.fn.fullpage.moveSectionDown();
            }
        }
    })

    $('#ground').on('touchstart', function(e) {
        if (!isReallyTouch(e)) {
            return;
        }
        startYPos = e.originalEvent.touches[0].pageY;
    })

    $('#ground').on('touchmove', function(e) {
        if (!isReallyTouch(e)) {
            return;
        }
        endYPos = e.originalEvent.touches[0].pageY;

        if (Math.abs(startYPos - endYPos) > ($(window).height() / 100 * 15)) {
            if (startYPos < endYPos) {
                console.log("fired");
                $.fn.fullpage.moveSectionUp();
            }
        }
    })
});
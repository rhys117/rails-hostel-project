// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require popper
//= require bootstrap
//= require_tree .

// Smooth scroll to section
$(document).on('click', 'a[href^="#"]', function(e) {
    // hide mobile nav
    $('.navbar-toggler').click()
    // target element id
    var id = $(this).attr('href');
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    // top position relative to the document
    var pos = $id.offset().top - 70;
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

// Parallax scrolling
$(document).ready(function(){
  var $window = $(window);
  galleryBreakWidth();

  $('[data-type="parallax"]').each(function(){
    var $bgobj = $(this); // assigning the object
    $(window).scroll(function() {
    var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
    // Put together our final background position
    var coords = '0% '+ yPos + 'px';
    // Move the background
    $bgobj.css({ backgroundPosition: coords });
    });
  });
});

$(window).resize(galleryBreakWidth);

function galleryBreakWidth() {
  console.log($('#gallery-break').width())
  width = $('#gallery-break').width()
  $('#gallery-break').css("height",width * 0.5);
}
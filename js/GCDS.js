console.log('jQuery is working woohoo!');

(function ($) {
    $(function () {
        $('nav ul li > a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation()
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
        $('#nav-toggle').on('click', function () {
           this.classList.toggle('active') 
        });
        $('#nav-toggle').click(function () {
            $('nav ul').toggle()
        });
    })
})(jQuery);
window.onscroll = function() {scrollFunction()};

$(document).ready(function() {
  autospace();
});
var resizeTimer;

$(window).on("resize", function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    autospace();
  }, 250);
});

function autospace() {
  var minDivWidth = 480;
  var largestHeight = 0;

  $('div[class*="autospace-container"]').each(function() {
    var fullClassName = $(this).attr("class");

    //Initial Spacing Start
    var numberOfDivs = $(".autospace-div", this).length;
    var divWidth = 100 / numberOfDivs - 2;
    $(".autospace-div", this).css("width", divWidth + "%");

    if (fullClassName.indexOf("breakwidth_") !== -1) {
      var newMinDivWidth = fullClassName.split("breakwidth_")[1] * 1;
      minDivWidth = newMinDivWidth;
    }
    //Initial Spacing End

    //Responsive Start
    var divWidthNow = $(".autospace-div", this).outerWidth();
    if (divWidthNow < minDivWidth) {
      for (var i = 1; i < numberOfDivs; i++) {
        var containerWidth = $(this).width();
        var divWidthPixel = containerWidth / i;
        if (divWidthPixel < minDivWidth) {
          var divWidth = divWidthPixel / containerWidth * 100 - 2;
          $(".autospace-div", this).css("width", divWidth + "%");
          break;
        }
      }
    }
    //Responsive End

    //Equal Height Start
    if (fullClassName.indexOf("equalheight") !== -1) {
      $(".autospace-div", this).css("height", "auto");
      $(".autospace-div", this).each(function() {
        if ($(this).outerHeight() > largestHeight) {
          largestHeight = $(this).outerHeight();
        }
      });
      $(".autospace-div", this).css("height", largestHeight + "px");
      largestHeight = 0;
    }
    //Equal Heigt End
  }); //For Each Container End
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
   images[i].onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
       modalImg.alt = this.alt;
       captionText.textContent = this.nextElementSibling.textContent;
   }
}

$(document).ready(function () {
    // append an img tag with our picture of Ryu
    // url: http://i.imgur.com/90Mmdcm.png
    $('body').css({'background-image': 'url(http://wallpapercave.com/wp/TN4A0l8.jpg)', 'background-repeat': 'no-repeat', 'position': 'absolute', 'bottom':'100px' });

    $('body').append('<img src="http://i.imgur.com/90Mmdcm.png" class="person"/>');
    $('<img class="enemy" src="http://cdn.wikimg.net/strategywiki/images/c/c3/SFA3_Zangief.gif">').appendTo('body')

    $('.enemy').css('position', 'absolute');
    $('.enemy').css({'left': '1000px', 'width':'200px' });


    // change the img src on hover to the animated gif of Ryu
    // url: http://i.imgur.com/nTj3Fxx.gif
    // when the user 'unhovers' change back to static Ryu
    $('.person').hover(function () {
      $(this).attr('src', 'http://i.imgur.com/nTj3Fxx.gif');
    },
    function () {
      $(this).attr('src', 'http://i.imgur.com/90Mmdcm.png');
      $('.ball').remove();
    }
    );

    // when a user clicks, change Ryu's stance
    // url: http://i.imgur.com/Rfj0a80.png
    $('.person').click(function () {
      $(this).attr('src', 'http://i.imgur.com/Rfj0a80.png');
      $('body').append('<img src="http://i.imgur.com/oTyQRvX.gif" class="ball">');
      $('.ball').css('position', 'absolute');
      $('.ball').css('top', '70px');
      $('.ball').animate({ left: '80vw' }, 900, function () {
        $(this).attr('src', 'http://clipartix.com/wp-content/uploads/2016/06/Explosion-clip-art-free-free-clipart-images-5.jpg')
        $(this).css({ 'height':'80px', 'width':'80px' });
        $(this).fadeOut(100);
      });
    });

    $('.enemy').click(function () {
      $('body').append('<img src="plane.png" style="height:60px" class="airplane">');
      $('.airplane').css('position', 'absolute');
      $('.airplane').css('left', '1000px');
      $('.airplane').animate({ left: '-50vw' }, 750);
      $('.airplane').fadeOut(100);
    });

    // add the Hadouken!
    // url: http://i.imgur.com/oTyQRvX.gif

    // animate that Hadouken

    // let Ryu relax
    // url: http://i.imgur.com/90Mmdcm.png

  });



var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  /*$(".active").removeClass("active");
  $(this).closest('li').addClass("active");*/

  /*var theClass = $(this).attr("class");
  $('.'+theClass).parent('li').addClass('active');*/

  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight+10;
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   if (lastId !== id) {
     $(lastId).parent('li').removeClass('active');
       lastId = id;
       // Set/remove active class
       menuItems
        .parent('li').removeClass("active")
        .end().filter("a[href="+"'#"+id+"']").parent('li').addClass("active");
   }
});



$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


//dgdhgd

/*function scrollNav() {
  $('.nav a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 600);
    return false;
  });
  $('.scrollTop a').scrollTop();
}

scrollNav();*/

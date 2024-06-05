  $(document).ready(function(){
    $('.modal').hide()
  })

  $(document).ready(function(){
    $('.modalbtn').click(function(){
      $('.modal').show();
      event.stopPropagation();
    })
    $(document).click(function(){
      $('.modal').hide();
    })
  })

  

  $(document).ready(function(){
    $('.slide :not(:first-child)').animate({left: '100%'},0)
  })

  let aindex = 0
    setInterval(function(){
      $('.slide>div').eq(aindex)
      .animate({left: '-100%'},1000)
      .animate({left: '100%'},0)
        aindex == 2 ? (aindex = 0) : aindex ++;
      $('.slide>div').eq(aindex).animate({left: '0%'},1000)
    },3000)

    $(".menulist>ul>li>ul").hide();

    $(document).ready(function(){
      $(".menulist").mouseover(function(){
        $(".menulist>ul>li>ul").show(800);
      })
      $(".menulist").mouseleave(function(){
        $(".menulist>ul>li>ul").hide(800);
      })
    })
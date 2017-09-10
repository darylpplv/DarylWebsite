function include(url){document.write('<script type="text/javascript" src="'+url+'"></script>')}

//------ base included scripts -------//
include('../../static.livedemo00.template-help.com/wt_50778/js/jquery.easing.js');
include('../../static.livedemo00.template-help.com/wt_50778/js/jquery.mousewheel.min.js');
include('../../static.livedemo00.template-help.com/wt_50778/js/jquery-ui-1.10.3.custom.min.js');
include('../../static.livedemo00.template-help.com/wt_50778/js/jquery.ui.touch-punch.js');
include('../../static.livedemo00.template-help.com/wt_50778/js/jquery.touchSwipe.min.js');
include("../../static.livedemo00.template-help.com/wt_50778/js/jquery-migrate-1.1.1.js");
include('../../static.livedemo00.template-help.com/wt_50778/js/klass.min.js');

include("../../static.livedemo00.template-help.com/wt_50778/js/owl.carousel.js");
 include('../../static.livedemo00.template-help.com/wt_50778/js/spin.min.js'); 
include('../../static.livedemo00.template-help.com/wt_50778/js/tmMultimediaGallery.js');
   
// include('js/camera.js');

include('../../static.livedemo00.template-help.com/wt_50778/js/jquery.equalheights.js');

//include('js/sForm.js');
 /*
 <!--[if (gt IE 9)|!(IE)]><!-->
     include('js/jquery.mobile.customized.min.js');
     <!--<![endif]-->
     */

//include('js/jquery.equalheights.js');

if(!FJSCore.mobile && !FJSCore.tablet){
    include('../../static.livedemo00.template-help.com/wt_50778/js/jquery.superscrollorama.js');
}

if(!FJSCore.mobile){
   
    include('../../static.livedemo00.template-help.com/wt_50778/js/hoverIntent.js');
    include('../../static.livedemo00.template-help.com/wt_50778/js/superfish.js');
    include('../../static.livedemo00.template-help.com/wt_50778/js/greensock/TweenMax.min.js');   
    include("../../static.livedemo00.template-help.com/wt_50778/js/jquery.ui.totop.js");
     //include('js/TMgalleryPrototype.js');
} else{

}
//------------------------------------//
var win = $(window),
    doc = $(document),
    previousState = currentState = '',
    defLocation,
    msie = (navigator.appVersion.indexOf("MSIE")!==-1);
    currIndex = 0,
    showGallery = false;



function spinnerInit(){    
    var opts = {
        lines: 11,
        length: 10,
        width: 5,
        radius: 14, 
        corners: 1,
        color: '#fff',
        speed: 1.3,
        trail: 5
    },
    spinner = new Spinner(opts).spin($('#webSiteLoader')[0]);
}

function spinnerInitGallery(){
    var opts = {
        lines: 11,
        length: 10,
        width: 5,
        radius: 14, 
        corners: 1,
        color: '#fff',
        speed: 1.3,
        trail: 5
    }
    $('.imgSpinner').each(function(){
        var spinner = new Spinner(opts).spin($(this)[0]);
    })
}

function initCarousel (){
    var $owl = $("#owl1");
    $owl.owlCarousel({
        items : 4, //5 items above 1000px browser width
        itemsDesktop : [1220,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [670, 2], // betweem 900px and 601px
        itemsTablet: [500, 2], //2 items between 600 and 0
        itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
        navigation : true,
        pagination :  false
    });
}
function initCarousel_2 (){
    var $owl = $("#owl2");
    $owl.owlCarousel({
        items : 4, //5 items above 1000px browser width
        itemsDesktop : [1220,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [670, 2], // betweem 900px and 601px
        itemsTablet: [500, 2], //2 items between 600 and 0
        itemsMobile : [479, 1], // itemsMobile disabled - inherit from itemsTablet option
        navigation : true,
        pagination :  false
    });
}

function initPlugins(){
   (!FJSCore.mobile && previousState && (FJSCore.state != previousState))&&($('.historyBack').attr('href','./'+previousState));

    if(!FJSCore.mobile){
      $().UItoTop({ easingType: 'easeOutQuart'});
  }



    


    // if(!FJSCore.mobile){

        $(".galleryHolder").tmMultimediaGallery({
            startIndex: 0,
            showOnInit: showGallery,
            container: '.galleryContainer',
            imageHolder: '.imageHolder', // imageHolder selector
            pagination: '.inner', // pagination selector
            description: '.galleryDiscription', // discription selector
            next: '.nextButton', // next button selector
            prev: '.prevButton', // prev button selector
            spinner: '.imgSpinner', // prev button selector
            autoPlayState: false,
            paginationDisplay: true,
            controlDisplay: true,
            autoPlayTime: 12,
            alignIMG: 'center',
            mobile: false,
            onShowActions: function(){
                // $(".inner a", this).eq(currIndex-1).trigger('click');
                 $("#other_pages").css('zIndex', 9999);
            },
            onHideActions: function(){
                 // $("#content").css('zIndex', -1);            
            }
        })

        $('.closeIconGallery').on('click', function(){
            $(".galleryHolder").trigger('hideGallery');
            $("#other_pages").css('zIndex', 0);            

        })

        // .trigger('showGallery');
        spinnerInitGallery();
        
        setTimeout(function () { win.trigger('resize'); }, 500);

        spinnerInit();
    // }
    //},300)
    
    // photoswipe
    // var phSwipe = $(".gall > div > a")
    // phSwipe.length && phSwipe.photoSwipe();

    // height_handler();

}

function scrolloramaInit(){
    if(!FJSCore.mobile && !FJSCore.tablet){
    var controller = $.superscrollorama();

    controller
        // page 1
        .addTween('#page1 .p1', TweenMax.from( $('#page1 .p1'), 0.8, {delay: 0.4, css:{opacity: 0, scale: 0.2, rotation: 90, marginTop: -200}, ease: Expo.easeOut}))
        .addTween('#page1 .p2', TweenMax.from( $('#page1 .p2'), 1.7, {delay: 1.3, css:{left: '-50%', opacity: 0}, ease: Cubic.easeOut}),0 , -100)
        .addTween('#page1 .p3', TweenMax.from( $('#page1 .p3'), 1.7, {delay: 1.3, css:{right: '-50%', opacity: 0}, ease: Cubic.easeOut}),0 , -200)
        .addTween('#page1 .s_p', TweenMax.from( $('#page1 .s_p'), 1.7, {delay: 1.3, css:{left: '-50%', opacity: 0}, ease: Cubic.easeOut}),0 , -250)
        .addTween('header', TweenMax.from( $('header'), .5, {delay: 0.8, css:{top: -100}, ease: Cubic.easeOut}))
         .addTween('.slogan_block_1', TweenMax.from( $('.slogan_block_1'), .5, {delay: 0.8, css:{opacity: 0, scale: 0.2}, ease: Cubic.easeOut}),0 , -250)

        // page 2
         .addTween('#page2 #owl1 .item', TweenMax.from( $('#page2 #owl1 .item'), 1.7, {delay: 1.3, css:{left: '-50%', opacity: 0}, ease: Cubic.easeOut}),0 , -250)
       //.addTween('#page2 #owl1 .item', TweenMax.from( $('#page2 #owl1 .item'), 1.0, {delay: 1.4, css:{bottom: -50px, opacity: 0, rotation:  0}, ease: Cubic.easeOut}), 0 ,300)
        .addTween('#page2 h2', TweenMax.from( $('#page2 h2'), 1.7, {delay: 0.2, css:{left: -1000, opacity: 0}, ease: Cubic.easeOut}),0)
        
        // page 3
        .addTween('#page3 h2', TweenMax.from( $('#page3 h2'), .7, {delay: 0.6, css:{right: '-50%', opacity: 0}, ease: Cubic.easeOut}), -250)
        .addTween('#page3 .p3_pic1', TweenMax.from( $('#page3 .p3_pic1'), 0.7, {delay: 0.1, css:{right: '-100%', opacity: 0 ,scale: 0.2, rotation: 90}, ease: Cubic.easeOut}),0 ,-300)
        .addTween('#page3 .p3_pic2', TweenMax.from( $('#page3 .p3_pic2'), 0.8, {delay: 0.1, css:{left: '-100%', opacity: 0 ,scale: 0.2, rotation: 90}, ease: Cubic.easeOut}),0 ,-250)
        .addTween('#page3 .p3_pic3', TweenMax.from( $('#page3 .p3_pic3'), 0.5, {delay: 0.1, css:{right: '-100%', opacity: 0 ,scale: 0.2, rotation: 90}, ease: Cubic.easeOut}),0 ,-250)
         .addTween('#page3 .p3_pic4', TweenMax.from( $('#page3 .p3_pic4'), 0.1, {delay: 0.1, css:{left: '-100%', opacity: 0 ,scale: 0.2, rotation: 90}, ease: Cubic.easeOut}),0 ,-250)
        .addTween('#page3 .p3_pic5', TweenMax.from( $('#page3 .p3_pic5'), 0.7, {delay: 0.1, css:{right: '-100%', opacity: 0 ,scale: 0.2, rotation: 90}, ease: Cubic.easeOut}),0 ,-250)
         .addTween('#page3 .p3_pic6', TweenMax.from( $('#page3 .p3_pic6'), .7, {delay: 0.1, css:{left: '-100%', opacity: 0 ,scale: 0.2, rotation: 90}, ease: Cubic.easeOut}),0 ,-250)
         .addTween('#page3 .p3_pic7', TweenMax.from( $('#page3 .p3_pic7'), 0.7, {delay: 0.1, css:{right: '-100%', opacity: 0 ,scale: 0.2, rotation: 90}, ease: Cubic.easeOut}),0 ,-250)
        .addTween('#page3 p', TweenMax.from( $('#page3 p'), .7, {delay: 0.4, css:{bottom: '-100px', opacity: 0}, ease: Cubic.easeOut}),0 ,-250)

        // page 4
         .addTween('#page4 h2', TweenMax.from( $('#page4 h2'), .7, {delay: 0.6, css:{left: '-50%', opacity: 0}, ease: Cubic.easeOut}), -350)
        .addTween('#page4 .list_1', TweenMax.from( $('#page4 .list_1'), .7, {delay: 1.4, css:{right: '-100%', opacity: 0 ,scale: 0.2}, ease: Cubic.easeOut}),0 ,-200)
        .addTween('#page4 .tab_resize', TweenMax.from( $('#page4 .tab_resize'), .7, {delay: 1.3, css:{scale: 0.2, opacity: 0}, ease: Cubic.easeOut}),0 , -500)
        //.addTween('#page4 .news .txt_anim', TweenMax.from( $('#page4 .news .txt_anim'), .7, {delay: 0.9, css:{left: '-50%', opacity: 0}, ease: Cubic.easeOut}),0 , -150)
        //.addTween('#page4 .news .btn', TweenMax.from( $('#page4 .news .btn'), 1.2, {delay: 1.1, css:{left: '-50%', opacity: '-50%'}, ease: Cubic.easeOut}),0 , -300)

        // page 5
        .addTween('#page5 .p5_pic1', TweenMax.from( $('#page5 .p5_pic1'), .7, {delay: 0.4, css:{right: '-100%', opacity: 0 ,scale: 0.2}, ease: Cubic.easeOut}),0 ,-300)
        .addTween('#page5 h2', TweenMax.from( $('#page5 h2'), .7, {delay: 0.6, css:{left: '-50%', opacity: 0}, ease: Cubic.easeOut}),0 , -300)
        .addTween('#page5 p', TweenMax.from( $('#page5 p'), .7, {delay: 0.6, css:{right: '-50%', opacity: 0}, ease: Cubic.easeOut}),0 , -300)
        .addTween('#page5 .list_2', TweenMax.from( $('#page5 .list_2'), .7, {delay: 0.6, css:{right: '-50%', opacity: 0}, ease: Cubic.easeOut}),0 , -300)

        .addTween('#page6', TweenMax.from( $('#page6'), .7, {delay: 0.6, css:{bottom: '-200', opacity: 0}, ease: Cubic.easeOut}),0 , -300)
       
}
}       


$(document).on('changeLocation',function (e){
    previousState = currentState;
    currentState = history.state;

})

$(document).on('changeState',function (e){
 //   console.log(previousState);
 //   console.log(currentState);

    // if(currentState == "gallery.html"){
    //     $(FJSCore).trigger('changeState','gallery')
    // }
    
    //((previousState === currentState) && (currentState === 'gallery.html')) && (showGallery = true);
})

$(function(){
    $("#year").text((new Date).getFullYear());
    $("#year1").text((new Date).getFullYear());

    previousState = currentState = history.state;

    /*var doMenuHide = false;*/

    $('#mainNav>ul>li>a').each(function(){
        var $this = $(this),
            txt = $this.text();
        $this.html('<div><span>'+ txt +'</span></div><div><span>'+ txt +'</span></div>');
    })


    initPlugins();
    
    if(FJSCore.mobile){
        $('body').css({'min-width':'inherit'});   

       // $('#mobile-navigation > option').eq(2).remove();

        $(document)
        .on('show','#mobile-content>*', function(e,d){    
            initPlugins(); 
            $('.galleryHolder').trigger('showGallery');
            $(".folioList > li").click( function(){
            var instance = Code.photoSwipe('.photoSwipe1 a', this);
            Code.PhotoSwipe.Current.show(0);                   
                    }
                )              
        })      
        .on('hide','#mobile-content>*',function(e,d){
        })
    } else {
        $('#mainNav').superfish({
            animation:     {height:'show'},
            animationOut:  {height:'hide'},
            delay: 500
        });

        spinnerInit();
        scrolloramaInit();
    }
    
    var otherPageContainer = $('#other_pages'),
        $selector = !msie ? $('body'): $('html');
    otherPageContainer
        .on('show','>*',function(e,d){
            $.when(d.elements)
                .then(function(){

/*
                    $('.galleryHolder', d.curr)
                        .trigger('showGallery')
                        */
                        
                        // .trigger('goTo', [currIndex.toString(), 'quick'])
                    
                    // d.curr.find('.inner a').eq(currIndex-1).click();

                    $('a[href="./'+ FJSCore.state +'"]').parents('.item').trigger('click');

                    $('#category_pages .closeBtn').addClass('fa fa-times');

                    if(!d.curr.hasClass('_active')){
                        d.curr                      
                            .stop()
                            .css({
                                display:'block'
                            ,   opacity:0
                            })
                            .animate({
                                opacity:1
                            },{
                                duration:200
                                ,complete:function(){
                                    d.curr.addClass('_active');
                                    win.trigger('resize');
                                }
                            })
                    }

                    initPlugins();
                    $('.galleryHolder').trigger('showGallery');

                     $('body').addClass('show-sub-pages');

                    d.curr
                        .addClass('activeSubPage')             
                        .stop(true, true)
                        .css({display:'block', top:-$(window).outerHeight()})
                        .animate({
                            top:0
                        },{
                            duration:800,
                            ease: 'easeOutExpo',
                            complete:function(){
                                FJSCore.modules.longScroller.blockScrollCalc = true;
                                $selector
                                    .css({'overflow':'hidden','-webkit-overflow-scrolling':'none'});
                                $('body')
                                    .trigger('resizeContent');                            
                            }
                        })
                })          
        })
        .on('hide','>*',function(e,d){
            FJSCore.modules.longScroller.blockScrollCalc = false;
            $(this)
                .removeClass('activeSubPage')
                .stop(true, true)
                .animate({
                    top: -$(window).outerHeight()
                },{
                    duration:800,
                    ease: 'easeInExpo',
                    complete:function(){
                        $(this).css({display:'none'});
                        $selector
                            .css({'overflow':'visible', '-webkit-overflow-scrolling':'touch'});
                        $('body').removeClass('show-sub-pages');
                        $('body')
                            .trigger('resizeContent');           
                    }
                })
        })	

   
})
/*---------------------- end ready -------------------------------*/

win
// .on('resize', onResize)
// .on('orientationchange', onResize)
.load(function(){

     if(!FJSCore.mobile){
       // $('#owl1 .item .box').TMgalleryPrototype({destination:$('body')});
     }

    initCarousel();
    initCarousel_2();

    $("#webSiteLoader").fadeOut(500, 0, function(){
        $(this).remove();
        win
            .trigger('resize')
            .trigger('scroll')
            .trigger('afterload');

        $('body').trigger('resizeContent');       
    }); 

    FJSCore.modules.responsiveContainer({
        elementsSelector: '#other_pages>div',
        affectSelectors: '',
        type: 'inner',
        defStates: ',about,contacts,members'
    });

    win
        .trigger('resize');
    
    if(FJSCore.mobile){
        //----- mobile scripts ------//
        $('#mobile-header>*').wrapAll('<div class="container"></div>');
        $('#mobile-footer>*').wrapAll('<div class="container"></div>');
    }
});

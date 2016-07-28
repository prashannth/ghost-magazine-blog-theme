(function ($) {
    "use strict"; // use strict to start
    var rambleApp = {
        /* ---------------------------------------------
         Preloader
         --------------------------------------------- */
        preloader: function () {
            $(window).on('load', function () {
                $("body").imagesLoaded(function () {
                    $('.preloader').delay(500).slideUp('slow', function () {
                        $(this).remove();
                    });
                });
            });
        },
        /* ---------------------------------------------
         Value To Placeholder
         --------------------------------------------- */
        placeholder: function () {
            var $ph = $('input[type="search"], input[type="text"], input[type="email"], textarea');
            $ph.each(function () {
                var value = $(this).val();
                $(this).focus(function () {
                    if ($(this).val() === value) {
                        $(this).val('');
                    }
                });
                $(this).blur(function () {
                    if ($(this).val() === '') {
                        $(this).val(value);
                    }
                });
            });
        },
        /* ---------------------------------------------
         Menu
         --------------------------------------------- */
        menu: function () {
            var combinedmenu = $('#main-nav ul.menu-list').clone();
            combinedmenu.appendTo('#mobile-menu #menu-wrap');

            var items = $('.menucontent.overlaybg, .slideLeft'),
                menucontent = $('.menucontent'),
                submenu = $('.menu-list li').has('.menu-submenu'),
                submegamenu = $('.menu-list li').has('.megamenu'),
                menuopen = function () {
                    $(items).removeClass('menuclose').addClass('menuopen');
                },
                menuclose = function () {
                    $(items).removeClass('menuopen').addClass('menuclose');
                };
            $('#navToggle').on('click', function () {
                if (menucontent.hasClass('menuopen')) {
                    $(menuclose);
                } else {
                    $(menuopen);
                }
            });
            menucontent.on('click', function () {
                if (menucontent.hasClass('menuopen')) {
                    $(menuclose);
                }
            });
            $('#navToggle,.menucontent.overlaybg').on('click', function () {
                $('.menucontainer').toggleClass("mrginleft");
            });
            if (submenu) {
                $('.menu-submenu').prev().append('<span class="fa fa-angle-down"></span>');
            }
            if (submegamenu) {
                $('.megamenu').prev().append('<span class="fa fa-angle-down"></span>');
            }
            submenu.prepend('<span class="menu-click"><i class="menu-arrow fa fa-plus"></i></span>');
            $('.menu-mobile').on('click', function () {
                $('.menu-list').slideToggle('slow');
            });
            $('.menu-click').on('click', function () {
                $(this).siblings('.menu-submenu').slideToggle('slow');
                $(this).siblings('.megamenu').slideToggle('slow');
                $(this).children('.menu-arrow').toggleClass('menu-extend');
            });

            // Mobile Search container
            //-------------------------------
            var searchContainer = $('.mobile-search-wrap, .search-mobile .overlaybg'),
                searchopen = function () {
                    $(searchContainer).removeClass('searchclose').addClass('searchopen');
                },
                searchclose = function () {
                    $(searchContainer).removeClass('searchopen').addClass('searchclose');
                };
            $('#submit-btn-mobile, .search-mobile .overlaybg').on('click', function () {
                if (searchContainer.hasClass('searchopen')) {
                    $(searchclose);
                } else {
                    $(searchopen);
                }
            });
            $('#submit-btn-mobile').on('click', function () {
                $('.mobile-search-wrap').toggleClass("mrginleft");
            });

            // Sticky Menu
            //-------------------------------
            if ($('#sticky-header').length) {
                 
                if (typeof(Sticky_Nav) != "undefined") {
                    if ( Sticky_Nav == true ) { 
                        var stickyMenu = $('#main-nav ul.menu-list').clone();
                        stickyMenu.appendTo('#sticky-header .sticky-left .menu-content');
                    }
                }
                $('#header-top .header-social').clone().appendTo('#sticky-header .sticky-right .sticky-social');
                
                if (typeof(Sticky_Nav) != "undefined") {
                    if ( Sticky_Nav == true ) { 
                        $(window).scroll(function () {
                            var w = $(window).width();
                            if (w > 992) {
                                if ($(this).scrollTop() > 450) {
                                    $('#sticky-header').css({
                                        position: "fixed",
                                        top: 0,
                                        left: 0,
                                        width: w,
                                        zIndex: 99999
                                    });
                                    $('#sticky-header').slideDown();
                                } else {
                                    $('#sticky-header').slideUp(function () {
                                        $('#sticky-header').css({
                                            position: "relative",
                                            top: 0,
                                            left: 0,
                                            width: w,
                                            zIndex: 99999
                                        });
                                    });
                                }
                            }
                        });
                    }
                }
            }
        },
        /* ---------------------------------------------
         Mobile Header Area
         --------------------------------------------- */
        headerarea_mobile: function () {
            var social = $('#header-top .header-social').clone();
            var headerSearch = $('#header-top .search.default').clone();
            var header_mobile_widget = $('#header-middle .widget.about_info').clone();
            var header_three_menu = $('.header-three #shop-nav .menu-wrapper').clone();
            var layout_eight_head_widget = $('.header-widget .widget.about_info').clone();
            var layout_eight_left_widget = $('.left-widget-area .widget').clone();
            var layout_eight_right_widget = $('.layout-eight #secondary.widget-area').clone();
            social.appendTo('#site-logo');
            headerSearch.appendTo('#mobile-search .mobile-search-wrap');
            header_mobile_widget.appendTo('#mobile-search .mobile-search-wrap');
            header_three_menu.appendTo('#mobile-menu .top-menu');
            layout_eight_head_widget.prependTo('#mobile-menu .top-menu');
            layout_eight_left_widget.appendTo('#mobile-menu .top-menu');
            layout_eight_right_widget.appendTo('#mobile-search .mobile-search-wrap');
        },
        /* ---------------------------------------------
         smooth scroll
         --------------------------------------------- */
        smoothscroll: function () {
            if (typeof smoothScroll == 'object') {
                smoothScroll.init();
            }
        },
        /* ---------------------------------------------
         For Video Fit Function
         --------------------------------------------- */
        video: function () {
            $(".feature-area").fitVids();
            $(".content-area").fitVids();
        },
        /* ---------------------------------------------
         Background Fit Image
         --------------------------------------------- */
        background_fit_image: function () {
            $.fn.bgImage = function () {
                $(this).each(function () {
                    var $image = $(this).find('img');
                    var imageSource = $image.attr('src');
                    $image.css('visibility', 'hidden');
                    $(this).css('backgroundImage', 'url(' + imageSource + ')');
                    if (!$image.length) {
                        $(this).css('backgroundImage', 'none');
                    }
                });
            };
            //Active image as a background Image
            //-----------------------------------------
            $('#featured-three .featured-post-other > .col-md-6 > .post-thumb').bgImage();
            $('#featured-three .featured-post-single .post-thumb').bgImage();
            $('#featured-four .post-thumb').bgImage();
            $('#featured-five .post-thumb').bgImage();
            $('.layout-three .post .post-thumb').bgImage();
            $('.layout-seven .post .post-thumb').bgImage();
            $('.layout-eight .post .post-thumb').bgImage();
            $('#featured-slider .post-thumb').bgImage();
            $('#featured-justified .post-thumb').bgImage();
            $('#featured-two .post-thumb').bgImage();
            $('.cat-wrap .post-thumb').bgImage();
            $('.related-post-item .post-media').bgImage();
            $('.product-datails-tab .lg-thumb').bgImage();
            $('.widget_editors_pick .post-thumb').bgImage();
            $('.layout-six .post .col-md-5 .post-thumb').bgImage();
            $('.layout-eight #main > .row .col-md-5 .carousel .post-thumb').bgImage();
        },
        /* ---------------------------------------------
         Carousel
         --------------------------------------------- */
        all_carousel: function () {
            // Featured One Slider
            //-------------------------------
            $('#featured-slider').owlCarousel({
                center: false,
                items: 5,
                autoplay: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                singleItem: false,
                loop: true,
                margin: 2,
                nav: false,
                dots: false,
                responsive: {
                    280: {
                        items: 1
                    },
                    500: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    700: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    },
                    1580: {
                        items: 5
                    }
                }
            });
        },
        /* ---------------------------------------------
         Widget Mobile fix
         --------------------------------------------- */
        widget_mobile: function () {
            // For Sidebar widget
            //-------------------------------
            $('#secondary.widget-area, #secondary-two.widget-area').clone().appendTo('#mobile-widget-area');
            $("#mobile-widget-area #secondary.widget-area > .widget, #mobile-widget-area #secondary-two.widget-area > .widget").wrap("<div class='col-sm-6'></div>");
            var widget_container = $('#mobile-widget-area #secondary.widget-area .col-sm-6, #mobile-widget-area #secondary-two.widget-area .col-sm-6');
            var i = 0;
            for (var i = 0; i < widget_container.length; i += 2) {
                widget_container.slice(i, i + 2).wrapAll("<div class='row'></div>");
            }

            //For footer widget
            //-------------------------------
            var $window = $(window),
                $footer_widget = $('#footer-middle > .container > .row'),
                $footer_widget_all = $('#footer-middle > .container > .row [class*="col-"]');
            for (var j = 0; j < $footer_widget_all.length; j += 2) {
                $footer_widget_all.slice(j, j + 2).wrapAll("<div class='widget-wrap'></div>");
            }
            var $footer_row_main = $footer_widget.addClass('footer_widget_container'),
                $footer_widget_row = $('#footer-middle > .container > .row .widget-wrap');

            function resize() {
                if ($window.width() < 991) {
                    return $footer_row_main.removeClass('row') && $footer_widget_row.addClass('row');
                }
                $footer_widget.addClass('row');
                $footer_widget_row.removeClass('row');
            }
            $window.resize(resize).trigger('resize');
        },
        /* ---------------------------------------------
         Author Skill
         --------------------------------------------- */
        author_skill: function () {
            if ($('#author-skill').length) {
                $('#author-skill .skill').circliful();
            }
        },
        /* ---------------------------------------------
         Instagram Image
         --------------------------------------------- */
        instafeed: function () {
            if (typeof(Instagram_Widget) != "undefined") {
                if ($('#instafeed').length > 0) {
                    var imageLimit = Instagram_Widget['image_limit'];
                    var feedId = Instagram_Widget['user_id'];
                    var feedToken = Instagram_Widget['access_token'];
                    var userFeed = new Instafeed({
                        limit: imageLimit,
                        get: 'user',
                        userId: feedId,
                        accessToken: '' + feedToken + '',
                        resolution: 'standard_resolution',
                        template: '<div class="list"><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></div>'
                    });
                    userFeed.run();
                }
            }
        },
        /* ---------------------------------------------
         Flicker widget
         --------------------------------------------- */
        flickr_widget: function() {
            if (typeof(Flickr_Widget) != "undefined") {
                var ramble_flickr_Id = Flickr_Widget['flickr_id'];
                var ramble_photo_count = Flickr_Widget['photo_count'];

                $('.ramble_flickr').jflickrfeed({
                        limit: ramble_photo_count,
                        qstrings: {
                            id: ramble_flickr_Id
                        },
                        itemTemplate: '<li><a href="{{link}}"><img src="{{image_t}}" alt="{{title}}" /></a></li>'
                    },
                    function(data) {
                        $('.ramble_flickr li').hover(function() {
                                $(this).children('div').show();
                            },

                            function() {
                                $(this).children('div').hide();
                            });
                    });
            }
        },
        /* ---------------------------------------------
         Twitter Widget
         --------------------------------------------- */
        twitter_feed: function () {
            if (typeof(Twitter_Widget) != "undefined") {
                var twitter_section = '<a class="twitter-timeline" href="' +Twitter_Widget['profile_url']+ '" data-widget-id="' + Twitter_Widget['twitter_id'] + '" data-link-color="#0062CC" data-chrome="nofooter noscrollbar transparent" data-tweet-limit="' + Twitter_Widget['post_count'] + '">Tweets</a>';
                twitter_section += '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>';

                $('.widget_twitter .widget-content').append(twitter_section);
            }
        },

        /* ---------------------------------------------
         Mailchip widget
         --------------------------------------------- */
        mailchip: function() {
            if (typeof(Mailchimp_Widget) != "undefined") {
                if($('#newsletter-form').length) {            
                    var ramble_success_btn_text = Mailchimp_Widget['success_btn_text'];
                    $('#newsletter-form').formchimp({
                        'buttonText': "" + ramble_success_btn_text + "",
                    });
                }
            }
        },
        /* ---------------------------------------------
        Google Maps
         --------------------------------------------- */
        maps: function () {
            if ($('#gmaps').length) {
                var map;
                if (typeof(Contact_Info) != "undefined") {
                    var latitude = Contact_Info['map_latitude'];
                    var longitude = Contact_Info['map_longitude'];
                    var icon = Contact_Info['map_icon'];
                } else {
                    var latitude = 43.04446;
                    var longitude = -76.130791;
                    var icon = "/assets/images/map-icon.png";
                }

                map = new GMaps({
                    el: '#gmaps',
                    lat: latitude, //Google Maps Latitude
                    lng: longitude, //Google Maps longitude
                    scrollwheel: false,
                    zoom: 10,
                    zoomControl: true,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });

                var image = icon; //Configure Maps Marker Icon
                map.addMarker({
                    lat: latitude, //Google Maps Latitude
                    lng: longitude, //Google Maps longitude
                    icon: image,
                    animation: google.maps.Animation.DROP,
                    verticalAlign: 'bottom',
                    horizontalAlign: 'center'
                });
            }
        },
        /* ---------------------------------------------
         Scroll top
         --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='glyphicon glyphicon-menu-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        /* ---------------------------------------------
         Comments count
         --------------------------------------------- */
        comment_count: function() {
            if (typeof(disqus_shortname) != "undefined") {
                var s = document.createElement('script');
                s.async = true;
                s.type = 'text/javascript';
                s.src = '//' + disqus_shortname + '.disqus.com/count.js';
                (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
            }
        },
        /* ---------------------------------------------
         Header Logo Padding Satting
         --------------------------------------------- */
        header_padding: function() {
            if (typeof(Header_Padding) != "undefined") {
                var padding_top = (!Header_Padding['top'] ) ? '70px' : Header_Padding['top'];
                var padding_right = (!Header_Padding['right'] ) ? '0px' : Header_Padding['right'];
                var padding_bottom = (!Header_Padding['bottom'] ) ? '0px' : Header_Padding['bottom'];
                var padding_left = (!Header_Padding['left'] ) ? '0px' : Header_Padding['left'];

                $('#site-logo').css('padding', padding_top+' '+padding_right+' '+padding_bottom+' '+padding_left);
            }
        },
        /* ---------------------------------------------
         Contact From
         --------------------------------------------- */
        contact_form: function() {
            if (typeof(disqus_shortname) != "undefined") {
                var contact_email = Contact_Info['contact_email'];
            } else {
                var contact_email = 'email@domain.com';
            }

            var $contactForm = $('#contact_form');
            var $contactFormUrl = $contactForm.attr('action');
            $contactForm.submit(function(e) {
                e.preventDefault();
                $.ajax({
                    url: '//formspree.io/'+ contact_email +'',
                    method: 'POST',
                    data: $(this).serialize(),
                    dataType: 'json',
                    beforeSend: function() {
                        $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
                    },
                    success: function(data) {
                        $contactForm.find('.alert--loading').hide();
                        $contactForm.append('<div class="alert alert--success">Message sent!</div>');
                    },
                    error: function(err) {
                        $contactForm.find('.alert--loading').hide();
                        $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
                    }
                });
            });
        },

        /* ---------------------------------------------
         Initialize All Function
         --------------------------------------------- */
        initializ: function () {
            rambleApp.preloader();
            rambleApp.placeholder();
            rambleApp.menu();
            rambleApp.headerarea_mobile();
            rambleApp.smoothscroll();
            rambleApp.video();
            rambleApp.background_fit_image();
            rambleApp.all_carousel();
            rambleApp.widget_mobile();
            rambleApp.author_skill();
            rambleApp.instafeed();
            rambleApp.flickr_widget();
            rambleApp.twitter_feed();
            rambleApp.mailchip();
            rambleApp.maps();
            rambleApp.scroll_top();
            rambleApp.comment_count();
            rambleApp.header_padding();
            rambleApp.contact_form();
        }
    };
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function () {
        rambleApp.initializ();
    });

})(jQuery);
var urlLoc = document.getElementById("site-logo-main").getAttribute("href");
var themeApp = {
    gatherData: function(e, t, a) {
        var e = e || 1,
            t = t || "",
            a = a || [],
            i = this,
            s = "" + urlLoc + "/rss";
        $.ajax({
            url: s,
            type: "get",
            success: function(s) {
                var n = $(s).find("item > guid").text();
                t != n ? ($(s).find("item").each(function() {
                    a.push(this)
                }), i.gatherData(e + 1, n, a)) : (i.specialPostsSetOne(a), i.recentPosts(a), i.tagcloud(a))
            }
        })
    },
    taggedPost: function(e, t) {
        var a = [];
        return $.each(e, function(e, i) {
            var s = [],
                n = [];
            $(i).find("category").each(function() {
                s.push($(this).text()), n.push($(this).text().toLowerCase())
            }), n.indexOf(t.toLowerCase()) >= 0 && a.push({
                link: $(i).find("link").text(),
                title: $(i).find("title").text(),
                content: $(i).find("content\\:encoded, encoded").text(),
                author: $(i).find("dc\\:creator, creator").text(),
                category: $(i).find("category"),
                published_date: $(i).find("pubDate").text(),
                image_link: $(this).find("media\\:content, content").attr("url"),
            })
        }), a
    },

    specialPostsSetOne: function(e) {
        var special_tag_one = 'sticky';
        if (typeof(Sticky_Post) != "undefined") {
            var tag_one_post_count = Sticky_Post['post_count'];
        } else {
            var tag_one_post_count = 5;
        }
        if ($("#featured").length && "undefined" != typeof special_tag_one && "undefined" != typeof tag_one_post_count) {
            var t = themeApp.taggedPost(e, special_tag_one),
                a = "";
            if (t.length > 0) {
                for (a = '<div class="container-fluid"><div class="row"><div class="col-md-12"><div id="featured-slider" class="owl-carousel">', i = 0; i < t.length; i++)
                    if (i < tag_one_post_count) {
                        var s = t[i].title,
                            n = t[i].link,
                            o = t[i].image_link,
                            m = t[i].author,
                            c = t[i].category,
                            r = themeApp.formatDate(t[i].published_date),
                            l = $(t[i].content).text().replace("<code>", "<code>").replace("<", "<").replace(">", ">"),
                            l = l.split(/\s+/).slice(0, 50).join(" "),
                            d = "",
                            p = "";
                        "undefined" != typeof c && $.each(c, function(e, t) {
                            var a = $(t).text(),
                                i = a.toLowerCase().replace(/ /g, "-");
                            p += '<a href="' + urlLoc + '/tag/' + i + '/">' + a + "</a>"
                        }), d = "undefined" != typeof o ? '' : '<div class="featured-media"><div class="tag-list">' + m + "</div></div>", a += '<div class="item"><div class="post-thumb" style="background-image:url(' + o + ')"><img src="' + o + '" alt="' + s + '"></div><div class="post-content"><div class="cat-links">' + p + '<span class="border"></span></div><div class="bottom-content"><h2 class="entry-title"><a href="' + n + '" rel="bookmark">' + s + '</a></h2><div class="entry-meta"><span class="entry-date">' + r + '</span><span class="devider">/</span><span class="byline"><span class="author vcard"> By: ' + m + '</span></span></div></div></div></div>'
                    }
                a += "</div></div></div></div>", $("#featured-content").append(a);
            }
            var featcarousel = $('#featured-slider'),
                item = 4;
            featcarousel.owlCarousel({
                center: false,
                items: 5,
                autoplay: true,
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
            var itemCount = $('#featured-slider .owl-item').length,
                itemCloneCount = $('#featured-slider .owl-item.cloned').length;
            if (itemCount <= item && itemCloneCount <= item * 2) {
                $('#featured-slider .owl-nav').hide();
            }
        }
    },


    recentPosts: function(e) {
        if (typeof(Latest_Posts_Widget) != "undefined") {
            var recent_post_count = Latest_Posts_Widget['post_count'];
            var container = $(".latest-widget");
            if (container.length && typeof recent_post_count !== 'undefined') {
                var string = '';
                $(e).slice(0, recent_post_count).each(function() {
                    var link = $(this).find('link').text();
                    var title = $(this).find('title').text();
                    var tag = $(this).find("category").text();
                    var published_date = themeApp.formatDate($(this).find('pubDate').text());
                    var image_link = $(this).find('media\\:content, content').attr('url');
                    if (typeof image_link !== 'undefined') {
                        var image = '<figure class="fit-img"><img alt="'+title+'" src="'+image_link+'"></figure>';
                        var helper_class = 'have-image';
                    } else {

                        var image = '<div class="post-thumb"><figure class="fit-img"><img alt="' + title + '" class="latest-item-thumb" src="' + urlLoc + '/assets/images/no-media/image.jpg"></figure></div>';
                    }
                    
                    var helper_class = '';
                    
                    string += '<li class="feed-wrapper'+helper_class+'"><div class="content"><div class="image-area"><a rel="bookmark" href="'+link+'">'+image+'</a></div><div class="item-text"><h5><a rel="bookmark" href="'+link+'">'+title+'</a></h5><span class="item-meta">'+published_date+'</span></div></div></li>'
                });
                container.append(string);
            }
        }
    },
    formatDate: function(e) {
        var t = new Date(e),
            a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            i = a[t.getMonth()],
            s = t.getDate(),
            n = t.getFullYear(),
            o = i + " " + s + ", " + n;
        return o
    },
    tagcloud: function(e) {
        var t = [];
        $(e).find("category").each(function() {
            var e = $(this).text(); - 1 == $.inArray(e, t) && t.push(e)
        });
        for (var a = "", i = 0; i < t.length; i += 1) {
            var s = t[i],
                n = s.toLowerCase().replace(/ /g, "-");
            if (n === "full-width" || n === "sidebar-left" || n === "sidebar-right") {
                continue;
            }
            a += '<a href="' + urlLoc + '/tag/' + n + '">' + s + "</a>"
        }
        $(".tagcloud").append(a)
    },
    init: function() {
        themeApp.gatherData()
    }
};
themeApp.init();




/*============================================
========= Post Layout Style Code =============
=============================================*/

var post_st = getUrlParameter('post-column');
if (typeof(post_column) != "undefined") {
    var home_post_layout = post_column;
} else {
    var home_post_layout = 3;
}
if( post_st ){
    if ( post_st === 2 ) {
        var column_wrap = 2;
        var div_class = 6;
    } else if ( post_st == 3 ) {
        var column_wrap = 3;
        var div_class = 4;
    } else if ( post_st == 4 ) {
        var column_wrap = 4;
        var div_class = 3;
    } else {
        var column_wrap = 4;
        var div_class = 6;
    }
} else if (home_post_layout) {
    if (typeof(home_post_layout) != "undefined") {
        if ( home_post_layout === 2 ) {
            var column_wrap = 2;
            var div_class = 6;
        } else if (home_post_layout === 3) {
            var column_wrap = 3;
            var div_class = 4;
        } else if (home_post_layout === 4) {
            var column_wrap = 4;
            var div_class = 3;
        } else {
            var column_wrap = 3;
            var div_class = 4;
        }
    }
} else {
    var column_wrap = 4;
    var div_class = 3;
}

$('ul.menu-list li a').each(function() {
    if ($(this).attr('href') + "/" === document.URL || $(this).attr('href') === document.URL) {
        $(this).addClass('active');
    }
});

// Code for Post Layout wraper
$("#grid-three .post-warreper").wrap("<div class='post-items col-md-"+div_class+" col-sm-"+div_class+"'></div>");
var widget_container = $('#grid-three .col-md-'+div_class+'.col-sm-'+div_class+'');
var i = 0;


//Code for Masonry and Normal layout
var masonry_posts = getUrlParameter('post_masonry');
if (typeof(masonry_posts) != "undefined") {
    if ( masonry_posts == "on" ) {
        widget_container.wrapAll("<div class='row item-container'></div>");
        // Masonry activation
        $( window ).load(function() {
            $('.item-container').isotope({
                // options...
                itemSelector: '.post-items',
                masonry: {
                  //columnWidth: 200
                }
            });
        });
    } else {
        for (var i = 0; i < widget_container.length; i += column_wrap) {
            widget_container.slice(i, i + column_wrap).wrapAll("<div class='row'></div>");
        }
    }
} else {
    if (typeof(Masonry_Layout) != "undefined") {
        if (Masonry_Layout == true) {
            widget_container.wrapAll("<div class='row item-container'></div>");
            // Masonry activation
            $( window ).load(function() {
              $('.item-container').isotope({
                // options...
                itemSelector: '.post-items',
                masonry: {
                  //columnWidth: 200
                }
              });
            });
        } else {
            for (var i = 0; i < widget_container.length; i += column_wrap) {
                widget_container.slice(i, i + column_wrap).wrapAll("<div class='row'></div>");
            }
        }
    } else {
        for (var i = 0; i < widget_container.length; i += column_wrap) {
            widget_container.slice(i, i + column_wrap).wrapAll("<div class='row'></div>");
        }
    }
}


/*============================================
========= Header Style Code ==================
=============================================*/
var header_st = getUrlParameter('header_style');
if ( header_st ){
    if ( header_st == "left") {
        $('.header-widget').addClass('col-md-pull-9').removeClass('hidden');
        $('.header-banner').addClass('col-md-push-3').removeClass('hidden');
    } else if ( header_st == "right" ) {
        $('.header-widget').removeClass('hidden')
    } else {
        $('.header-banner').removeClass('col-md-9').addClass('col-md-12');
    }
} else {
    if (typeof(Header_Style) != "undefined") {
        if ( Header_Style == "left" ) {
            $('.header-widget').addClass('col-md-pull-9').removeClass('hidden');
            $('.header-banner').addClass('col-md-push-3').removeClass('hidden');
        } else if ( Header_Style == "right" ) {
            $('.header-widget').removeClass('hidden')
        } else {
            $('.header-banner').removeClass('col-md-9').addClass('col-md-12');
        }
    } else {
        $('.header-banner').removeClass('col-md-9').addClass('col-md-12');
    }
}


/* ---------------------------------------------
 Home, Tag, Author Page Configure
 --------------------------------------------- */
    var layout = getUrlParameter('layout');
    if ( layout ){
        if ( layout === 'sidebar-left' ) {
            var home_layout = layout;
        } else if ( layout === 'sidebar-right' ) {
            var home_layout = layout;
        } else if ( layout === 'full-width' ) {
            var home_layout = layout;
        } else {
            var home_layout = 'sidebar-right';
        }
    } else {
        if (typeof(theme_layout) != "undefined") {
            if ( theme_layout === 'sidebar-left' ) {
                var home_layout = theme_layout;
            } else if ( theme_layout === 'sidebar-right' ) {
                var home_layout = theme_layout;
            } else if ( theme_layout === 'full-width' ) {
                var home_layout = theme_layout;
            } else {
                var home_layout = 'sidebar-right';
            }
        } else {
            var home_layout = 'sidebar-right';
        }
    }

    if ( home_layout === 'sidebar-left' ) {
        $('#main-aria').addClass('col-md-push-3');
        $('#main-sidebar').show().addClass('col-md-pull-9');
    }
    else if ( home_layout === 'sidebar-right' ) {
        $('#main-sidebar').show();
    }
    else if ( home_layout === 'full-width' ) {
        $('#main-aria').removeClass('col-md-9').addClass('col-md-10 full-width-content');
        $('#main-sidebar').hide().html('');
    }

/*---------------------------------------------
 Page Configure
--------------------------------------------- */
    var Page_Layout = getUrlParameter('page-layout');
    if ( Page_Layout ){
       if ( Page_Layout === 'sidebar-left' ) {
           var default_page_layout = Page_Layout;
       } else if ( Page_Layout === 'sidebar-right' ) {
           var default_page_layout = Page_Layout;
       } else if ( Page_Layout === 'full-width' ) {
           var default_page_layout = Page_Layout;
       } else {
           var default_page_layout = 'sidebar-right';
       }
    } else {
       if (typeof(pages_layout) != "undefined") {
           if ( pages_layout === 'sidebar-left' ) {
               var default_page_layout = pages_layout;
           } else if ( pages_layout === 'sidebar-right' ) {
               var default_page_layout = pages_layout;
           } else if ( pages_layout === 'full-width' ) {
               var default_page_layout = pages_layout;
           } else {
               var default_page_layout = 'sidebar-right';
           }
       } else {
           var default_page_layout = 'sidebar-right';         
       }
    }

    if ( default_page_layout === 'sidebar-left' ) {
       $('#page-aria').addClass('col-md-push-3');
       $('#page-sidebar').show().addClass('col-md-pull-9');
    }
    else if ( default_page_layout === 'sidebar-right' ) {
       $('#page-sidebar').show();
    }
    else if ( default_page_layout === 'full-width' ) {
       $('#page-aria').removeClass('col-md-9').addClass('col-md-10 full-width-content');
       $('#page-sidebar').hide().html('');
    }

/* ---------------------------------------------
  Single Page Configure
--------------------------------------------- */
    var single_post_page_layout = getUrlParameter('single-layout');
    if ( single_post_page_layout ){
        if ( single_post_page_layout === 'sidebar-left' ) {
            var default_single_page_layout = single_post_page_layout;
        } else if ( single_post_page_layout === 'sidebar-right' ) {
            var default_single_page_layout = single_post_page_layout;
        } else if ( single_post_page_layout === 'full-width' ) {
            var default_single_page_layout = single_post_page_layout;
        } else {
            var default_single_page_layout = 'sidebar-right';
        }
    } else {
        if (typeof(single_post_layout) != "undefined") {
            if ( single_post_layout === 'sidebar-left' ) {
                var default_single_page_layout = single_post_layout;
            } else if ( single_post_layout === 'sidebar-right' ) {
                var default_single_page_layout = single_post_layout;
            } else if ( single_post_layout === 'full-width' ) {
                var default_single_page_layout = single_post_layout;
            } else {
                var default_single_page_layout = 'sidebar-right';
            }
        } else {
            var default_single_page_layout = 'sidebar-right';
        }
    }

    if ( default_single_page_layout === 'sidebar-left' ) {
        $('#post-aria').addClass('col-md-push-3');
        $('#post-sidebar').show().addClass('col-md-pull-9');
    } else if ( default_single_page_layout === 'sidebar-right' ) {
        $('#post-sidebar').show();
    } else if ( default_single_page_layout === 'full-width' ) {
        $('#post-aria').removeClass('col-md-9').addClass('col-md-10 full-width-content');
        $('#post-sidebar').hide().html('');
    }

   $(".heading-search").ghostHunter({
       results: ".heading-search-result",
       onKeyUp: true,
       zeroResultsInfo: false,
       info_template: "<div class='post-amount'>Number of posts found: {{amount}}</div>",
       result_template: "<div class='results'><i class='fa fa-arrow-right'></i><a href='{{link}}'>{{title}}</a></div>"
   });

$('#related-post-wrap').ghostRelated({
   limit: 3
});





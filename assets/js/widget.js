/* ---------------------------------------------
 ============ Widget Configure =================
 --------------------------------------------- */

(function($) {
     "use strict";


    //Sticky Aria Settings
    var post_styles = getUrlParameter('post_style');
    if (typeof( post_styles ) != "undefined") {
            if ( post_styles == 1 ) {
                //$('.post-warreper > .entry-header > .entry-content').removeClass('hidden');
            } else if ( post_styles == 2 ) {
                $('.post-warreper > .entry-header > .entry-content').removeClass('hidden');
            } else if ( post_styles == 3 ) {
                $('.post-warreper > .entry-header').addClass('header-two');
            } else if ( post_styles == 4 ) {
                $('.post-warreper > .entry-header').addClass('header-two');
                $('.post-warreper > .entry-header > .entry-content').removeClass('hidden');
            }else {
                $('.post-warreper > .entry-header').addClass('header-two');
            }
    } else {
        if (typeof(Post_Style) != "undefined") {
            if ( Post_Style == 1 ) {
                //$('.post-warreper > .entry-header > .entry-content').removeClass('hidden');
            } else if ( Post_Style == 2 ) {
                $('.post-warreper > .entry-header > .entry-content').removeClass('hidden');
            } else if ( Post_Style == 3 ) {
                $('.post-warreper > .entry-header').addClass('header-two');
            } else if ( Post_Style == 4 ) {
                $('.post-warreper > .entry-header').addClass('header-two');
                $('.post-warreper > .entry-header > .entry-content').removeClass('hidden');
            }
        } else {
            $('.post-warreper > .entry-header').addClass('header-two');
        }
    }

    //Sticky Aria Settings
    var sticky_aria = getUrlParameter('sticky-aria');
    if (typeof(sticky_aria) != "undefined") {
        if ( sticky_aria == "show" ) {
            $('#featured').removeClass('hidden');
        } else {
            $('#featured').html('');
        }
    } else {
        if (typeof(Sticky_Post) != "undefined") {
            if ( Sticky_Post['show'] == true ) {
                $('#featured').removeClass('hidden');
            } else {
                $('#featured').html('');
            }
        }
    }


    //Featured aria Settings
    var featured_aria = getUrlParameter('featured-aria');
    if (typeof(featured_aria) != "undefined") {
        if ( featured_aria == "show" ) {
            $('#featured_post_section').removeClass('hidden');
        } else {
            $('#featured_post_section').html('');
        }
    } else {
        if (typeof(Show_Featured) != "undefined") {
            if ( Show_Featured == true ) {
                $('#featured_post_section').removeClass('hidden');
            } else {
                $('#featured_post_section').html('');
            }
        }
    }

    //Blog Sections Heading
    if (typeof(Blog_Heading) != "undefined") {
        if ( Blog_Heading['show'] == true ) {
            $('#grid-three > h3.section-title').removeClass('hidden');
        }
        $('#grid-three > h3.section-title span').html(Blog_Heading['title']);
    }

	//Header About Widget
	if (typeof(Header_Author_Widget) != "undefined") {

		for (var Url in Header_Author_Widget ) {
	         if (Url == "Image" || Url == "Name"|| Url == "Skill"|| Url == "Position") {
	             continue;
	         }
	         $('.header-widget .author-social').append("<a target='blank' href='" + Header_Author_Widget[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
	     }

    	$('.header-widget #author-image .image').attr('style','background:url('+Header_Author_Widget['Image']+')');
    	$('.header-widget .author-name').html(Header_Author_Widget['Name']);
    	$('.header-widget #author-details .author-skill').html(Header_Author_Widget['Skill']);
    	$('.header-widget #author-details .position').html(Header_Author_Widget['Position']);
    }

	//Social Profile Widget
	if (typeof(Social_Site_Url) != "undefined") {

		for (var Url in Social_Site_Url ) {
	         if ( Url == "show" || Url == "Name" ) {
	             continue;
	         }
	         $('#header-top .header-social,.footer-top-content .social-area').append("<a target='blank' href='" + Social_Site_Url[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
	     }
    }

	//Social Profile Widget
	if (typeof(Footer_Social) != "undefined") {

		for (var Url in Footer_Social ) {
	         if ( Url == "show" || Url == "Name" ) {
	             continue;
	         }
	         $('#footer-bottom .social-link').append("<a target='blank' href='" + Footer_Social[Url] + "'><i class='fa fa-" + Url + "'></i><span>"+Url+"</span></a>");
	     }
    }

    //Latest Post Widget
    if (typeof(Latest_Posts_Widget) != "undefined") {
    	if (Latest_Posts_Widget['show'] === true) {
    	    $('aside.ramble_popular_post_widget').removeClass('hidden');
    	    $('.ghost-latest-p-title').html(Latest_Posts_Widget['widget_title']);
    	}
    }

    //Tags Widget
    if (typeof(Tags_Widget) != "undefined") {
    	if (Tags_Widget['show'] === true) {
    	    $('aside.widget_tag_cloud').removeClass('hidden');
    	    $('.ramble_tags_widget_title').html(Tags_Widget['widget_title']);
    	}
    }

    //Ads Widget
    if (typeof(Ads_Widget) != "undefined") {
    	if (Ads_Widget['show'] === true) {
    	    $('aside.ghost_ads_widget').removeClass('hidden');
    	    $('.ghost_ads_widget_title').html(Ads_Widget['widget_title']);
    	    $('.ads_widget_image').html("<a target='blank' href=" + Ads_Widget['ads_url'] + "><img src=" + Ads_Widget['image_url'] + "></a>");
    	}
    }

    //Navigation Widget
    if (typeof(Navigation_Widget) != "undefined") {
    	if (Navigation_Widget['show'] === true) {
    	    $('aside.widget_nav_menu').removeClass('hidden');
    	    $('.widget_nav_menu_title').html(Navigation_Widget['widget_title']);
    	}
    }

    //Social Widget
    if (typeof(Social_Widget) != "undefined") {
    	if (Social_Widget['show'] === true) {
    	    $('aside.widget_follow_us').removeClass('hidden');
    	    $('.widget_follow_us_title').html(Social_Widget['widget_title']);
    	}

    	for (var Url in Social_Widget) {
    	    if (Url == "show" || Url == "widget_title") {
    	        continue;
    	    }
    	    $('.widget_social').append("<a class='follow-link' target='blank' href='" + Social_Widget[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
    	}
    }

    //Instagram Widget
    if (typeof(Instagram_Widget) != "undefined") {
    	if (Instagram_Widget['show'] === true) {
    	    $('.widget_instafeed').removeClass('hidden');
    	    $('.widget_instafeed .widget-title span').html(Instagram_Widget['widget_title']);
    	}
    }

    //Facebook Widget
    if (typeof(Facebook_Page_Widget) != "undefined") {
    	if (Facebook_Page_Widget['show'] === true) {
    	    var fb_url = Facebook_Page_Widget['page_url'];
    	    $('.ghost_facebook_widget').removeClass('hidden');
    	    $('.ghost_facebook_widget_title').html(Facebook_Page_Widget['widget_title']);
    	    var fb_page = '<div class="fb-page" data-href="' + fb_url + '" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div class="fb-xfbml-parse-ignore">Facebook</div></div>';
    	    $('.facebook-widget').append(fb_page);
    	}
    	var facebook_sdk_script = '<div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";fjs.parentNode.insertBefore(js, fjs);}(document, \'script\', \'facebook-jssdk\'));</script>';
    	$('body').append(facebook_sdk_script);
    }

    //Google Plus Widget
    if (typeof(Googleplus_Page_Widget) != "undefined") {
    	if (Googleplus_Page_Widget['show'] === true) {
    	    var gp_url = Googleplus_Page_Widget['page_url'];
    	    $('.ghost_googleplus_widget').removeClass('hidden');
    	    $('.ghost_googleplus_widget_title').html(Googleplus_Page_Widget['widget_title']);
    	    var google_plus_sdk_script = '<script src="https://apis.google.com/js/platform.js" async defer></script>';
    	    var googleplus_page = '<div class="g-page" data-href="' + gp_url + '" data-rel="publisher"></div>';
    	    $('body').append(google_plus_sdk_script);
    	    $('.google-plus-widget').append(googleplus_page);
    	}
    }

    //Twitter Widget
    if (typeof(Twitter_Widget) != "undefined") {
    	if (Twitter_Widget['show'] === true) {
    	    var tp_url = Twitter_Widget['profile_url'];
    	    var tp_count = Twitter_Widget['post_count'];
    	    var twitter_widget_id = Twitter_Widget['twitter_id'];
    	    $('.ghost_twitter_widget').removeClass('hidden');
    	    $('.ghost_twitter_widget_title').html(Twitter_Widget['widget_title']);
            var twitter_section = '<a class="twitter-timeline" data-show-replies="true" href="https://twitter.com/' +Twitter_Widget['screen_name']+ '" data-link-color="#0062CC" data-chrome="nofooter noscrollbar transparent" data-tweet-limit="' + Twitter_Widget['post_count'] + '"></a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>';
    	    $('.twitter_profile').append(twitter_section);
    	}
    }

    //About Widget
    if (typeof(About_Widget) != "undefined") {
    	if (About_Widget['show'] === true) {
    	    $('.widget_ramble_aboutus_contact').removeClass('hidden');
    	    $('.widget_ramble_aboutus_contact_title').html(About_Widget['widget_title']);
    	    $('.widget_ramble_aboutus_contact .author-image-home').append( '<img class="img-responsive" src="'+About_Widget['image']+'" alt="'+About_Widget['widget_title']+'"> ');
    	    $('.widget_ramble_aboutus_contact .about-description').html('<p>' + About_Widget['descriptions'] + '</p>');
    	}
    }

    //MailChimp Widget
    if (typeof(Mailchimp_Widget) != "undefined") {
        if (Mailchimp_Widget['show'] === true) {
            $('.widget_subscribe').removeClass('hidden');
            $('.widget_subscribe_title').html(Mailchimp_Widget['widget_title']);
            $('#mail-description').append('<p>' + Mailchimp_Widget['descriptions'] + '</p>');
            $("#newsletter-form").attr("action", "" + Mailchimp_Widget['action_url'] + "");
            $("button.mail-submite").html(Mailchimp_Widget['button_text']);
        }
    }

    //Flickr Widget
    if (typeof(Flickr_Widget) != "undefined") {
    	if (Flickr_Widget['show'] === true) {
    	    $('.widget_flicker').removeClass('hidden');
    	    $('.widget_flicker .widget-title > span').html(Flickr_Widget['widget_title']);
    	}
    }

    // Copyright Text
    if (typeof(Footer_CopyRight_Text) != "undefined") {
    	if (Footer_CopyRight_Text['copy_right_text'] !== "") {
    	    $('.copyright').html('<p>' + Footer_CopyRight_Text['copy_right_text'] + '</p>');
    	} else {
    	    $('.copyright').html('<p> &copy; 2016 Ramble-Blog Theme. All right reserved. All image are used only demo purpouse only and property of their owners</p>');
    	}
    }

    //Social Site Url Widget
    if (typeof(Social_Site_Url) != "undefined") {
        for (var Url in Social_Site_Url) {
            $('#top-social, #mobile-social, #footer_social').append("<a href='" + Social_Site_Url[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
        }
    }

    // Footer Top Widget
    var footer_widget = getUrlParameter('footer-newsletter-widget');
    if (typeof(footer_widget) != "undefined") {
        if ( footer_widget == "show" ) {
            $('#footer-top').removeClass('hidden');
        } else {
            $('#footer-top').html('');
        }
    } else {
        if (typeof(Footer_Top_Section) != "undefined") {
            $('.footer-top-content .news-letter-title').html( Footer_Top_Section['newsletter_title']);
            $('.footer-top-content .social-area span').html( Footer_Top_Section['social_title']);
            if ( Footer_Top_Section['show'] == true ) {
                $('#footer-top').removeClass('hidden');
            } else {
                $('#footer-top').html('');
            }
            $('#mc-form').ajaxChimp({
                url: ''+Footer_Top_Section['mailchip_url']+''
            });
        }
    }

    //Contact us page
    if (typeof(Contact_Info) != "undefined") {
        var email_address = Contact_Info['email'];
        var web_address = Contact_Info['web'];
        $('.contact-details #address-main span').html(Contact_Info['full_addess']);
        $('.phone-area .details span').html(Contact_Info['phone']);
        $('.email-area .details span').html('<a href="mailto:'+email_address+'">'+email_address+'</a>');
        $('.web-area .details span').html('<a target="_blank" href="'+web_address+'">'+web_address+'</a>');
    }

    //About page
    if (typeof(About_Page_settings) != "undefined") {
        $('.about-me .author-cover .author-image').append('<img class="img-responsive" src="'+About_Page_settings['author_image']+'" title="'+About_Page_settings['author_name']+'" alt="'+About_Page_settings['author_name']+'">');
        $('.about-me .about-details .author-details .author-name.section-name span').html(About_Page_settings['author_name']);
        $('.about-me .about-details .author-sign').prepend('<img src="'+About_Page_settings['author_sign_img']+'" alt="'+About_Page_settings['author_name']+'">');
        $('.about-me .about-details .author-sign').append('<h3>'+About_Page_settings['author_sign_text']+'</h3>');


        for (var Url in About_Page_settings) {
            if ( Url == "author_image" || Url == "author_name" || Url == "author_sign_img" || Url == "author_sign_text" ) {
                continue;
            }
            $('.about-me .about-details .follow-link').append("<a href='" + About_Page_settings[Url] + "'><i class='fa fa-" + Url + "'></i></a>");
        }
    }

    //About page Skill
    if (typeof(About_Page_skills) != "undefined") {
        $('#author-skill h4.section-name span').html(About_Page_skills['Section_title']);

    	for (var Url in About_Page_skills) {
            if ( Url == "Section_title" ) {
                continue;
            }
    	    $('#author-skill .author-skills-items').append('<div class="col-md-4"><div class="skill-details"><div class="skill-percentage"><div class="skill" data-startdegree="'+About_Page_skills[Url][0]+'" data-dimension="120" data-text="'+About_Page_skills[Url][0]+'%" data-width="30" data-fontsize="18" data-percent="'+About_Page_skills[Url][0]+'" data-fgcolor="#95cac5" data-bgcolor="#eee"></div></div><div class="skill-content"><h4>'+Url+'</h4><p>'+About_Page_skills[Url][1]+'</p></div></div></div>');
    	}
    }

})(jQuery);

function bp_init_activity(){jq.cookie("bp-activity-oldestpage",1,{path:"/"}),null!=jq.cookie("bp-activity-filter")&&jq("#activity-filter-select").length&&jq('#activity-filter-select select option[value="'+jq.cookie("bp-activity-filter")+'"]').prop("selected",!0),null!=jq.cookie("bp-activity-scope")&&jq(".activity-type-tabs").length&&(jq(".activity-type-tabs li").each(function(){jq(this).removeClass("selected")}),jq("#activity-"+jq.cookie("bp-activity-scope")+", .item-list-tabs li.current").addClass("selected"))}function bp_init_objects(a){jq(a).each(function(b){null!=jq.cookie("bp-"+a[b]+"-filter")&&jq("#"+a[b]+"-order-select select").length&&jq("#"+a[b]+'-order-select select option[value="'+jq.cookie("bp-"+a[b]+"-filter")+'"]').prop("selected",!0),null!=jq.cookie("bp-"+a[b]+"-scope")&&jq("div."+a[b]).length&&(jq(".item-list-tabs li").each(function(){jq(this).removeClass("selected")}),jq("#"+a[b]+"-"+jq.cookie("bp-"+a[b]+"-scope")+", #object-nav li.current").addClass("selected"))})}function bp_filter_request(a,b,c,d,e,f,g,h){return"activity"==a?!1:(jq.query.get("s")&&!e&&(e=jq.query.get("s")),null==c&&(c="all"),jq.cookie("bp-"+a+"-scope",c,{path:"/"}),jq.cookie("bp-"+a+"-filter",b,{path:"/"}),jq.cookie("bp-"+a+"-extras",g,{path:"/"}),jq(".item-list-tabs li").each(function(){jq(this).removeClass("selected")}),jq("#"+a+"-"+c+", #object-nav li.current").addClass("selected"),jq(".item-list-tabs li.selected").addClass("loading"),jq('.item-list-tabs select option[value="'+b+'"]').prop("selected",!0),"friends"==a&&(a="members"),bp_ajax_request&&bp_ajax_request.abort(),bp_ajax_request=jq.post(ajaxurl,{action:a+"_filter",cookie:bp_get_cookies(),object:a,filter:b,search_terms:e,scope:c,page:f,extras:g},function(a){if("pag-bottom"==h&&jq("#subnav").length){var b=jq("#subnav").parent();jq("html,body").animate({scrollTop:b.offset().top},"slow",function(){jq(d).fadeOut(100,function(){jq(this).html(a),jq(this).fadeIn(100)})})}else jq(d).fadeOut(100,function(){jq(this).html(a),jq(this).fadeIn(100)});jq(".item-list-tabs li.selected").removeClass("loading")}),void 0)}function bp_activity_request(a,b){jq.cookie("bp-activity-scope",a,{path:"/"}),jq.cookie("bp-activity-filter",b,{path:"/"}),jq.cookie("bp-activity-oldestpage",1,{path:"/"}),jq(".item-list-tabs li").each(function(){jq(this).removeClass("selected loading")}),jq("#activity-"+a+", .item-list-tabs li.current").addClass("selected"),jq("#object-nav.item-list-tabs li.selected, div.activity-type-tabs li.selected").addClass("loading"),jq('#activity-filter-select select option[value="'+b+'"]').prop("selected",!0),jq(".widget_bp_activity_widget h2 span.ajax-loader").show(),bp_ajax_request&&bp_ajax_request.abort(),bp_ajax_request=jq.post(ajaxurl,{action:"activity_widget_filter",cookie:bp_get_cookies(),_wpnonce_activity_filter:jq("#_wpnonce_activity_filter").val(),scope:a,filter:b},function(a){jq(".widget_bp_activity_widget h2 span.ajax-loader").hide(),jq("div.activity").fadeOut(100,function(){jq(this).html(a.contents),jq(this).fadeIn(100),bp_legacy_theme_hide_comments()}),null!=a.feed_url&&jq(".directory #subnav li.feed a, .home-page #subnav li.feed a").attr("href",a.feed_url),jq(".item-list-tabs li.selected").removeClass("loading")},"json")}function bp_legacy_theme_hide_comments(){var a=jq("div.activity-comments");return a.length?(a.each(function(){if(!(jq(this).children("ul").children("li").length<5)){var a=jq(this),b=a.parents("#activity-stream > li"),c=jq(this).children("ul").children("li"),d=" ";if(jq("#"+b.attr("id")+" a.acomment-reply span").length)var d=jq("#"+b.attr("id")+" a.acomment-reply span").html();c.each(function(a){a<c.length-5&&(jq(this).addClass("hidden"),jq(this).toggle(),a||jq(this).before('<li class="show-all"><a href="#'+b.attr("id")+'/show-all/" title="'+BP_DTheme.show_all_comments+'">'+BP_DTheme.show_x_comments.replace("%d",d)+"</a></li>"))})}}),void 0):!1}function checkAll(){for(var a=document.getElementsByTagName("input"),b=0;b<a.length;b++)"checkbox"==a[b].type&&(a[b].checked=""==$("check_all").checked?"":"checked")}function clear(a){if(document.getElementById(a)){var a=document.getElementById(a);if(radioButtons=a.getElementsByTagName("INPUT"))for(var b=0;b<radioButtons.length;b++)radioButtons[b].checked="";if(options=a.getElementsByTagName("OPTION"))for(var b=0;b<options.length;b++)options[b].selected=!1}}function bp_get_cookies(){for(var a=document.cookie.split(";"),b={},c="bp-",d=0;d<a.length;d++){var e=a[d],f=e.indexOf("="),g=jq.trim(unescape(e.slice(0,f))),h=unescape(e.slice(f+1));0==g.indexOf(c)&&(b[g]=h)}return encodeURIComponent(jq.param(b))}var jq=jQuery,bp_ajax_request=null;jq(document).ready(function(){"-1"==window.location.search.indexOf("new")&&jq("div.forums").length?jq("#new-topic-post").hide():jq("#new-topic-post").show(),bp_init_activity();var a=["members","groups","blogs","forums"];bp_init_objects(a);var b=jq("#whats-new");if(jq.query.get("r")&&b.length){jq("#whats-new-options").animate({height:"70px"}),jq("#whats-new-form textarea").animate({height:"50px"}),jq.scrollTo(b,500,{offset:-125,easing:"easeOutQuad"});var c=b.val();b.val("").focus().val(c)}b.focus(function(){jq("#whats-new-options").animate({height:"70px"}),jq("#whats-new-form textarea").animate({height:"50px"}),jq("#aw-whats-new-submit").prop("disabled",!1);var a=jq("form#whats-new-form");a.hasClass("submitted")&&a.removeClass("submitted")}),b.blur(function(){this.value.match(/\S+/)||(this.value="",jq("#whats-new-options").animate({height:"70px"}),jq("form#whats-new-form textarea").animate({height:"34px"}),jq("#aw-whats-new-submit").prop("disabled",!0))}),jq("#aw-whats-new-submit").on("click",function(){var a=jq(this),b=a.closest("form#whats-new-form");b.children().each(function(){(jq.nodeName(this,"textarea")||jq.nodeName(this,"input"))&&jq(this).prop("disabled",!0)}),jq("div.error").remove(),a.addClass("loading"),a.prop("disabled",!0),b.addClass("submitted");var c="",d=jq("#whats-new-post-in").val(),e=jq("#whats-new").val();return d>0&&(c=jq("#whats-new-post-object").val()),jq.post(ajaxurl,{action:"post_update",cookie:bp_get_cookies(),_wpnonce_post_update:jq("#_wpnonce_post_update").val(),content:e,object:c,item_id:d,_bp_as_nonce:jq("#_bp_as_nonce").val()||""},function(a){if(b.children().each(function(){(jq.nodeName(this,"textarea")||jq.nodeName(this,"input"))&&jq(this).prop("disabled",!1)}),a[0]+a[1]=="-1")b.prepend(a.substr(2,a.length)),jq("#"+b.attr("id")+" div.error").hide().fadeIn(200);else{if(0==jq("ul.activity-list").length&&(jq("div.error").slideUp(100).remove(),jq("#message").slideUp(100).remove(),jq("div.activity").append('<ul id="activity-stream" class="activity-list item-list">')),jq("#activity-stream").prepend(a),jq("#activity-stream li:first").addClass("new-update just-posted"),0!=jq("#latest-update").length){var c=jq("#activity-stream li.new-update .activity-content .activity-inner p").html(),d=jq("#activity-stream li.new-update .activity-content .activity-header p a.view").attr("href"),e=jq("#activity-stream li.new-update .activity-content .activity-inner p").text(),f="";""!=e&&(f=c+" "),f+='<a href="'+d+'" rel="nofollow">'+BP_DTheme.view+"</a>",jq("#latest-update").slideUp(300,function(){jq("#latest-update").html(f),jq("#latest-update").slideDown(300)})}jq("li.new-update").hide().slideDown(300),jq("li.new-update").removeClass("new-update"),jq("#whats-new").val("")}jq("#whats-new-options").animate({height:"0px"}),jq("#whats-new-form textarea").animate({height:"34px"}),jq("#aw-whats-new-submit").prop("disabled",!0).removeClass("loading")}),!1}),jq("div.activity-type-tabs").on("click",function(a){var b=jq(a.target).parent();if("STRONG"==a.target.nodeName||"SPAN"==a.target.nodeName)b=b.parent();else if("A"!=a.target.nodeName)return!1;jq.cookie("bp-activity-oldestpage",1,{path:"/"});var c=b.attr("id").substr(9,b.attr("id").length),d=jq("#activity-filter-select select").val();return"mentions"==c&&jq("#"+b.attr("id")+" a strong").remove(),bp_activity_request(c,d),!1}),jq("#activity-filter-select select").change(function(){var a=jq("div.activity-type-tabs li.selected");if(a.length)var b=a.attr("id").substr(9,a.attr("id").length);else var b=null;var c=jq(this).val();return bp_activity_request(b,c),!1}),jq("div.activity").on("click",function(a){var b=jq(a.target);if(b.hasClass("fav")||b.hasClass("unfav")){var c=b.hasClass("fav")?"fav":"unfav",d=b.closest(".activity-item"),e=d.attr("id").substr(9,d.attr("id").length);return b.addClass("loading"),jq.post(ajaxurl,{action:"activity_mark_"+c,cookie:bp_get_cookies(),id:e},function(a){b.removeClass("loading"),b.fadeOut(200,function(){jq(this).html(a),jq(this).attr("title","fav"==c?BP_DTheme.remove_fav:BP_DTheme.mark_as_fav),jq(this).fadeIn(200)}),"fav"==c?(jq(".item-list-tabs #activity-favs-personal-li").length||(jq(".item-list-tabs #activity-favorites").length||jq(".item-list-tabs ul #activity-mentions").before('<li id="activity-favorites"><a href="#">'+BP_DTheme.my_favs+" <span>0</span></a></li>"),jq(".item-list-tabs ul #activity-favorites span").html(Number(jq(".item-list-tabs ul #activity-favorites span").html())+1)),b.removeClass("fav"),b.addClass("unfav")):(b.removeClass("unfav"),b.addClass("fav"),jq(".item-list-tabs ul #activity-favorites span").html(Number(jq(".item-list-tabs ul #activity-favorites span").html())-1),Number(jq(".item-list-tabs ul #activity-favorites span").html())||(jq(".item-list-tabs ul #activity-favorites").hasClass("selected")&&bp_activity_request(null,null),jq(".item-list-tabs ul #activity-favorites").remove())),"activity-favorites"==jq(".item-list-tabs li.selected").attr("id")&&b.parent().parent().parent().slideUp(100)}),!1}if(b.hasClass("delete-activity")){var f=b.parents("div.activity ul li"),g=f.attr("id").substr(9,f.attr("id").length),h=b.attr("href"),i=h.split("_wpnonce=");return i=i[1],b.addClass("loading"),jq.post(ajaxurl,{action:"delete_activity",cookie:bp_get_cookies(),id:g,_wpnonce:i},function(a){a[0]+a[1]=="-1"?(f.prepend(a.substr(2,a.length)),f.children("#message").hide().fadeIn(300)):f.slideUp(300)}),!1}if(b.hasClass("spam-activity")){var f=b.parents("div.activity ul li");return b.addClass("loading"),jq.post(ajaxurl,{action:"bp_spam_activity",cookie:encodeURIComponent(document.cookie),id:f.attr("id").substr(9,f.attr("id").length),_wpnonce:b.attr("href").split("_wpnonce=")[1]},function(a){a[0]+a[1]==="-1"?(f.prepend(a.substr(2,a.length)),f.children("#message").hide().fadeIn(300)):f.slideUp(300)}),!1}if(b.parent().hasClass("load-more")){jq("#buddypress li.load-more").addClass("loading"),null==jq.cookie("bp-activity-oldestpage")&&jq.cookie("bp-activity-oldestpage",1,{path:"/"});var j=1*jq.cookie("bp-activity-oldestpage")+1,k=[];return jq(".activity-list li.just-posted").each(function(){k.push(jq(this).attr("id").replace("activity-",""))}),jq.post(ajaxurl,{action:"activity_get_older_updates",cookie:bp_get_cookies(),page:j,exclude_just_posted:k.join(",")},function(a){jq("#buddypress li.load-more").removeClass("loading"),jq.cookie("bp-activity-oldestpage",j,{path:"/"}),jq("#buddypress ul.activity-list").append(a.contents),b.parent().hide()},"json"),!1}}),jq("div.activity").on("click",".activity-read-more a",function(a){var b=jq(a.target),c=b.parent().attr("id").split("-"),d=c[3],e=c[0],f="acomment"==e?"acomment-content":"activity-inner",g=jq("#"+e+"-"+d+" ."+f+":first");return jq(b).addClass("loading"),jq.post(ajaxurl,{action:"get_single_activity_content",activity_id:d},function(a){jq(g).slideUp(300).html(a).slideDown(300)}),!1}),jq("form.ac-form").hide(),jq(".activity-comments").length&&bp_legacy_theme_hide_comments(),jq("div.activity").on("click",function(a){var b=jq(a.target);if(b.hasClass("acomment-reply")||b.parent().hasClass("acomment-reply")){b.parent().hasClass("acomment-reply")&&(b=b.parent());var c=b.attr("id");ids=c.split("-");var d=ids[2],e=b.attr("href").substr(10,b.attr("href").length),f=jq("#ac-form-"+d);return f.css("display","none"),f.removeClass("root"),jq(".ac-form").hide(),f.children("div").each(function(){jq(this).hasClass("error")&&jq(this).hide()}),"comment"!=ids[1]?jq("#acomment-"+e).append(f):jq("#activity-"+d+" .activity-comments").append(f),f.parent().hasClass("activity-comments")&&f.addClass("root"),f.slideDown(200),jq.scrollTo(f,500,{offset:-100,easing:"easeOutQuad"}),jq("#ac-form-"+ids[2]+" textarea").focus(),!1}if("ac_form_submit"==b.attr("name")){var f=b.parents("form"),g=f.parent(),h=f.attr("id").split("-");if(g.hasClass("activity-comments"))var i=h[2];else var j=g.attr("id").split("-"),i=j[1];var k=jq("#"+f.attr("id")+" textarea");jq("#"+f.attr("id")+" div.error").hide(),b.addClass("loading").prop("disabled",!0),k.addClass("loading").prop("disabled",!0);var l={action:"new_activity_comment",cookie:bp_get_cookies(),_wpnonce_new_activity_comment:jq("#_wpnonce_new_activity_comment").val(),comment_id:i,form_id:h[2],content:k.val()},m=jq("#_bp_as_nonce_"+i).val();return m&&(l["_bp_as_nonce_"+i]=m),jq.post(ajaxurl,l,function(a){if(b.removeClass("loading"),k.removeClass("loading"),a[0]+a[1]=="-1")f.append(jq(a.substr(2,a.length)).hide().fadeIn(200));else{var c=f.parent();f.fadeOut(200,function(){0==c.children("ul").length&&(c.hasClass("activity-comments")?c.prepend("<ul></ul>"):c.append("<ul></ul>"));var b=jq.trim(a);c.children("ul").append(jq(b).hide().fadeIn(200)),f.children("textarea").val(""),c.parent().addClass("has-comments")}),jq("#"+f.attr("id")+" textarea").val(""),jq("#activity-"+h[2]+" a.acomment-reply span").html(Number(jq("#activity-"+h[2]+" a.acomment-reply span").html())+1);var d=c.find(".show-all").find("a");if(d){var e=jq("li#activity-"+h[2]+" a.acomment-reply span").html();d.html(BP_DTheme.show_x_comments.replace("%d",e))}}jq(b).prop("disabled",!1),jq(k).prop("disabled",!1)}),!1}if(b.hasClass("acomment-delete")){var n=b.attr("href"),o=b.parent().parent(),f=o.parents("div.activity-comments").children("form"),p=n.split("_wpnonce=");p=p[1];var i=n.split("cid=");return i=i[1].split("&"),i=i[0],b.addClass("loading"),jq(".activity-comments ul .error").remove(),o.parents(".activity-comments").append(f),jq.post(ajaxurl,{action:"delete_activity_comment",cookie:bp_get_cookies(),_wpnonce:p,id:i},function(a){if(a[0]+a[1]=="-1")o.prepend(jq(a.substr(2,a.length)).hide().fadeIn(200));else{var b=jq("#"+o.attr("id")+" ul").children("li"),c=0;jq(b).each(function(){jq(this).is(":hidden")||c++}),o.fadeOut(200,function(){o.remove()});var d=jq("#"+o.parents("#activity-stream > li").attr("id")+" a.acomment-reply span"),e=d.html()-(1+c);d.html(e);var f=o.siblings(".show-all").find("a");f&&f.html(BP_DTheme.show_x_comments.replace("%d",e)),0==e&&jq(o.parents("#activity-stream > li")).removeClass("has-comments")}}),!1}if(b.hasClass("spam-activity-comment")){var n=b.attr("href"),o=b.parent().parent();return b.addClass("loading"),jq(".activity-comments ul div.error").remove(),o.parents(".activity-comments").append(o.parents(".activity-comments").children("form")),jq.post(ajaxurl,{action:"bp_spam_activity_comment",cookie:encodeURIComponent(document.cookie),_wpnonce:n.split("_wpnonce=")[1],id:n.split("cid=")[1].split("&")[0]},function(a){if(a[0]+a[1]=="-1")o.prepend(jq(a.substr(2,a.length)).hide().fadeIn(200));else{var b=jq("#"+o.attr("id")+" ul").children("li"),c=0;jq(b).each(function(){jq(this).is(":hidden")||c++}),o.fadeOut(200);var d=o.parents("#activity-stream > li");jq("#"+d.attr("id")+" a.acomment-reply span").html(jq("#"+d.attr("id")+" a.acomment-reply span").html()-(1+c))}}),!1}return b.parent().hasClass("show-all")?(b.parent().addClass("loading"),setTimeout(function(){b.parent().parent().children("li").fadeIn(200,function(){b.parent().remove()})},600),!1):b.hasClass("ac-reply-cancel")?(jq(b).closest(".ac-form").slideUp(200),!1):void 0}),jq(document).keydown(function(a){if(a=a||window.event,a.target?element=a.target:a.srcElement&&(element=a.srcElement),3==element.nodeType&&(element=element.parentNode),1!=a.ctrlKey&&1!=a.altKey&&1!=a.metaKey){var b=a.keyCode?a.keyCode:a.which;27==b&&"TEXTAREA"==element.tagName&&jq(element).hasClass("ac-input")&&jq(element).parent().parent().parent().slideUp(200)}}),jq(".dir-search").on("click",function(a){if(!jq(this).hasClass("no-ajax")){var b=jq(a.target);if("submit"==b.attr("type")){var c=jq(".item-list-tabs li.selected").attr("id").split("-"),d=c[0];return bp_filter_request(d,jq.cookie("bp-"+d+"-filter"),jq.cookie("bp-"+d+"-scope"),"div."+d,b.parent().children("label").children("input").val(),1,jq.cookie("bp-"+d+"-extras")),!1}}}),jq("div.item-list-tabs").on("click",function(a){if(!jq(this).hasClass("no-ajax")){var b="SPAN"==a.target.nodeName?a.target.parentNode:a.target,c=jq(b).parent();if("LI"==c[0].nodeName&&!c.hasClass("last")){var d=c.attr("id").split("-"),e=d[0];if("activity"==e)return!1;var f=d[1],g=jq("#"+e+"-order-select select").val(),h=jq("#"+e+"_search").val();return bp_filter_request(e,g,f,"div."+e,h,1,jq.cookie("bp-"+e+"-extras")),!1}}}),jq("li.filter select").change(function(){if(jq(".item-list-tabs li.selected").length)var a=jq(".item-list-tabs li.selected");else var a=jq(this);var b=a.attr("id").split("-"),c=b[0],d=b[1],e=jq(this).val(),f=!1;return jq(".dir-search input").length&&(f=jq(".dir-search input").val()),"friends"==c&&(c="members"),bp_filter_request(c,e,d,"div."+c,f,1,jq.cookie("bp-"+c+"-extras")),!1}),jq("#buddypress").on("click",function(a){var b=jq(a.target);if(b.hasClass("button"))return!0;if(b.parent().parent().hasClass("pagination")&&!b.parent().parent().hasClass("no-ajax")){if(b.hasClass("dots")||b.hasClass("current"))return!1;if(jq(".item-list-tabs li.selected").length)var c=jq(".item-list-tabs li.selected");else var c=jq("li.filter select");var d=1,e=c.attr("id").split("-"),f=e[0],g=!1,h=jq(b).closest(".pagination-links").attr("id");if(jq("div.dir-search input").length&&(g=jq(".dir-search input").val()),jq(b).hasClass("next"))var d=Number(jq(".pagination span.current").html())+1;else if(jq(b).hasClass("prev"))var d=Number(jq(".pagination span.current").html())-1;else var d=Number(jq(b).html());if(-1!==h.indexOf("pag-bottom"))var i="pag-bottom";else var i=null;return bp_filter_request(f,jq.cookie("bp-"+f+"-filter"),jq.cookie("bp-"+f+"-scope"),"div."+f,g,d,jq.cookie("bp-"+f+"-extras"),i),!1}}),jq("a.show-hide-new").on("click",function(){return jq("#new-topic-post").length?(jq("#new-topic-post").is(":visible")?jq("#new-topic-post").slideUp(200):jq("#new-topic-post").slideDown(200,function(){jq("#topic_title").focus()}),!1):!1}),jq("#submit_topic_cancel").on("click",function(){return jq("#new-topic-post").length?(jq("#new-topic-post").slideUp(200),!1):!1}),jq("#forum-directory-tags a").on("click",function(){return bp_filter_request("forums","tags",jq.cookie("bp-forums-scope"),"div.forums",jq(this).html().replace(/&nbsp;/g,"-"),1,jq.cookie("bp-forums-extras")),!1}),jq("#invite-list input").on("click",function(){jq(".ajax-loader").toggle();var a=jq(this).val();if(1==jq(this).prop("checked"))var b="invite";else var b="uninvite";jq(".item-list-tabs li.selected").addClass("loading"),jq.post(ajaxurl,{action:"groups_invite_user",friend_action:b,cookie:bp_get_cookies(),_wpnonce:jq("#_wpnonce_invite_uninvite_user").val(),friend_id:a,group_id:jq("#group_id").val()},function(c){jq("#message")&&jq("#message").hide(),jq(".ajax-loader").toggle(),"invite"==b?jq("#friend-list").append(c):"uninvite"==b&&jq("#friend-list li#uid-"+a).remove(),jq(".item-list-tabs li.selected").removeClass("loading")})}),jq("#friend-list").on("click","li a.remove",function(){jq(".ajax-loader").toggle();var a=jq(this).attr("id");return a=a.split("-"),a=a[1],jq.post(ajaxurl,{action:"groups_invite_user",friend_action:"uninvite",cookie:bp_get_cookies(),_wpnonce:jq("#_wpnonce_invite_uninvite_user").val(),friend_id:a,group_id:jq("#group_id").val()},function(){jq(".ajax-loader").toggle(),jq("#friend-list #uid-"+a).remove(),jq("#invite-list #f-"+a).prop("checked",!1)}),!1}),jq(".field-visibility-settings").hide(),jq(".visibility-toggle-link").on("click",function(){var a=jq(this).parent();return jq(a).fadeOut(600,function(){jq(a).siblings(".field-visibility-settings").slideDown(400)}),!1}),jq(".field-visibility-settings-close").on("click",function(){var a=jq(this).parent(),b=a.find("input:checked").parent().text();return a.slideUp(400,function(){a.siblings(".field-visibility-settings-toggle").fadeIn(800),a.siblings(".field-visibility-settings-toggle").children(".current-visibility-level").html(b)}),!1}),jq("#profile-edit-form input:not(:submit), #profile-edit-form textarea, #profile-edit-form select, #signup_form input:not(:submit), #signup_form textarea, #signup_form select").change(function(){var a=!0;jq("#profile-edit-form input:submit, #signup_form input:submit").on("click",function(){a=!1}),window.onbeforeunload=function(){return a?BP_DTheme.unsaved_changes:void 0}}),jq("#friend-list a.accept, #friend-list a.reject").on("click",function(){var a=jq(this),b=jq(this).parents("#friend-list li"),c=jq(this).parents("li div.action"),d=b.attr("id").substr(11,b.attr("id").length),e=a.attr("href"),f=e.split("_wpnonce=");if(f=f[1],jq(this).hasClass("accepted")||jq(this).hasClass("rejected"))return!1;if(jq(this).hasClass("accept")){var g="accept_friendship";c.children("a.reject").css("visibility","hidden")}else{var g="reject_friendship";c.children("a.accept").css("visibility","hidden")}return a.addClass("loading"),jq.post(ajaxurl,{action:g,cookie:bp_get_cookies(),id:d,_wpnonce:f},function(d){a.removeClass("loading"),d[0]+d[1]=="-1"?(b.prepend(d.substr(2,d.length)),b.children("#message").hide().fadeIn(200)):a.fadeOut(100,function(){jq(this).hasClass("accept")?(c.children("a.reject").hide(),jq(this).html(BP_DTheme.accepted).contents().unwrap()):(c.children("a.accept").hide(),jq(this).html(BP_DTheme.rejected).contents().unwrap())})}),!1}),jq("#members-dir-list").on("click",".friendship-button a",function(){jq(this).parent().addClass("loading");var a=jq(this).attr("id");a=a.split("-"),a=a[1];var b=jq(this).attr("href");b=b.split("?_wpnonce="),b=b[1].split("&"),b=b[0];var c=jq(this);return jq.post(ajaxurl,{action:"addremove_friend",cookie:bp_get_cookies(),fid:a,_wpnonce:b},function(a){var b=c.attr("rel"),d=c.parent();"add"==b?jq(d).fadeOut(200,function(){d.removeClass("add_friend"),d.removeClass("loading"),d.addClass("pending_friend"),d.fadeIn(200).html(a)}):"remove"==b&&jq(d).fadeOut(200,function(){d.removeClass("remove_friend"),d.removeClass("loading"),d.addClass("add"),d.fadeIn(200).html(a)})}),!1}),jq("#buddypress").on("click",".group-button .leave-group",function(){return 0==confirm(BP_DTheme.leave_group_confirm)?!1:void 0}),jq("#groups-dir-list").on("click",".group-button a",function(){var a=jq(this).parent().attr("id");a=a.split("-"),a=a[1];var b=jq(this).attr("href");b=b.split("?_wpnonce="),b=b[1].split("&"),b=b[0];var c=jq(this);return c.hasClass("leave-group")&&0==confirm(BP_DTheme.leave_group_confirm)?!1:(jq.post(ajaxurl,{action:"joinleave_group",cookie:bp_get_cookies(),gid:a,_wpnonce:b},function(a){var b=c.parent();jq("body.directory").length?jq(b).fadeOut(200,function(){b.fadeIn(200).html(a);var d=jq("#groups-personal span"),e=1;c.hasClass("leave-group")?(b.hasClass("hidden")&&b.closest("li").slideUp(200),e=0):c.hasClass("request-membership")&&(e=!1),d.length&&e!==!1&&(e?d.text((d.text()>>0)+1):d.text((d.text()>>0)-1))}):location.href=location.href}),!1)}),jq("#buddypress").on("click",".pending",function(){return!1}),jq(".message-search").on("click",function(a){if(!jq(this).hasClass("no-ajax")){var b=jq(a.target);if("submit"==b.attr("type")){var c="messages";return bp_filter_request(c,jq.cookie("bp-"+c+"-filter"),jq.cookie("bp-"+c+"-scope"),"div."+c,b.parent().children("label").children("input").val(),1,jq.cookie("bp-"+c+"-extras")),!1}}}),jq("#send_reply_button").click(function(){var a=jq("#messages_order").val()||"ASC",b=jq("#message-recipients").offset(),c=jq("#send_reply_button");return jq(c).addClass("loading"),jq.post(ajaxurl,{action:"messages_send_reply",cookie:bp_get_cookies(),_wpnonce:jq("#send_message_nonce").val(),content:jq("#message_content").val(),send_to:jq("#send_to").val(),subject:jq("#subject").val(),thread_id:jq("#thread_id").val()},function(d){d[0]+d[1]=="-1"?jq("#send-reply").prepend(d.substr(2,d.length)):(jq("#send-reply #message").remove(),jq("#message_content").val(""),"ASC"==a?jq("#send-reply").before(d):(jq("#message-recipients").after(d),jq(window).scrollTop(b.top)),jq(".new-message").hide().slideDown(200,function(){jq(".new-message").removeClass("new-message")})),jq(c).removeClass("loading")}),!1}),jq("#mark_as_read, #mark_as_unread").click(function(){var a="",b=jq("#message-threads tr td input[type='checkbox']");if("mark_as_unread"==jq(this).attr("id"))var c="read",d="unread",e=1,f="inline",g="messages_markunread";else var c="unread",d="read",e=0,f="none",g="messages_markread";return b.each(function(g){if(jq(this).is(":checked")&&jq("#m-"+jq(this).attr("value")).hasClass(c)){a+=jq(this).attr("value"),jq("#m-"+jq(this).attr("value")).removeClass(c),jq("#m-"+jq(this).attr("value")).addClass(d);{jq("#m-"+jq(this).attr("value")+" td span.unread-count").html()}jq("#m-"+jq(this).attr("value")+" td span.unread-count").html(e),jq("#m-"+jq(this).attr("value")+" td span.unread-count").css("display",f);var h=jq("tr.unread").length;jq("#user-messages span").html(h),g!=b.length-1&&(a+=",")}}),jq.post(ajaxurl,{action:g,thread_ids:a}),!1}),jq("body.messages #item-body div.messages").on("change","#message-type-select",function(){var a=this.value,b=jq("td input[type='checkbox']");b.each(function(a){b[a].checked=""});var c="checked";switch(a){case"unread":b=jq("tr.unread td input[type='checkbox']");break;case"read":b=jq("tr.read td input[type='checkbox']");break;case"":c=""}b.each(function(a){b[a].checked=c})}),jq("body.messages #item-body div.messages").on("click",".messages-options-nav a",function(){return-1==jq.inArray(this.id),Array("delete_sentbox_messages","delete_inbox_messages")?void 0:(checkboxes_tosend="",checkboxes=jq("#message-threads tr td input[type='checkbox']"),jq("#message").remove(),jq(this).addClass("loading"),jq(checkboxes).each(function(){jq(this).is(":checked")&&(checkboxes_tosend+=jq(this).attr("value")+",")}),""==checkboxes_tosend?(jq(this).removeClass("loading"),!1):(jq.post(ajaxurl,{action:"messages_delete",thread_ids:checkboxes_tosend},function(a){a[0]+a[1]=="-1"?jq("#message-threads").prepend(a.substr(2,a.length)):(jq("#message-threads").before('<div id="message" class="updated"><p>'+a+"</p></div>"),jq(checkboxes).each(function(){jq(this).is(":checked")&&(jq(this).attr("checked",!1),jq(this).parent().parent().fadeOut(150))})),jq("#message").hide().slideDown(150),jq("#delete_inbox_messages, #delete_sentbox_messages").removeClass("loading")}),!1))}),jq("#close-notice").on("click",function(){return jq(this).addClass("loading"),jq("#sidebar div.error").remove(),jq.post(ajaxurl,{action:"messages_close_notice",notice_id:jq(".notice").attr("rel").substr(2,jq(".notice").attr("rel").length)},function(a){jq("#close-notice").removeClass("loading"),a[0]+a[1]=="-1"?(jq(".notice").prepend(a.substr(2,a.length)),jq("#sidebar div.error").hide().fadeIn(200)):jq(".notice").slideUp(100)}),!1}),jq("#wp-admin-bar ul.main-nav li, #nav li").mouseover(function(){jq(this).addClass("sfhover")}),jq("#wp-admin-bar ul.main-nav li, #nav li").mouseout(function(){jq(this).removeClass("sfhover")}),jq("a.logout").on("click",function(){jq.cookie("bp-activity-scope",null,{path:"/"}),jq.cookie("bp-activity-filter",null,{path:"/"}),jq.cookie("bp-activity-oldestpage",null,{path:"/"});var a=["members","groups","blogs","forums"];jq(a).each(function(b){jq.cookie("bp-"+a[b]+"-scope",null,{path:"/"}),jq.cookie("bp-"+a[b]+"-filter",null,{path:"/"}),jq.cookie("bp-"+a[b]+"-extras",null,{path:"/"})})}),jq("body").hasClass("no-js")&&jq("body").attr("class",jq("body").attr("class").replace(/no-js/,"js"))}),function(a){function b(a){return"object"==typeof a?a:{top:a,left:a}}var c=a.scrollTo=function(b,c,d){a(window).scrollTo(b,c,d)};c.defaults={axis:"xy",duration:parseFloat(a.fn.jquery)>=1.3?0:1,limit:!0},c.window=function(){return a(window)._scrollable()},a.fn._scrollable=function(){return this.map(function(){var b=this,c=!b.nodeName||-1!=a.inArray(b.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!c)return b;var d=(b.contentWindow||b).document||b.ownerDocument||b;return/webkit/i.test(navigator.userAgent)||"BackCompat"==d.compatMode?d.body:d.documentElement})},a.fn.scrollTo=function(d,e,f){return"object"==typeof e&&(f=e,e=0),"function"==typeof f&&(f={onAfter:f}),"max"==d&&(d=9e9),f=a.extend({},c.defaults,f),e=e||f.duration,f.queue=f.queue&&f.axis.length>1,f.queue&&(e/=2),f.offset=b(f.offset),f.over=b(f.over),this._scrollable().each(function(){function g(a){j.animate(l,e,f.easing,a&&function(){a.call(this,d,f)})}if(null!=d){var h,i=this,j=a(i),k=d,l={},m=j.is("html,body");switch(typeof k){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);break}if(k=a(k,this),!k.length)return;case"object":(k.is||k.style)&&(h=(k=a(k)).offset())}a.each(f.axis.split(""),function(a,b){var d="x"==b?"Left":"Top",e=d.toLowerCase(),n="scroll"+d,o=i[n],p=c.max(i,b);if(h)l[n]=h[e]+(m?0:o-j.offset()[e]),f.margin&&(l[n]-=parseInt(k.css("margin"+d))||0,l[n]-=parseInt(k.css("border"+d+"Width"))||0),l[n]+=f.offset[e]||0,f.over[e]&&(l[n]+=k["x"==b?"width":"height"]()*f.over[e]);else{var q=k[e];l[n]=q.slice&&"%"==q.slice(-1)?parseFloat(q)/100*p:q}f.limit&&/^\d+$/.test(l[n])&&(l[n]=l[n]<=0?0:Math.min(l[n],p)),!a&&f.queue&&(o!=l[n]&&g(f.onAfterFirst),delete l[n])}),g(f.onAfter)}}).end()},c.max=function(b,c){var d="x"==c?"Width":"Height",e="scroll"+d;if(!a(b).is("html,body"))return b[e]-a(b)[d.toLowerCase()]();var f="client"+d,g=b.ownerDocument.documentElement,h=b.ownerDocument.body;return Math.max(g[e],h[e])-Math.min(g[f],h[f])}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*e-f)*Math.PI/g)+d+c
},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=.3*e*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.cookie=function(a,b,c){if("undefined"==typeof b){var d=null;if(document.cookie&&""!=document.cookie)for(var e=document.cookie.split(";"),f=0;f<e.length;f++){var g=jQuery.trim(e[f]);if(g.substring(0,a.length+1)==a+"="){d=decodeURIComponent(g.substring(a.length+1));break}}return d}c=c||{},null===b&&(b="",c.expires=-1);var h="";if(c.expires&&("number"==typeof c.expires||c.expires.toUTCString)){var i;"number"==typeof c.expires?(i=new Date,i.setTime(i.getTime()+24*c.expires*60*60*1e3)):i=c.expires,h="; expires="+i.toUTCString()}var j=c.path?"; path="+c.path:"",k=c.domain?"; domain="+c.domain:"",l=c.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(b),h,j,k,l].join("")},eval(function(a,b,c,d,e,f){if(e=function(a){return(b>a?"":e(parseInt(a/b)))+((a%=b)>35?String.fromCharCode(a+29):a.toString(36))},!"".replace(/^/,String)){for(;c--;)f[e(c)]=d[c]||e(c);d=[function(a){return f[a]}],e=function(){return"\\w+"},c=1}for(;c--;)d[c]&&(a=a.replace(new RegExp("\\b"+e(c)+"\\b","g"),d[c]));return a}('M 6(A){4 $11=A.11||\'&\';4 $V=A.V===r?r:j;4 $1p=A.1p===r?\'\':\'[]\';4 $13=A.13===r?r:j;4 $D=$13?A.D===j?"#":"?":"";4 $15=A.15===r?r:j;v.1o=M 6(){4 f=6(o,t){8 o!=1v&&o!==x&&(!!t?o.1t==t:j)};4 14=6(1m){4 m,1l=/\\[([^[]*)\\]/g,T=/^([^[]+)(\\[.*\\])?$/.1r(1m),k=T[1],e=[];19(m=1l.1r(T[2]))e.u(m[1]);8[k,e]};4 w=6(3,e,7){4 o,y=e.1b();b(I 3!=\'X\')3=x;b(y===""){b(!3)3=[];b(f(3,L)){3.u(e.h==0?7:w(x,e.z(0),7))}n b(f(3,1a)){4 i=0;19(3[i++]!=x);3[--i]=e.h==0?7:w(3[i],e.z(0),7)}n{3=[];3.u(e.h==0?7:w(x,e.z(0),7))}}n b(y&&y.T(/^\\s*[0-9]+\\s*$/)){4 H=1c(y,10);b(!3)3=[];3[H]=e.h==0?7:w(3[H],e.z(0),7)}n b(y){4 H=y.B(/^\\s*|\\s*$/g,"");b(!3)3={};b(f(3,L)){4 18={};1w(4 i=0;i<3.h;++i){18[i]=3[i]}3=18}3[H]=e.h==0?7:w(3[H],e.z(0),7)}n{8 7}8 3};4 C=6(a){4 p=d;p.l={};b(a.C){v.J(a.Z(),6(5,c){p.O(5,c)})}n{v.J(1u,6(){4 q=""+d;q=q.B(/^[?#]/,\'\');q=q.B(/[;&]$/,\'\');b($V)q=q.B(/[+]/g,\' \');v.J(q.Y(/[&;]/),6(){4 5=1e(d.Y(\'=\')[0]||"");4 c=1e(d.Y(\'=\')[1]||"");b(!5)8;b($15){b(/^[+-]?[0-9]+\\.[0-9]*$/.1d(c))c=1A(c);n b(/^[+-]?[0-9]+$/.1d(c))c=1c(c,10)}c=(!c&&c!==0)?j:c;b(c!==r&&c!==j&&I c!=\'1g\')c=c;p.O(5,c)})})}8 p};C.1H={C:j,1G:6(5,1f){4 7=d.Z(5);8 f(7,1f)},1h:6(5){b(!f(5))8 d.l;4 K=14(5),k=K[0],e=K[1];4 3=d.l[k];19(3!=x&&e.h!=0){3=3[e.1b()]}8 I 3==\'1g\'?3:3||""},Z:6(5){4 3=d.1h(5);b(f(3,1a))8 v.1E(j,{},3);n b(f(3,L))8 3.z(0);8 3},O:6(5,c){4 7=!f(c)?x:c;4 K=14(5),k=K[0],e=K[1];4 3=d.l[k];d.l[k]=w(3,e.z(0),7);8 d},w:6(5,c){8 d.N().O(5,c)},1s:6(5){8 d.O(5,x).17()},1z:6(5){8 d.N().1s(5)},1j:6(){4 p=d;v.J(p.l,6(5,7){1y p.l[5]});8 p},1F:6(Q){4 D=Q.B(/^.*?[#](.+?)(?:\\?.+)?$/,"$1");4 S=Q.B(/^.*?[?](.+?)(?:#.+)?$/,"$1");8 M C(Q.h==S.h?\'\':S,Q.h==D.h?\'\':D)},1x:6(){8 d.N().1j()},N:6(){8 M C(d)},17:6(){6 F(G){4 R=I G=="X"?f(G,L)?[]:{}:G;b(I G==\'X\'){6 1k(o,5,7){b(f(o,L))o.u(7);n o[5]=7}v.J(G,6(5,7){b(!f(7))8 j;1k(R,5,F(7))})}8 R}d.l=F(d.l);8 d},1B:6(){8 d.N().17()},1D:6(){4 i=0,U=[],W=[],p=d;4 16=6(E){E=E+"";b($V)E=E.B(/ /g,"+");8 1C(E)};4 1n=6(1i,5,7){b(!f(7)||7===r)8;4 o=[16(5)];b(7!==j){o.u("=");o.u(16(7))}1i.u(o.P(""))};4 F=6(R,k){4 12=6(5){8!k||k==""?[5].P(""):[k,"[",5,"]"].P("")};v.J(R,6(5,7){b(I 7==\'X\')F(7,12(5));n 1n(W,12(5),7)})};F(d.l);b(W.h>0)U.u($D);U.u(W.P($11));8 U.P("")}};8 M C(1q.S,1q.D)}}(v.1o||{});',62,106,"|||target|var|key|function|value|return|||if|val|this|tokens|is||length||true|base|keys||else||self||false|||push|jQuery|set|null|token|slice|settings|replace|queryObject|hash|str|build|orig|index|typeof|each|parsed|Array|new|copy|SET|join|url|obj|search|match|queryString|spaces|chunks|object|split|get||separator|newKey|prefix|parse|numbers|encode|COMPACT|temp|while|Object|shift|parseInt|test|decodeURIComponent|type|number|GET|arr|EMPTY|add|rx|path|addFields|query|suffix|location|exec|REMOVE|constructor|arguments|undefined|for|empty|delete|remove|parseFloat|compact|encodeURIComponent|toString|extend|load|has|prototype".split("|"),0,{}));
//# sourceMappingURL=/wordpress/wp-content/themes/pages-theme-roots/buddypress/js/buddypress.js.map
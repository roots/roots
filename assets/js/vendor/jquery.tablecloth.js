/*!
 * bootstrap-select v1.0
 * http://silviomoreto.github.io/bootstrap-select/
 *
 * Copyright 2013 bootstrap-select
 * Licensed under the MIT license
 */
!function(b){var a=function(d,c,f){if(f){f.stopPropagation();f.preventDefault()}this.$element=b(d);this.$newElement=null;this.button=null;this.$menu=null;this.options=b.extend({},b.fn.selectpicker.defaults,this.$element.data(),typeof c=="object"&&c);if(this.options.title==null){this.options.title=this.$element.attr("title")}this.val=a.prototype.val;this.render=a.prototype.render;this.refresh=a.prototype.refresh;this.setStyle=a.prototype.setStyle;this.selectAll=a.prototype.selectAll;this.deselectAll=a.prototype.deselectAll;this.init()};a.prototype={constructor:a,init:function(c){this.$element.hide();this.multiple=this.$element.prop("multiple");var f=this.$element.attr("id");this.$newElement=this.createView();this.$element.after(this.$newElement);this.$menu=this.$newElement.find("> .dropdown-menu");this.button=this.$newElement.find("> button");if(f!==undefined){var d=this;this.button.attr("data-id",f);b('label[for="'+f+'"]').click(function(){d.button.focus()})}if(this.multiple){this.$newElement.addClass("show-tick")}this.checkDisabled();this.checkTabIndex();this.clickListener();this.render();this.liHeight();this.setWidth();this.setStyle();if(this.options.container){this.selectPosition()}},createDropdown:function(){var c="<div class='btn-group bootstrap-select'><button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'><div class='filter-option pull-left'></div>&nbsp;<div class='caret'></div></button><div class='dropdown-menu open'><ul class='dropdown-menu inner' role='menu'></ul></div></div>";return b(c)},createView:function(){var c=this.createDropdown();var d=this.createLi();c.find("ul").append(d);return c},reloadLi:function(){this.destroyLi();var c=this.createLi();this.$newElement.find("ul").append(c)},destroyLi:function(){this.$newElement.find("li").remove()},createLi:function(){var e=this,d=[],c="";this.$element.find("option").each(function(h){var j=b(this);var g=j.attr("class")||"";var i=j.attr("style")||"";var n=j.data("content")?j.data("content"):j.html();var l=j.data("subtext")!==undefined?'<small class="muted">'+j.data("subtext")+"</small>":"";var k=j.data("icon")!==undefined?'<i class="'+j.data("icon")+'"></i> ':"";if(k!==""&&(j.is(":disabled")||j.parent().is(":disabled"))){k="<span>"+k+"</span>"}if(!j.data("content")){n=k+'<span class="text">'+n+l+"</span>"}if(e.options.hideDisabled&&(j.is(":disabled")||j.parent().is(":disabled"))){d.push('<a style="min-height: 0; padding: 0"></a>')}else{if(j.parent().is("optgroup")&&j.data("divider")!=true){if(j.index()==0){var m=j.parent().attr("label");var o=j.parent().data("subtext")!==undefined?'<small class="muted">'+j.parent().data("subtext")+"</small>":"";var f=j.parent().data("icon")?'<i class="'+j.parent().data("icon")+'"></i> ':"";m=f+'<span class="text">'+m+o+"</span>";if(j[0].index!=0){d.push('<div class="div-contain"><div class="divider"></div></div><dt>'+m+"</dt>"+e.createA(n,"opt "+g,i))}else{d.push("<dt>"+m+"</dt>"+e.createA(n,"opt "+g,i))}}else{d.push(e.createA(n,"opt "+g,i))}}else{if(j.data("divider")==true){d.push('<div class="div-contain"><div class="divider"></div></div>')}else{if(b(this).data("hidden")==true){d.push("")}else{d.push(e.createA(n,g,i))}}}}});b.each(d,function(f,g){c+="<li rel="+f+">"+g+"</li>"});if(!this.multiple&&this.$element.find("option:selected").length==0&&!e.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return b(c)},createA:function(e,c,d){return'<a tabindex="0" class="'+c+'" style="'+d+'">'+e+'<i class="icon-ok check-mark"></i></a>'},render:function(){var g=this;this.$element.find("option").each(function(h){g.setDisabled(h,b(this).is(":disabled")||b(this).parent().is(":disabled"));g.setSelected(h,b(this).is(":selected"))});var f=this.$element.find("option:selected").map(function(h,k){var l=b(this);var j=l.data("icon")&&g.options.showIcon?'<i class="'+l.data("icon")+'"></i> ':"";var i;if(g.options.showSubtext&&l.attr("data-subtext")&&!g.multiple){i=' <small class="muted">'+l.data("subtext")+"</small>"}else{i=""}if(l.data("content")&&g.options.showContent){return l.data("content")}else{if(l.attr("title")!=undefined){return l.attr("title")}else{return j+l.html()+i}}}).toArray();var e=!this.multiple?f[0]:f.join(", ");if(g.multiple&&g.options.selectedTextFormat.indexOf("count")>-1){var c=g.options.selectedTextFormat.split(">");var d=this.options.hideDisabled?":not([disabled])":"";if((c.length>1&&f.length>c[1])||(c.length==1&&f.length>=2)){e=g.options.countSelectedText.replace("{0}",f.length).replace("{1}",this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+d).length)}}if(!e){e=g.options.title!=undefined?g.options.title:g.options.noneSelectedText}g.$newElement.find(".filter-option").html(e)},setStyle:function(e,d){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi,""))}var c=e?e:this.options.style;if(d=="add"){this.button.addClass(c)}else{this.button.removeClass(this.options.style);this.button.addClass(c)}},liHeight:function(){var d=this.$newElement.clone();d.appendTo("body");var c=d.addClass("open").find(".dropdown-menu li > a").outerHeight();d.remove();this.$newElement.data("liHeight",c)},setSize:function(){var i=this,e=this.$newElement.find("> .dropdown-menu"),h=e.find(".inner"),k=h.find("li > a"),j=this.$newElement.outerHeight(),n=this.$newElement.data("liHeight"),g=e.find("li .divider").outerHeight(true),c=parseInt(e.css("padding-top"))+parseInt(e.css("padding-bottom"))+parseInt(e.css("border-top-width"))+parseInt(e.css("border-bottom-width")),d=this.options.hideDisabled?":not(.disabled)":"",f;if(this.options.size=="auto"){var o=function(){var r=i.$newElement.offset().top;var p=r-b(window).scrollTop();var u=b(window).height();var q=c+parseInt(e.css("margin-top"))+parseInt(e.css("margin-bottom"))+2;var t=u-p-j-q;var s;f=t;if(i.$newElement.hasClass("dropup")){f=p-q}if((e.find("li").length+e.find("dt").length)>3){s=n*3+q-2}else{s=0}e.css({"max-height":f+"px",overflow:"hidden","min-height":s+"px"});h.css({"max-height":(f-c)+"px","overflow-y":"auto"})};o();b(window).resize(o);b(window).scroll(o)}else{if(this.options.size&&this.options.size!="auto"&&e.find("li"+d).length>this.options.size){var m=e.find("li"+d+" > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index();var l=e.find("li").slice(0,m+1).find(".div-contain").length;f=n*this.options.size+l*g+c;e.css({"max-height":f+"px",overflow:"hidden"});h.css({"max-height":(f-c)+"px","overflow-y":"auto"})}}},setWidth:function(){var d=this.$newElement.find("> .dropdown-menu");if(this.options.width=="auto"){d.css("min-width","0");var c=d.css("width");this.$newElement.css("width",c)}else{if(this.options.width){this.$newElement.css("width",this.options.width)}}},selectPosition:function(){var h=this,d="<div />",e=b(d),g,f,c=function(i){e.addClass(i.attr("class").replace(/open/gi,""));g=i.offset();f=i[0].offsetHeight;e.css({top:g.top+f,left:g.left,width:i[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){c(b(this));e.toggleClass("open");e.append(h.$menu);e.appendTo(h.options.container);return false});b(window).resize(function(){c(h.$newElement)});b(window).scroll(function(){c(h.$newElement)});b("html").on("click",function(){e.removeClass("open")})},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement);if(this.options.container){this.$menu.hide()}},refresh:function(){this.reloadLi();this.render();this.setWidth();this.setStyle();this.checkDisabled()},setSelected:function(c,d){this.$menu.find("li").eq(c).toggleClass("selected",d)},setDisabled:function(c,d){if(d){this.$menu.find("li").eq(c).addClass("disabled").find("a").attr("href","#").attr("tabindex",-1)}else{this.$menu.find("li").eq(c).removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)}},isDisabled:function(){return this.$element.is(":disabled")||this.$element.attr("readonly")},checkDisabled:function(){var c=this;if(this.isDisabled()){this.button.addClass("disabled");this.button.attr("tabindex","-1")}else{if(!this.isDisabled()&&this.button.hasClass("disabled")){this.button.removeClass("disabled");this.button.removeAttr("tabindex")}}this.button.click(function(){if(c.isDisabled()){return false}})},checkTabIndex:function(){if(this.$element.is("[tabindex]")){var c=this.$element.attr("tabindex");this.button.attr("tabindex",c)}},clickListener:function(){var c=this;b("body").on("touchstart.dropdown",".dropdown-menu",function(d){d.stopPropagation()});this.$newElement.on("click",function(){c.setSize()});this.$menu.on("click","li a",function(j){var d=b(this).parent().index(),i=b(this).parent(),h=c.$element.val();if(c.multiple){j.stopPropagation()}j.preventDefault();if(c.$element.not(":disabled")&&!b(this).parent().hasClass("disabled")){if(!c.multiple){c.$element.find("option").prop("selected",false);c.$element.find("option").eq(d).prop("selected",true)}else{var g=c.$element.find("option").eq(d);var f=g.prop("selected");g.prop("selected",!f)}c.button.focus();if(h!=c.$element.val()){c.$element.change()}}});this.$menu.on("click","li.disabled a, li dt, li .div-contain",function(d){d.preventDefault();d.stopPropagation();c.button.focus()});this.$element.on("change",function(d){c.render()})},val:function(c){if(c!=undefined){this.$element.val(c);this.$element.change();return this.$element}else{return this.$element.val()}},selectAll:function(){this.$element.find("option").prop("selected",true).attr("selected","selected");this.render()},deselectAll:function(){this.$element.find("option").prop("selected",false).removeAttr("selected");this.render()},keydown:function(n){var o,m,h,l,j,i,p,d,g;o=b(this);h=o.parent();m=b("[role=menu] li:not(.divider):visible a",h);if(!m.length){return}if(/(38|40)/.test(n.keyCode)){l=m.index(m.filter(":focus"));i=m.parent(":not(.disabled)").first().index();p=m.parent(":not(.disabled)").last().index();j=m.eq(l).parent().nextAll(":not(.disabled)").eq(0).index();d=m.eq(l).parent().prevAll(":not(.disabled)").eq(0).index();g=m.eq(j).parent().prevAll(":not(.disabled)").eq(0).index();if(n.keyCode==38){if(l!=g&&l>d){l=d}if(l<i){l=i}}if(n.keyCode==40){if(l!=g&&l<j){l=j}if(l>p){l=p}}m.eq(l).focus()}else{var f={48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};var c=[];m.each(function(){if(b(this).parent().is(":not(.disabled)")){if(b.trim(b(this).text().toLowerCase()).substring(0,1)==f[n.keyCode]){c.push(b(this).parent().index())}}});var k=b(document).data("keycount");k++;b(document).data("keycount",k);var q=b.trim(b(":focus").text().toLowerCase()).substring(0,1);if(q!=f[n.keyCode]){k=1;b(document).data("keycount",k)}else{if(k>=c.length){b(document).data("keycount",0)}}m.eq(c[k-1]).focus()}if(/(13)/.test(n.keyCode)){b(":focus").click();h.addClass("open");b(document).data("keycount",0)}},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},destroy:function(){this.$newElement.remove();this.$element.remove()}};b.fn.selectpicker=function(e,f){var c=arguments;var g;var d=this.each(function(){if(b(this).is("select")){var m=b(this),l=m.data("selectpicker"),h=typeof e=="object"&&e;if(!l){m.data("selectpicker",(l=new a(this,h,f)))}else{if(h){for(var j in h){l.options[j]=h[j]}}}if(typeof e=="string"){var k=e;if(l[k] instanceof Function){[].shift.apply(c);g=l[k].apply(l,c)}else{g=l.options[k]}}}});if(g!=undefined){return g}else{return d}};b.fn.selectpicker.defaults={style:null,size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",countSelectedText:"{0} of {1} selected",width:null,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true};b(document).data("keycount",0).on("keydown","[data-toggle=dropdown], [role=menu]",a.prototype.keydown)}(window.jQuery);


// tablecloth.js
// copyright brian sewell
// https://github.com/bwsewell/tablecloth
//
// v1.0.0
// May 4, 2012 14:20

(function( $ ){
	$.fn.tablecloth = function(options) {
	  
    var defaults = { 
			theme: "default", // "none","default","stats"
			customClass: "",
			bordered: false,
			condensed: false,
			striped: false,
			sortable: false,
			clean: false,
			cleanElements: "*"
	  };
	  
	 	var opts = $.extend(defaults, options);

    // Before we remove any attributes, let's fix a few things up
    this.find("*").each(function() {
      if ($(this).attr("align") == "right") {
        $(this).addClass("right");
      }
      if ($(this).attr("align") == "center") {
        $(this).addClass("center");
      }
      if ($(this).attr("nowrap")) {
        $(this).css('white-space','nowrap');
      }
    });

	 	// Get rid of all inline styling and deprecated table attributes
	 	// Also get rid of any current classes being applied to the <table> element
	 	if (opts.clean) {
	 	  
	 	  this.removeAttr('class')
	 	    .removeAttr('style')
	 	    .removeAttr('cellpadding')
	 	    .removeAttr('cellspacing')
	 	    .removeAttr('bgcolor')
	 	    .removeAttr('align')
	 	    .removeAttr('width')
	 	    .removeAttr('nowrap');
 	      
	 	  this.find(opts.cleanElements).each(function() {
	 	    $(this).removeAttr('style')
  	 	    .removeAttr('cellpadding')
  	 	    .removeAttr('cellspacing')
  	 	    .removeAttr('bgcolor')
  	 	    .removeAttr('align')
  	 	    .removeAttr('width')
  	 	    .removeAttr('nowrap');
	 	  });
	 	  
	 	}
	 	
	 	// Set the table theme accordingly
	 	if (opts.theme == "default") {
	 	  this.addClass("table");
	 	}
	 	else if (opts.theme == "dark") {
	 	  this.addClass("table table-dark");
	 	}
	 	else if (opts.theme == "stats") {
	 	  this.addClass("table table-stats");
	 	}
	 	else if (opts.theme == "paper") {
	 	  this.addClass("table table-paper");
	 	}
	 	
	 	// Set the table theme accordingly
	 	if (opts.customClass != "") {
	 	  this.addClass(opts.customClass);
	 	}
	 	
	 	// Set the table options accordingly
	 	if (opts.condensed) {
	 	  this.addClass("table-condensed");
	 	}
	 	if (opts.bordered) {
	 	  this.addClass("table-bordered");
	 	}
	 	if (opts.striped) {
	 	  this.addClass("table-striped");
	 	}
    if (opts.sortable) {
	 	  this.addClass("table-sortable");
	 	  if (jQuery().tablesorter) {
	 	    this.tablesorter({cssHeader: "headerSortable"});
	 	  }
	 	  else {
	 	    console.log('Tablesorter is not loaded');
	 	  }
	 	}
	 	
  };

})( jQuery );
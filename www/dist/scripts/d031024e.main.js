var studioHanel=studioHanel||{};studioHanel.Utils=function(){},studioHanel.Utils.markupLinebreaks=function(a,b,c){return void 0==c&&(c="<br/>"),a=a.replace(/\n/g,c),b&&(a="<p>"+a+"</p>"),a};var studioHanel=studioHanel||{};studioHanel.Landing=function(){function a(a,b){if($("#landing").height(a-$("#teaser-about").height()),a>b){var c=Math.round(b/3);$("#landing").css("background-position-y",-c+"px")}}studioHanel.Landing.prototype.update=a};var studioHanel=studioHanel||{};studioHanel.TeaserAbout=function(){function a(a){$("#teaser-about h1").text(a)}function b(a,b){if(a>b){var c=a-$("#teaser-about").height();$("#teaser-about").css({top:c}),$("#teaser-about .arrow").css("opacity",(.33*a-b)/a*6),$("#teaser-about h1").css("opacity",(.5*a-b)/a*6)}}studioHanel.TeaserAbout.prototype.populate=a,studioHanel.TeaserAbout.prototype.update=b},studioHanel.About=function(){function a(a){var b=a[0];$("#about h1").text(b.title);var c=studioHanel.Utils.markupLinebreaks(b.description);c=c.split("<br/>");for(var d,e="",f="",g=0,h=c.length,i=Math.ceil(h/2);h>g;)d="<p>"+c[g]+"</p>",g++<i?e+=d:f+=d;$("#about-first-column").append(e),$("#about-second-column").append(f)}function b(a,b){if(2*a>b){var c=$("#landing").height();b>c&&(c=b),.33*c>b?c+=$("#teaser-about").height():.66*c>b&&(c+=$("#teaser-about").height()*(.66*c-b)/c*3),$("#about").css({top:c})}}studioHanel.About.prototype.populate=a,studioHanel.About.prototype.update=b};var studioHanel=studioHanel||{};studioHanel.TeaserInteriors=function(){function a(a){$("#teaser-interiors h2").text(a)}function b(a,b){var d,e,f=$("#landing").height(),g=$("#about").height();f>b?(d=$("#about").position().top+g,e=1):b>f+g?(d=b,e=0):(d=f+g,e=(f+.66*g-b)/g*3,e>1&&(e=1)),$("#teaser-interiors").css({top:d}),$("#teaser-interiors .pattern").css("opacity",e),$("#teaser-interiors h2").css("opacity",e),$("#teaser-interiors .arrow").height(c*e),$("#teaser-interiors .arrow").css("background-position-y",$("#teaser-interiors .arrow").height()-20)}var c=$("#teaser-interiors .arrow").height();studioHanel.TeaserInteriors.prototype.populate=a,studioHanel.TeaserInteriors.prototype.update=b},studioHanel.Interiors=function(){function a(a){d=a.length;for(var b="",e=0,f=2*Math.ceil(d/2);f>e;e++)e%2==0&&(b+='<div class="row">'),b+='<div id="interior-'+e+'" class="col-md-6">',b+='<div class="overlay-background"></div>',b+="</div>",e%2==1&&(b+="</div>");$("#interiors .container-fluid").append(b),$.each(a,function(a,b){var c="#interior-"+a;$(c).find(".overlay-background").addClass(b.theme);var d='<div class="overlay '+b.theme+'">';d+='<h1 class="theme">'+b.theme+"</h1>",d+="</div>",$(c).append(d),$(c).css("background-image","url(images/"+b.theme+".jpg)"),$(c).mouseenter(function(){$(this).find(".overlay").css("visibility","visible"),TweenMax.to($(this).find(".overlay-background"),.6,{autoAlpha:1,ease:Sine.easeOut})}),$(c).mouseleave(function(){$(this).find(".overlay").css("visibility","hidden"),TweenMax.to($(this).find(".overlay-background"),.3,{autoAlpha:0,ease:Sine.easeIn})}),$(c).click(function(){var a=this.id.substr(-1);studioHanel.Gallery(a)})}),c()}function b(a,b){var d=(a-$("#teaser-interiors").height())/2;$("#interiors .container-fluid .row .col-md-6").height(d),c();var e,f=$("#landing").height(),g=$("#about").height(),h=$("#teaser-interiors").height();e=f+g>b?$("#teaser-interiors").position().top+h:f+g+h,$("#interiors").css({top:e})}function c(){}var d;studioHanel.Interiors.prototype.populate=a,studioHanel.Interiors.prototype.update=b},studioHanel.Gallery=function(a){function b(){console.log("addGallery");var a='<div id="gallery" class="gallery">';a+='<div id="images"></div>',a+='<button id="close-button">',a+='<button id="prev-button">',a+='<button id="next-button">',a+="</div>",$("body").append(a),$("div#gallery #close-button").click(c),$("div#gallery #prev-button").mouseenter(e),$("div#gallery #prev-button").mouseleave(f),$("div#gallery #prev-button").click(g),$("div#gallery #next-button").mouseenter(h),$("div#gallery #next-button").mouseleave(i),$("div#gallery #next-button").click(j),d(),main.updateSections(!1)}function c(){main.updateSections(!0),$("div#gallery").remove()}function d(){$("#gallery").width(x),$("#gallery").height(y)}function e(){k(-1,!0)}function f(){k(-1,!1)}function g(){m(-1)}function h(){k(1,!0)}function i(){k(1,!1)}function j(){console.log("nextClick galleryIndex = "+B),m(1)}function k(a,b){var c=z[B];c.width<.9*x&&l(a,b)}function l(a,b){var c=B+a;if(c>=0&&c<=z.length-1){var d="#image-"+B,e="#image-"+c;b?(TweenMax.to($(d),D,{autoAlpha:G,ease:Sine.easeOut}),TweenMax.to($(e),C,{autoAlpha:I,ease:Sine.easeOut})):(TweenMax.to($(d),C,{autoAlpha:F,ease:Sine.easeOut}),TweenMax.to($(e),D,{autoAlpha:H,ease:Sine.easeOut}))}}function m(a){var b=B+a;if(b>=0&&b<=z.length-1){B=b;var c=n();TweenMax.to($("#images"),E,{css:{left:c},ease:Sine.easeOut}),l(-1*a,!1),o()}}function n(){var a=z[B],b=-a.left;return B==z.length-1?b+=x-a.width:B>0&&(b+=(x-a.width)/2),b}function o(){var a=B>0?"visible":"hidden",b=B<z.length-1?"visible":"hidden";$("#prev-button").css("visibility",a),$("#next-button").css("visibility",b)}function p(a){$.each(a,function(a,b){var c=new Image;c.index=a,c.path=b.image,z.push(c)}),q(0)}function q(a){var b=z[a];b.onload=function(){this.loaded=!0,this.ratio=this.width/this.height,s(a);var b=a+1;b<z.length&&q(b)},b.src="../"+b.path}function r(){$.each(z,function(a){s(a)}),$("#images").css("left",n())}function s(a){var b=z[a];if(b.height=y,b.width=b.ratio*y,a>0){var c=z[a-1];b.left=c.right}else b.left=0;b.right=b.left+b.width,t(a)}function t(a){var b=z[a],c="image-"+a,d="#"+c,e=Boolean($(d).length);console.log("htmlExists = "+e);var f=a==B?"active":"inactive";if(!e){console.log("image.path = "+b.path),$("#images").append('<img id="'+c+'" src="../'+b.path+'">');var g=a==B?1:.33;TweenMax.to($(d),1.2,{autoAlpha:g,ease:Sine.easeOut})}$(d).attr("class",f),$(d).css("width",b.width),$(d).css("height",b.height),$(d).css("left",b.left),$(d).css("display","block")}var u,v,w,x=$(window).width(),y=$(window).height(),z=[];a=Number(a)+1;var A=main.getPath()+"api/studiohanel/interior/"+a+"?format=json",B=0,C=.6,D=.8,E=.6,F=1,G=.5,H=.33,I=.9;$.getJSON(A,function(a){u=a.title,v=a.location,w=a.caption,b(),p(a.interiorImages),o()}),$(window).resize(function(){x=$(window).width(),y=$(window).height(),d(),r()})};var studioHanel=studioHanel||{};studioHanel.CaseStudy=function(){function a(a){var b=a[0].caseStudyBullets;$.each(b,function(a,b){var c=a+1,d="#case-study .container-fluid .row #cell"+c;$(d).append('<img src="../'+b.image+'">');var e=b.caption;e='<h3><span style="color:#806854">'+e.substring(0,1)+'</span><span style="color:#a8baa9">'+e.substring(1,2)+"</span>"+e.substring(2)+"</h3>",$(d).append(e);var f=studioHanel.Utils.markupLinebreaks(b.paragraph,!0);$(d).append(f),console.log("stage.image = "+b.image)})}function b(){var a=$("#interiors").position().top+$("#interiors").height();$("#case-study").css({top:a})}studioHanel.CaseStudy.prototype.populate=a,studioHanel.CaseStudy.prototype.update=b};var studioHanel=studioHanel||{};studioHanel.ProductDesign=function(){function a(){}function b(a){$("#product-design").height(a-$("#teaser-interiors").height()-$("#teaser-contact").height());var b=$("#case-study").position().top+$("#case-study").height();$("#product-design").css({top:b})}studioHanel.ProductDesign.prototype.populate=a,studioHanel.ProductDesign.prototype.update=b};var studioHanel=studioHanel||{};studioHanel.TeaserContact=function(){function a(a){$("#teaser-contact h2").text(a)}function b(){var a=$("#product-design").position().top+$("#product-design").height();$("#teaser-contact").css({top:a})}studioHanel.TeaserContact.prototype.populate=a,studioHanel.TeaserContact.prototype.update=b},studioHanel.Contact=function(){function a(a){$("#phone").append("<p><strong>"+a[0].phone+"</strong></p>");var b=studioHanel.Utils.markupLinebreaks(a[0].address,!0);b=b.replace("<p>","<p><strong>"),b=b.replace("<br/>","</strong><br/>"),$("#address").append(b)}function b(a,b){var d,e=$("#teaser-contact").position().top+$("#teaser-contact").height()-a,f=$("#teaser-contact").position().top+$("#teaser-contact").height()-c;if(e>b)f=f,d=c;else{var g=b-e;c>g?(f+=g,d=c-g):(f+=c,d=0)}$("#contact").css({top:f}),$("#contact").css("padding-bottom",d)}var c=$("#contact .pattern").position().top+$("#contact .pattern").height()-$("#contact").position().top;studioHanel.Contact.prototype.populate=a,studioHanel.Contact.prototype.update=b};var studioHanel=studioHanel||{};studioHanel.Menu=function(a){function b(a){$.each(a,function(a,b){var c=a+1;$("#menu").append('<li><a href="#" id="'+c+'">'+b.label+"</a></li>")}),$("#menu li a").on("click",function(a){a.preventDefault(),f(this.id)}),$("#logo").on("click",function(){f(0)})}function c(a,b,f){d(a),b>h[currentIndex]-.1*a?b<h[currentIndex+1]-.1*a||currentIndex==h.length-1?e():currentIndex<h.length&&(currentIndex++,c(a,b,f)):b<h[currentIndex]-.1*a&&currentIndex>0&&(currentIndex--,c(a,b,f))}function d(a){g!=a&&(g=a,h[1]=$("#landing").height(),h[2]=h[1]+$("#about").height(),h[3]=h[2]+$("#interiors").height(),h[4]=h[3]+$("#case-study").height(),h[5]=h[4]+$("#contact").height())}function e(){console.log("highlight currentIndex = "+currentIndex),i!=currentIndex&&($("#menu li #"+i).removeClass("selected"),$("#menu li #"+currentIndex).addClass("selected"),i=currentIndex)}function f(b){currentIndex=b;var c=h[currentIndex];a.scrollToPosition(c)}var a=a,g=0,h=[0],i=currentIndex=0;studioHanel.Menu.prototype.populate=b,studioHanel.Menu.prototype.update=c};var studioHanel=studioHanel||{};studioHanel.Navigation=function(){function a(){c(),$(window).resize(function(){f=$(window).height(),c()}),$(window).on("scroll",c)}function b(a){var b=Math.abs(a-g),d=.33+33e-5*b;console.log("scrollTime = "+d),TweenMax.to($(window),d,{scrollTo:{y:a,autoKill:!0},ease:Sine.easeOut,onUpdate:c,overwrite:5})}function c(a){console.log("scrollTop = "+g),a===!0?$(window).scrollTop(g):$(window).scrollTop()>0&&(g=$(window).scrollTop()),h=$(document).height()-$(window).height(),$.each(e,function(a,b){b.update(f,g,h)})}function d(a){e.push(a)}var e=[],f=$(window).height(),g=$(window).scrollTop(),h=$(document).height()-$(window).height();studioHanel.Navigation.prototype.init=a,studioHanel.Navigation.prototype.scrollToPosition=b,studioHanel.Navigation.prototype.update=c,studioHanel.Navigation.prototype.registerSection=d};var studioHanel=studioHanel||{};studioHanel.StudioHanel=function(){function a(){return f}function b(){m++,6==m&&(c(!0),w.init(),d(!1))}function c(a){console.log("displaySections display = "+a);var b=a?"block":"none";$.each(y,function(a,c){$(c).css("display",b)})}function d(a){console.log("hideSections hide = "+a);var b=a?"hidden":"visible";$.each(y,function(a,c){$(c).css("visibility",b)})}function e(a){a?(c(!0),w.update(!0),d(!1)):(d(!0),c(!1))}console.log("document.domain = "+document.domain);var f="studio-hanel.com"==document.domain?"http://studio-hanel.com/studio-hanel/":"http://127.0.0.1:8000/";this.getPath=a;var g=f+"api/studiohanel/menu/?format=json",h=f+"api/studiohanel/about/?format=json",i=f+"api/studiohanel/interior/?format=json",j=f+"api/studiohanel/casestudy/?format=json",k=f+"api/studiohanel/productdesign/?format=json",l=f+"api/studiohanel/contact/?format=json",m=0,n=new studioHanel.Landing,o=new studioHanel.TeaserAbout,p=new studioHanel.About,q=new studioHanel.TeaserInteriors,r=new studioHanel.Interiors,s=new studioHanel.CaseStudy,t=new studioHanel.ProductDesign,u=new studioHanel.TeaserContact,v=new studioHanel.Contact,w=new studioHanel.Navigation;w.registerSection(n),w.registerSection(o),w.registerSection(p),w.registerSection(q),w.registerSection(r),w.registerSection(s),w.registerSection(t),w.registerSection(u),w.registerSection(v);var x=new studioHanel.Menu(w);w.registerSection(x);var y=["#landing","#teaser-about","#about","#teaser-interiors","#interiors","#case-study","#product-design","#teaser-contact","#contact"];this.updateSections=e,$.getJSON(g,function(a){x.populate(a.objects),o.populate(a.objects[0].cta),q.populate(a.objects[1].cta),u.populate(a.objects[4].cta),b()}),$.getJSON(h,function(a){p.populate(a.objects),b()}),$.getJSON(i,function(a){r.populate(a.objects),b()}),$.getJSON(j,function(a){s.populate(a.objects),b()}),$.getJSON(k,function(a){t.populate(a.objects),b()}),$.getJSON(l,function(a){v.populate(a.objects),b()}),window.main=this};
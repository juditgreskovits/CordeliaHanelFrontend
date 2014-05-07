var studioHanel=studioHanel||{};studioHanel.Utils=function(){},studioHanel.Utils.markupLinebreaks=function(a,b,c){return void 0==c&&(c="<br/>"),a=a.replace(/\n/g,c),b&&(a="<p>"+a+"</p>"),a};var studioHanel=studioHanel||{};studioHanel.Landing=function(){function a(a,b){if($("#landing").height(a-$("#teaser-about").height()),a>b){var c=Math.round(b/3);$("#landing").css("background-position-y",-c+"px")}}studioHanel.Landing.prototype.update=a};var studioHanel=studioHanel||{};studioHanel.TeaserAbout=function(){function a(a){$("#teaser-about h1").text(a)}function b(a,b){if(a>b){var c=a-$("#teaser-about").height();$("#teaser-about").css({top:c}),$("#teaser-about .arrow").css("opacity",(.33*a-b)/a*6),$("#teaser-about h1").css("opacity",(.5*a-b)/a*6)}}studioHanel.TeaserAbout.prototype.populate=a,studioHanel.TeaserAbout.prototype.update=b},studioHanel.About=function(){function a(a){var b=a[0];$("#about h1").text(b.title);var c=studioHanel.Utils.markupLinebreaks(b.description);c=c.split("<br/>").join("</p><p>"),$("#about-copy-column div").append("<p>"+c+"</p>")}function b(a,b){if(2*a>b){var c=$("#landing").height(),d="fixed",e=0;if(c>b){d="absolute";var e=c;.33*e>b?e+=$("#teaser-about").height():.66*e>b&&(e+=$("#teaser-about").height()*(.66*e-b)/e*3)}$("#about").css({display:"block",position:d,top:e});var f=$("#about-copy-column").height()-$("#about-photo-column").height();$("#about-photo-column").css("margin-top",f)}else $("#about").css({display:"none"})}studioHanel.About.prototype.populate=a,studioHanel.About.prototype.update=b};var studioHanel=studioHanel||{};studioHanel.TeaserInteriors=function(){function a(a){$("#teaser-interiors h2").text(a)}function b(a,b){var d,e,f=$("#landing").height(),g=$("#about").height(),h="absolute";f>b?(d=$("#about").position().top+g,e=1):b>f+g?(h="fixed",d=0,e=0):(d=f+g,e=(f+.66*g-b)/g*3,e>1&&(e=1)),$("#teaser-interiors").css({position:h,top:d}),$("#teaser-interiors .pattern").css("opacity",e),$("#teaser-interiors h2").css("opacity",e),$("#teaser-interiors .arrow").height(c*e),$("#teaser-interiors .arrow").css("background-position-y",$("#teaser-interiors .arrow").height()-20)}var c=$("#teaser-interiors .arrow").height();studioHanel.TeaserInteriors.prototype.populate=a,studioHanel.TeaserInteriors.prototype.update=b},studioHanel.Interiors=function(){function a(a){a=a.sort(b),e=a.length;for(var c="",f=0,g=2*Math.ceil(e/2);g>f;f++)f%2==0&&(c+='<div class="row">'),e>f&&(console.log("data["+f+"].id = "+a[f].id),c+='<div id="interior-'+a[f].id+'" class="col-md-6">',c+='<div class="overlay-background"></div>',c+="</div>"),f%2==1&&(c+="</div>");$("#interiors .container-fluid").append(c),$.each(a,function(a,b){var c="#interior-"+b.id;$(c).find(".overlay-background").addClass(b.theme);var d='<div class="overlay '+b.theme+'">';d+='<h1 class="theme">'+b.theme+"</h1>",d+="</div>",$(c).append(d),$(c).css("background-image","url(images/"+b.theme+".jpg)"),$(c).mouseenter(function(){$(this).find(".overlay").css("visibility","visible"),TweenMax.to($(this).find(".overlay-background"),.6,{autoAlpha:1,ease:Sine.easeOut})}),$(c).mouseleave(function(){$(this).find(".overlay").css("visibility","hidden"),TweenMax.to($(this).find(".overlay-background"),.3,{autoAlpha:0,ease:Sine.easeIn})}),$(c).click(function(){var a=this.id.substr(-1);console.log("this.id = "+this.id),studioHanel.Gallery(a)})}),d()}function b(a,b){return a.order<b.order?-1:a.order>b.order?1:0}function c(a,b){var c=(a-$("#teaser-interiors").height())/2;$("#interiors .container-fluid .row .col-md-6").height(c),d();var e,f=$("#landing").height(),g=$("#about").height(),h=$("#teaser-interiors").height();e=f+g>b?$("#teaser-interiors").position().top+h:f+g+h,$("#interiors").css({top:e})}function d(){}var e;studioHanel.Interiors.prototype.populate=a,studioHanel.Interiors.prototype.update=c},studioHanel.Gallery=function(a){function b(){var a='<div id="gallery" class="gallery">';a+='<div id="images"></div>',a+='<button id="close-button">',a+='<button id="prev-button">',a+='<button id="next-button">',a+="</div>",$("body").append(a),$("div#gallery #close-button").click(c),$("div#gallery #prev-button").mouseenter(e),$("div#gallery #prev-button").mouseleave(f),$("div#gallery #prev-button").click(g),$("div#gallery #next-button").mouseenter(h),$("div#gallery #next-button").mouseleave(i),$("div#gallery #next-button").click(j),d(),main.updateSections(!1)}function c(){main.updateSections(!0),$("div#gallery").remove()}function d(){$("#gallery").width(x),$("#gallery").height(y)}function e(){k(-1,!0)}function f(){k(-1,!1)}function g(){m(-1)}function h(){k(1,!0)}function i(){k(1,!1)}function j(){console.log("nextClick galleryIndex = "+B),m(1)}function k(a,b){var c=z[B];c.width<.9*x&&l(a,b)}function l(a,b){var c=B+a;if(c>=0&&c<=z.length-1){var d="#image-"+B,e="#image-"+c;b?(TweenMax.to($(d),D,{autoAlpha:G,ease:Sine.easeOut}),TweenMax.to($(e),C,{autoAlpha:I,ease:Sine.easeOut})):(TweenMax.to($(d),C,{autoAlpha:F,ease:Sine.easeOut}),TweenMax.to($(e),D,{autoAlpha:H,ease:Sine.easeOut}))}}function m(a){var b=B+a;if(b>=0&&b<=z.length-1){B=b;var c=n();TweenMax.to($("#images"),E,{css:{left:c},ease:Sine.easeOut}),l(-1*a,!1),o()}}function n(){var a=z[B],b=-a.left;return B==z.length-1?b+=x-a.width:B>0&&(b+=(x-a.width)/2),b}function o(){var a=B>0?"visible":"hidden",b=B<z.length-1?"visible":"hidden";$("#prev-button").css("visibility",a),$("#next-button").css("visibility",b)}function p(a){$.each(a,function(a,b){var c=new Image;c.index=a,c.path=b.image,z.push(c)}),q(0)}function q(a){var b=z[a];b.onload=function(){this.loaded=!0,this.ratio=this.width/this.height,s(a);var b=a+1;b<z.length&&q(b)},b.src="../"+b.path}function r(){$.each(z,function(a){s(a)}),$("#images").css("left",n())}function s(a){var b=z[a];if(b.height=y,b.width=b.ratio*y,a>0){var c=z[a-1];b.left=c.right}else b.left=0;b.right=b.left+b.width,t(a)}function t(a){var b=z[a],c="image-"+a,d="#"+c,e=Boolean($(d).length);console.log("htmlExists = "+e);var f=a==B?"active":"inactive";if(!e){console.log("image.path = "+b.path),$("#images").append('<img id="'+c+'" src="../'+b.path+'">');var g=a==B?1:.33;TweenMax.to($(d),1.2,{autoAlpha:g,ease:Sine.easeOut})}$(d).attr("class",f),$(d).css("width",b.width),$(d).css("height",b.height),$(d).css("left",b.left),$(d).css("display","block")}var u,v,w,x=$(window).width(),y=$(window).height(),z=[],A=main.getPath()+"api/studiohanel/interior/"+a+"?format=json",B=0,C=.6,D=.8,E=.6,F=1,G=.5,H=.33,I=.9;$.getJSON(A,function(a){u=a.title,v=a.location,w=a.caption,b(),p(a.interiorImages),o()}),$(window).resize(function(){x=$(window).width(),y=$(window).height(),d(),r()})};var studioHanel=studioHanel||{};studioHanel.CaseStudy=function(){function a(a){var b=a[0].caseStudyBullets;$.each(b,function(a,b){var c=a+1,d="#case-study .container-fluid .row #cell"+c;$(d).append('<img src="../'+b.image+'" width="240" height="170">');var e=b.caption;e='<h3><span style="color:#806854">'+e.substring(0,1)+'</span><span style="color:#a8baa9">'+e.substring(1,2)+"</span>"+e.substring(2)+"</h3>",$(d).append(e);var f=studioHanel.Utils.markupLinebreaks(b.paragraph,!0);$(d).append(f)})}function b(){var a=$("#interiors").position().top+$("#interiors").height();$("#case-study").css({top:a})}studioHanel.CaseStudy.prototype.populate=a,studioHanel.CaseStudy.prototype.update=b};var studioHanel=studioHanel||{};studioHanel.ProductDesign=function(){function a(){}function b(a){$("#product-design").height(a-$("#teaser-interiors").height()-$("#teaser-contact").height());var b=$("#case-study").position().top+$("#case-study").height();$("#product-design").css({top:b})}studioHanel.ProductDesign.prototype.populate=a,studioHanel.ProductDesign.prototype.update=b};var studioHanel=studioHanel||{};studioHanel.TeaserContact=function(){function a(a){$("#teaser-contact h2").text(a)}function b(){var a=$("#product-design").position().top+$("#product-design").height();$("#teaser-contact").css({top:a})}studioHanel.TeaserContact.prototype.populate=a,studioHanel.TeaserContact.prototype.update=b},studioHanel.Contact=function(){function a(a){$("#phone").append("<p><strong>"+a[0].phone+"</strong></p>");var b=studioHanel.Utils.markupLinebreaks(a[0].address,!0);b=b.replace("<p>","<p><strong>"),b=b.replace("<br/>","</strong><br/>"),$("#address").append(b),c=$("#contact").height(),$("#contact-util").height(c)}function b(a){var b=$("#teaser-contact").position().top+$("#teaser-contact").height();$("#contact-util").css("top",b),$("#contact").css("top",a-c)}var c;studioHanel.Contact.prototype.populate=a,studioHanel.Contact.prototype.update=b};var studioHanel=studioHanel||{};studioHanel.Menu=function(a){function b(a){$.each(a,function(a,b){var c=a+1;$("#menu").append('<li><a href="#" id="'+c+'">'+b.label+"</a></li>")}),$("#menu li a").on("click",function(a){a.preventDefault(),f(this.id)}),$("#logo").on("click",function(a){a.preventDefault(),f(0)})}function c(a,b,f){d(a),b>h[currentIndex]-.1*a?b<h[currentIndex+1]-.1*a||currentIndex==h.length-1?e():currentIndex<h.length&&(currentIndex++,c(a,b,f)):b<h[currentIndex]-.1*a&&currentIndex>0&&(currentIndex--,c(a,b,f))}function d(a){console.log("calculateScrollTops windowHeight = "+g+" | wh = "+a),g!=a&&(g=a,h[1]=$("#landing").height(),h[2]=h[1]+$("#about").height(),h[3]=h[2]+$("#interiors").height(),h[4]=h[3]+$("#case-study").height(),h[5]=h[4]+$("#contact").height()),console.log("calculateScrollTops scrollTops = "+h)}function e(){i!=currentIndex&&($("#menu li #"+i).removeClass("selected"),$("#menu li #"+currentIndex).addClass("selected"),i=currentIndex)}function f(b){currentIndex=b;var c=h[currentIndex];a.scrollToPosition(c)}var a=a,g=0,h=[0],i=currentIndex=0;studioHanel.Menu.prototype.populate=b,studioHanel.Menu.prototype.update=c};var studioHanel=studioHanel||{};studioHanel.Navigation=function(){function a(){c(),$(window).resize(function(){g=$(window).height(),c()}),$(window).on("scroll",c)}function b(a){var b=Math.abs(a-h),d=.2+2e-4*b;TweenMax.to($(window),d,{scrollTo:{y:a,autoKill:!1},ease:Sine.easeOut,onUpdate:c,overwrite:5})}function c(a){a===!0?$(window).scrollTop(h):$(window).scrollTop()>0&&(h=$(window).scrollTop()),i=$(document).height()-g,$(document).height(1e3),console.log("scrollTop = "+h+" | maxScrollTop = "+i),console.log("$(document).height() = "+$(document).height()+" | $(html).height() = "+$("html").height()),d()}function d(){$.each(f,function(a,b){b.update(g,h,i)})}function e(a){f.push(a)}var f=[],g=$(window).height(),h=$(window).scrollTop(),i=$(document).height()-$(window).height();studioHanel.Navigation.prototype.init=a,studioHanel.Navigation.prototype.scrollToPosition=b,studioHanel.Navigation.prototype.update=c,studioHanel.Navigation.prototype.registerSection=e};var studioHanel=studioHanel||{};studioHanel.StudioHanel=function(){function a(){return f}function b(){m++,6==m&&(c(!0),w.init(),d(!1))}function c(a){var b=a?"block":"none";$.each(y,function(a,c){$(c).css("display",b)})}function d(a){var b=a?"hidden":"visible";$.each(y,function(a,c){$(c).css("visibility",b)})}function e(a){a?(c(!0),w.update(!0),d(!1)):(d(!0),c(!1))}console.log("document.domain = "+document.domain);var f="studio-hanel.com"==document.domain?"http://studio-hanel.com/studio-hanel/":"http://127.0.0.1:8000/";this.getPath=a;var g=f+"api/studiohanel/menu/?format=json",h=f+"api/studiohanel/about/?format=json",i=f+"api/studiohanel/interior/?format=json",j=f+"api/studiohanel/casestudy/?format=json",k=f+"api/studiohanel/productdesign/?format=json",l=f+"api/studiohanel/contact/?format=json",m=0,n=new studioHanel.Landing,o=new studioHanel.TeaserAbout,p=new studioHanel.About,q=new studioHanel.TeaserInteriors,r=new studioHanel.Interiors,s=new studioHanel.CaseStudy,t=new studioHanel.ProductDesign,u=new studioHanel.TeaserContact,v=new studioHanel.Contact,w=new studioHanel.Navigation;w.registerSection(n),w.registerSection(o),w.registerSection(p),w.registerSection(q),w.registerSection(r),w.registerSection(s),w.registerSection(t),w.registerSection(u),w.registerSection(v);var x=new studioHanel.Menu(w);w.registerSection(x);var y=["#landing","#teaser-about","#about","#teaser-interiors","#interiors","#case-study","#product-design","#teaser-contact","#contact","#contact-util"];this.updateSections=e,$.getJSON(g,function(a){x.populate(a.objects),o.populate(a.objects[0].cta),q.populate(a.objects[1].cta),u.populate(a.objects[4].cta),b()}),$.getJSON(h,function(a){p.populate(a.objects),b()}),$.getJSON(i,function(a){r.populate(a.objects),b()}),$.getJSON(j,function(a){s.populate(a.objects),b()}),$.getJSON(k,function(a){t.populate(a.objects),b()}),$.getJSON(l,function(a){v.populate(a.objects),b()}),window.main=this};
window.addEventListener("scroll", function(){
    header = document.getElementsByTagName("header")[0];
    logo = document.getElementsByClassName("logo")[0];

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        if(header.className.includes(" header-fixed")){
		}else{
			header.className += "  header-fixed";
            logo.className += " logo-bg";
		}
    } else {
        if(header.className.includes(" header-fixed")){
			header.className = header.className.replace(" header-fixed", "");
            logo.className = logo.className.replace(" logo-bg", "");
		}else{
		}
    }
})

img = document.getElementsByClassName('img');
img[0].style.opacity = "1";
window.addEventListener('scroll',function(){
    for(i=0;i<img.length;i++){
        let visible = elementInViewport(img[i]);
        if(visible == true){
            img[i].style.opacity = "1";
        }
    }
})

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
}


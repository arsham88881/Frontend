 //true horizontal scrolling with mouse on md size bigger
 const container = document.querySelector(".sidebar-Horizontal");
 container.addEventListener("wheel", function (e) {
   if (e.deltaY > 0) {
     container.scrollLeft += 30;
     e.preventDefault();
     // prevenDefault() will help avoid worrisome
     // inclusion of vertical scroll
   } else {
     container.scrollLeft -= 30;
     e.preventDefault();
   }
 });
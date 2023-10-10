

// export const openNav = () => {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//     document.getElementById("mySidenav").style.visibility = "visible";
//     document.getElementById("main").setAttribute('aria-hidden','true');
//     var mainLinks = document.getElementById("main").getElementsByTagName("a");
//     for (var i = 0; i < mainLinks.length; i++) {
//         mainLinks[i].setAttribute('tabindex', '-1');
//     }
//     var mainButtons = document.getElementById("main").getElementsByTagName("button");
//     for (var i = 0; i < mainButtons.length; i++) {
//         mainButtons[i].setAttribute('disabled', 'true');
//     }
//     setTimeout(function(){ document.getElementById("closenav").focus(); }, 500);
// }
//
// export const closeNav = () => {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//     document.body.style.backgroundColor = "white";
//     document.getElementById("mySidenav").style.visibility = "hidden";
//     document.getElementById("main").removeAttribute('aria-hidden');
//     var mainLinks = document.getElementById("main").getElementsByTagName("a");
//     for (var i = 0; i < mainLinks.length; i++) {
//         mainLinks[i].removeAttribute('tabindex');
//     }
//     var mainButtons = document.getElementById("main").getElementsByTagName("button");
//     for (var i = 0; i < mainButtons.length; i++) {
//         mainButtons[i].removeAttribute('disabled');
//     }
//     document.getElementById("opennav").focus();
// }
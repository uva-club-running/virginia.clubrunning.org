function toggleMobileNavigation() {
	$(".mobile-menu, .site-navigation, .hamburger").toggleClass("is-active");
	$("body").toggleClass("lock");
}

$(document).on("click", ".contains-expandable > h4" , function(){
	$(this).parents(".contains-expandable").toggleClass("collapsed");
});

let anthemLink = "<a href='https://soundcloud.com/user-870446752/sets/club-anthems' id='anthem-link' target='_blank'>now with anthems!</a>";
$("#header > .site-title > .container").append(anthemLink);

console.log("Andrew McCullough is a god.");
console.log("Skyler Moon is a thot.");
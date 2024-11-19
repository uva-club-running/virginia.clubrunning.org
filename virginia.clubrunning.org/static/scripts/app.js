function toggleMobileNavigation() {
	$(".mobile-menu, .site-navigation, .hamburger").toggleClass("is-active");
	$("body").toggleClass("lock");
}

$(document).on("click", ".contains-expandable > h4" , function(){
	$(this).parents(".contains-expandable").toggleClass("collapsed");
});

console.log("Andrew McCullough is a god.");
console.log("%cSkyler Moon is a thot.", "text-decoration: line-through");
console.log("Congratulations! If you're reading this, you've found and won the secret Club Running sweepstakes. The first person to email asm4wm@virginia.edu with the phrase \"mystic apples\" in the subject line will receive $100 and a free Club Running shirt. Better act quick!");

console.log("Joe Kerrigan here.")
console.log("I have a confession to make.")
console.log("I don't even like running. I literally just joined Club Running because I hate vaping.")

console.log("Simmy here. For posterity, let it be known that I do like running (slowly).")
console.log("Drop me a line at simrat.s.7aini@gmail.com if anyone finds this! Can't wait to see what you guys get up to once I'm outta here.")
console.log("And with that, I've made my last commit to the website as webmaster. So long, and thanks for all the fish...")

console.log("Initializing...")
console.log("[1/5] Activating cryptocurrency miner...")
console.log("[2/5] Placing scam calls...")
console.log("[3/5] Influencing the election...")
console.log("[4/5] Doing the most...")
console.log("[5/5] Done!")
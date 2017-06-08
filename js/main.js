//$(document).ready(function() {
//	console.log("hello b");
//    $(".interior-category").click(function() {
//    	console.log("hello a");
//        $(this).fadeOut('slow');
//        console.log("hello");
//    });
//});

//.interior-category

$(document).ready(function() {
    $(".interior-category, .interior-title").fadeIn(3000);
    console.log("hello");
    $(".interior-scroll").scroll (function(){
    	console.log("hello c");
    	$(this).fadeIn(3000);
    		console.log("hello b");
    });
});
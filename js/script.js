
$("button").click(function () {
	// $(".screensaver").fadeToggle("slow");
	
  $(".screensaver").fadeToggle(3500, function () { // 3.5sec hide блок плавно пропадает
    $(this).remove();
    alert ("Welcome to the club, Buddy")
  });
});

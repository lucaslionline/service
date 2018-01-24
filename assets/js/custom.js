/* Contact */
// form style
function onFocus(x){
	if (x.value == x.defaultValue){
		x.value = '';
		x.style.color = '#333';
	}
	else if (x.value != x.defaultValue){
		x.style.color = '#333';
	}
}
function onBlur(x){
	if (x.value == ''){
		x.value = x.defaultValue;
		x.style.color = 'gray';
	}
	else if (x.value != ''){
		x.style.color = 'gray';
	}
}



// Scroll to show toTop
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('#toTop').fadeIn("fast");
	} 
	else {
		$('#toTop').fadeOut("fast");
	}
});



// House Description -- English and Chinese
function chn(){
	$("div#eng").hide();
	$("div#chn").toggle("slow");
	return false;
}
function eng(){
	$("div#chn").hide();
	$("div#eng").toggle("slow");
}
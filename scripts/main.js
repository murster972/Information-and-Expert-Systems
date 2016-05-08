var rotated = 0;

$(document).ready(function(){
	$("#dropdown_icon").click(function(){
		$("#dropdown").toggle();
		toggleArrRotate();
	})
})

function toggleArrRotate(){
	if(rotated == 0){
		$("#arr_rotate").css({"color": "red"});
		rotated = 1;
	}

	else{
		$("#arr_rotate").css({"color": "#fff"});
		rotated = 0;
	}
}
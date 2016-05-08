var menuMode = 1;		//1 = desktop, 0 = mobile

function setMenu(){
	if(menuMode){
		//desktop
	}

	else{
		$("#dropdown_arr").height(0);
		$("#dropdown_container").css({
			"width": "100%",
			"height": "100%",
			"margin-top": "51px",
			"margin-left": "0"});

		$(".dropdown_item").css({
			"text-align": "center",
		})
	}
}
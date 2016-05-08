var desktopSizes = {"#intro": "50%", "#system_containers": "650px"};
var mobileSize = {"#intro": "90%", "#system_containers": "90%"};
var elemToChange = ["#intro", "#system_containers"];

function checkSize(){
	if(window.innerWidth < 660){
		toMobile();
	}

	else{
		toDesktop();
	}
}

function toMobile(){
	for(var i = 0; i < elemToChange.length; ++i){
		var curElem = elemToChange[i];
		$(curElem).width(mobileSize[curElem]);
	}

	//console.log("test");

	menuMode = 0;
	setMenu();
}

function toDesktop(){
	for(var i = 0; i < elemToChange.length; ++i){
		var curElem = elemToChange[i];
		$(curElem).width(desktopSizes[curElem]);
	}

	menuMode = 1;
	setMenu();
}
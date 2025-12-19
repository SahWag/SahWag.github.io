let selected = 'general';
let active_button = '';

function openPage(name){
	document.getElementById('title').innerHTML = name;
	document.getElementById(selected).className = "invis";
	document.getElementById(name).className = "vis";
	selected = name;
	
	if (active_button!=''){
		active_button.className = "unselected";
	}
	event.currentTarget.className = "selected";
	active_button = event.currentTarget;
}

function openPageNoTitle(name){
	document.getElementById(selected).className = "invis";
	document.getElementById(name).className = "vis";
	selected = name;
	
	if (active_button!=''){
		active_button.className = "unselected";
	}
	event.currentTarget.className = "selected";
	active_button = event.currentTarget;
}

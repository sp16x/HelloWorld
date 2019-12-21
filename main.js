function cls()
{
	document.body.innerHTML = "";	
}

function apn(x,p=null)
{
	p?p.appendChild(x):document.body.appendChild(x);
}

function elem(x="div")
{
	return document.createElement(x);
}
function rm(x) {
	x.parentNode.removeChild(x);
}
//---
function mm_source_input_process_suggestions(param)
{

}
function mm_source_input_handler()
{
	let mm_source_input_value = this.value;
	if(this.value.trim() !== "")
	{
		
	}
	else
	{

	}
}
function mainmenu()
{
	cls();
	let mm_container = elem();
	mm_container.id = "mm_container";

	let mm_source_label = elem();
	mm_source_label.id = "mm_source_label";
	mm_source_label.innerText = "Where do you want to go?";
	mm_source_label.className = "elem_tx1";
	mm_source_label.style.display = "none";
	apn(mm_source_label,mm_container);

	let mm_source_input = elem("input");
	mm_source_input.id = "mm_source_input";
	mm_source_input.className = "elem_if1";
	mm_source_input.style.display = "none";
	mm_source_input.onkeyup = mm_source_input_handler;
	apn(mm_source_input,mm_container);

	apn(mm_container);
	$(mm_source_label).fadeIn(1000,function(){
		mm_source_input.style.display = "block";
		$(mm_source_input).animate({top:"-=100vh"},500);
	});

}
function splash() {
	cls();

	let splash_container = elem();
	splash_container.id = "splash_container";

	let splash_bigtext = elem();
	splash_bigtext.id = "splash_bigtext";
	splash_bigtext.innerText = "BusAssist BLR";
	splash_bigtext.style.display = "none";
	apn(splash_bigtext,splash_container);

	let splash_cpr = elem();
	splash_cpr.id = "splash_cpr";
	splash_cpr.innerText = "© Suryansh P, 2019";
	splash_cpr.style.display = "none";
	apn(splash_cpr,splash_container);

	apn(splash_container);
	$(splash_bigtext).fadeIn(1000,function(){
		$(splash_cpr).fadeIn(1000,function(){
			$(splash_container).fadeOut(2000,mainmenu);
		});
	});
	console.log(splash_bigtext);
}

function init()
{
	console.log(1);
	splash();
}

init();
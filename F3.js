let ou = document.querySelector('#out');
let input = document.querySelector('#i');
let f = document.querySelector('#f');
let t = document.querySelector('#to');
let c = document.querySelector('#bt');

c.addEventListener
(
	"click",
	() =>
	{
        if(f.value=="Celsius" && t.value=="Celsius")
            ou.value = (parseFloat(i.value));
		else if(f.value=="Celsius" && to.value=="Fahrenheit")
			ou.value = (parseFloat(i.value) * 1.8) + 32;
		else if (f.value=="Celsius" && t.value=="Kelvin")
			ou.value = (parseFloat(i.value) + 273.15);
        else if(f.value=="Fahrenheit" && to.value=="Fahrenheit")
			ou.value = (parseFloat(i.value));
		else if (f.value=="Fahrenheit" && t.value=="Celsius")
			ou.value = (parseFloat(i.value) - 32) / 1.8;
        else if (f.value=="Fahrenheit" && t.value=="Kelvin")
			ou.value = ((parseFloat(i.value) - 32)/ 1.8 ) + 273.15;
		else if (f.value=="Kelvin" && t.value=="Kelvin")
			ou.value = (parseFloat(i.value));
		else if (f.value=="Kelvin" && t.value=="Celsius")
			out.value = (parseFloat(i.value) - 273.15);
		else 
			ou.value = ((parseFloat(i.value) - 273.15) * 1.8) + 32;	
	}
);
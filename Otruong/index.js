var box_tags = document.getElementById('box_tags');
console.log(box_tags);

var innerHTML = document.getElementById('box_tags').innerHTML;
var outerHTML = document.getElementById('box_tags').outerHTML;
var textContent = document.getElementById('box_tags').textContent;


// alert(innerHTML);
// alert(outerHTML);
// alert(textContent);

function checkTen(){
	var ten = document.getElementById('ten').value;
	if(ten == ""){
		alert("Vui long nhap ten");
	}
	else{
		alert("Xin chao " + ten);
	}
}

function openYoutube(){
	window.open("https://www.youtube.com/");
}
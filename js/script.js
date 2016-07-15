$(document).ready(function(){
	$("body").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});


function count(){
	var capital = document.getElementById("capital").value;
	var percent = document.getElementById("percent").value;
	var years = document.getElementById("years").value;
	var result;

	result = capital * Math.pow(1 + (percent/100),years);
	alert(result); 
}
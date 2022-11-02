const allLang = ['eng', 'ru'];

//перенаправление на url с указанием языка
function changeURLLanguage(element){
	var str = location.href.toString();
	var path = str.split('#');
	if(element.value != path[path.length - 1]){
		let lang = element.value;
		location.href = window.location.pathname + '#' + lang;
		location.reload();
	}
}

function changeLanguage(){
	let hash = window.location.hash;
	hash = hash.substring(1);
	if(!allLang.includes(hash)){
		location.href = window.location.pathname + '#eng';
		location.reload();
	}

	if(hash == "ru"){
		document.querySelector('.main__button_ru').style.color = "#000";
		document.querySelector('.header__button_ru').style.color = "#000";
		document.querySelector('.main__button_eng').style.color = "#828282";
		document.querySelector('.header__button_eng').style.color = "#828282";
	}

	for(let key in langArr){
		document.querySelector(key).innerHTML = langArr[key][hash];
	}
}

changeLanguage();

$(function() {
	var $menu_popup = $('.header__droplist');
	$(".header__button, .header__button_close").click(function(){
		$menu_popup.slideToggle(300, function(){
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
	
	$(document).on('click', function(e){
		if (!$(e.target).closest('.header__menu').length){
			$('body').removeClass('body_pointer');
			$menu_popup.slideUp(300);
		}
	});
});
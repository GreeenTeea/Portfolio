// Задание 5
var i = 0, money = 0
const good = [
	{ name: 'Брус строганный', value: '1000' },
	{ name: 'Доска сухая', value: '2000' },
	{ name: 'Арматура', value: '2000' },
	{ name: 'Сетка арматурная', value: '500' },
]

const $image1 = document.querySelector('#image1')
const $image2 = document.querySelector('#image2')

document.querySelector('#button1').onclick = function () {
	i = 1
	main()
}

document.querySelector('#button2').onclick = function () {
	i = 2
	main()
}

function main() {
	money = prompt('Введите сумму', '')

	let html1 = ''
	let html2 = ''
	while (image1.firstChild) {
		image1.removeChild(image1.firstChild);
		image2.removeChild(image2.firstChild);
	}

	if (i == 2 && money > 0) {
		alert("Вы можете купить " + Math.floor(money / good[0].value) + " " + good[0].name +
			" и " + Math.floor(money / good[1].value) + " " + good[1].name + "\n" +
			"Ваша скидка - 10%");

		html1 = `
			<p>${good[0].name}<br> ${Math.floor(money / good[0].value)} шт, скидка - ${Math.floor(money * 0.3)}</p>
			<img src="img/task5/wood1.PNG" alt="">
		`
		html2 = `
			<p>${good[1].name}<br> ${Math.floor(money / good[1].value)} шт, скидка - ${Math.floor(money * 0.1)}</p>
			<img src="img/task5/wood2.PNG" alt="">
		`
	} else if (i == 1 && money > 0) {
		alert("Вы можете купить " + Math.floor(money / good[2].value) + " " + good[2].name +
			" и " + Math.floor(money / good[3].value) + " " + good[3].name + "\n" +
			"Ваша скидка - 30%");

		html1 = `
			<p>${good[2].name}<br> ${Math.floor(money / good[2].value)} шт, скидка - ${Math.floor(money * 0.3)}</p>
			<img src="img/task5/metal1.PNG" alt="">
		`
		html2 = `
			<p>${good[3].name}<br> ${Math.floor(money / good[3].value)} шт, скидка - ${Math.floor(money * 0.3)}</p>
			<img src="img/task5/metal2.PNG" alt="">
		`
	}
	$image1.insertAdjacentHTML('beforeend', html1)
	$image2.insertAdjacentHTML('beforeend', html2)
}

// Задание 6
var inputArray = [];
var i = -1, id;

function addBlock(note){
	document.querySelector('.sheet-music__note').insertAdjacentHTML('beforeend', newBlock(note));
	document.querySelector('.sheet-music__text').value = inputArray.join('');
}

function newBlock(note){
	i++;
	if(note.className.includes("sheet-music__do")){
		inputArray.push("до ");
		return (
			`<div id="${i}" class="sheet-music__do item" onclick="removeBlock(this);"></div>`
		);
	} else if(note.className.includes("sheet-music__re")){
		inputArray.push("ре ");
		return (
			`<div id="${i}" class="sheet-music__re item" onclick="removeBlock(this);"></div>`
		);
	} else if(note.className.includes("sheet-music__mi")){
		document.querySelector('.sheet-music__text').value += "ми "
		inputArray.push("ми ");
		return (
			`<div id="${i}" class="sheet-music__mi item" onclick="removeBlock(this);"></div>`
		);
	} else if(note.className.includes("sheet-music__fa")){
		inputArray.push("фа ");
		return (
			`<div id="${i}" class="sheet-music__fa item" onclick="removeBlock(this);"></div>`
		);
	} else if(note.className.includes("sheet-music__sol")){
		inputArray.push("соль ");
		return (
			`<div id="${i}" class="sheet-music__sol item" onclick="removeBlock(this);"></div>`
		);
	} else if(note.className.includes("sheet-music__lia")){
		inputArray.push("ля ");
		return (
			`<div id="${i}" class="sheet-music__lia item" onclick="removeBlock(this);"></div>`
		);
	} else if(note.className.includes("sheet-music__si")){
		inputArray.push("си ");
		return (
			`<div id="${i}" class="sheet-music__si item" onclick="removeBlock(this);"></div>`
		);
	}
}

function removeBlock(item){
	delete inputArray[item.id]
	document.querySelector('.sheet-music__text').value = inputArray.join('');

	item.style.transform = 'translateY(450px)';

	setTimeout(function(){
		item.remove();
	}, 3000);
};
// Задание 7
var letter = "лес, бочка, 20, бык, крик, 3"
var comma = ', '
var arraySimpleNumbers = [];
var arraySimpleWords = letter.split(comma)
for (let element of arraySimpleWords) {
	if(element%1 == 0){
		arraySimpleNumbers.push(element)
		arraySimpleWords.splice(arraySimpleWords.indexOf(element), 1)
	}
  }
  arraySimpleWords.sort();
  arraySimpleWords.sort(SortArray);
console.log(arraySimpleWords.sort())
console.log(arraySimpleNumbers.sort(SortArray))

function SortArray(x, y){
	if(x > y){return -1;}
	if(x < y){return 1;}
	return 0;
}

const arrayTask7 = new Map()
for( let i = 0; i < arraySimpleWords.length; i++){
	arrayTask7.set (`a${i}`, `${arraySimpleWords[i]}`)
}
for( let i = 0; i < arraySimpleNumbers.length; i++){
	arrayTask7.set (`n${i}`, `${arraySimpleNumbers[i]}`)
}

for (let key of arrayTask7.keys()) {
console.log(key);
}

for (let value of arrayTask7.values()) {
console.log(value);
}
//Задание 8
window.addEventListener("load", function onWindowLoad() {

    generatePalette(document.querySelector(".paint__palette"));
 
    var canvas = document.querySelector(".paint__canvas");
    var context = canvas.getContext("2d");
 
    // переменные для рисования
    context.lineCap = "round";
    context.lineWidth = 8;
 
    // вешаем обработчики на кнопки
    // очистка изображения
    document.querySelector(".paintButton__clear").onclick = function clear() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
 
	document.querySelector(".paintButton__save").onclick = function save() {
		var dataURL = canvas.toDataURL("image/png");
		var link = document.createElement("a");
		document.body.appendChild(link);
		link.href = dataURL;
		link.download = "image.png";
		link.click();
		document.body.removeChild(link);
	}

	document.querySelector(".paint__button_fill").onclick = function fill(){
		context.fillStyle = context.strokeStyle;
		context.fillRect(0, 0, canvas.width, canvas.height);

	}

    // На любое движение мыши по canvas будет выполнятся эта функция
    canvas.onmousemove = function drawIfPressed (e) {
      // в "e"  попадает экземпляр MouseEvent
      var x = e.offsetX;
      var y = e.offsetY;
      var dx = e.movementX;
      var dy = e.movementY;
 
      // Проверяем зажата ли какая-нибудь кнопка мыши
      // Если да, то рисуем
      if (e.buttons > 0) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - dx, y - dy);
        context.stroke();
        context.closePath();
      }
    };
 
    function generatePalette(palette) {
      // генерируем палитру
      // в итоге 5^3 цветов = 125
      for (var r = 0, max = 4; r <= max; r++) {
        for (var g = 0; g <= max; g++) {
          for (var b = 0; b <= max; b++) {
            var paletteBlock = document.createElement('div');
            paletteBlock.className = 'paletteBlock';
            paletteBlock.addEventListener("click", function changeColor(e) {
              context.strokeStyle = e.target.style.backgroundColor;
            });
			document.addEventListener("dblclick", function changeBackground(e) {
				context.beginPath();
				context.fillStyle = e.target.style.backgroundColor;
				context.fill();
			});
 
            paletteBlock.style.backgroundColor = (
              'rgb(' + Math.round(r * 255 / max) + ", "
              + Math.round(g * 255 / max) + ", "
              + Math.round(b * 255 / max) + ")"
            );
 
            palette.appendChild(paletteBlock);
          }
        }
      }
    }
});
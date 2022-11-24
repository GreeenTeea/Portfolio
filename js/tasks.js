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

function addBlock(note) {
	document.querySelector('.sheet-music__note').insertAdjacentHTML('beforeend', newBlock(note));
	document.querySelector('.sheet-music__text').value = inputArray.join('');
}

function newBlock(note) {
	i++;
	if (note.className.includes("sheet-music__do")) {
		inputArray.push("до ");
		return (
			`<div id="${i}" class="sheet-music__do item" onclick="removeBlock(this);"></div>`
		);
	} else if (note.className.includes("sheet-music__re")) {
		inputArray.push("ре ");
		return (
			`<div id="${i}" class="sheet-music__re item" onclick="removeBlock(this);"></div>`
		);
	} else if (note.className.includes("sheet-music__mi")) {
		document.querySelector('.sheet-music__text').value += "ми "
		inputArray.push("ми ");
		return (
			`<div id="${i}" class="sheet-music__mi item" onclick="removeBlock(this);"></div>`
		);
	} else if (note.className.includes("sheet-music__fa")) {
		inputArray.push("фа ");
		return (
			`<div id="${i}" class="sheet-music__fa item" onclick="removeBlock(this);"></div>`
		);
	} else if (note.className.includes("sheet-music__sol")) {
		inputArray.push("соль ");
		return (
			`<div id="${i}" class="sheet-music__sol item" onclick="removeBlock(this);"></div>`
		);
	} else if (note.className.includes("sheet-music__lia")) {
		inputArray.push("ля ");
		return (
			`<div id="${i}" class="sheet-music__lia item" onclick="removeBlock(this);"></div>`
		);
	} else if (note.className.includes("sheet-music__si")) {
		inputArray.push("си ");
		return (
			`<div id="${i}" class="sheet-music__si item" onclick="removeBlock(this);"></div>`
		);
	}
}

function removeBlock(item) {
	delete inputArray[item.id]
	document.querySelector('.sheet-music__text').value = inputArray.join('');

	item.style.transform = 'translateY(450px)';

	setTimeout(function () {
		item.remove();
	}, 3000);
};
// Задание 7
var letter = "лес, бочка, 20, бык, крик, 3"
var comma = ', '
var arraySimpleNumbers = [];
var arraySimpleWords = letter.split(comma)
for (let element of arraySimpleWords) {
	if (element % 1 == 0) {
		arraySimpleNumbers.push(element)
		arraySimpleWords.splice(arraySimpleWords.indexOf(element), 1)
	}
}
arraySimpleWords.sort();
arraySimpleWords.sort(SortArray);
console.log(arraySimpleWords.sort())
console.log(arraySimpleNumbers.sort(SortArray))

function SortArray(x, y) {
	if (x > y) { return -1; }
	if (x < y) { return 1; }
	return 0;
}

const arrayTask7 = new Map()
for (let i = 0; i < arraySimpleWords.length; i++) {
	arrayTask7.set(`a${i}`, `${arraySimpleWords[i]}`)
}
for (let i = 0; i < arraySimpleNumbers.length; i++) {
	arrayTask7.set(`n${i}`, `${arraySimpleNumbers[i]}`)
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

	const canvas = document.querySelector(".paint__canvas");
	const ctx = canvas.getContext("2d");
	var timerId = null;

	const imageForCanvas = new Image();
	imageForCanvas.src = "../img/figma-img.png";

	let imageFC = {
		x: Math.floor(Math.random() * (600 - imageForCanvas.width)),
		y: Math.floor(Math.random() * (600 - imageForCanvas.height))
	};

	let lines = [];

	// переменные для рисования
	ctx.lineCap = "round";
	ctx.lineWidth = 8;

	// вешаем обработчики на кнопки
	// очистка изображения
	document.querySelector(".paint__button_clear").onclick = function clear() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < lines.length; i++) {
			lines[i].remove;
		}
	};

	document.querySelector(".paint__button_save").onclick = function save() {
		var dataURL = canvas.toDataURL("image/png");
		var link = document.createElement("a");
		document.body.appendChild(link);
		link.href = dataURL;
		link.download = "image.png";
		link.click();
		document.body.removeChild(link);
	}

	document.querySelector(".paint__button_fill").onclick = function fill() {
		ctx.fillStyle = ctx.strokeStyle;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	document.querySelector(".paint__button_img_start").onclick = function () {
		timerId = setInterval(moveImage, 1000);
	};

	function moveImage() {
		// ctx.fillStyle = "white";
		// ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(imageForCanvas, imageFC.x, imageFC.y);

		lines.push(imageFC);

		imageFC = {
			x: Math.floor(Math.random() * (600 - imageForCanvas.width)),
			y: Math.floor(Math.random() * (600 - imageForCanvas.height))
		};

		console.log(lines);

		ctx.beginPath();
		ctx.moveTo(lines[0].x, lines[0].y);
		for (let i = 1; i < lines.length; i++) {
			ctx.lineTo(lines[i].x, lines[i].y);
		}
		ctx.stroke();
		ctx.closePath();
	}

	document.querySelector(".paint__button_img_stop").onclick = function () {
		clearInterval(timerId);
	};

	// На любое движение мыши по canvas будет выполнятся эта функция
	canvas.onmousemove = function drawIfPressed(e) {
		// в "e"  попадает экземпляр MouseEvent
		let x = e.offsetX;
		let y = e.offsetY;
		let dx = e.movementX;
		let dy = e.movementY;

		// Проверяем зажата ли какая-нибудь кнопка мыши
		// Если да, то рисуем
		if (e.buttons > 0) {
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(x - dx, y - dy);
			ctx.stroke();
			ctx.closePath();
		}
	};

	function generatePalette(palette) {
		// генерируем палитру
		for (let r = 0, max = 4; r <= max; r++) {
			for (let g = 0; g <= max; g++) {
				for (let b = 0; b <= max; b++) {
					const paletteBlock = document.createElement('div');
					paletteBlock.className = 'paletteBlock';
					paletteBlock.addEventListener("click", function changeColor(e) {
						ctx.strokeStyle = e.target.style.backgroundColor;
					});
					document.addEventListener("dblclick", function changeBackground(e) {
						ctx.beginPath();
						ctx.fillStyle = e.target.style.backgroundColor;
						ctx.fill();
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
//Задание 9
class Worker {
	constructor(work = 8, rate = 100, day = 24) {
		this.work = work;
		this.rate = rate;
		this.day = day;
		this.salary = work * rate * day;
	}

	say(text) {
		if (text) {
			console.log(text);
		} else {
			console.log("Надо работать");
		}
	}

	salary() {
		return this.salary;
	}
}

class Head extends Worker {
	constructor({ work = 16, rate = 200, day = 30 } = {}) {
		super(work, rate, day);
	}

	say() {
		super.say("Начальник: работает " + this.work + " часов в день, зарплата " + this.salary + ", говорит: пора отдыхать, начальник");
	}

	salary() {
		super.salary();
	}
}

class Clerk extends Worker {
	constructor({ work, rate = 80, day } = {}) {
		super(work, rate, day);
	}

	say() {
		super.say("клерк: работает " + this.work + " часов в день, зарплата " + this.salary + ", говорит: надо работать");
	}

	salary() {
		super.salary();
	}
}

class Secretary1 extends Worker {
	constructor({ work, rate = 150, day = 20 } = {}) {
		super(work, rate, day);
	}

	say() {
		super.say("секретарь 1: работает " + this.work + " часов в день, зарплата " + this.salary + ", говорит: Внимание! пора отдыхать, отпуск");
	}

	salary() {
		super.salary();
	}
}

class Secretary2 extends Worker {
	constructor({ work, rate = 120, day } = {}) {
		super(work, rate, day);
	}

	say() {
		super.say("секретарь 2: работает " + this.work + " часов в день, зарплата " + this.salary + ", говорит: Ахтунг! пора отдыхать, нельзя");
	}

	salary() {
		super.salary();
	}
}

const head = new Head();
const clerk = new Clerk();
const secretary1 = new Secretary1();
const secretary2 = new Secretary2();

head.say();
clerk.say();
secretary1.say();
secretary2.say();
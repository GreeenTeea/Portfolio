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

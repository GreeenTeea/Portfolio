const canvas = new fabric.Canvas('task10__canvas');

let house = new fabric.Rect({ // Форма дома
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	fill: 'rgb(42, 232, 207)',
	width: 200,
	height: 100,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
	stroke: 'black',
});
let shapeWindow = new fabric.Rect({ // Форма окна + рамка
	fill: 'rgb(200, 232, 224)',
	width: 40,
	height: 50,
	stroke: 'black',
});
let line1 = new fabric.Line([shapeWindow.left + (shapeWindow.width / 2), shapeWindow.top, shapeWindow.left + (shapeWindow.width / 2), shapeWindow.top + shapeWindow.height], { // продольная распорка окна
	fill: 'black',
	stroke: 'black',
});
let line2 = new fabric.Line([shapeWindow.left, shapeWindow.top + shapeWindow.height / 2, shapeWindow.left + shapeWindow.width, shapeWindow.top + shapeWindow.height / 2], { // поперечная распорка окна
	fill: 'black',
	stroke: 'black',
});
let houseWindow = new fabric.Group([shapeWindow, line1, line2], { // окно дома
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
});
let houseRoof = new fabric.Triangle({ // крыша дома
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	fill: 'rgb(227, 95, 34)',
	width: 240,
	height: 50,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
});
let housePipe = new fabric.Rect({ // Форма трубы
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	fill: 'rgb(102, 28, 13)',
	width: 20,
	height: 40,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
});
let houseDoor = new fabric.Rect({ // Форма трубы
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	fill: 'rgb(92, 85, 84)',
	width: 40,
	height: 70,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
});
let foliage1 = new fabric.Triangle({ // верхняя листва
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	fill: 'rgb(56, 199, 40)',
	width: 150,
	height: 60,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
	stroke: 'black',
});
let foliage2 = new fabric.Triangle({ // средняя листва
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	fill: 'rgb(56, 199, 40)',
	width: 170,
	height: 60,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
	stroke: 'black',
});
let foliage3 = new fabric.Triangle({ // нижняя листва
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	fill: 'rgb(56, 199, 40)',
	width: 190,
	height: 60,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
	stroke: 'black',
});
let treeTrunk = new fabric.Rect({ // Форма ствола дерева
	left: Math.floor(Math.random() * 100) + 100,
	top: Math.floor(Math.random() * 100) + 100,
	fill: 'rgb(161, 72, 18)',
	width: 20,
	height: 280,
	angle: Math.floor(Math.random() * 180),
	lockScalingX: true,
	lockScalingY: true,
	originX: 'center',
	originY: 'center',
});

canvas.add(house, houseWindow, houseRoof, housePipe, houseDoor, foliage1, foliage2, foliage3, treeTrunk);
canvas.sendToBack(treeTrunk);

function check() {
	// Выравниваем ствол
	if (treeTrunk.angle >= 350 || treeTrunk.angle <= 10) {
		if (treeTrunk.angle != 360 && treeTrunk.angle >= 350) {
			treeTrunk.animate('angle', 360, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		} else if (treeTrunk.angle != 0 && treeTrunk.angle <= 10) {
			treeTrunk.animate('angle', 0, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
	// Выравниваем дом
	if (house.angle >= 350 || house.angle <= 10) {
		if (house.angle != 360 && house.angle >= 350) {
			house.animate('angle', 360, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		} else if (house.angle != 0 && house.angle <= 10) {
			house.animate('angle', 0, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
	// Проверяем положение окна относительно дома
	if (Math.abs(house.left - 40 - houseWindow.left) < 20 && Math.abs(house.top - 10 - houseWindow.top) < 20 && (Math.abs(house.angle - houseWindow.angle) < 30 || Math.abs(house.angle - houseWindow.angle) > 330)) {
		if (houseWindow.angle != house.angle) {
			houseWindow.animate('angle', house.angle, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (houseWindow.left != house.left - 40) {
			houseWindow.animate('left', house.left - 40, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (houseWindow.top != house.top - 10) {
			houseWindow.animate('top', house.top - 10, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
	// Проверяем положение крыши отностильено дома
	if (Math.abs(house.left - houseRoof.left) < 20 && Math.abs(house.top - 75 - houseRoof.top) < 20 && (Math.abs(house.angle - houseRoof.angle) < 30 || Math.abs(house.angle - houseRoof.angle) > 330)) {
		if (houseRoof.left != house.left) {
			houseRoof.animate('left', house.left, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (houseRoof.top != house.top - 75) {
			houseRoof.animate('top', house.top - 75, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (houseRoof.angle != house.angle) {
			houseRoof.animate('angle', house.angle, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
	// Проверяем положение двери относительно дома
	if (Math.abs(house.left + 50 - houseDoor.left) < 20 && Math.abs(house.top + 15 - houseDoor.top) < 20 && (Math.abs(house.angle - houseDoor.angle) < 30 || Math.abs(house.angle - houseDoor.angle) > 330)) {
		if (houseDoor.left != house.left + 50) {
			houseDoor.animate('left', house.left + 50, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (houseDoor.top != house.top + 15) {
			houseDoor.animate('top', house.top + 15, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (houseDoor.angle != house.angle) {
			houseDoor.animate('angle', house.angle, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
	// Проверяем положение трубы относительно крыши
	if (Math.abs(houseRoof.left + 60 - housePipe.left) < 20 && Math.abs(houseRoof.top - 15 - housePipe.top) < 20 && (Math.abs(houseRoof.angle - housePipe.angle) < 30 || Math.abs(houseRoof.angle - housePipe.angle) > 330)) {
		if (housePipe.left != houseRoof.left + 60) {
			housePipe.animate('left', houseRoof.left + 60, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (housePipe.top != houseRoof.top - 15) {
			housePipe.animate('top', houseRoof.top - 15, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (housePipe.angle != houseRoof.angle) {
			housePipe.animate('angle', houseRoof.angle, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
	// Проверяем положение верхней листвы отностильено ствола
	if (Math.abs(treeTrunk.left - foliage1.left) < 20 && Math.abs(treeTrunk.top - 140 - foliage1.top) < 20 && (Math.abs(treeTrunk.angle - foliage1.angle) < 30 || Math.abs(treeTrunk.angle - foliage1.angle) > 330)) {
		if (foliage1.left != treeTrunk.left) {
			foliage1.animate('left', treeTrunk.left, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (foliage1.top != treeTrunk.top - 140) {
			foliage1.animate('top', treeTrunk.top - 140, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (foliage1.angle != treeTrunk.angle) {
			foliage1.animate('angle', treeTrunk.angle, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
	// Проверяем положение средней листвы отностильено ствола
	if (Math.abs(treeTrunk.left - foliage2.left) < 20 && Math.abs(treeTrunk.top - 80 - foliage2.top) < 20 && (Math.abs(treeTrunk.angle - foliage2.angle) < 30 || Math.abs(treeTrunk.angle - foliage2.angle) > 330)) {
		if (foliage2.left != treeTrunk.left) {
			foliage2.animate('left', treeTrunk.left, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (foliage2.top != treeTrunk.top - 80) {
			foliage2.animate('top', treeTrunk.top - 80, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (foliage2.angle != treeTrunk.angle) {
			foliage2.animate('angle', treeTrunk.angle, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
	// Проверяем положение нижней листвы отностильено ствола
	if (Math.abs(treeTrunk.left - foliage3.left) < 20 && Math.abs(treeTrunk.top - 20 - foliage3.top) < 20 && (Math.abs(treeTrunk.angle - foliage3.angle) < 30 || Math.abs(treeTrunk.angle - foliage3.angle) > 330)) {
		if (foliage3.left != treeTrunk.left) {
			foliage3.animate('left', treeTrunk.left, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (foliage3.top != treeTrunk.top - 20) {
			foliage3.animate('top', treeTrunk.top - 20, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
		if (foliage3.angle != treeTrunk.angle) {
			foliage3.animate('angle', treeTrunk.angle, {
				onChange: canvas.renderAll.bind(canvas),
				duration: 300,
			});
		}
	}
}
setInterval(check, 1000);
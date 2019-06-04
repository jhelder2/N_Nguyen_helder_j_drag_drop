(() => {
	//stub
	console.log('link successful')

const
	lineup = document.querySelector('.lineup'),
	stage = document.querySelector('.stage'),
	dropZones = document.querySelectorAll('.drop-zone');

let 
	draggableChars = document.querySelectorAll('.drop-imge');


function switchImage(){
		console.log(this);
	}

	draggableChars.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log('draggin...');
			e.dataTransfer.setData("text/plain", this.id);
		});
	});


})();
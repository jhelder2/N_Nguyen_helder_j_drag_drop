(() => {
	//stub
	console.log('link successful')

const
	lineup = document.querySelector('.lineUp'),
	stage = document.querySelector('.stage'),
	dropZones = document.querySelectorAll('.drop-zone'),
	dragZones = document.querySelectorAll('.drag-zone');

let
	lightBox = document.querySelector('.lightbox'),
	closeButton = document.querySelector('.close-lightbox'),
	resetButton = document.querySelector('.reset'),
	draggableChars = document.querySelectorAll('.drop-image');

	draggableChars.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			e.dataTransfer.setData("text/plain", this.id);
		});
	});

  dropZones.forEach(zone =>{
      zone.addEventListener("dragover", function(e) {
          e.preventDefault();
      });

      zone.addEventListener("drop", function(e) {
          e.preventDefault();

          let
						draggedElement = e.dataTransfer.getData("text/plain");



//if the "zone" has a child count of "0"
        	if (zone.childElementCount == 0 ) {
//set audio source
						newAudio = document.createElement('audio');
						newAudio.loop = 'true';
						newAudio.src = (`audio/${draggedElement}.mp3`);
						newAudio.setAttribute('id', 'audio-file');
//set class to drag-zone
						zone.classList.remove();
						zone.classList.add("drag-zone");
//append image to drop-zone
          	e.target.appendChild(document.querySelector(`#${draggedElement}`));
//append audio-element to drop-zone
						zone.appendChild(newAudio);
					};

					let audioFile = document.querySelectorAll('#audio-file');

					audioFile.forEach(file =>{
						file.currentTime = 0;
					});
//Play Audio
						newAudio.play();
      });
  });

	function closeLightBox(e) {
    event.preventDefault();

    lightBox.classList.add('hide-lightbox');

	};

	function reset(e) {

		dropZones.forEach(zone => {

			zone.classList.remove("drag-zone");
			zone.classList.add("drop-zone");

			if
			(zone.childElementCount !== 0 ){

				zone.removeChild(document.getElementById('audio-file'));

				piece = zone.firstElementChild;
				dragZones.forEach(dZone => {
					if
					(dZone.childElementCount ==0){
					dZone.appendChild(piece)};
				});
			};
		});

	};

	closeButton.addEventListener("click", closeLightBox);
	resetButton.addEventListener("click", reset);

})();

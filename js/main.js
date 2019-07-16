(() => {
	//stub
	console.log('link successful')

const
	lineup = document.querySelector('.lineUp'),
	stage = document.querySelector('.stage'),
	dropZones = document.querySelectorAll('.drop-zone');

let
	draggableChars = document.querySelectorAll('.drop-image');
	draggableChars.forEach(piece => {
		piece.addEventListener("dragstart", function(e) {
			console.log('draggin...');
			e.dataTransfer.setData("text/plain", this.id);
		});
	});

  dropZones.forEach(zone =>{
      zone.addEventListener("dragover", function(e) {
          e.preventDefault();
          console.log('dragging over');
      });

      zone.addEventListener("drop", function(e) {
          e.preventDefault();

          let draggedElement = e.dataTransfer.getData("text/plain");
          console.log('you dragged: ', draggedElement);

//if the "zone" has a child count of "0"
        if (zone.childElementCount == 0 ) {
//add the image to the drop zone
          e.target.appendChild(document.querySelector(`#${draggedElement}`))};
      });
  });

})();

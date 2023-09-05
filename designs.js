// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    const resizedCanvas = function(height, width) {
        const pixelCanvas = document.querySelector('#pixelCanvas');
        const grid = document.createDocumentFragment();

        // Creates a new row of pixels with each pass through loop
        for (i = 0; i < height; i++) {
            const newRow = document.createElement('tr');
            grid.appendChild(newRow);

            // Creates a new pixel in row with each pass through loop
            for (j = 0; j < width; j++) {
                const newColumn = document.createElement('td');
                newRow.appendChild(newColumn);

                // Updates pixel to chosen color when clicked
                newColumn.addEventListener('click', function updateColor() {
                    const pixelColor = document.querySelector('#colorPicker').value;
                    newColumn.style.backgroundColor = pixelColor;
                });
            }
        }

        pixelCanvas.replaceChildren(grid);
    }

    // Creates grid of height and width nominated in input fields
    resizedCanvas(document.querySelector('#inputHeight').value, document.querySelector('#inputWidth').value);
}

const submitButton = document.querySelector('input[type="button"]');

submitButton.addEventListener('click', makeGrid);

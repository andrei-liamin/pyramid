let steps = document.getElementsByName('pyramidH')[0];
let stepsValue = Math.round(document.getElementsByName('pyramidH')[0].value / 100 * 19) + 1;
let symbol = document.getElementById('symbol');

steps.insertAdjacentHTML("afterend", "This is my caption.");

steps.addEventListener('change', function() {
    drawPyramid(Math.round(document.getElementsByName('pyramidH')[0].value / 100 * 19) + 1, symbol.value);
})
symbol.addEventListener('change', function() {
    drawPyramid(Math.round(document.getElementsByName('pyramidH')[0].value / 100 * 19) + 1, symbol.value);
});

drawPyramid(stepsValue, symbol.value);

function drawPyramid(height, symb) {
    console.log(height);
    deletePyramid();
    let pyramidNode = document.getElementById("pyramid");

    for (let i = 1; i < height + 1; i++) {
    	let step = document.createElement("p");
        step.textContent = 
        '\u00A0'.repeat(height - i) + symb.repeat(i + 1);
    	pyramidNode.appendChild(step);
    }
    document.getElementsByName('pyramidH')[0].nextSibling.textContent = height;
}

function deletePyramid() {
    let pyramidNodeArray = document.getElementById("pyramid").childNodes;
    for (let i = pyramidNodeArray.length - 1; i != -1 ; i--) {
        pyramidNodeArray[i].remove();
        console.log('cleared');
    }
}

     //    for (let j = 0; j < height - i; j++) {
     //        let divSpace = document.createElement('div');
     //        divSpace.className = 'space';
     //        step.appendChild(divSpace);
     //    }
     //    for (let k = 0; k < i + 1; k++) {
     //        let divHash = document.createElement('div');
     //        divHash.className = 'hash';
     //        step.appendChild(divHash);
     //    }
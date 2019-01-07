let steps = Math.round(document.getElementsByName('pyramidH')[0].value / 100 * 19) + 1;
let symbol = document.getElementsByName('symbol')[0].value;
console.log(symbol);

drawPyramid(steps, symbol);

function drawPyramid(height) {
    let pyramidNode = document.getElementById("pyramid");

    for (let i = 1; i < height + 1; i++) {
    	let step = document.createElement("p");
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
        step.textContent = '\u00A0'.repeat(height - i) + symbol.repeat(i + 1);
    	pyramidNode.appendChild(step);
    }
    document.getElementById('construction').remove();
}



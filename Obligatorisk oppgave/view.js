show();
function show() {
   init();
}


function init() {
    
    let svgInnerHtml = '';

    for (let tall = 0; tall < numbers.length; tall++) {
        svgInnerHtml += createBar(numbers[tall], tall + 1);
    }
    contentDiv.innerHTML = `
    
        <svg  id="chart" width="500" viewBox="0 0 80 60">
        
        ${svgInnerHtml}
        
        </svg><br/>
        
        <i>Valgt stolpe:</i> <i id="valgtStolpenumber">${valgtStolpe}</i>
        <br />
        <i>Verdi:</i>
        <input type="number" id="tall" min="0" max="10" oninput="inputValue = this.value" style="color: black;font-size: large;font-family: cursive;border: inset;box-shadow: 10px 6px 8px rgb(0 0 0);">
        
        <br> <br />
        
        
        <button class="btn" onclick="addBar()">Add</button>
        
        <button class="btn" id="changeBtn" ${disabled ? "disabled" : ""} onclick="changeBar()">Change</button>
        
        <button class="btn" id="removeBtn" ${disabled ? "disabled" : ""} onclick="deleteBar()">Delete</button><br />
        <br />
        `;
        
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 6;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    console.log(valgtStolpe, barNo);
    let borderStyle = valgtStolpe == barNo ? 'stroke: black' : '';
    return `
    <rect id="rect${barNo}" onclick="select(${barNo})"
        width="${width}" 
        height="${height}"
        x="${x}" y="${y}" 
        fill="${color}"
       style="${borderStyle}"
        >
        
    </rect>
            `;
             
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

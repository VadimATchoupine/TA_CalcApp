// CORE FUNCTIONS
function math(val) {
    if (document.getElementById('display_history').innerHTML.indexOf("=") != -1) {
        c('');
        document.getElementById('display_history').innerHTML += val;
    } else {
    document.getElementById('display_history').innerHTML += val;
    }
    // to solve case with 2nd dot, zero, equal sign
};

function c(val) {
    document.getElementById('display_history').innerHTML=val;
    document.getElementById('display').innerHTML=val;
};

function estimate(){
    try {
        if (document.getElementById('display_history').innerHTML === "") {
            document.getElementById('display').innerHTML = "";    
        }
        else {
            var result = eval(document.getElementById('display_history').innerHTML);
            document.getElementById('display').innerHTML = roundToTwo(result);
        }
    }
    catch(e) {
        c('Error');
    }
    document.getElementById('display_history').innerHTML += ' = ';
};

// ISSUE 1 - roundTo2
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

// ISSUES 2 - keyboard --- NEED TO REVISE KEYCODES
document.onkeydown = function checkKeycode(event) {
    var keycode;
    if(!event) var event = window.event;
    if (event.keyCode) keycode = event.keyCode; // IE
    else if(event.which) keycode = event.which; // all browsers
    
    // console.log(keycode);

    switch(keycode){
        case 187: estimate(); break;
        case 13: c(); break;
        case 191: math('/'); break;
        case 106: math('*'); break;
        case 107: math('+'); break;
        case 189: math('-'); break;
        case 48: math('0'); break;
        case 49: math('1'); break;
        case 50: math('2'); break;
        case 51: math('3'); break;
        case 52: math('4'); break;
        case 53: math('5'); break;
        case 54: math('6'); break;
        case 55: math('7'); break;
        case 56: math('8'); break;
        case 57: math('9'); break;
    }
}

// ISSUE 3 - Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
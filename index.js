function main() {

    const images_list = getCollection();
    
    for (image of images_list) {
        dragElement(document.getElementById((image)));
    }

    // generateArea(images_list);
}

main();

function dragElement(elmnt) {

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function getCollection() {
    console.log(document.getElementsByClassName("draggable"));

    let collection = document.getElementsByClassName("draggable");
    let images = [];
 
    for (item of collection) {
        console.log(item.firstElementChild.id);
        images.push(item.firstElementChild.id);
    }

    return images;
}

/*
figure out how to generate all divs with attributes from directory!

function generateArea(imglist) {

    let area = document.getElementById("area");
    let div = document.createElement("div");
    let att = document.createAttribute("class");
    att.value = "draggable";
    div.setAttributeNode(att);

    divlist = [];
    for (let i = 0; i < imglist.length; i++) {
        divlist.push(div.outerHTML);
    }

    for (item of divlist) {
        area.innerHTML += item;
    }
       
}
*/
let runBishBosh = function (loop, div1, div2) {
    let printGrid = function (domParent, domChildTmp, strValue, cols) {
        let domChild = domChildTmp.cloneNode(true);
        domChild.innerHTML = strValue;
        domParent.appendChild(domChild);
        let cnt = domParent.childElementCount;
        let div = document.createElement('div');
        div.setAttribute('class', 'break');
        // test if new row after the extra clear element was added
        if (++cnt % ++cols === 0) domParent.appendChild(div);
    }
    let str, domParent = document.querySelector(".bishbosh_parent"),
        domChildTmp = document.querySelector('template').content.cloneNode(true).firstElementChild;
    domParent.innerHTML = '';
    for (let i = 1; i <= loop; i++) {
        str = ''
        if (i % div1 === 0) str = '-Bish'
        if (i % div2 === 0) str += '-Bosh'
        str = (str) ? str.substr(1) : i;
        //console.log(str);
        printGrid(domParent, domChildTmp, str, 5);
    }
}

document.getElementById("myForm").onsubmit = function (event) {
    el = this; //event.target document.getElementById("")
    runBishBosh(el.inputLoop.value, el.inputFirstDiv.value, el.inputSecondDiv.value);
    event.preventDefault();
}
//      html strings
//      domParent.innerHTML += '<div class="break"></div>';
//      domParent.innerHTML += '<div class="bishbosh p-2 border">' + str + '</div>'; 
//      domParent.insertAdjacentHTML("beforeend",'<div class="bishbosh p-2 border">' + str + '</div>');
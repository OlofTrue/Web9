let runBishBosh = function (loop, div1, div2) {
    let str, domParent = document.querySelector(".bishbosh_parent"),
        domChildTmp = document.querySelector('template').content.cloneNode(true).firstElementChild
        ,domChild;
    domParent.innerHTML = '';
    for (let i = 1; i <= loop; i++) {
        str = ''
        if (i % div1 === 0) str = '-Bish'
        if (i % div2 === 0) str += '-Bosh'
        str = (str) ? str.substr(1) : i;
        //console.log(str);
            //domParent.innerHTML += '<div class="bishbosh p-2 border">' + str + '</div>'; 
            //domParent.insertAdjacentHTML("beforeend",'<div class="bishbosh p-2 border">' + str + '</div>');
        domChild=domChildTmp.cloneNode(true);
        domChild.innerHTML = str;
        domParent.appendChild(domChild);
        if (i % 5 === 0) domParent.innerHTML += '<div class="break"></div>';
    }
}
document.getElementById("myForm").onsubmit = function () {
    runBishBosh(document.getElementById("inputLoop").value, document.getElementById("inputFirstDiv").value,
        document.getElementById("inputSecondDiv").value);
    event.preventDefault();
}
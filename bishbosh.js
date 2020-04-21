let runBishBosh = function (loop, div1, div2) {
    let str; //,strRet='' 
    for (let i = 1; i <= loop; i++) {
        str = ''
        if (i % div1 === 0) str = '-Bish'
        if (i % div2 === 0) str += '-Bosh'
        str = (str.length) ? str.substr(1) : i;
        //console.log(str); strRet+=str;
        document.querySelector(".list-group").innerHTML += '<li class="list-inline-item list-group-item">' +
            str + '</li>';
    } // return strRet;
}

//var parentDiv = document.querySelector(".list-group");
//parentDiv.insertAdjacentHTML("beforeend", "<div class='list-group-item col-xs-6 col-md-4'>ZZZZZ</div>");

document.getElementById("myForm").onsubmit = function () {
    runBishBosh(document.getElementById("inputLoop").value, document.getElementById("inputFirstDiv").value,
        document.getElementById("inputSecondDiv").value);
    event.preventDefault();
}

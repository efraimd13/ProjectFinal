alert("Selamat Datang ");

function hello(){
    let data = document.getElementById("nama").value;
    alert ("Hai " + data + ", kami akan segera menghubungi anda, Terima kasih atas kerjasamanya");
}

function orangeT(){
    document.body.style.backgroundColor="#cc6600";
    document.getElementsByTagName("h1")[0].style.backgroundColor="black";
    document.getElementsByTagName("h1")[1].style.backgroundColor="black";
    document.getElementsByTagName("h1")[2].style.backgroundColor="black";
    document.getElementsByTagName("h1")[3].style.backgroundColor="black";
    document.getElementsByTagName("h1")[4].style.backgroundColor="black";
    document.getElementsByTagName("h1")[5].style.backgroundColor="black";
    document.getElementsByTagName("h1")[6].style.backgroundColor="black";
    document.getElementsByTagName("nav")[0].style.backgroundColor="black";
}


function greenT(){
    document.body.style.backgroundColor="#33cc33";
    document.getElementsByTagName("h1")[0].style.backgroundColor="#003300";
    document.getElementsByTagName("h1")[1].style.backgroundColor="#003300";
    document.getElementsByTagName("h1")[2].style.backgroundColor="#003300";
    document.getElementsByTagName("h1")[3].style.backgroundColor="#003300";
    document.getElementsByTagName("h1")[4].style.backgroundColor="#003300";
    document.getElementsByTagName("h1")[5].style.backgroundColor="#003300";
    document.getElementsByTagName("h1")[6].style.backgroundColor="#003300";
    document.getElementsByTagName("nav")[0].style.backgroundColor="#003300";
}

function defaultT(){
    document.body.style.backgroundColor="rgb(141, 145, 145)";
    document.getElementsByTagName("h1")[0].style.backgroundColor="#535358";
    document.getElementsByTagName("h1")[1].style.backgroundColor="#535358";
    document.getElementsByTagName("h1")[2].style.backgroundColor="#535358";
    document.getElementsByTagName("h1")[3].style.backgroundColor="#535358";
    document.getElementsByTagName("h1")[4].style.backgroundColor="#535358";
    document.getElementsByTagName("h1")[5].style.backgroundColor="#535358";
    document.getElementsByTagName("h1")[6].style.backgroundColor="#535358";
    document.getElementsByTagName("nav")[0].style.backgroundColor="rgb(61, 54, 52)";
}
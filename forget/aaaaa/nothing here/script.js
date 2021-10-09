function getHumans(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:3000/doomer.xml");
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            let XMLXing = xmlhttp.responseText;

            //nothing hiar
            /*let parser = new DOMParser();
            let xongDom = parser.parseFromString(XMLXing, "text/xml");
            xmlToJ
            console.log(xongDom);*/
            console.log("stop");
            //enough
        }
        if(xmlhttp.readyState == 4 && xmlhttp.status == 404){
            //lol no
        }
    }
    xmlhttp.send();
}
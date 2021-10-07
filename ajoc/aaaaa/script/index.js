let ajax = new XMLHttpRequest();
function RequestPage(url){

  ajax.open("GET", url);
  ajax.send();
}
console.log(ajax);

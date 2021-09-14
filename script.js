var request = new XMLHttpRequest();  
request.open("GET", '/products.csv', false);   
request.send(null);  

var products = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
  products.push(jsonObject[i].split(','));
}
// Retrived data from csv file content
console.log(products);
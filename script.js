// Parse csv files into arrays

var request = new xmlhttprequest();  
request.open("GET", '/usage.csv', false);   
request.send(null);  

var consumptions = new Array();
var jsonObject = request.responseText.split(/\r?\n|\r/);
for (var i = 0; i < jsonObject.length; i++) {
    consumptions.push(jsonObject[i].split(','));
}

// Summing up consumption values in consumptions array
var totals = [];
consumptions.reduce(function(res, value) {
  if (!res[value.name]) {
    res[value.name] = { Id: value.name, qty: 0 };
    totals.push(res[value.name])
  }
  res[value.name].qty += value.qty;
  return res;
}, {});

// Sorting data from highest to lowest

totals.sort((a, b) => parseFloat(b.value) - parseFloat(a.value));

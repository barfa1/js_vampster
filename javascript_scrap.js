var publish= document.querySelector('.item .field-content .lbl-licitacao font:nth-child(2)').innerText;
console.log(publish);
//printing Publish Date in console 


var bidding_date= document.querySelector('.item .field-content span:nth-last-child(6) font:nth-child(2)').innerText;
console.log(bidding_date);
//printing Bidding Date in console 

var object = document.querySelector('.item .field-content p font').innerText;
console.log(object);
//printing Object in console 


//printing all list of anchhor for the 
//  https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020 PAGE

var nodelist_anchor = document.querySelectorAll('a');
var i;
for (i = 0; i < nodelist_anchor.length; i++) {
 console.log( nodelist_anchor[i]);
}

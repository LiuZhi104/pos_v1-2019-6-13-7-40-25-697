'use strict';

function printReceipt(inputs) {
  var allItems = loadAllItems();
  var same = findSame(inputs);
  var receips = createReceipt(same,promotions,allItems);
  var totalPrice = 0;
  var string = "";
  for(let m = 0 ; m < receips.length ; m++){
      string += "名称："+receips[m].name+"，数量："+receips[m].count+receips[m].unit+"，单价："+parseInt(receips[m].price).toFixed(2)+"(元)，小计："+receips[m].price*receips[m].count+".00(元)"+"\n";
         totalPrice +=  receips[m].price*receips[m].count;
   }
   console.log("***<没钱赚商店>收据***"+"\n"+string+"\n"+"----------------------"+"\n"+"总计："+totalPrice+".00(元)"+"\n"+"节省："+savedprice+".00(元)"+"\n"+"**********************");
}
function findSame(inputs){
   var countInput = [];
      for(let g = 0;g < inputs.length ; g++){
          if(inputs[g].split("-").length == 1){
              countInput.push({
                  barcode:inputs[g].split("-")[0],
                  count: 1
              })
          }else{
           countInput.push({
               barcode:inputs[g].split("-")[0],
               count: inputs[g].split("-")[1]
           })
          }
      }
      var same =[];
      for (var i = 0; i < countInput.length;) {
         var count = 0;
         var number = 0;
          for (var j = i; j < countInput.length; j++) {
             if(countInput[i].barcode == countInput[j].barcode){
                   count += Number(countInput[j].count);
                   number ++ ;
             }
          }
         same.push({
             item: countInput[i].barcode,
             count: count
          })
         i = i + number;
      }
      return same;
}
function createReceipt(same,promotions,allItems){
   vvar receips = [];
       var item = {};
       receips =  same.map((vaule) =>{
           item = {
             name:allItems.find((item) =>{
                return item.barcode == vaule.item;
             }).name,
             price:allItems.find((item) =>{
                return item.barcode == vaule.item;
             }).price,
             count:vaule.count,
             unit:allItems.find((item) =>{
                return item.barcode == vaule.item;
             }).unit,
             discouTotal:promotion.includes(vaule.item)?(Number(vaule.count)-Math.floor(Number(vaule.count/3)))*allItems.find((item) =>{
                return item.barcode == vaule.item;
             }).price:Number(vaule.count)*allItems.find((item) =>{
                return item.barcode == vaule.item;
             }).price,
             subTotal:Number(vaule.count)*allItems.find((item) =>{
                return item.barcode == vaule.item;
             }).price
          };
          return item
       });
       return receips;
}


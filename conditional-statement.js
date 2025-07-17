
comparing
true / false
conditional text print
if condition
else condition
else if condition

//console.log(4 > 9);
//console.log(4 < 9);
//console.log(9 > 4);
//console.log(9 < 4);
//console.log(9 == 4);
//console.log(4 == 4);
//console.log(5 != 5);

var abirMoney = 99;
var ranaMoney = 100;
//console.log(abirMoney == ranaMoney);

var abirMoney = 99;
var ranaMoney = 100;
//console.log(abirMoney > ranaMoney);

var abirMoney = 99;
var ranaMoney = 100;
//console.log(abirMoney != ranaMoney);

//console.log(goodFamily && goodJobWithSalary );
//console.log(goodJobWithSalary || goodBusinessMan );

var isFoodReady = false;
if(isFoodReady == true) {
    //console.log("Food quality is good");
}

var isFoodReady = true;
if(isFoodReady == true) {
    //console.log("Food quality is good");
}

var iPhonePrice = 8000;
var iHaveMoney = 7000;
if(iPhonePrice < iHaveMoney){
    console.log("I will be very happy"); //mismatch price
}
var iPhonePrice = 8000;
var iHaveMoney = 9000;
if(iPhonePrice < iHaveMoney){
    //console.log("I will be very happy");
}
var iPhonePrice = 8000;
var iHaveMoney = 7000;
if(iPhonePrice > iHaveMoney){
    //console.log("BD Walton phone is better");
}

var iPhonePrice = 8000;
var iHaveMoney = 7000;
if(iPhonePrice > iHaveMoney) {
    //console.log("I will not buy the iPhone");
}
else{
    //console.log("I will must buy the iPhone")
}

var iPhonePrice = 8000;
var iHaveMoney = 9000;
if(iPhonePrice > iHaveMoney) {
    //console.log("I will not buy the iPhone");
}
else{
    //console.log("I will must buy the iPhone")
}

var jobHolder = true;
var saveMoney = 2000;
var isDhaka = false;
if(jobHolder == true && saveMoney >1500) {
    //console.log("I will visit national museum")
}
else {
    //console.log("I will not visit")
}

var jobHolder = false;
var saveMoney = 2000;
var isDhaka = false;
if(jobHolder == true && saveMoney >1500) {
    //console.log("I will visit national museum")
}
else {
    //console.log("I will not visit")
}

var jobHolder = true;
var saveMoney = 2000;
var isDhaka = false;
if(jobHolder == true && saveMoney >2500) {
    //console.log("I will visit national museum");
}
else {
    //console.log("I will not visit");
}

var jobHolder = true;
var saveMoney = 2000;
var isDhaka = false;
if(jobHolder == true || saveMoney > 3000) {
    //console.log("I will visit national museum");
}
else{
    //console.log("I will not visit");
}

var jobHolder = true;
var saveMoney = 2000;
var isDhaka = false;
if((jobHolder == true && saveMoney < 1500) || isDhaka == true ){
    //console.log("I will visit national museum");
}
else{
    //console.log("I will not visit")
}

var myBudget = 100;
var cake = 50;
var batterBan = 30;
var tost = 10;
if(cake < myBudget){
    //console.log("Eat Cake")
}
else if(batterBan < myBudget){
    //console.log("Eat Batterban")
}
else if(tost < myBudget){
    //console.log("Eat Tost")
}
else{
    //console.log("Only Tea")
}

var myBudget = 40;
var cake = 50;
var batterBan = 30;
var tost = 10;
if(cake < myBudget){
    //console.log("Eat Cake")
}
else if(batterBan < myBudget){
    //console.log("Eat Batterban")
}
else if(tost < myBudget){
    //console.log("Eat Tost")
}
else{
    //console.log("Only Tea")
}

var myBudget = 20;
var cake = 50;
var batterBan = 30;
var tost = 10;
if(cake < myBudget){
    //console.log("Eat Cake")
}
else if(batterBan < myBudget){
    //console.log("Eat Batterban")
}
else if(tost < myBudget){
    //console.log("Eat Tost")
}
else{
    //console.log("Only Tea")
}

var myBudget = 8;
var cake = 50;
var batterBan = 30;
var tost = 10;
if(cake < myBudget){
    //console.log("Eat Cake")
}
else if(batterBan < myBudget){
    //console.log("Eat Batterban")
}
else if(tost < myBudget){
    //console.log("Eat Tost")
}
else{
    //console.log("Only Tea")
}

var myBudget = 100;
var cake = 50;
var batterBan = 30;
var tost = 10;
var isWellPacked = true;
if(cake < myBudget){
    if(isWellPacked = true){
        //console.log("Price and packing is good, So I will eat")
    }
    else{
    //console.log("Price is reasonable, but open the pack. So I will not eat")
}
}

var myBudget = 100;
var cake = 50;
var batterBan = 30;
var tost = 10;
var isWellPacked = false;
if(cake < myBudget){
    if(isWellPacked = true){
        //console.log("Price and packing is good, So I will eat")
    }
    else{
    //console.log("Price is reasonable, but open the pack. So I will not eat") //is not print
}
}

var touristPlace = ["Nepal", 'Thailand', "Italy", 'Srilanka', "UK"];
if(touristPlace[1] == "Nepal"){
    //console.log("Nepal's mountain is beatiful");
}
else if(touristPlace[1] == "Italy"){
    //console.log("Italy's house on the mountain");
}
else if(touristPlace.length == 4){
    //console.log("I will not visit due to more place at a time");
}

var touristPlace = ["Nepal", 'Thailand', "Italy", 'Srilanka', "UK"];
if(touristPlace[1] == "Thailand"){
    //console.log("Thailand's tourist place is beatiful");
}
else if(touristPlace[1] == "Italy"){
    //console.log("Italy's house on the mountain");
}
else if(touristPlace.length == 4){
    //console.log("I will not visit due to more place at a time");
}

var egg = 10;
var taka = 10;
if(egg <= taka ){
    //console.log("Rice eat by egg fry")
}
var egg = 10;
var taka = 15;
if(egg <= taka ){
    //console.log("Rice eat by egg fry")
}
var egg = 10;
var taka = 8;
if(egg >= taka ){
    console.log("Egg buy is not possible") //less taka
}

//how to write 3 condition. like-jobHolder, moneyDiposite and shouldHaveFlat





 




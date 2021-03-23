const add1 = document.querySelector('.add1');
var addQ1 = document.querySelector('.added-quan1')
var addQ2 = document.querySelector('.added-quan2')
var addQ3 = document.querySelector('.added-quan3')
var price1 = 20;
var price2 = 30;
var price3 = 40;
var emailList = [];
var sub = 0;
const quan1 = document.querySelector('.quan1');
const quan2 = document.querySelector('.quan2');
const quan3 = document.querySelector('.quan3');

var value1;
var value2;
var value3;
add1.addEventListener('click', addfunc);


//adding items1
function addfunc(){
value1 = addQ1.innerHTML;

++value1;
document.querySelector('.added-quan1').innerHTML = value1;
quan1.setAttribute("max",value1);
console.log(value1)

//selling price
price1 = 20;
price1 = price1 - (value1 * 0.50 )
document.querySelector('.priceItm1').innerHTML = price1;
const addQ1Value = document.querySelector('.added-quan1').value;

if(isNaN(addQ1Value)){
        document.querySelector('.added-quan1').value = 0;
        document.querySelector('.added-quan1').innerHTML = 0;
}

}

//adding item2
const add2 = document.querySelector('.add2')
add2.addEventListener('click', addfunc2);

function addfunc2(){
value2 = addQ2.innerHTML;

++value2;
document.querySelector('.added-quan2').innerHTML = value2;
quan2.setAttribute("max",value2);
console.log(value2)

//selling price
price2 = 30;
price2 = price2 - (value2 * 0.50 )
document.querySelector('.priceItm2').innerHTML = price2;

const addQ2Value = document.querySelector('.added-quan2').value;

if(isNaN(addQ2Value)){
        document.querySelector('.added-quan2').value = 0;
        document.querySelector('.added-quan2').innerHTML = 0;
}
}

//adding atem3
const add3 = document.querySelector('.add3')
add3.addEventListener('click', addfunc3);

function addfunc3(){
value3 = addQ3.innerHTML;

++value3;
document.querySelector('.added-quan3').innerHTML = value3;
quan3.setAttribute("max",value3);
console.log(value3)

//selling price
price3 = 40;
price3 = price3 - (value3 * 0.50 )
document.querySelector('.priceItm3').innerHTML = price3;

const addQ3Value = document.querySelector('.added-quan3').value;

if(isNaN(addQ3Value)){
        document.querySelector('.added-quan3').value = 0;
        document.querySelector('.added-quan3').innerHTML = 0;
}
}


const form = document.querySelector('#ASM-form')
const submit = document.querySelector('.submit')
const List = document.querySelector('.list')



//Removing items
form.addEventListener('submit', formsubmit)

function formsubmit(e){
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const quantity1 = document.querySelector('#quantity1').value;
        const quantity2 = document.querySelector('#quantity2').value;
        const quantity3 = document.querySelector('#quantity3').value;

        for(let i = 0; i < emailList.length; i++){
                if(email == emailList[i]){
                        alert('Cannot complete request "email address exists"')
                        return null
                }
        }

        //Creating Elements
        let li = document.createElement('li');
        li.className = 'list-group-item shadow-sm';
        li.appendChild(document.createTextNode(email));
        li.appendChild(document.createTextNode(` / ${quantity1} Ice cream : R${quantity1 * price1}`));
        li.appendChild(document.createTextNode(` / ${quantity2} Pizza: R${quantity2 * price2} `));
        li.appendChild(document.createTextNode(` / ${quantity3} Burger: R${quantity3 * price3}`));
        List.appendChild(li);

        value1 = value1 - quantity1;
        value2 = value2 - quantity2;
        value3 = value3 - quantity3;
        quan1.setAttribute("max",value1);
        quan2.setAttribute("max",value2);
        quan3.setAttribute("max",value3);
        document.querySelector('.added-quan1').innerHTML = value1;
        document.querySelector('.added-quan2').innerHTML = value2;
        document.querySelector('.added-quan3').innerHTML = value3;

        console.log(value1);

        emailList.push(email)
        console.log(emailList)

        //current price update
        price1 = 20;
        price1 = price1 - (value1 * 0.50 )
        document.querySelector('.priceItm1').innerHTML = price1;
        //current price update
        price2 = 30;
        price2 = price2 - (value2 * 0.50 )
        document.querySelector('.priceItm2').innerHTML = price2;
        //current price update
        price3 = 40;
        price3 = price3 - (value3 * 0.50 )
        document.querySelector('.priceItm3').innerHTML = price3;


   
        console.log(`Price ${price1}`)
        console.log(`Price2 ${price2}`)
        console.log(`Price3 ${price3}`)


}





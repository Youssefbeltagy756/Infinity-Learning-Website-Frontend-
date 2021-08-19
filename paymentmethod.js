

let CreditCard = document.getElementById("pay1");
let PayPal = document.getElementById("pay2");
let TheChangingpart = document.getElementById("TheChangingpart");
let ThePayPalPart = document.getElementById("ThePayPalPart");
let Credit = 1;
let PayPals = 0;
if (Credit==1)
{
 TheChangingpart.style.visibility = 'visible';
 ThePayPalPart.style.visibility = 'hidden';
 ThePayPalPart.style.height = '0px';
}
CreditCard.addEventListener('change',function()
{
 Credit = 1;
 PayPals = 0;
 TheChangingpart.style.visibility = 'visible';
 ThePayPalPart.style.visibility = 'hidden';
 ThePayPalPart.style.height = '0px';
})
PayPal.addEventListener('change',function()
{
    Credit = 0;
    PayPals = 1;
    displaydata();
})
function displaydata()
{
    if (PayPals==1)
    {
        TheChangingpart.style.visibility = 'hidden';
        ThePayPalPart.style.visibility = 'visible';

    }
}
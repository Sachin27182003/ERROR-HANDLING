/*
 You are 8eveloping a payment processing mo8ule for an e-commerce platform. Implement error 
han8ling for the payment transaction process.Create a function processPayment that simulates 
processing a payment transaction. The function shoul8 take payment 8etails (amount, car8 num4er, 
expiration 8ate) as parameters an8 thro! errors un8er certain con8itions 

3 If the payment amount is not a positive num4er, thro! an error in8icating "Invalid payment amount".

If the card num4er is not provided or is not a valid credit card number, throw an error indicating "Invalid card number"
If the expiration 8ate is not provi8e8 or is in the past, thro! an error in8icating "Invalid expiration date".


const isMonthYearExpired = isExpired("04/24");
console.log(isMonthYearExpired ? "Card is not expired" : "Card is expired");

console.log(isExpired("04/24"))
*/

function processPayment(amount, cardNumber, expirationDate) {
    if(amount <= 0){
        throw new Error("Invalid payment amount");
    }

    if(cardNumber.length == 20){
        throw new Error("Try This Format xxxx-xxxx-xxxx-xxxx") 
    } else if(cardNumber < 20 || !cardNumber){
        throw new Error("Invalid card number");
    }

    if(!isExpired(expirationDate)){
        throw new Error("Card is Expired");
    }
    
    const paymentInformation = `Payment processed successfully of Amount ${amount} through card Number ${cardNumber}`
   return paymentInformation;

}

function isExpired(monthYearString) {
  const [month, year] = monthYearString.split("/").map(Number);

  const currentYear = new Date().getFullYear() % 100;
  const currentmonth = new Date().getMonth()+1;

  const cardExpired = (currentYear > year) || (currentYear === year && currentmonth >= month);
  return !cardExpired;
}

try{
    console.log(processPayment(500, "1265-1234-8564-7456", "02/25"))
} catch (error) {
    console.log(error.message)
}


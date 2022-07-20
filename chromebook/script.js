var purchaseDiv = document.getElementById("purchase")
var purchasedDiv = document.getElementById("done")
function ok() {
    var credit = document.getElementById("credit").value
    var date_m = document.getElementById("date_m").value
    var date_y = document.getElementById("date_y").value
    var cvc = document.getElementById("cvc").value
    //this has got to be the worst piece of code i've ever written
    if ((credit.length < 16 || isNaN(Number(credit)))) 
    { alert("Check The Credit Card Numer You Fucking Idot") }
    else {
        if ((isNaN(date_m) || Number(date_m) < 1 || Number(date_m) > 12 ))
        { alert("Check The Expiration Month You Fucking Idot") }
        else {
            if ((isNaN(date_y) || Number(date_y) < 23 || Number(date_y) > 99 ))
            { alert("Check The Expiration Year You Fucking Idot") }
            else {
                if ((isNaN(cvc) || cvc.length != 3 ))
                { alert("Check The Cvc code You Fucking Idot") }
                else {
                    purchaseDiv.style.display = "none"
                    purchasedDiv.style.display = "contents"
                    setTimeout(function () {
                        document.getElementById("text").innerHTML = "Purchase Complet! Enjoy the ChromeBook(TM)!"
                        document.getElementById("image").style = ""
                    },6000)
                }
            }
        }
    }

}

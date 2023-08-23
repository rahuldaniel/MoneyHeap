// JavaScript source code
var baseUrl = "https://localhost:7053/";
$(document).ready( function ()  {
    document.getElementById("InvestBox").style.display = "none";

    document.getElementById("Invsub").addEventListener("click", (event) => {
        event.preventDefault();
        let curvalue = document.getElementById("question1").value;
        let years = document.getElementById("question2").value;

        var invdat = {
            "curvalue": curvalue,
            "year": year,
        };

        var inflation = 0.06;
        var ret = 0.09

        var adj = ((1 + ret) / (1 + inflation)) - 1;

        var FV = curvalue * (Math.pow((1 + inflation), years));
        var ypmt = FV / (((Math.pow((1 + adj), years) - 1) / adj) * (1 + adj));
        var mpmt = ypmt / (years * 12);









        
        console.log(JSON.stringify(credentials));

        $.ajax({
            url: baseUrl + "submitinvestment",
            type: 'POST',
            data: JSON.stringify(credentials),
            headers: {
                "Access-Control-Allow-Origin": "*",
                //    "Access-Control-Request-Method" : "*",
                "Accept": "*",
                "Content-Type": "application/json"
            },
            success: function (res) {
                alert(res);


            },
            error: function (er) {

                alert(JSON.stringify(er));
            }

          
            
        
        
        )};
    }
         

}
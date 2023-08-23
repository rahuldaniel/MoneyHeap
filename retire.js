// JavaScript source code
var baseUrl = "https://localhost:7053/";
$(document).ready(function () {
    document.getElementById("RetireBox").style.display = "none";

    document.getElementById("Retsub").addEventListener("click", (event) => {
        event.preventDefault();
        let retyears = document.getElementById("question1").value;
        let expense = document.getElementById("question2").value;
        let retperiod = document.getElementById("question3").value;

        var invdat = {
            "retyears": retyears,
            "expense": expense,
            "retperoid": retperiod,
        };

        var inflation = 0.06;
        var ret = 0.09
      

        var adj = ((1 + ret) / (1 + inflation)) - 1;

        var FV = expense * (Math.pow((1 + inflation), retyears));
        var earexp = FV * 12;
       

        var retcorp = earexp * ((1 - (1 / ((Math.pow((1 + adj), (retperiod - 1)))))) / adj) + earexp;
        document.write(retcorp);

        var ypmt = retcorp / (((Math.pow((1 + adj), retyears) - 1) / adj) * (1 + adj));
        
        var mpmt = ypmt / 12;
       











       
        console.log(JSON.stringify(credentials));

        $.ajax({
            url: baseUrl + "subretirement",
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

          
            
        
        
        )
    };
}
         

}
function result(){
    //document.write("Working");
    var students ={
        ARKADI:{
            matemaatika:"90",
            informaatika:"63",
            ajalugu:"99"
        },
        GEORGI:{
            matemaatika:"99",
            informaatika:"93",
            ajalugu:"77"
        },
        JARSON:{
            matemaatika:"99",
            informaatika:"97",
            ajalugu:"85"
        },
        PATRICK:{
            matemaatika:"99",
            informaatika:"95",
            ajalugu:"93"
        },
        KRISTOFER:{
            matemaatika:"99",
            informaatika:"97",
            ajalugu:"76"
        }
    }

    var studentname=document.getElementById("studentname").value;
    var input=studentname.toUpperCase();
    var definition=students[input];
    var output=document.getElementById("output")

    if (definition==undefined){
        output.innerHTML=` <hr> Oops! Sellise nimega õpilast pole <hr>`
    }
    else{
        output.innerHTML=` <hr> Matemaatika hinne: ${definition.informaatika},<hr> Informmatika hinne: ${definition.matemaatika},<hr> Ajalugu hinne: ${definition.ajalugu}`

    }
}
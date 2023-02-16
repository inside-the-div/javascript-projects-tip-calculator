_cmnHideElement("OutputResult");

function TipCalculatorFormValidate()
{
    RemoveAllErrorMessage();
    
    var bill = document.getElementById("billInput").value;
    var tip = document.getElementById("tipInput").value;
    var person = document.getElementById("personInput").value;

    if(IsInputFieldEmpty("billInput") || (isNaN(bill) && bill <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("billInput", "Enter the valid bill.");
        return false;
    }
    
    if(IsInputFieldEmpty("tipInput") || (isNaN(tip) && tip < 1))
    {
        ShowErrorMessageBottomOfTheInputFiled("tipInput", "Enter tip persantage.");
        return false;
    }   

    if(IsInputFieldEmpty("personInput") || (!isNaN(person) && !Number.isInteger(person) && person < 1))
    {
        ShowErrorMessageBottomOfTheInputFiled("personInput", "Enter valid number of person.");
        return false;
    }
    
    return true;
}

function TipCalculatorReset()
{
    document.getElementById("billInput").value = "";
    document.getElementById("tipInput").value = "";
    document.getElementById("personInput").value = "";

    RemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function TipCalculation()
{
    if(TipCalculatorFormValidate())
    {
        var Bill = Number(document.getElementById("billInput").value);
        var TipPersentage = Number(document.getElementById("tipInput").value);
        var TotalPerson = Number(document.getElementById("personInput").value);
        let TotalTip, TotalBill, PerPersonTip;

        TotalTip = (TipPersentage / 100) * Bill;
        TotalBill = (TotalTip + Bill);
        PerPersonTip =TotalBill / TotalPerson;

        //set the results
        ShowResultTipCalculatorInOutput("bill", (Bill.toFixed(2)));
        ShowResultTipCalculatorInOutput("tip", TipPersentage);
        ShowResultTipCalculatorInOutput("totalPerson", TotalPerson);
        ShowResultTipCalculatorInOutput("totalTip", (TotalTip.toFixed(2)));
        ShowResultTipCalculatorInOutput("totalBill", (TotalBill.toFixed(2)));
        ShowResultTipCalculatorInOutput("perPersonBill", (PerPersonTip.toFixed(2)));

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}

function ShowResultTipCalculatorInOutput(id, result)
{
    document.getElementById(id).innerHTML = result;
}


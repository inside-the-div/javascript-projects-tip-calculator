_cmnHideElement("OutputResult");

function TipCalculatorFormValidate()
{
    RemoveAllErrorMessage();
    
    var bill = document.getElementById("inputBill").value;
    var tip = document.getElementById("inputTip").value;
    var person = document.getElementById("inputPerson").value;

    if(bill == "" || isNaN(bill) || (!isNaN(bill) && bill <= 0))
    {
        ShowErrorMessageBottomOfTheInputFiled("inputBill", "Enter the valid bill.");
        return false;
    }
    
    if(IsInputFieldEmpty("inputTip") || isNaN(bill) || (!isNaN(tip) && tip < 1))
    {
        ShowErrorMessageBottomOfTheInputFiled("inputTip", "Enter tip percentage.");
        return false;
    }   

    if(IsInputFieldEmpty("inputPerson") || isNaN(bill) || (!isNaN(person) && !Number.isInteger(person) && person < 1))
    {
        ShowErrorMessageBottomOfTheInputFiled("inputPerson", "Enter valid number of person.");
        return false;
    }
    
    return true;
}

function TipCalculatorReset()
{
    document.getElementById("inputBill").value = "";
    document.getElementById("inputTip").value = "";
    document.getElementById("inputPerson").value = "";

    RemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function TipCalculation()
{
    if(TipCalculatorFormValidate())
    {
        var Bill = Number(document.getElementById("inputBill").value);
        var TipPersentage = Number(document.getElementById("inputTip").value);
        var TotalPerson = Number(document.getElementById("inputPerson").value);
        let TotalTip, TotalBill, PerPersonTip;

        TotalTip = (TipPersentage / 100) * Bill;
        TotalBill = (TotalTip + Bill);
        PerPersonTip =TotalBill / TotalPerson;

        //set the results
        ShowTipCalculations("bill", (Bill.toFixed(2)));
        ShowTipCalculations("tip", TipPersentage);
        ShowTipCalculations("totalPerson", TotalPerson);
        ShowTipCalculations("totalTip", (TotalTip.toFixed(2)));
        ShowTipCalculations("totalBill", (TotalBill.toFixed(2)));
        ShowTipCalculations("perPersonBill", (PerPersonTip.toFixed(2)));

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}

function ShowTipCalculations(inputFiledId, value)
{
    document.getElementById(inputFiledId).innerHTML = value;
}


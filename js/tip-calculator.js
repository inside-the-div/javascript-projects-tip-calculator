function CalculateTips()
{
    var Bill = document.getElementById("inputBill").value;
    var TipPersentage = document.getElementById("inputTip").value;
    var TotalPerson = document.getElementById("inputPerson").value;

    if(ValidateTipCalculatorForm(Bill,TipPersentage,TotalPerson))
    {
        Bill = Number(Bill);
        TipPersentage = Number(TipPersentage);
        TotalPerson = Number(TotalPerson);

        var TotalTips, TotalBill, PerPersonTips;

        TotalTips = (TipPersentage / 100) * Bill;
        TotalBill = (TotalTips + Bill);
        PerPersonTips =TotalBill / TotalPerson;

        //show the results
        ShowTipCalculationsResult("bill", (Bill.toFixed(2)));
        ShowTipCalculationsResult("tip", TipPersentage);
        ShowTipCalculationsResult("totalPerson", TotalPerson);
        ShowTipCalculationsResult("totalTip", (TotalTips.toFixed(2)));
        ShowTipCalculationsResult("totalBill", (TotalBill.toFixed(2)));
        ShowTipCalculationsResult("perPersonBill", (PerPersonTips.toFixed(2)));

        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}

function ResetTipCalculator()
{
    if(confirm("Are you sure want to reset the calculator?")){
        document.getElementById("inputBill").value = "";
        document.getElementById("inputTip").value = "";
        document.getElementById("inputPerson").value = "";

        _cmnRemoveAllErrorMessage();

        _cmnHideElement("OutputResult");
        _cmnShowElement("OutputInfo", "flex");
    }
}

function ValidateTipCalculatorForm(bill,tip,person)
{
    _cmnRemoveAllErrorMessage();
    
    if(bill == "" || isNaN(bill) || bill <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("inputBill", "Enter the valid bill.");
        return false;
    }
    
    if(tip == "" || isNaN(tip) || tip < 1)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("inputTip", "Enter tip percentage.");
        return false;
    }   

    if(person == "" || isNaN(person) || !Number.isInteger(Number(person)) || person <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("inputPerson", "Enter valid number of person.");
        return false;
    }
    
    return true;
}

function ShowTipCalculationsResult(inputFiledId, value)
{
    document.getElementById(inputFiledId).innerHTML = value;
}
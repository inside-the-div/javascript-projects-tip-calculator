function CalculateTips()
{
    var Bill = document.getElementById("inputBill").value;
    var Tips = document.getElementById("inputTips").value;
    var Person = document.getElementById("inputPerson").value;

    if(ValidateTipCalculatorForm(Bill,Tips,Person))
    {
        Bill = Number(Bill);
        Tips = Number(Tips);
        Person = Number(Person);

        var TotalTips, TotalBill, PerPersonTips;

        TotalTips = (Tips / 100) * Bill;
        TotalBill = (TotalTips + Bill);
        PerPersonTips =TotalBill / Person;

        //show the results
        ShowTipCalculationsResult("bill", (Bill.toFixed(2)));
        ShowTipCalculationsResult("tip", Tips);
        ShowTipCalculationsResult("person", Person);
        ShowTipCalculationsResult("totalTips", (TotalTips.toFixed(2)));
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
        document.getElementById("inputTips").value = "";
        document.getElementById("inputPerson").value = "";

        ShowTipCalculationsResult("bill", "0");
        ShowTipCalculationsResult("tip", "0");
        ShowTipCalculationsResult("person", "0");
        ShowTipCalculationsResult("totalTips", "0");
        ShowTipCalculationsResult("totalBill", "0");
        ShowTipCalculationsResult("perPersonBill", "0");

        _cmnRemoveAllErrorMessage();

        _cmnHideElement("OutputResult");
        _cmnShowElement("OutputInfo", "flex");
    }
}

function ValidateTipCalculatorForm(bill,tips,person)
{
    _cmnRemoveAllErrorMessage();
    
    if(bill == "" || isNaN(bill) || bill <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("inputBill", "Enter the valid bill.");
        return false;
    }
    
    if(tips == "" || isNaN(tips) || tips < 1)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("inputTips", "Enter the valid tips percentage.");
        return false;
    }   

    if(person == "" || isNaN(person) || !Number.isInteger(Number(person)) || person <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("inputPerson", "Enter the valid number of person.");
        return false;
    }
    
    return true;
}

function ShowTipCalculationsResult(elementID, value)
{
    document.getElementById(elementID).innerHTML = value;
}
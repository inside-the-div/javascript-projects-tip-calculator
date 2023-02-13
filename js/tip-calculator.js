document.getElementById("OutputResult").style = "display: none";
document.getElementById("OutputInfo").style = "display: flex";

function TipCalculatorFormValidate()
{
    RemoveAllErrorMessage();
    var bill = document.getElementById("billInput").value;
    var tip = document.getElementById("tipInput").value;
    var person = document.getElementById("personInput").value;
    if(IsInputFieldEmpty("billInput"))
    {
        ShowErrorMessageBottomOfTheInputFiled("billInput", "Bill can not be empty.");
        return false;
    }
    else if(isNaN(bill))
    {
        ShowErrorMessageBottomOfTheInputFiled("billInput", "Enter the valid bill.");
        return false;
    }
    
    if(parseFloat(bill) < 0)
    {
        ShowErrorMessageBottomOfTheInputFiled("billInput", "Enter the valid bill.");
        return false;
    }
    
    if(IsInputFieldEmpty("tipInput"))
    {
        ShowErrorMessageBottomOfTheInputFiled("tipInput", "Enter tip persantage.");
        return false;
    }   
    else if(isNaN(tip))
    {
        ShowErrorMessageBottomOfTheInputFiled("tipInput", "Enter valid tips.");
        return false;
    }
    
    if((parseFloat(tip)) < 1)
    {
        ShowErrorMessageBottomOfTheInputFiled("tipInput", "Enter valid tips.");
        return false;
    }

    if(IsInputFieldEmpty("personInput"))
    {
        ShowErrorMessageBottomOfTheInputFiled("personInput", "Enter number of person.");
        return false;
    }
    else if(!isNaN(person))
    {
        var personNumber = Number(person);
        if(!Number.isInteger(personNumber))
        {
            ShowErrorMessageBottomOfTheInputFiled("personInput", "Enter valid number of person.");
            return false;  
        }           
    }
    
    if((parseFloat(person)) < 1)
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
    document.getElementById("bill").innerHTML = "0.00 $";
    document.getElementById("tip").innerHTML = "0.00 $";
    document.getElementById("totalPerson").innerHTML = "0";
    document.getElementById("totalTip").innerHTML = "0.00 $";
    document.getElementById("totalBill").innerHTML = "0.00 $";
    document.getElementById("perPersonBill").innerHTML = "0.00 $";
    RemoveAllErrorMessage();
}

function TipCalculation()
{
    if(TipCalculatorFormValidate())
    {
        var count = 0;
        var Bill = Number(document.getElementById("billInput").value);
        var TipPersentage = Number(document.getElementById("tipInput").value);
        var TotalPerson = Number(document.getElementById("personInput").value);
        let TotalTip, TotalBill, PerPersonTip;

        if(count == 0)
        {
            document.getElementById("OutputInfo").style = "display: none";
            document.getElementById("OutputResult").style = "display: flex";
            count++;
        }

        TotalTip = (TipPersentage / 100) * Bill;
        TotalBill = (TotalTip + Bill);
        PerPersonTip =TotalBill / TotalPerson;

        document.getElementById("bill").innerHTML = Number(Bill).toFixed(2) + " $";
        document.getElementById("tip").innerHTML = Number(TipPersentage).toFixed(2) + " $";
        document.getElementById("totalPerson").innerHTML = Number(TotalPerson);
        document.getElementById("totalTip").innerHTML = Number(TotalTip).toFixed(2) + " $";
        document.getElementById("totalBill").innerHTML = Number(TotalBill).toFixed(2) + " $";
        document.getElementById("perPersonBill").innerHTML = Number(PerPersonTip).toFixed(2) + " $";
    }
}


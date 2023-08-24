let buttonEl=document.getElementById("button");
let finalResultEl=document.getElementById("result");

let Probability_And_StaticsEl=document.getElementById("Probability And Statics");
let DigitalLogicDesignEl=document.getElementById("DigitalLogicDesign");
let DesignEl=document.getElementById("Design And Analysis Of Algorithms");
let DataBaseManagamentEl=document.getElementById("DataBaseManagament");
let Formal_Languages_Automata_TheoryEl=document.getElementById("FormalLanguagesAutomataTheory");
let Design_And_Analysis_Of_Algorithms_LabEl=document.getElementById("Design And Analysis Of Algorithms Lab");
let Digital_Logic_Design_LabEl=document.getElementById("Digital Logic Design Lab");
let Data_Base_Managament_Systems_LabEl=document.getElementById("Data Base Managament Systems Lab");
let creddits=21.5; 
let result=0;
// let count=0;
function credits(subGrade, creditts) {

    // count++;
    if (subGrade === "Ex") {
        // result += (10 * creditts);
        return (10 * creditts)
        

    } else if (subGrade === "A") {
        // result += (9 * creditts);
        return (9 * creditts)
    } else if (subGrade === "B") {
        // result += (8 * creditts);
        return (8 * creditts);
        
    } else if (subGrade === "C") {
        // result += (7 * creditts);
        return (7 * creditts)
    } else if (subGrade === "D") {
        // result += (6 * creditts);
        return (6 * creditts)
    }
    else if (subGrade === "E") {
        // result += (6 * creditts);
        return (5 * creditts)
    }
    else if (subGrade === "F") {
        // result += (6 * creditts);
        return 0
    }
    
//    finalResultEl.textContent=result/creddits;
}



buttonEl.onclick=function()
{
    let Probability_And_StaticsGrade = Probability_And_StaticsEl.value;
    let DigitalLogicDesignGrade = DigitalLogicDesignEl.value;
    let Design_And_Analysis_Of_AlgorithmsGrade=DesignEl.value;
    let DataBaseManagamentGrade=DataBaseManagamentEl.value; 
    let Formal_Languages_Automata_TheoryGrade=Formal_Languages_Automata_TheoryEl.value;
    let Design_And_Analysis_Of_Algorithms_LabGrade=Design_And_Analysis_Of_Algorithms_LabEl.value;
    let Digital_Logic_Design_LabGrade=Digital_Logic_Design_LabEl.value;
    let Data_Base_Managament_Systems_LabGrade=Data_Base_Managament_Systems_LabEl.value;
   
    result+=credits(Probability_And_StaticsGrade,4);
    result+=credits(DigitalLogicDesignGrade,3);
    result+=credits(Design_And_Analysis_Of_AlgorithmsGrade,4);
    result+=credits(DataBaseManagamentGrade,3);
    result+=credits(Formal_Languages_Automata_TheoryGrade,3);
    result+=credits(Design_And_Analysis_Of_Algorithms_LabGrade,1.5);
    result+=credits(Digital_Logic_Design_LabGrade,1.5);
    result+=credits(Data_Base_Managament_Systems_LabGrade,1.5);
    
    finalResultEl.textContent=(result/creddits).toFixed(2);
    result=0;
};


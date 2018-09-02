//Body Onload Method
function onPageLoding(){
    //Ereperience Part
    //medisys exeperience
    var medisysJoinDate = new Date(2017, 03, 01); //year, month, and day
    var leavindDate = new Date();
    var timeDiff = Math.abs(leavindDate.getTime() - medisysJoinDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    var medisysYearsMath = diffDays/365;
    var medisysExeperience = medisysYearsMath.toString().slice(0, 3);
    document.getElementById('medisys_expe').innerHTML= "Experience: "+medisysExeperience+" Years";

    //Total erperence
    var totalExperience = medisysExeperience
    document.getElementById('total_expe').innerHTML= "Experience "+totalExperience+" Years+";
    
}
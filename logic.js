$(document).ready(function(){
        const timeSheet = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

        for(let i = 0; i < timeSheet.length; i++) {
            $("<div>").addClass("row", timeSheet[i]).appendTo(".container");
        console.log(timeSheet[i]);
            
        };  
       
    
});

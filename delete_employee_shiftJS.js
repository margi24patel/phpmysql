function delete_employee_shift(shift_id)
{
    var confirmMsg = confirm("Are you sure to delete this shift?");
    
    if(confirmMsg === true){
        var xml_http = new XMLHttpRequest();
        xml_http.onreadystatechange = function()
        {
            
            if(this.readyState == 4 && this.status == 200)
                {
                    location.reload(); 
                }
        };
        
        xml_http.open("GET","delete_employee_shift.php?s_id=" + shift_id, true);
        xml_http.send();
    }
}
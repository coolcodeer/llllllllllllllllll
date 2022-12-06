student_array=[];
function submit(){
    var display_student_array=[];
    
    for(var a=1;a<=4;a++){
        var name_student=document.getElementById("name_of_the_student_"+a).value ;
        student_array.push(name_student);

    }
    console.log(student_array);
    var length_array=student_array.length;
    for(var x=0;x<length_array;x++){
        
        display_student_array.push("<h4> name- "+student_array[x]+"</h4>");
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";


}
function sorting(){
    student_array.sort();
    console.log(student_array);
    var display_student_array_sorting=[];
    var length_array=student_array.length;
    for(var x=0;x<length_array;x++){
        
        display_student_array_sorting.push("<h4> name- "+student_array[x]+"</h4>");
    }
    var remove_commas=display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}
/* global $*/
$(function(){
    var check = 'false';
    
    $('<label for="all"> All:</label><input type="checkbox" id="all" value="true" />').insertAfter("#country");
    
    $('#all').on('click',function(){
        if($('#all').is(':checked')){
            check = 'true';
        }else{
            check = 'false';
        }
    });
    $('#lookup').on('click',function(){
        if($('#country').val()!=='' || check === 'true'){
        $.ajax({
            url: 'world.php',
            method: 'GET',
            data: {country:($('#country').val()),all:`${check}`},
            success:function(data){
                $('#result').append(data);
            }
        });
        }else{
            alert("Please enter a coutry or select all");
        }
    });
});
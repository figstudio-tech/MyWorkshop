$(function(){


    for(var i=0;i<100;i++){
        $('#lbl').append((i+1) + ', ');
    }

    $('#lbl').append('<br/><br/>');

    for(var i=0;i<100;i++){
        if(i % 2 == 0){
            
            if(i % 4 == 0){
                continue;
            }
            
            $('#lbl').append(i + ', ');

            if(i >= 50){
                break;
            }
        }
    }

    $('#lbl').append('<br/><br/>');
    var j = 1;
    while(j <= 10){
        $('#lbl').append((j++) + ', ');
    }

    $('#lbl').append('<br/><br/>');
    var k = 10;
    do{
        $('#lbl').append((k--) + ', ');
    }while(k >= 1);
    
});

// $(document).ready(function(){

// });
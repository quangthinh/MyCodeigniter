$(document).ready(function(){
    $('#btn-pass_form').click(function(){
        $.ajax({
            type: 'POST',
            url: '<?php echo UR.'user/forgotpassword/' ?>',
            data: {email: $("#email-pass_form").val()},
            dataType: 'text',
            cache: false,
            success:
                function(data){
                    alert(data);
                },
        });
    });
});
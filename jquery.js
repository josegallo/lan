$(document).ready(function(){

//form with spanish messages

$('form#wp-subscribe-form-1 input[type=text]').on('change invalid', function() {
    var textfield1 = $(this).get(0); 
    
    // 'setCustomValidity not only sets the message, but also marks
    // the field as invalid. In order to see whether the field really is
    // invalid, we have to remove the message first
    textfield1.setCustomValidity('');
    
    if (!textfield1.validity.valid) {
      textfield1.setCustomValidity('Por favor, introduce un nombre');  
    }
});

$('form#wp-subscribe-form-1 input[type=email]').on('change invalid', function() {
    var textfield2 = $(this).get(0); 
    
    // 'setCustomValidity not only sets the message, but also marks
    // the field as invalid. In order to see whether the field really is
    // invalid, we have to remove the message first
    textfield2.setCustomValidity('');
    
    if (!textfield2.validity.valid) {
      textfield2.setCustomValidity('Por favor, introduce un email válido');  
    }
});

$('form#wp-subscribe-form-1 input[type=checkbox]').on('change invalid', function() {
    var textfield3 = $(this).get(0); 
    
    // 'setCustomValidity not only sets the message, but also marks
    // the field as invalid. In order to see whether the field really is
    // invalid, we have to remove the message first
    textfield3.setCustomValidity('');
    
    if (!textfield3.validity.valid) {
      textfield3.setCustomValidity('Por favor, haz click en esta casilla para continuar');  
    }
});


})
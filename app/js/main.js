$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$('[data-toggle="tooltip"]').tooltip({
	html: true
});    

// модалка подарок
let modalPresent = $('#modalPresent');
let modalPresentForm = $('.modalPresent__footer__form');
let modalTY = $('#modalTY');



//добавление тултипов на форму подарок
(function() {
  'use strict';
  window.addEventListener('load', function() {
    
    let forms = document.getElementsByClassName('needs-validation');
    
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        // if (form.checkValidity() === false) {
        //   event.preventDefault();
        //   
        // } 
        if(form.checkValidity()) {
        	modalPresent.modal('hide');
        	modalTY.modal('show');
        }
        form.classList.add('was-validated');
        event.preventDefault();
    	event.stopPropagation();
      });
    });
  });
})();
// работа с модалкой выбор масла
let oilField = $('#modalOil #inputState');
let choose = [
	$('.modalOil__choose__select-1'),
	$('.modalOil__choose__select-2'),
	$('.modalOil__choose__select-3'),
	$('.modalOil__choose__select-4')
];
let buttonDisable = $('.modalOil__choose__button');
let formGroup = document.getElementsByClassName('modalOil__choose__select');

buttonDisable.prop('disabled', true);

oilField.change(function(){
	for(let i = 0; i < choose.length - 1; i++) {
		if(choose[i].val()) {
			choose[i + 1].prop('disabled', false);
			choose[i + 1].children('option')[0].selected = false;
			formGroup[i + 1].classList.remove('modalOil__choose--disabled');		
		}
	}
	if(choose[choose.length - 1].val()) {
		buttonDisable.prop('disabled', false);
		buttonDisable.toggleClass('modalOil__choose__button--disabled');
	} else {
		buttonDisable.prop('disabled', true);
	}
});


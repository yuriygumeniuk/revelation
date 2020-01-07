$(document).ready(function() {
//FORMS
function forms(){
	//FIELDS
	$('input,textarea').focus(function(){
		console.log('focus');
		if($(this).val() == $(this).attr('data-value')){
				$(this).addClass('focus');
				// $(this).parent().addClass('focus');
			// if($(this).attr('data-type')=='pass'){
				// $(this).attr('type','password');
			// };
			// $(this).val('');
		};
		// removeError($(this));
	});
}
forms();


// 	$('input[data-value], textarea[data-value]').each(function() {
// 		if (this.value == '' || this.value == $(this).attr('data-value')) {
// 			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
// 				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
// 			}else{
// 				this.value = $(this).attr('data-value');
// 			}
// 		}
// 		if(this.value!=$(this).attr('data-value') && this.value!=''){
// 			$(this).addClass('focus');
// 			$(this).parent().addClass('focus');
// 			if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
// 				$(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
// 			}
// 		}

// 		$(this).click(function() {
// 			if (this.value == $(this).attr('data-value')) {
// 				if($(this).attr('data-type')=='pass'){
// 					$(this).attr('type','password');
// 				};
// 				this.value = '';
// 			};
// 		});
// 		$(this).blur(function() {
// 			if (this.value == '') {
// 				if(!$(this).hasClass('l')){
// 					this.value = $(this).attr('data-value');
// 				}
// 					$(this).removeClass('focus');
// 					$(this).parent().removeClass('focus');
// 				if($(this).attr('data-type')=='pass'){
// 					$(this).attr('type','text');
// 				};
// 			};
// 			if($(this).hasClass('vn')){
// 				formValidate($(this));
// 			}
// 		});
// 	});
// 	$('.form-input__viewpass').click(function(event) {
// 		if($(this).hasClass('active')){
// 			$(this).parent().find('input').attr('type','password');
// 		}else{
// 			$(this).parent().find('input').attr('type','text');
// 		}
// 		$(this).toggleClass('active');
// 	});


});
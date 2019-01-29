jQuery(document).ready(function($) {
	/*active menu*/
	$('.item').click(function() {
		$('.item').removeClass('active');
		$(this).toggleClass('active');		
	});	

	
	/*validar cantidad int*/
	$('.canti').keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && e.ctrlKey === true) || 
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
 
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

	$('body').delegate('.head_colapse', 'click', function(e) {
		e.preventDefault();			
		var _this = $(this);
		var _box_col = _this.closest('.collapsible');
		var conte= _box_col.find('.content');

		if ($(this).hasClass('active')) {			
			$(this).removeClass('active');
			conte.slideUp('slow');
		} else {
			$('.content').slideUp('slow');
			$('.head_colapse').removeClass('active');

			$(this).toggleClass('active');
			conte.slideDown('slow');
		}		
		
	});   
	
});

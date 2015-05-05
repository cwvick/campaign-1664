$(function() {
	$(document).on('click', '.offer_btn', function(event) {
		event.preventDefault();
		var offerNum = $(this).data('offer').split('offer_')[1];
		
		if ( offerNum ) {
			showLightbox(offerNum, 1);
		}
	});

	$(document).on('click', '.btn_next', function(event) {
		event.preventDefault();
		var $container = $(this).parents('.step_container');
		var stepNum = $container.data('step');
		var offerNum = $container.data('offer');

		if ( offerNum && offerNum ) {
			showLightbox(offerNum, stepNum + 1);
		}
	});

	$(document).on('click', '.lightbox_wrapper', function(event) {
		event.preventDefault();
		if ( $(event.target).is('.lightbox_container') ) {
			$(this).hide();
		}
	});

	var showLightbox = function(offerNum, stepNum) {
		var className = 'step_container offer_' + offerNum + ' step_' + stepNum;

		$('.step_container').removeAttr('class').addClass(className).data('step', stepNum).data('offer', offerNum);
		$('.step_content').hide();
		$('.step_' + offerNum + '_' + stepNum).show();

		$('.lightbox_inner').removeAttr('style');

		$('.lightbox_wrapper').fadeIn('fast', function() {
			var winHeight = $(window).height();

			if ( $('.lightbox_content').outerHeight() > winHeight ) {
				var maxHeight =  winHeight - 28 - 70;
				$('.lightbox_inner').css({
					'max-height': maxHeight + 'px',
					'overflow-y': 'scroll'
				});
			}
		});
	};
});
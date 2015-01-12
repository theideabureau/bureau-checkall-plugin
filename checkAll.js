(function($){

	$.checkAll = function(el, options){
		var base = this;
		
		base.$el = $(el);
		base.el = el;

		base.group_identifier = base.$el.data('check-all');
		base.$children = $('[data-check-all="' + base.group_identifier + '"').not(base.$el);

		base.init = function(){
			
			 //***************
			// BIND EVENTS
			
			base.$el.on('change.checkAll', function (event) {

				console.log(base.group_identifier);
		
			  
			  selected_diff = base.$children.length - base.$children.filter(':checked').length;

			   if ( selected_diff > 0 ) {
				   base.$el.prop('checked', true);
					base.$children.prop('checked', true);
			   } else {
				   base.$el.prop('checked', false);
					base.$children.prop('checked', false);
				 
			   }

			   base.$children.trigger('change');
			  
			  
				
			});
		  
			base.$children.on('change.checkAll', function(event) {
			  
			  selected_diff = base.$children.length - base.$children.filter(':checked').length;
			  
				 base.$el.prop("indeterminate", false);
			  
			   if ( selected_diff == 0 || selected_diff == base.$children.length ) {
				   base.$el.prop('checked', base.$children.first().prop('checked'));
			   } else {
				  base.$el.prop("indeterminate", true);
			   }
			  
			});
		  
		};
		base.init();
	};
	
	$.checkAll.defaultOptions = {
	};
	
	$.fn.checkAll = function(options){
		
		return this.each(function(){
			(new $.checkAll(this, options));
		});

	};
	
})(jQuery);
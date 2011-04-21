/**
 * main.js for present.modal
 *
 * ...
 */
 
jQuery(function($) {

    $('legend').hide();

    /**
     * modal overlay
     *
     * If disabled the assistive technology should follow the internal anchor to its
     * destination anyway. So testing JavaScript enabled and disabled amount to the same
     * thing. (TN!!)
     */
    
    $('a.modal-open').each(function() {
    
        var $self = $(this);
    
    
        $self.bind('click', function(e) {
            
            var id = $(this).attr('href').match(/#(.*)/)[1];
            
            $( 'div#' + id ).before('<div class="modal-overlay"></div>');
            
            $( 'div#' + id ).prev().fadeIn();
            
            $( 'div#' + id ).animate({
                opacity: 'show'
            });
            
            $('html').addClass('modal-visible');
            
            e.preventDefault();
        }); 
    
    });
    
    // modal overlay
    
    $('a.modal-frame').each(function() {
    
        var $self = $(this);
    
        $self.bind('click', function(e) {
            e.preventDefault();
        });
    
    });

});
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
            
            $( 'div#' + id ).addClass('active-modal-frame');
            $( 'div#' + id ).prev().addClass('active-modal-overlay');
            
            if ( !$( 'div#' + id ).find('.controls .modal-cancel').length ) {
                $( 'div#' + id ).find('.controls ul').append('<li><input type="button" class="button modal-cancel" name="modal-cancel" value="Cancel" /></li>');
            }
            
            $( 'div#' + id ).prev().fadeIn();
            
            $( 'div#' + id ).hide();
            
            $( 'div#' + id ).css({
                marginLeft: '0'
            });
            
            $( 'div#' + id ).animate({
                'opacity': 'show'
            }, 500);
            
            $('html').addClass('modal-visible');
            
            var oldform = $('.active-modal-frame').find('form').clone();
            $( 'div#' + id ).data('oldform', oldform);
            
            e.preventDefault();
        }); 
    
    });
    
    $('.controls a.modal-cancel').live('click', function(e) {
        
    });
    
    $('.controls input.modal-cancel').live('click', function(e) {
        var $self = $(this),
            placeElem = $('.active-modal-frame').find('form').prev();
            
        var id = $('.active-modal-frame').attr('id');
        
        $('.active-modal-frame').find('form').remove();
        var oldform = $( 'div#' + id ).data('oldform');
        $(placeElem).after(oldform);
        
        $('.active-modal-frame').fadeOut(300).removeClass('active-modal-frame');
        $('.active-modal-overlay').fadeOut(300, function() {
            $(this).remove();
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
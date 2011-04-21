/**
 * main.js for present.modal
 *
 * ...
 */
 
jQuery(function($) {

    $('legend').hide();
    
    $('html').removeClass('no-js').addClass('js-enabled');

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
            
            var id = $(this).attr('href').match(/#(.*)/)[1],
                $ModalFrame = $( 'div#' + id ),
                $ModalOverlay,
                $ModalContainer = $ModalFrame.parent();
            
            // Create overlay
            
            $ModalContainer.before('<div class="modal-overlay"></div>');
            
            // Set $ModalOverlay for jQuery
            
            $ModalOverlay = $ModalContainer.prev();
            
            // Set activate modal window and overlay. We remove() our overlays
            
            $ModalFrame.addClass('active-modal-frame');
            $ModalOverlay.addClass('active-modal-overlay');
            
            // Check for cancel button; if we don't find, let's create!
            
            if ( !$ModalFrame.find('.controls .modal-cancel').length ) {
            
                $ModalFrame.find('.controls ul').append('<li><input type="button" class="button modal-cancel" name="modal-cancel" value="Cancel" /></li>');
                
            }
            
            // Present overlay
            
            $ModalOverlay.css({
            
                opacity: .7
                
            }).fadeIn(300);
            
            // Present frame
            
            $ModalFrame.hide().css({
                marginLeft: '0'
            }).animate({
                'opacity': 'show'
            }, 500);

            // Inform DOM
            
            $('html').addClass('modal-visible');
            
            // Set oldform for "Cancel"
            
            var oldform = $('.active-modal-frame').find('form').clone();
            $ModalFrame.data('oldform', oldform);
            
            // Key: Cancel default anchor behavior; if JS disabled, the internal anchor rules
            
            e.preventDefault();
        }); 
    
    });
    
    
    /**
     * Why put a form "up" there? Hey, why not? Anyway.
     * This is for canceling with anchors.
     */
     
    $('.controls a.modal-cancel,.modal-frame-title a.modal-cancel').live('click', function(e) {
        
        // ...
                
    });
    
    /**
     * Not sure why I want to control this thing's presentation with JavaScript;
     * but I'll make it all optional anyhow.
     */
    
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
    
    /**
     * modal frame in an anchor
     *
     * Well well, if the entire thing is wrapped in a billboard anchor,
     * then should the billboard anchor point back to the triggering anchor?
     * What does the screen reader say?
     */
    
    $('a.modal-frame').each(function() {
    
        var $self = $(this);
    
        $self.bind('click', function(e) {
        
            // JavaScript disabled, all billboards have addresses
            // Internal Anchor Pong
            e.preventDefault();
            
        });
    
    });

});
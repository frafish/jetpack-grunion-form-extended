<?php

namespace Automattic\Jetpack\Forms\ContactForm;

use Automattic\Jetpack\Forms\ContactForm\Contact_Form;
use Automattic\Jetpack\Forms\ContactForm\Contact_Form_Plugin;

/**
 * Description of hidden
 *
 * @author Fra
 */
class Field_Hidden {
    //put your code here
    
    /**
    * Render the Hidden field.
    *
    * @param array  $atts - the block attributes.
    * @param string $content - html content.
    *
    * @return string HTML for the contact form field.
    */
   public static function render_field( $atts, $content ) {
           $atts = Contact_Form_Plugin::block_attributes_to_shortcode_attributes( $atts, 'hidden' );
           return Contact_Form::parse_contact_field( $atts, $content );
   }
}

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
    
    use Traits\Base_Field;
    
    public function get_name() {
        return 'field-hidden';
    }
    
    /**
    * Render the Hidden field.
    *
    * @param array  $atts - the block attributes.
    * @param string $content - html content.
    *
    * @return string HTML for the contact form field.
    */
   public function render_field( $atts, $content ) {
           //$atts = Contact_Form_Plugin::block_attributes_to_shortcode_attributes( $atts, 'hidden' );
           //var_dump($atts);
           ob_start();
           $name = !empty($atts['id']) ? sanitize_title($atts['id']) : 'field'.wp_generate_password(4, false);
           $id = 'field-'.$name;
           $default = empty($atts['value']) ? '' : $atts['value'];
           ?>
           <input type="hidden" name="<?php echo $name; ?>" id="<?php echo $id; ?>" value="<?php echo $default; ?>" class="hidden <?php echo $this->get_input_classes(); ?>">
           <?php
           $block = ob_get_clean();
           return $block;
           //return Contact_Form::parse_contact_field( $atts, $content );
   }
   
   
   
   
}

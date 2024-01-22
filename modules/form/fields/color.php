<?php

namespace Automattic\Jetpack\Forms\ContactForm;

use Automattic\Jetpack\Forms\ContactForm\Contact_Form;
use Automattic\Jetpack\Forms\ContactForm\Contact_Form_Plugin;

/**
 * Description of color picker
 *
 * @author Fra
 */
class Field_Color {

    use Traits\Base_Field;

    public function get_name() {
        return 'field-color';
    }
    
    public function get_field_wrapper_open($name, $atts) {
        $width = empty($atts['width']) ? '100' : $atts['width'];
        ?>
        <div class="wp-block-form-input test-<?php echo $name; ?> grunion-field-<?php echo $name; ?>-wrap grunion-field-wrap<?php echo (empty($width) || $width == 100) ? '' : ' grunion-field-width-'.$width.'-wrap jetpack-field__width-'.$width; ?>">
        <?php
    }

    /**
     * Render the Color Picker field.
     *
     * @param array  $atts - the block attributes.
     * @param string $content - html content.
     *
     * @return string HTML for the contact form field.
     */
    public function render_field($atts, $content) {
        //$atts = Contact_Form_Plugin::block_attributes_to_shortcode_attributes( $atts, 'hidden' );
        //var_dump($atts); die();
        ob_start();
        $name = !empty($atts['id']) ? sanitize_title($atts['id']) : strtolower(wp_generate_password(6, false));
        $id = 'field-' . $name;
        $default = empty($atts['value']) ? '' : $atts['value'];
        $required = empty($atts['required']) ? '' : ' $required="" aria-required="true"';
        $inline = empty($atts['inline']) ? '' : ' is-label-inline';
            $this->get_field_wrapper_open($name, $atts);
            ?>
            <label class="wp-block-form-input__label<?php echo $inline; ?> grunion-field-label label-<?php echo $name; ?>">
                <?php if (!empty($atts['label']) && !$this->is_editor()) { ?>
                    <span class="wp-block-form-input__label-content">
                        <?php echo $atts['label']; if ($required) { echo ' <span class="grunion-label-required" aria-hidden="true">'.__('(required)').'</span>'; }?>
                    </span>
                <?php } ?>
                <input style="width: 100%;" type="color" name="<?php echo $name; ?>" id="<?php echo $id; ?>" value="<?php echo $default; ?>" class="<?php echo $this->get_input_classes(); ?>"<?php echo $required; ?>>
            </label>
        </div>
        <?php
        $block = ob_get_clean();
        return $block;
        //return Contact_Form::parse_contact_field( $atts, $content );
    }
}

<?php

use Automattic\Jetpack\Assets;
use Automattic\Jetpack\Blocks;
use Automattic\Jetpack\Sync\Settings;
use Automattic\Jetpack\Forms\ContactForm\Contact_Form;
use Automattic\Jetpack\Forms\ContactForm\Contact_Form_Plugin;

/**
 * Description of grunion-contact-form
 *
 * @author Fra
 */
class Grunion_Contact_Form_Extended {

    static $instance = false;

    //https://developer.jetpack.com/module/contact-form/

    public function __construct() {
        
        // BLOCK
        add_filter('render_block', function ($block_content, $parsed_block, $block) {
            //var_dump($block->name);
            
            /*if ($block->name == 'jetpack/field-option-radio') {
                $tmp = explode(' label="', $block_content, 2);
                list($label, $more) = explode('"', end($tmp), 2);
                $value = '';
                if (strpos($label, '|') !== false) {
                    list($label, $value) = explode('|', $label, 2);
                    $value = ' value="'.$value.'"';
                }
                $block_content = reset($tmp).' label="'.$label.'"'.$value.$more;
                //var_dump($block_content);
            }*/
            
            if ($block->name == 'jetpack/field-radio') {
                //echo '<pre>';var_dump($block_content); die();
            }
            
            if ($block->name == 'core/form-input') {
                //echo '<pre>';var_dump($block_content); die();
            }
            
            // FORM
            if (in_array($block->name, [ 'jetpack/contact-form', 'core/form' ])) {
                
                $block_content = str_replace('wp-block-jetpack-contact-form', 'wp-block-jetpack-contact-form wp-block-jetpack-contact-form-ext', $block_content);
                //var_dump($block->attributes);
                
                // action
                if (!empty($block->attributes['action'])) {
                    $tmp = explode(' action=', $block_content, 2);
                    if (count($tmp) == 2) {
                        $quote = substr(end($tmp), 0, 1);
                        $tmp2 = explode($quote, end($tmp), 3);
                        if (count($tmp2) == 3) {
                            $action = $tmp2[1];
                            $block_content = reset($tmp).' action='.$quote.$block->attributes['action'].$quote.' '.end($tmp2);
                        }
                    }
                }
                
                // method
                if (!empty($block->attributes['method'])) {
                    $block_content = str_replace(" method='post' ", ' method="post" ', $block_content);
                    $block_content = str_replace(' method="post" ', ' method="'.$block->attributes['method'].'" ', $block_content);
                }
                
                // option value Label|value
                $attr_value = "value=";
                $options = explode($attr_value, $block_content);
                if (count($options) > 1) {
                    $block_content = '';
                    foreach ($options as $key => $option) {
                        if (!$key) {
                            $block_content = $option;
                        } else {
                            $quote = substr($option, 0, 1);
                            list($none, $value, $more) = explode($quote, $option, 3);
                            if (strpos($value, '|') !== false) {
                                list($label, $new_value) = explode('|', $value, 2);
                                $more = str_replace($value, $label, $more); // fix label
                                $tmp = explode('id='.$quote, $block_content);
                                if (count($tmp)>1) {
                                    $tmp = explode($quote, end($tmp), 2);
                                    $id = reset($tmp);
                                    $tmp = explode('-', $id);
                                    $name = reset($tmp);
                                    $block_content = str_replace('id='.$quote.$name.'-'.$value.$quote, 'id='.$quote.$name.'-'.$label.$quote, $block_content); // fix id
                                }
                                $block_content .= $attr_value.$quote.$new_value.$quote.$more;
                            } else {
                                $block_content .= $attr_value.$option;
                            }
                        }
                        
                    }
                }
                
            }
            
            //jetpack/field-
            
            return $block_content;
        }, 10, 99);
        
        // FIELDS
        $base_field = __DIR__ . DIRECTORY_SEPARATOR . 'form' . DIRECTORY_SEPARATOR . 'fields' . DIRECTORY_SEPARATOR . 'traits' . DIRECTORY_SEPARATOR . 'base-field.php';
        include_once $base_field;
        $fields = glob(__DIR__ . DIRECTORY_SEPARATOR . 'form' . DIRECTORY_SEPARATOR . 'fields' . DIRECTORY_SEPARATOR . '*.php');
        //foreach ($fields as $field) {
            $field = __DIR__ . DIRECTORY_SEPARATOR . 'form' . DIRECTORY_SEPARATOR . 'fields' . DIRECTORY_SEPARATOR . 'hidden.php';
            include_once $field;
            $field_obj = new \Automattic\Jetpack\Forms\ContactForm\Field_Hidden();
            Blocks::jetpack_register_block(
                    $field_obj->get_jetpack_key(),
                    $field_obj->get_args()
            );
            add_action('enqueue_block_editor_assets', function() use ($field_obj) {
                add_action( 'admin_print_footer_scripts',  function() use ($field_obj) {
                    $field_obj->_edit();
                }, 99);
            });
        //}
        
        add_action('enqueue_block_editor_assets', function() {
            $plugin_url = plugin_dir_url(__DIR__ );
            //$config = require_once __DIR__ . DIRECTORY_SEPARATOR . 'contact-form'. DIRECTORY_SEPARATOR . 'editor.asset.php';
            wp_enqueue_script(
                'jetpack-contact-form-extended',
                $plugin_url . 'modules/form/index.js',
                //$config['dependencies'],
                //$config['version']
            );
            /*wp_enqueue_script(
                'jetpack-contact-form-vanilla',
                $plugin_url . 'modules/form/vanilla.js'
            );*/
        });
    }

    /**
     * Initializing function.
     */
    public static function init() {
        if (!self::$instance) {
            //$plugin = \Automattic\Jetpack\Forms\ContactForm\Contact_Form::init();
            self::$instance = new Grunion_Contact_Form_Extended();
        }
        return self::$instance;
    }

}

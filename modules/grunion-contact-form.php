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
            if ($block->name == 'jetpack/contact-form') {
                $block_content = str_replace('wp-block-jetpack-contact-form', 'wp-block-jetpack-contact-form wp-block-jetpack-contact-form-ext', $block_content);
            }
            //jetpack/field-
            return $block_content;
        }, 10, 3);

        // FIELDS
        $fields = glob(__DIR__ . DIRECTORY_SEPARATOR . 'contact-form' . DIRECTORY_SEPARATOR . 'fields' . DIRECTORY_SEPARATOR . '*.php');
        //foreach ($fields as $field) {
            $field = __DIR__ . DIRECTORY_SEPARATOR . 'contact-form' . DIRECTORY_SEPARATOR . 'fields' . DIRECTORY_SEPARATOR . 'hidden.php';
            include_once $field;
            Blocks::jetpack_register_block(
                    'jetpack/field-hidden',
                    array(
                        'render_callback' => array(\Automattic\Jetpack\Forms\ContactForm\Field_Hidden::class, 'render_field'),
                    )
            );
        //}
        
        add_action('enqueue_block_editor_assets', function() {
            $plugin_url = plugin_dir_url(__DIR__ );
            $config = require_once __DIR__ . DIRECTORY_SEPARATOR . 'contact-form'. DIRECTORY_SEPARATOR . 'editor.asset.php';
            wp_enqueue_script(
                'jetpack-contact-form-extended',
                $plugin_url . 'modules/contact-form/index.js',
                $config['dependencies'],
                $config['version']
            );
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

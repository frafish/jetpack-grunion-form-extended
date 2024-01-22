<?php
namespace Automattic\Jetpack\Forms\ContactForm\Traits;

Trait Base_Field {
    
    public function get_key() {
        return $this->get_jetpack_key();
    }
    
    public function get_jetpack_key() {
        return 'jetpack/'.$this->get_name();
    }
    
    public function get_block() {
        $json = file_get_contents(__DIR__.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'blocks'.DIRECTORY_SEPARATOR.$this->get_name().'.json');
        return json_decode($json, true);
    }
    
    public function get_args() {
        $block = $this->get_block();
        $block['render_callback'] = [$this, 'render_field'];
        return $block;
    }
    
    public function is_editor() {
        if ( is_admin() && function_exists( 'get_current_screen' ) ) {
                $screen = get_current_screen();
                if ( $screen && method_exists( $screen, 'is_block_editor' ) ) {
                        return $screen->is_block_editor();
                }
        }
        //return false;
        return isset($_GET['context']) && $_GET['context'] == "edit";
    }
    
    public function get_input_classes($atts = []) {
        $classes = 'wp-block-form-input__input grunion-field';
        $classes .= ' '.$this->get_name();
        $classes .= empty($atts['className']) ? '' : ' '.$atts['className'];
        return $classes;
    }
    
    public function get_attributes($attributes, $panel = 'base', $tab = 'settings') {
        $attributes_panel = [];
        foreach ($attributes as $key => $attr) {
            if (!empty($attr['panel']) && $attr['panel'] == $panel) {
                $attributes_panel[$key] = $attr;
            }
            if (empty($attr['panel']) && 'base' == $panel) {
                $attributes_panel[$key] = $attr;
            }
        }
        return $attributes_panel;
    }
    
    public function _edit() {
       $args = $this->get_args();
       ?>
        <script id="<?php echo $this->get_key(); ?>">
            //console.log(wp);
            wp.blocks.registerBlockType("<?php echo $this->get_key(); ?>", {
                edit(props) {
                    //console.log(props);
                    //console.log(props.attributes);
                    return wp.element.createElement(
                            wp.element.Fragment,
                            {},
                            <?php 
                            foreach ($args['attributes'] as $id => $attr) {
                                if (!empty($attr['panel']) && $attr['panel'] == 'inline') {
                                    $this->_component($id, $attr);
                                }
                            }
                            ?>
                            wp.element.createElement(
                                    wp.blockEditor.InspectorControls,
                                    {},
                                    wp.element.createElement(
                                            wp.components.PanelBody,
                                            {
                                                title: wp.i18n.__("Field Settings", "proto-block")
                                            },
                                            <?php 
                                            foreach ($this->get_attributes($args['attributes']) as $id => $attr) {
                                                $this->_component($id, $attr);
                                            }
                                            ?>
                                            
                                    ),
                            ),
                            
                            wp.element.createElement(
                                    wp.blockEditor.InspectorControls,
                                    { group: "styles" },
                                    wp.element.createElement(
                                            wp.components.PanelBody,
                                            {
                                                title: wp.i18n.__("Field Style", "proto-block")
                                            },
                                            <?php 
                                            foreach ($this->get_attributes($args['attributes'], 'style') as $id => $attr) {
                                                $this->_component($id, $attr);
                                            }
                                            ?>
                                            
                                    ),
                            ),
                            
                            wp.element.createElement(
                                    wp.blockEditor.InspectorAdvancedControls,
                                    {},
                                    <?php 
                                    foreach ($this->get_attributes($args['attributes'], 'advanced') as $id => $attr) {
                                        $this->_component($id, $attr);
                                    }
                                    ?>
                            ),
                        
                            wp.element.createElement(wp.serverSideRender, {
                                block: "<?php echo $this->get_key(); ?>",
                                attributes: props.attributes,
                            })
                        );
                },
                save() {
                    return null;
                },
            });
        </script>
        <?php
   }
   
   public function _component($id, $attr = []) {
       
       $label = empty($attr['label']) ? ucfirst($id) : $attr['label'];
       
       // https://developer.wordpress.org/block-editor/reference-guides/block-api/block-attributes/#type-validation
       $control = 'TextControl';
       if (empty($attr['control'])) {
           if (!empty($attr['type'])) {
            switch ($attr['type']) {
                case 'boolean':
                    $control = 'ToggleControl';
                    break;
                case 'string':
                default:
                    $control = 'TextControl';
            }
           }
       } else {
           $control = $attr['control'];
       }
       
       ?>
       wp.element.createElement(
            <?php
            if ($control == 'ButtonGroup') { ?>
                //wp.element.createElement(wp.components.PanelRow, {}, 
                    /*wp.element.createElement(wp.components.BaseControl, { 
                        label: wp.i18n.__("<?php echo $label ?>", "proto-block"),
                        <?php if (!empty($attr['help'])) { ?>
                            help: wp.i18n.__("<?php echo $attr['help']; ?>","jetpack-forms"),
                        <?php } ?>
                    },*/
                        wp.element.createElement(wp.components.ButtonGroup, {
                            'aria-label': wp.i18n.__("<?php echo $label; ?>","jetpack-forms")
                        },
                        <?php 
                        if (!empty($attr['values'])) {
                             //[10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 66, 70, 75, 80, 90, 100]; 
                            foreach ($attr['values'] as $value) { ?>
                                wp.element.createElement(wp.components.Button, {
                                    value: <?php echo $value; ?>,
                                    isPrimary: (props.attributes.<?php echo $id; ?> === <?php echo $value; ?>),
                                    isSecondary: (props.attributes.<?php echo $id; ?> !== <?php echo $value; ?>),
                                    onClick: function (val) {
                                        props.setAttributes({<?php echo $id; ?>: val});
                                    },
                                    title: wp.i18n.__('<?php echo $value; ?>', 'my-textdomain')
                                }),
                            <?php }
                        }
                        if ($id == 'align') { ?>
                            wp.element.createElement(wp.components.Button, {
                                icon: 'editor-alignleft',
                                value: 'left',
                                isPrimary: (props.attributes.<?php echo $id; ?> === 'left'),
                                isSecondary: true,
                                onClick: function (val) {
                                    props.setAttributes({<?php echo $id; ?>: val});
                                },
                                title: wp.i18n.__('Left', 'my-textdomain')
                            }),
                            wp.element.createElement(wp.components.Button, {
                                icon: 'editor-aligncenter',
                                value: 'center',
                                isPrimary: (props.attributes.<?php echo $id; ?> === 'center'),
                                isSecondary: true,
                                onClick: function (val) {
                                    props.setAttributes({<?php echo $id; ?>: val});
                                },
                                title: wp.i18n.__('Center', 'my-textdomain')
                            }),
                            wp.element.createElement(wp.components.Button, {
                                icon: 'editor-alignright',
                                value: 'right',
                                isPrimary: (props.attributes.<?php echo $id; ?> === 'right'),
                                isSecondary: true,
                                onClick: function (val) {
                                    props.setAttributes({<?php echo $id; ?>: val});
                                },
                                title: wp.i18n.__('Right', 'my-textdomain')
                            })
                            <?php } ?>
                            )                               
                        )
                //)
            //),
            <?php } else { ?>
            <?php echo in_array($control, ['MediaUpload', 'RichText']) ? 'wp.blockEditor.' : 'wp.components.'; ?><?php echo $control; ?>,
                {
                    label: wp.i18n.__("<?php echo $label ?>", "proto-block"),
                    <?php switch($control) {
                        case 'ToggleControl': ?>
                            checked: props.attributes.<?php echo $id; ?>,
                        <?php 
                            break;
                        case 'RichText':
                        case 'TextControl':
                        default: ?>
                            value: props.attributes.<?php echo $id; ?><?php if (!empty($attr['default'])) { echo ' || '; echo (empty($attr['type']) || $attr['type'] == 'string') ? '"'.$attr['default'].'"' : $attr['default']; } ?>,
                        <?php
                    } ?>
                    onChange: function (val) {
                        <?php
                        if (!empty($attr['sanitize'])) { 
                            switch($attr['sanitize']) {
                                case 'title': ?>
                                    val = val.replace(/[^a-zA-Z0-9_-]/g,"");
                                    <?php break;
                            }
                        }
                        if (!empty($attr['type']) && $attr['type'] == 'number') { 
                        ?>
                        val = parseInt(val);
                        <?php } ?>
                        //console.log(val);
                        props.setAttributes({<?php echo $id; ?>: val});
                    },
                    <?php if (!empty($attr['options'])) { ?>
                        options: [
                            <?php foreach ($attr['options'] as $value => $label) { 
                            if (empty($attr['type']) || $attr['type'] == 'string') {
                                $value = '"'.$value.'"';
                            }
                            ?>
                            {value: <?php echo $value; ?>, label: '<?php echo $label; ?>'},
                            <?php } ?>
                        ],
                    <?php } ?>
                    <?php if (!empty($attr['placeholder'])) { ?>
                        placeholder: "<?php echo $attr['placeholder']; ?>",
                    <?php } ?>
                    <?php if (!empty($attr['help'])) { ?>
                        help: wp.i18n.__("<?php echo $attr['help']; ?>","jetpack-forms"),
                    <?php } ?>
                    <?php if (!empty($attr['tag'])) { ?>
                        tag: "<?php echo $attr['tag']; ?>",
                    <?php } ?>
                    <?php if (!empty($attr['className'])) { ?>
                        className: "<?php echo $attr['className']; ?>",
                    <?php } ?>
                }
            ),
       <?php
        }
   }
}

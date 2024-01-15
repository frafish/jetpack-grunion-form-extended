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
    
    public function get_input_classes($atts = []) {
        $classes = 'wp-block-form-input__input grunion-field';
        $classes .= ' '.$this->get_name();
        $classes .= empty($atts['className']) ? '' : ' '.$atts['className'];
        return $classes;
    }
    
    public function _edit() {
       $args = $this->get_args();
       ?>
        <script id="<?php echo $this->get_key(); ?>">
            //console.log(wp);
            wp.blocks.registerBlockType("<?php echo $this->get_key(); ?>", {
                edit(props) {
                    return wp.element.createElement(
                            wp.element.Fragment,
                            {},
                            wp.element.createElement(
                                    wp.editor.InspectorControls,
                                    {},
                                    wp.element.createElement(
                                            wp.components.PanelBody,
                                            {
                                                title: wp.i18n.__("Field Settings", "proto-block")
                                            },
                                            
                                            <?php 
                                            foreach ($args['attributes'] as $id => $attr) {
                                                if (empty($attr['panel'])) {
                                                    $this->_component($id, $attr);
                                                }
                                            }
                                            ?>
                                            
                                    ),
                            ),
                            
                            wp.element.createElement(
                                    wp.editor.InspectorAdvancedControls,
                                    {},
                                    <?php 
                                    foreach ($args['attributes'] as $id => $attr) {
                                        if (!empty($attr['panel']) && $attr['panel'] == 'advanced') {
                                            $this->_component($id, $attr);
                                        }
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
       
       $control = 'TextControl';
       if (empty($attr['control'])) {
           if (!empty($attr['type'])) {
            switch ($attr['type']) {
                case 'string':
                defautl:
                    $control = 'TextControl';
            }
           }
       } else {
           $control = $attr['control'];
       }
       
       ?>
       wp.element.createElement(
                wp.components.<?php echo $control; ?>,
                {
                    label: wp.i18n.__("<?php echo $label ?>", "proto-block"),
                    value: props.attributes.<?php echo $id; ?> || "",
                    onChange: function (val) {
                        <?php
                        if (!empty($attr['sanitize'])) { 
                            switch($attr['sanitize']) {
                                case 'title': ?>
                                    val = val.replace(/[^a-zA-Z0-9_-]/g,"");
                                    <?php break;
                            }
                        }
                        ?>
                        props.setAttributes({<?php echo $id; ?>: val});
                    },
                    <?php if (!empty($attr['help'])) { ?>
                    help: wp.i18n.__("<?php echo $attr['help']; ?>","jetpack-forms"),
                    <?php } ?>
                }
        ),
       <?php
   }
}

//wp.data.select('core/editor').getBlocks();
var el = wp.element.createElement;
const {ToggleControl, TextControl, SelectControl, PanelBody, PanelHeader, BaseControl} = wp.components;
/*
 wp.blocks.registerBlockType('jetpack/field-hidden', {
 name: 'jetpack-form-extending/contact-form',
 title: wp.i18n.__('Field Hidden', 'example-block-variation'),
 keywords: ['form', 'hidden', 'field'],
 scope: ['block', 'inserter', 'transform'],
 icon: 'smile',
 attributes: {
 height: '180px'
 },
 isActive: (blockAttributes) =>
 blockAttributes.height && '180px' === blockAttributes.height
 });
 */

// Register the block's editor components
/*wp.blocks.registerBlockType('fra/my-block', {
    edit: function(props) {
        console.log(props);
        const { text } = props.attributes;
        
    },
});
*/
wp.hooks.addFilter('blocks.registerBlockType',
        'jetpack-form-extending/add-attributes',
        (settings, name) => {
    //console.log(name);
    //console.log(settings);
    // && !name.startsWith("jetpack/field-")
    switch (name) {
        case 'core/form':
        case 'jetpack/contact-form':

            settings.attributes = Object.assign(settings.attributes, {
                action: {
                    type: 'string',
                },
                method: {
                    type: 'string',
                },
                title: {
                    type: 'string',
                },
            });

    }

    return settings;
}, 99)

wp.hooks.addFilter(
        'editor.BlockEdit',
        'jetpack-form-extending/add-advanced-controls',
        wp.compose.createHigherOrderComponent((BlockEdit) => {
            return (props) => {

                //const {InspectorAdvancedControls} = wp.blockEditor;
                const {attributes, setAttributes, isSelected} = props;
                //console.log(props.name);
                if (!isSelected) {
                    // do nothing
                    return el(
                            BlockEdit,
                            props
                            );
                }
                switch (props.name) {
                    case 'fra/my-block':
                        return el(
                                wp.element.Fragment,
                                {},
                                el(
                                        BlockEdit,
                                        props
                                        ),
                                el(
                                        wp.editor.InspectorControls,
                                        {},
                                        el(
                                                PanelBody,
                                                {
                                                    title: 'Test AAA'
                                                },
                                                el(
                                                        TextControl,
                                                        {
                                                            label: 'Text',
                                                            value: props.attributes.text,
                                                            onChange: function (value) {
                                                                props.setAttributes({text: value});
                                                            }
                                                        }
                                                ),
                                        ),
                                    ),
                                );
                        break;
                    case 'core/form':
                        break;
                    case 'jetpack/contact-form':
                        return el(
                                wp.element.Fragment,
                                {},
                                el(
                                        BlockEdit,
                                        props
                                        ),
                                el(
                                        wp.editor.InspectorControls,
                                        {},
                                        el(
                                                PanelBody,
                                                {
                                                    title: 'Form Extended'
                                                },
                                                el(
                                                        TextControl,
                                                        {
                                                            label: 'Action',
                                                            value: props.attributes.action,
                                                            help: 'The URL where the form should be submitted.',
                                                            source: 'attribute',
                                                            selector: 'form',
                                                            attribute: 'action',
                                                            onChange: function (value) {
                                                                props.setAttributes({action: value});
                                                            }
                                                        }
                                                ),
                                                el(
                                                        TextControl,
                                                        {
                                                            label: 'Title',
                                                            value: props.attributes.title,
                                                            onChange: function (value) {
                                                                props.setAttributes({title: value});
                                                            }
                                                        }
                                                ),
                                                el(
                                                        SelectControl,
                                                        {
                                                            label: 'Method',
                                                            value: props.attributes.method,
                                                            options: [
                                                                {value: '', label: 'Default'},
                                                                {value: 'get', label: 'GET'},
                                                                {value: 'post', label: 'POST'},
                                                                //{value: 'ajax', label: 'AJAX'},
                                                            ],
                                                            source: 'attribute',
                                                            selector: 'form',
                                                            attribute: 'method',
                                                            help: 'Select the method to use for form submissions.',
                                                            onChange: function (value) {
                                                                props.setAttributes({method: value});
                                                            }
                                                        }
                                                ),
                                                )
                                        )
                                );

                    default:
                        //&& !props.name.startsWith('jetpack/field-'))) {
                        // do nothing
                        return el(
                                BlockEdit,
                                props
                                );
                }





            };
        }
        ));



/*
wp.hooks.addFilter(
        'blocks.getSaveContent.extraProps',
        'test/add-class',
        (extraProps, block, attributes) => {
    //const {hideOnMobile} = attributes;
    //console.log(block.name);
    //if (typeof hideOnMobile !== 'undefined' && hideOnMobile) {
        extraProps.className = extraProps.className + ' test-abcd';
    //}
    return extraProps;
}
);
*/

/**
 * Add size class to the block in the editor
 */
/*
 wp.hooks.addFilter('editor.BlockListBlock',
 'button-block/add-editor-class',
 wp.compose.createHigherOrderComponent((BlockListBlock) => {
 return function (props) {
 const {
 attributes: {size},
 className,
 name,
 } = props;
 
 if (name !== 'core/button') {
 return el(BlockListBlock, props);
 }
 let combinedClassName = className + (size ? ' has-size-test' : '');
 return el(
 'div',
 {className: combinedClassName},
 el(BlockListBlock, props)
 );
 
 };
 }));
 * 
 */
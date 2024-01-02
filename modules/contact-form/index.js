const {addFilter} = wp.hooks
const { Fragment } = react;

addFilter('blocks.registerBlockType',
        'jetpack-form-extending/add-attributes',
        (settings, name) => {
    console.log(name);
    // if not core paragraph block just return settings
    if (name !== 'jetpack/contact-form' && !name.startsWith("jetpack/field-")) {
        return settings;
    }
    console.log(settings);

    settings.attributes = Object.assign(settings.attributes, {
        testAAA: {
            type: 'boolean',
        }
    });

    // extend attributs with the new extendedSettings object
    const attributes = {
        ...settings.attributes,
        extendedSettings: {
            type: 'object',
            default: {},
        }
    }

    return {...settings, attributes}
}, 99)


const addAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const {Fragment} = wp.element;
        const {ToggleControl} = wp.components;
        const {InspectorAdvancedControls} = wp.blockEditor;
        const {attributes, setAttributes, isSelected} = props;
        return (
                <Fragment>
                    <BlockEdit {...props} />
                    {isSelected && (props.name == 'jetpack/contact-form' || props.name.startsWith('jetpack/field-')) &&
                                    <InspectorAdvancedControls>
                                        <ToggleControl
                                            label={wp.i18n.__('Test AAA', 'awp')}
                                            checked={!!attributes.testAAA}
                                            onChange={(newval) => setAttributes({testAAA: !attributes.testAAA})}
                                            />
                                    </InspectorAdvancedControls>
                    }
                </Fragment>
                );
    };
}, 'addAdvancedControls');

wp.hooks.addFilter(
    'editor.BlockEdit',
    'jetpack-form-extending/add-advanced-controls',
    addAdvancedControls
);
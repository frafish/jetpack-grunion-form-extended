wp.blocks.registerBlockType("jetpack/field-color", {
    edit(props) {
        return wp.element.createElement(
                wp.element.Fragment,
                {},
                wp.element.createElement(
                        wp.editor.RichText,
                        {
                            label: wp.i18n.__("Label", "proto-block"),
                            value: props.attributes.label || "",
                            onChange: function (val) {
                                props.setAttributes({label: val});
                            },
                            placeholder: "Color",
                            tag: "label",
                            className: "grunion-field-label wp-block-form-input__label",
                        }
                ),
                wp.element.createElement(
                        wp.editor.InspectorControls,
                        {},
                        wp.element.createElement(
                                wp.components.PanelBody,
                                {
                                    title: wp.i18n.__("Field Settings", "proto-block")
                                },
                                wp.element.createElement(
                                        wp.components.ToggleControl,
                                        {
                                            label: wp.i18n.__("Inline label", "proto-block"),
                                            checked: props.attributes.inline,
                                            onChange: function (val) {
                                                props.setAttributes({inline: val});
                                            },
                                        }
                                ),
                                wp.element.createElement(
                                        wp.components.ToggleControl,
                                        {
                                            label: wp.i18n.__("Required", "proto-block"),
                                            checked: props.attributes.required,
                                            onChange: function (val) {
                                                props.setAttributes({required: val});
                                            },
                                        }
                                ),
                                wp.element.createElement(
                                        wp.components.TextControl,
                                        {
                                            label: wp.i18n.__("Default Value", "proto-block"),
                                            value: props.attributes.value || "",
                                            onChange: function (val) {
                                                props.setAttributes({value: val});
                                            },
                                            help: wp.i18n.__("The default value.", "jetpack-forms"),
                                        }
                                ),
                                wp.element.createElement(
                                        wp.element.createElement(wp.components.PanelRow, {},
                                                wp.element.createElement(wp.components.BaseControl, {
                                                    label: wp.i18n.__("Width", "proto-block"),
                                                },
                                                        wp.element.createElement(wp.components.ButtonGroup, {},
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 10,
                                                                    isPrimary: (attributes.width === 10),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('10 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 15,
                                                                    isPrimary: (attributes.width === 15),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('15 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 20,
                                                                    isPrimary: (attributes.width === 20),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('20 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 25,
                                                                    isPrimary: (attributes.width === 25),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('25 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 30,
                                                                    isPrimary: (attributes.width === 30),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('30 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 33,
                                                                    isPrimary: (attributes.width === 33),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('33 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 35,
                                                                    isPrimary: (attributes.width === 35),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('35 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 40,
                                                                    isPrimary: (attributes.width === 40),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('40 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 50,
                                                                    isPrimary: (attributes.width === 50),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('50 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 60,
                                                                    isPrimary: (attributes.width === 60),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('60 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 66,
                                                                    isPrimary: (attributes.width === 66),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('66 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 70,
                                                                    isPrimary: (attributes.width === 70),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('70 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 75,
                                                                    isPrimary: (attributes.width === 75),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('75 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 80,
                                                                    isPrimary: (attributes.width === 80),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('80 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 90,
                                                                    isPrimary: (attributes.width === 90),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('90 %', 'my-textdomain')
                                                                }),
                                                                wp.element.createElement(wp.components.Button, {
                                                                    //icon: 'editor-alignleft',
                                                                    value: 100,
                                                                    isPrimary: (attributes.width === 100),
                                                                    isSecondary: true,
                                                                    onClick: function (val) {
                                                                        props.setAttributes({width: val});
                                                                    },
                                                                    title: __('100 %', 'my-textdomain')
                                                                }),
                                                                )
                                                        )
                                                ),
                                        ),
                                ),
                        wp.element.createElement(
                                wp.editor.InspectorAdvancedControls,
                                {},
                                wp.element.createElement(
                                        wp.components.TextControl,
                                        {
                                            label: wp.i18n.__("Name", "proto-block"),
                                            value: props.attributes.id || "",
                                            onChange: function (val) {
                                                val = val.replace(/[^a-zA-Z0-9_-]/g, "");
                                                props.setAttributes({id: val});
                                            },
                                            help: wp.i18n.__("Affects the 'name' atribute of the input element, and is used as a name for the form submission results. Customize the input's name/ID. Only alphanumeric, dash and underscore characters are allowed", "jetpack-forms"),
                                        }
                                ),
                                ),
                        wp.element.createElement(wp.serverSideRender, {
                            block: "jetpack/field-color",
                            attributes: props.attributes,
                        })
                        ),
                );
    },
    save() {
        return null;
    },
});
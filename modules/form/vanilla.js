(function () {
    //console.log(wp);
    const {
        MediaUpload,
        RichText
    } = wp.editor;
    

    wp.blocks.registerBlockType('jetpack/field-hidden-vanilla', {
        title: 'Field Vanilla',
        icon: 'smiley',
        parent: [
            'jetpack/contact-form'
        ],
        keywords: [
            wp.i18n.__('Choose Multiple', 'jetpack-forms'),
            wp.i18n.__('Option', 'jetpack-forms')
        ],
        description: wp.i18n.__(
                'Offer users a list of choices, and allow them to select multiple options.',
                'jetpack-forms'
                ),
        category: 'contact-form',
        attributes: {
            headingText: {
                type: 'string',
            },
            /*imgUrl: {
                type: 'string',
                default: 'http://placehold.it/200'
            },
            bodyText: {
                type: 'string',
            },*/
        },
        edit(props) {
            
            return wp.element.createElement(
                    'div',
                    {
                        className: props.className
                    },
                    [
                        wp.element.createElement(
                                RichText,
                                {
                                    tag: 'div',
                                    className: 'heading',
                                    value: props.attributes.headingText,
                                    onChange: function (value) {
                                        props.setAttributes({
                                            headingText: value,
                                        })
                                    },
                                    placeholder: 'Heading Goes here'
                                },
                                null
                                ),
                        /*wp.element.createElement(
                                MediaUpload,
                                {
                                    onSelect: (value) => {
                                        console.log(value);
                                        props.setAttributes({
                                            imgUrl: value.sizes.full.url,
                                        })
                                    },
                                    render(renderProps) {
                                        return wp.element.createElement(
                                                'button',
                                                {
                                                    onClick: renderProps.open,
                                                },
                                                wp.element.createElement(
                                                        'img',
                                                        {
                                                            src: props.attributes.imgUrl,
                                                        },
                                                        null
                                                        ),
                                                )
                                    }
                                },
                                null
                                ),
                        
                        wp.element.createElement(
                                RichText,
                                {
                                    tag: 'p',
                                    value: props.attributes.bodyText,
                                    onChange: function (value) {
                                        props.setAttributes({
                                            bodyText: value
                                        })
                                    },
                                    placeholder: 'Body text goes here'
                                },
                                null,
                                ),*/
                    ]
                    );
        },
        save(props) {
            return wp.element.createElement(
                    'div',
                    null,
                    [
                        wp.element.createElement(
                                'h3',
                                {
                                    className: 'heading',
                                },
                                props.attributes.headingText
                                ),
                        /*wp.element.createElement(
                                'img',
                                {
                                    src: props.attributes.imgUrl,
                                },
                                null
                                ),
                        wp.element.createElement(
                                'p',
                                null,
                                props.attributes.bodyText
                                ),*/
                    ]
                    );
        }
    });

})();
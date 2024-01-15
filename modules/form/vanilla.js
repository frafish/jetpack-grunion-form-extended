import { addFilter } from '@wordpress/hooks'
import { createHigherOrderComponent } from '@wordpress/compose'
import { Fragment } from '@wordpress/element'
import { InspectorControls } from '@wordpress/block-editor'
import { PanelBody, RangeControl, __experimentalUnitControl as UnitControl } from '@wordpress/components'

addFilter(
  'blocks.registerBlockType',
  'jetpack-form-extending/add-attributes',
  (props, name) => {
    // if not core paragraph block just return props
    if (name !== 'core/paragraph') {
      return props
    }
    
    // extend attributs with the new extendedSettings object
    const attributes = {
      ...props.attributes,
      extendedSettings: {
        type: 'object',
        default: {},
      }
    }

    return {...props, attributes}
  }
)
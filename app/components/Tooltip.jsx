import * as React from 'react'
import PropTypes from 'prop-types'
import Hover from './Hover'

export default function Tooltip({ children, element }) {
    return (
        <Hover>
            {(hovering) => {
                return (
                    <div style={containerStyle}>
                        {hovering === true && element}
                        {children}
                    </div>
                )
            }}
        </Hover>
    )
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    element: PropTypes.node.isRequired
}

const containerStyle = {
    position: 'relative',
    display: 'flex'
}

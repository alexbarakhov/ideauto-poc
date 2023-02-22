import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function AnimIconArrow({
  primaryColor = '#003057',
  secondaryColor = '#6EACE3',
  width = '24',
  height = '24',
}) {
  return (
    <svg
      className='AnimIconArrow'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='AnimIconArrow-dots'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 25C8 24.4477 8.44772 24 9 24H10C10.5523 24 11 24.4477 11 25C11 25.5523 10.5523 26 10 26H9C8.44772 26 8 25.5523 8 25ZM12.5 25C12.5 24.4477 12.9477 24 13.5 24H15.5C16.0523 24 16.5 24.4477 16.5 25C16.5 25.5523 16.0523 26 15.5 26H13.5C12.9477 26 12.5 25.5523 12.5 25Z'
        fill={secondaryColor}
      />
      <path
        className='AnimIconArrow-caret'
        d='M13 6L7 12L13 18'
        stroke={primaryColor}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        className='AnimIconArrow-line'
        d='M7 12H19C22.866 12 26 14.9101 26 18.5C26 22.0899 22.866 25 19 25'
        stroke={primaryColor}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

AnimIconArrow.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default AnimIconArrow

import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function AnimIconDisk({
  primaryColor = '#003057',
  secondaryColor = '#6EACE3',
  width = '24',
  height = '24',
}) {
  return (
    <svg
      className='AnimIconDisk'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g className='AnimIconDisk-inner'>
        <path
          d='M27.4143 9.99995L22.0001 4.58601C21.8149 4.39962 21.5945 4.25184 21.3517 4.15124C21.1089 4.05064 20.8486 3.99922 20.5858 3.99995C10.4 4.00159 14.0793 3.99995 6 3.99995C5.46975 4.00056 4.9614 4.21147 4.58646 4.58641C4.21151 4.96135 4.00061 5.46971 4 5.99995V26C4.00061 26.5302 4.21151 27.0386 4.58646 27.4135C4.9614 27.7884 5.46975 27.9993 6 28H26C26.5302 27.9993 27.0386 27.7884 27.4135 27.4135C27.7885 27.0386 27.9994 26.5302 28 26V11.4143C28.0007 11.1515 27.9493 10.8912 27.8488 10.6485C27.7483 10.4057 27.6006 10.1853 27.4143 9.99995Z'
          fill={primaryColor}
        />
        <path
          d='M8 19C8 17.8954 8.89543 17 10 17H20C21.1046 17 22 17.8954 22 19V28H8V19Z'
          fill={secondaryColor}
        />
        <path
          d='M22 11C22 12.1046 21.1046 13 20 13L10 13C8.89543 13 8 12.1046 8 11L8 5C8 4.44772 8.44771 4 9 4L21 4C21.5523 4 22 4.44772 22 5L22 11Z'
          fill={secondaryColor}
        />
      </g>
    </svg>
  )
}

AnimIconDisk.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default AnimIconDisk

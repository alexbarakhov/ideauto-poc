import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function AnimIconFolder({
  primaryColor = '#003057',
  secondaryColor = '#6EACE3',
  width = '24',
  height = '24',
}) {
  return (
    <svg
      className='AnimIconFolder'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M27 13V11C26.9994 10.4698 26.7885 9.9614 26.4135 9.58646C26.0386 9.21151 25.5302 9.00061 25 9H16.3334L12.8667 6.40002C12.5201 6.14119 12.0992 6.00092 11.6666 6H5C4.46975 6.00061 3.9614 6.21151 3.58646 6.58646C3.21151 6.9614 3.00061 7.46975 3 8V26C3 26.0064 3.00086 26.0126 3.00098 26.0189C3.00123 26.033 3.0022 26.0469 3.00305 26.061C3.00452 26.0848 3.00659 26.1083 3.00964 26.1317C3.01135 26.1444 3.01329 26.1571 3.01544 26.1697C3.01984 26.1953 3.02527 26.2204 3.03155 26.2453C3.03418 26.2556 3.03656 26.266 3.03956 26.2762C3.0481 26.3061 3.05811 26.3353 3.06928 26.3639C3.07135 26.3691 3.073 26.3746 3.07514 26.3799C3.08942 26.4148 3.10571 26.4488 3.1239 26.4819C3.12586 26.4855 3.12824 26.4888 3.13025 26.4924C3.14624 26.5206 3.16356 26.548 3.18219 26.5744C3.18457 26.5778 3.18634 26.5814 3.18872 26.5847C3.19318 26.5908 3.19843 26.5961 3.20295 26.6021C3.21826 26.6223 3.23414 26.642 3.25092 26.6609C3.25946 26.6706 3.26801 26.6802 3.27686 26.6895C3.29456 26.708 3.31311 26.7257 3.33222 26.7429C3.34022 26.75 3.34784 26.7576 3.35602 26.7645C3.38378 26.7881 3.41282 26.8101 3.443 26.8305L3.44544 26.832C3.47513 26.8517 3.50585 26.8697 3.53748 26.8861C3.54548 26.8903 3.55371 26.8939 3.56183 26.8978C3.5868 26.91 3.61225 26.9214 3.63831 26.9315C3.6482 26.9353 3.65809 26.9388 3.6681 26.9424C3.69324 26.9512 3.71882 26.9591 3.74482 26.9659C3.75538 26.9687 3.76582 26.9716 3.77643 26.974C3.80317 26.9801 3.83039 26.9848 3.85791 26.9888C3.8678 26.9902 3.87751 26.9921 3.88745 26.9933C3.92482 26.9976 3.96239 26.9999 4 27H26C26.2099 27 26.4144 26.9339 26.5847 26.8112C26.5 23 27 17.5 27 13Z'
        fill={primaryColor}
      />
      <path
        className='AnimIconFolder-side'
        d='M29.5236 13.2202C29.8057 13.3646 30.0495 13.5738 30.235 13.8306C30.42 14.0878 30.5413 14.3853 30.5891 14.6985C30.6368 15.0117 30.6097 15.3317 30.5099 15.6324L26.9487 26.3162C26.8823 26.5153 26.755 26.6885 26.5847 26.8112C26.4144 26.9339 26.2099 27 26 27H4C3.96239 26.9999 3.92482 26.9976 3.88745 26.9933C3.87751 26.9921 3.8678 26.9902 3.85791 26.9888C3.83039 26.9848 3.80317 26.9801 3.77643 26.974C3.76582 26.9716 3.75538 26.9687 3.74482 26.9659C3.71882 26.9591 3.69324 26.9512 3.6681 26.9424C3.65809 26.9388 3.6482 26.9353 3.63831 26.9315C3.61225 26.9214 3.5868 26.91 3.56183 26.8978C3.55371 26.8939 3.54548 26.8903 3.53748 26.8861C3.50585 26.8697 3.47513 26.8517 3.44544 26.832L3.443 26.8305C3.41282 26.8101 3.38378 26.7881 3.35602 26.7645C3.34784 26.7576 3.34022 26.75 3.33222 26.7429C3.31311 26.7257 3.29456 26.708 3.27686 26.6895C3.26801 26.6802 3.25946 26.6706 3.25092 26.6609C3.23414 26.642 3.21826 26.6223 3.20295 26.6021C3.19843 26.5961 3.19318 26.5908 3.18872 26.5847C3.18634 26.5814 3.18457 26.5778 3.18219 26.5744C3.16356 26.548 3.14624 26.5206 3.13025 26.4924C3.12824 26.4888 3.12586 26.4855 3.1239 26.4819C3.10571 26.4488 3.08942 26.4148 3.07514 26.3799C3.073 26.3746 3.07135 26.3691 3.06928 26.3639C3.05811 26.3353 3.0481 26.3061 3.03956 26.2762C3.03656 26.266 3.03418 26.2556 3.03155 26.2453C3.02527 26.2204 3.01984 26.1953 3.01544 26.1697C3.01329 26.1571 3.01135 26.1444 3.00964 26.1317C3.00659 26.1083 3.00452 26.0848 3.00305 26.061C3.0022 26.0469 3.00123 26.033 3.00098 26.0189C3.00074 26.0064 3.00194 25.9939 3.00575 25.9819L6.5 15C7 13.5 7.60248 13 9 13L27 13H28.6125C28.9294 13.0004 29.2416 13.0759 29.5236 13.2202Z'
        fill={secondaryColor}
      />
    </svg>
  )
}

AnimIconFolder.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default AnimIconFolder

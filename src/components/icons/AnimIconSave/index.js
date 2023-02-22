import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function AnimIconSave({
  primaryColor = '#003057',
  secondaryColor = '#6EACE3',
  width = '24',
  height = '24',
}) {
  return (
    <svg
      className='AnimIconSave'
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        className='AnimIconSave-arrow'
        d='M15.2929 16.7072C15.2961 16.7104 15.2997 16.7131 15.303 16.7163C15.3233 16.736 15.3441 16.7552 15.366 16.7732C15.3782 16.7832 15.3911 16.792 15.4037 16.8014C15.4172 16.8115 15.4305 16.822 15.4446 16.8315C15.4592 16.8412 15.4743 16.8497 15.4893 16.8586C15.5023 16.8664 15.5151 16.8746 15.5286 16.8818C15.5436 16.8898 15.5591 16.8967 15.5744 16.9039C15.5887 16.9106 15.6027 16.9177 15.6173 16.9238C15.6321 16.9299 15.6472 16.9349 15.6622 16.9402C15.678 16.9459 15.6936 16.952 15.7097 16.9568C15.7247 16.9614 15.7399 16.9647 15.755 16.9685C15.7715 16.9727 15.7878 16.9773 15.8046 16.9807C15.8221 16.9841 15.8397 16.9861 15.8572 16.9887C15.8719 16.9908 15.8864 16.9935 15.9013 16.995C15.9341 16.9982 15.967 17 16 17C16.033 17 16.0658 16.9982 16.0987 16.995C16.1136 16.9935 16.128 16.9908 16.1428 16.9887C16.1603 16.9862 16.1779 16.9841 16.1954 16.9807C16.2121 16.9773 16.2285 16.9727 16.245 16.9685C16.2601 16.9647 16.2753 16.9614 16.2903 16.9568C16.3064 16.952 16.322 16.9459 16.3378 16.9402C16.3528 16.9349 16.3679 16.9299 16.3827 16.9238C16.3973 16.9177 16.4113 16.9106 16.4256 16.9039C16.4409 16.8967 16.4564 16.8898 16.4714 16.8818C16.4849 16.8746 16.4977 16.8664 16.5107 16.8586C16.5257 16.8497 16.5408 16.8412 16.5554 16.8315C16.5694 16.822 16.5828 16.8115 16.5963 16.8014C16.6089 16.792 16.6218 16.7832 16.634 16.7732C16.6563 16.7549 16.6775 16.7354 16.6981 16.7153C16.701 16.7124 16.7042 16.71 16.7071 16.7072L22.7071 10.7072C22.7999 10.6143 22.8736 10.5041 22.9239 10.3827C22.9741 10.2614 23 10.1314 23 10C23 9.86872 22.9742 9.73868 22.9239 9.61735C22.8737 9.49602 22.8 9.38577 22.7071 9.29291C22.6143 9.20004 22.5041 9.12638 22.3827 9.07612C22.2614 9.02585 22.1314 8.99998 22 8.99998C21.8687 8.99997 21.7387 9.02583 21.6173 9.07608C21.496 9.12633 21.3858 9.19999 21.2929 9.29285L17 13.5858V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1053 2.48043 15 2.73478 15 3V13.5858L10.7071 9.29285C10.6142 9.19999 10.504 9.12633 10.3826 9.07608C10.2613 9.02583 10.1313 8.99997 9.99995 8.99998C9.86862 8.99998 9.73859 9.02585 9.61726 9.07612C9.49593 9.12638 9.3857 9.20004 9.29284 9.29291C9.19998 9.38577 9.12633 9.49602 9.07607 9.61735C9.02582 9.73868 8.99996 9.86872 8.99997 10C8.99998 10.1314 9.02585 10.2614 9.07611 10.3827C9.12637 10.5041 9.20004 10.6143 9.2929 10.7072L15.2929 16.7072Z'
        fill={primaryColor}
      />
      <rect x='2' y='21' width='28' height='8' rx='2' fill={secondaryColor} />
      <path
        d='M27.3785 21.357C28.6714 20.9343 30 21.8978 30 23.258V27C30 28.1046 29.1046 29 28 29H4L27.3785 21.357Z'
        fill={primaryColor}
      />
    </svg>
  )
}

AnimIconSave.propTypes = {
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default AnimIconSave

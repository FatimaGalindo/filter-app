// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import { LoadingStyled } from './Loading.style'
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * @typedef {object} PropsLoading
 * @property {string=} height
 * @property {string=} className
 * @property {number=} scale
 *
 * @param {PropsLoading} param0
 */
function Loading ({ height, className, scale }) {
  return (
    <LoadingStyled height={height} className={className} >
      <CircularProgress disableShrink />
    </LoadingStyled>
  )
}

Loading.propTypes = {
  height: PropTypes.string,
  scale: PropTypes.number
}

Loading.defaultProps = {
  height: '100%',
  className: '',
  scale: 1
}

export default Loading

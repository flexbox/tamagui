import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="m9 9-2 2 2 2" stroke={color} />
      <Path d="m13 13 2-2-2-2" stroke={color} />
      <_Circle cx="11" cy="11" r="8" stroke={color} />
      <Path d="m21 21-4.3-4.3" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'SearchCode'

export const SearchCode = memo<IconProps>(themed(Icon))

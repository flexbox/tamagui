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
      <_Circle cx="6" cy="13" r="3" stroke={color} />
      <Path d="m9.7 14.4-.9-.3" stroke={color} />
      <Path d="m3.2 11.9-.9-.3" stroke={color} />
      <Path d="m4.6 16.7.3-.9" stroke={color} />
      <Path d="m7.6 16.7-.4-1" stroke={color} />
      <Path d="m4.8 10.3-.4-1" stroke={color} />
      <Path d="m2.3 14.6 1-.4" stroke={color} />
      <Path d="m8.7 11.8 1-.4" stroke={color} />
      <Path d="m7.4 9.3-.3.9" stroke={color} />
      <Path d="M14 2v6h6" stroke={color} />
      <Path
        d="M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5"
        stroke={color}
      />
    </Svg>
  )
}

Icon.displayName = 'FileCog'

export const FileCog = memo<IconProps>(themed(Icon))

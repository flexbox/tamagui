import { memo } from 'react'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Path, Rect } from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

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
      <Path d="m3 8 4-4 4 4" stroke={color} />
      <Path d="M7 4v16" stroke={color} />
      <Rect x="15" y="4" width="4" height="6" ry="2" stroke={color} />
      <Path d="M17 20v-6h-2" stroke={color} />
      <Path d="M15 20h4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'ArrowUp01'

export const ArrowUp01: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))

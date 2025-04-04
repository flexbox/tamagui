import { memo } from 'react'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Path } from 'react-native-svg'
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
      <Path d="M21.801 10A10 10 0 1 1 17 3.335" stroke={color} />
      <Path d="m9 11 3 3L22 4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'CircleCheckBig'

export const CircleCheckBig: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)

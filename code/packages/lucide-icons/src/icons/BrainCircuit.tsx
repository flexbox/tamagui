// @ts-nocheck
import { memo } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Circle as _Circle, Path } from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

type IconComponent = (propsIn: IconProps) => JSX.Element

export const BrainCircuit: IconComponent = themed(
  memo(function BrainCircuit(props: IconProps) {
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
        <Path
          d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
          stroke={color}
        />
        <Path d="M9 13a4.5 4.5 0 0 0 3-4" stroke={color} />
        <Path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" stroke={color} />
        <Path d="M3.477 10.896a4 4 0 0 1 .585-.396" stroke={color} />
        <Path d="M6 18a4 4 0 0 1-1.967-.516" stroke={color} />
        <Path d="M12 13h4" stroke={color} />
        <Path d="M12 18h6a2 2 0 0 1 2 2v1" stroke={color} />
        <Path d="M12 8h8" stroke={color} />
        <Path d="M16 8V5a2 2 0 0 1 2-2" stroke={color} />
        <_Circle cx="16" cy="13" r=".5" stroke={color} />
        <_Circle cx="18" cy="3" r=".5" stroke={color} />
        <_Circle cx="20" cy="21" r=".5" stroke={color} />
        <_Circle cx="20" cy="8" r=".5" stroke={color} />
      </Svg>
    )
  })
)

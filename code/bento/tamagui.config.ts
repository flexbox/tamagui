import { config } from '@tamagui/config/v3'
import { createTamagui } from '@tamagui/core'
import { themes } from './theme'

const appConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    ...themes,
  },
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}

  interface TypeOverride {
    groupNames(): 'window' | 'listitem' | 'item'
  }
}

export default appConfig

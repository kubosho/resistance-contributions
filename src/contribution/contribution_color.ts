import { ContributionLevel } from './contribution_level'

export enum ColorMode {
  Light = 'day',
  Dark = 'night',
}

export enum DarkThemeMode {
  Default = 'dark',
  HighContrast = 'dark_high_contrast',
  Dimmed = 'dark_dimmed',
}

export enum LightResistanceColor {
  Level0 = '#ebedf0',
  Level1 = '#9bcfe8',
  Level2 = '#418bc4',
  Level3 = '#3070a1',
  Level4 = '#21496e',
}

export enum DarkResistanceColor {
  Level0 = '#161b22',
  Level1 = '#0e2a45',
  Level2 = '#003a6e',
  Level3 = '#2675a6',
  Level4 = '#39a0d4',
}

export enum DarkHighlightResistanceColor {
  Level0 = '#272b33',
}

export enum DarkDimmedResistanceColor {
  Level0 = '#2d333b',
}

export function getColorMode(): ColorMode | null {
  const bodyElement = document.body
  const colorMode = bodyElement.dataset.theme

  if (
    !colorMode &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return ColorMode.Dark
  }

  if (
    !colorMode &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    return ColorMode.Light
  }

  if (!(colorMode === ColorMode.Light || colorMode === ColorMode.Dark)) {
    return null
  }

  return colorMode
}

export function getDarkThemeMode(): DarkThemeMode | null {
  const htmlElement = document.documentElement
  const theme = htmlElement.dataset.darkTheme

  if (
    !(
      theme === DarkThemeMode.Default ||
      theme === DarkThemeMode.HighContrast ||
      theme === DarkThemeMode.Dimmed
    )
  ) {
    return null
  }

  return theme
}

export function getResistanceColor(
  level: ContributionLevel,
  colorMode: ColorMode,
  darkThemeMode: DarkThemeMode | null,
):
  | DarkResistanceColor
  | DarkDimmedResistanceColor
  | DarkHighlightResistanceColor
  | LightResistanceColor {
  if (colorMode === ColorMode.Light) {
    return getLightResistanceColor(level)
  }

  return getDarkResistanceColor(level, darkThemeMode ?? DarkThemeMode.Default)
}

export function getLightResistanceColor(
  level: ContributionLevel,
): LightResistanceColor {
  switch (level) {
    case '1':
      return LightResistanceColor.Level1
    case '2':
      return LightResistanceColor.Level2
    case '3':
      return LightResistanceColor.Level3
    case '4':
      return LightResistanceColor.Level4
    default:
      return LightResistanceColor.Level0
  }
}

export function getDarkResistanceColor(
  level: ContributionLevel,
  darkThemeMode: DarkThemeMode,
):
  | DarkResistanceColor
  | DarkDimmedResistanceColor
  | DarkHighlightResistanceColor {
  switch (level) {
    case '1':
      return DarkResistanceColor.Level1
    case '2':
      return DarkResistanceColor.Level2
    case '3':
      return DarkResistanceColor.Level3
    case '4':
      return DarkResistanceColor.Level4
    default:
      if (darkThemeMode === DarkThemeMode.HighContrast) {
        return DarkHighlightResistanceColor.Level0
      }

      if (darkThemeMode === DarkThemeMode.Dimmed) {
        return DarkDimmedResistanceColor.Level0
      }

      return DarkResistanceColor.Level0
  }
}

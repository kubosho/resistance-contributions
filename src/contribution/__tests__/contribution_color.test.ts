import { beforeAll, expect, test, vi } from 'vitest'
import { createJsDomWindow } from '../../setup_jsdom/create_jsdom_window'
import { setupStorageForGlobalThis } from '../../global_object/storage'
import { replaceGlobalThisWithJsDom } from '../../setup_jsdom/replace_global_this_with_jsdom'
import { githubLightModeHtmlString } from '../__mock__/github_contributions_light_mode_html_string.mock'
import { githubDarkModeHtmlString } from '../__mock__/github_contributions_dark_mode_html_string.mock'
import {
  ColorMode,
  DarkResistanceColor,
  LightResistanceColor,
  getResistanceColor,
  getColorMode,
  DarkThemeMode,
  getDarkThemeMode,
} from '../contribution_color'

beforeAll(() => {
  setupStorageForGlobalThis()
})

test('getColorMode: If color mode is light, ColorMode.Light is returned', () => {
  const win = createJsDomWindow(githubLightModeHtmlString, {
    customBodyElementStartString: '<body data-theme="day">',
  })
  const cleanup = replaceGlobalThisWithJsDom(win)

  const color = getColorMode()
  expect(color).toBe(ColorMode.Light)

  cleanup()
})

test('getColorMode: If color mode is dark, ColorMode.Dark is returned', () => {
  const win = createJsDomWindow(githubDarkModeHtmlString, {
    customBodyElementStartString: '<body data-theme="night">',
  })
  const cleanup = replaceGlobalThisWithJsDom(win)

  const color = getColorMode()
  expect(color).toBe(ColorMode.Dark)

  cleanup()
})

test('getColorMode: If color mode is nothing, returned null', () => {
  const win = createJsDomWindow(githubDarkModeHtmlString, {
    customBodyElementStartString: '<body>',
  })
  const cleanup = replaceGlobalThisWithJsDom(win)

  const color = getColorMode()
  expect(color).toBe(null)

  cleanup()
})

test('getDarkThemeMode: If dark theme mode is dark_high_contrast, DarkThemeMode.HighContrastis returned', () => {
  const win = createJsDomWindow(githubDarkModeHtmlString, {
    customHtmlElementStartString:
      '<html lang="en" data-color-mode="dark" data-dark-theme="dark_high_contrast">',
    customBodyElementStartString: '<body data-theme="night">',
  })
  const cleanup = replaceGlobalThisWithJsDom(win)

  const color = getDarkThemeMode()
  expect(color).toBe(DarkThemeMode.HighContrast)

  cleanup()
})

test('getDarkThemeMode: If dark theme mode is dark_dimmed, DarkThemeMode.Dimmed returned', () => {
  const win = createJsDomWindow(githubDarkModeHtmlString, {
    customHtmlElementStartString:
      '<html lang="en" data-color-mode="dark" data-dark-theme="dark_dimmed">',
    customBodyElementStartString: '<body data-theme="night">',
  })
  const cleanup = replaceGlobalThisWithJsDom(win)

  const color = getDarkThemeMode()
  expect(color).toBe(DarkThemeMode.Dimmed)

  cleanup()
})

test('getResistanceColor: If color mode is light, light resistance color is returned', () => {
  const color = getResistanceColor('1', ColorMode.Light, null)
  expect(color).toBe(LightResistanceColor.Level1)
})

test('getResistanceColor: If color mode is dark, dark resistance color is returned', () => {
  const color = getResistanceColor('1', ColorMode.Dark, DarkThemeMode.Default)
  expect(color).toBe(DarkResistanceColor.Level1)
})

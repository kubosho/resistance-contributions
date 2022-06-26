import { getContributionElements } from './contribution/contribution_elements'
import { isContributionLevel } from './contribution/contribution_level'
import {
  ColorMode,
  getColorMode,
  getDarkThemeMode,
  getResistanceColor,
} from './contribution/contribution_color'

function main() {
  const contributionElements = getContributionElements()

  contributionElements.forEach((element) => {
    const level = element.dataset.level
    if (!isContributionLevel(level)) {
      return
    }

    const colorMode = getColorMode()
    const theme = getDarkThemeMode()
    const color = getResistanceColor(level, colorMode ?? ColorMode.Light, theme)
    element.style.fill = color
  })
}

main()

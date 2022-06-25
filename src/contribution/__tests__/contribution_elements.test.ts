import { beforeAll, expect, test } from 'vitest'
import { githubDarkModeHtmlString } from '../__mock__/github_contributions_dark_mode_html_string.mock'
import { createJsDomWindow } from '../../setup_jsdom/create_jsdom_window'
import { getContributionElements } from '../contribution_elements'
import { setupStorageForGlobalThis } from '../../global_object/storage'
import { replaceGlobalThisWithJsDom } from '../../setup_jsdom/replace_global_this_with_jsdom'

beforeAll(() => {
  setupStorageForGlobalThis()
  const win = createJsDomWindow(githubDarkModeHtmlString)
  replaceGlobalThisWithJsDom(win)
})

test('getContributionElements: Has contribution elements', () => {
  const elements = getContributionElements()
  expect(elements.length > 0).toBeTruthy()
})

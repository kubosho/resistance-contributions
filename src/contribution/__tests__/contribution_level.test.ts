import { expect, test } from 'vitest'
import { isContributionLevel } from '../contribution_level'

test('isContributionLevel: If contribution level is 0-4, true is returned.', () => {
  const levels = ['0', '1', '2', '3', '4']
  const actual = levels.every(isContributionLevel)
  expect(actual).toBeTruthy()
})

test('isContributionLevel: If contribution level is other than 0-4, false is returned.', () => {
  const actual = isContributionLevel('5')
  expect(actual).toBeFalsy()
})

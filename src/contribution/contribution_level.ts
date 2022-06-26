export type ContributionLevel = '0' | '1' | '2' | '3' | '4'

export function isContributionLevel(
  value?: string,
): value is ContributionLevel {
  if (!value) {
    return false
  }

  const levels: ContributionLevel[] = ['0', '1', '2', '3', '4']
  return levels.find((level) => level === value) !== undefined
}

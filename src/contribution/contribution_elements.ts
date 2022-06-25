export function getContributionElements(): HTMLElement[] {
  const contributionElements = document.querySelectorAll(
    '.ContributionCalendar-day',
  )

  if (contributionElements.length === 0) {
    return []
  }

  return Array.from(contributionElements) as HTMLElement[]
}

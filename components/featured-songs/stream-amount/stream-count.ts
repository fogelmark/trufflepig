export function formatCount(value: number): string {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`
  } else if (value >= 1_000_000) {
    return `${Math.floor(value / 1_000_000)}M`
  } else if (value >= 1_000) {
    return `${Math.floor(value / 1_000)}K`
  }
  return value.toString()
}

export const maxCount = 2.6 * 1_000_000_000
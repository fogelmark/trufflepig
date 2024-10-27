import { useMemo } from "react";

const valueMap: { [key: string]: number } = {
  B: 1e9,
  M: 1e6,
  K: 1e3,
};

export function useTotalPlays(playCounts: string[]): string {
  return useMemo(() => {
    let totalPlays = 0;

    playCounts.forEach((playCount) => {
      const value = parseFloat(playCount); // Extract the numeric value
      const unit = playCount.slice(-1); // Get the last character (B, M, K)

      // Check if the unit exists in the valueMap and add to totalPlays
      if (valueMap[unit]) {
        totalPlays += value * valueMap[unit];
      } else {
        totalPlays += parseFloat(playCount); // If no unit, treat as plain number
      }
    });

    return formatPlays(totalPlays); // Format and return the result
  }, [playCounts]); // No need to include valueMap in the dependency array
}

// Format function that formats the total play count for readability
function formatPlays(playCount: number): string {
  if (playCount >= 1e9) {
    return (playCount / 1e9).toFixed(1) + "B"; // Convert to billions
  } else if (playCount >= 1e6) {
    return (playCount / 1e6).toFixed(1) + "M"; // Convert to millions
  } else if (playCount >= 1e3) {
    return (playCount / 1e3).toFixed(1) + "K"; // Convert to thousands
  }
  return playCount.toString(); // Return as is if less than 1,000
}
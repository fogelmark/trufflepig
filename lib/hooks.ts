import { OpenContext } from "@/contexts/open-provider"
import { useScroll, useTransform } from "framer-motion"
import { useContext } from "react"
import { useMemo } from "react";

export function useOpenContext() {
  const context = useContext(OpenContext)

  if (!context) {
    throw new Error("useOpenContext must be used within a OpenContextProvider")
  }
  return context
}

export function useHeaderStyles() {
  const { scrollY } = useScroll()
  const textColor = useTransform(scrollY, [0, 50], ["#fff", "#000"])
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    [
      "none",
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    ],
  )
  const borderColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.1)"],
  )
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(255, 255, 255, 1)"],
  )

  return { textColor, boxShadow, borderColor, backgroundColor }
}

export function useTotalPlays(playCounts: string[]): string {
  const valueMap: { [key: string]: number } = {
    B: 1e9,
    M: 1e6,
    K: 1e3,
  };

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
  }, [playCounts]);
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

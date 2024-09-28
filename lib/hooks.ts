import { OpenContext } from "@/contexts/open-provider"
import { useScroll, useTransform } from "framer-motion"
import { MutableRefObject, useContext, useEffect, useRef } from "react"

export function useOpenContext() {
  const context = useContext(OpenContext)

  if (!context) {
    throw new Error("useOpenContext must be used within a OpenContextProvider")
  }
  return context
}

export const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

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
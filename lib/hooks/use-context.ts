import { OpenContext } from "@/contexts/open-provider"
import { useContext } from "react"

export function useOpenContext() {
  const context = useContext(OpenContext)

  if (!context) {
    throw new Error("useOpenContext must be used within a OpenContextProvider")
  }
  return context
}
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Header } from "@/components/header/header"

describe("Header", () => {
  it("renders a header tag", () => {
    render(<Header />)

    const header = screen.getByTestId("header")

    expect(header).toBeInTheDocument()
  })
})

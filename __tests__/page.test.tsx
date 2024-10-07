import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("Home", () => {

  it("should render the main section", () => {
    render(<Home />)

    const main = screen.getByRole("main")
    expect(main).toBeInTheDocument()
  })

  it("should render the hero section", () => {
    render(<Home />)

    const hero = screen.getByTestId("hero")
    expect(hero).toBeInTheDocument()
  })

  it("should render the intro text section", () => {
    render(<Home />)

    const introText = screen.getByTestId("intro-text")
    expect(introText).toBeInTheDocument()
  })
})

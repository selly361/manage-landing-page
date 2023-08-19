import { render, screen } from '@testing-library/react'

import { AboutSection } from 'Layout'

describe('AboutSection', () => {
  it('renders section title and description', () => {
    render(<AboutSection />)

    const title = screen.getByText('Bring everyone together to build better products.')
    const description = screen.getByText('Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders "Get Started" button', () => {
    render(<AboutSection />)

    const getStartedButton = screen.getByRole('button', { name: 'Get Started' })

    expect(getStartedButton).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<AboutSection />)

    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'images/illustration-intro.svg')
  })
})

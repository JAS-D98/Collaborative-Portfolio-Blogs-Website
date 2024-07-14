import { render, screen } from '@testing-library/react'
import Button from './Button'
import { describe, it, expect } from 'vitest'

describe('Button', ()=>{
    it('Renders a button Component', ()=>{
        render(<Button/>)
        const button=screen.getByRole("button")
        expect(button).toBeInTheDocument();
    })
})

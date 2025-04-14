import type { Meta, StoryObj } from '@storybook/react'
import { UserCard } from './UserCard'
import { within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect } from '@storybook/jest';

const meta: Meta<typeof UserCard> = {
    title: 'Components/UserCard',
    component: UserCard,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof UserCard>

// Funzione che simula una chiamata asincrona
const Confirm = async () => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

export const Default: Story = {
    args: {
        name: 'Mario Rossi',
        email: 'mariorossi@gmail.com',
        onConfirm: Confirm
    }
}

// Story with confirmation interaction
export const WithConfirmation: Story = {
    args: {
        name: 'Giorgio Verdi',
        email: 'giorgioverdi@gmail.com',
        onConfirm: Confirm
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const confirmButton = canvas.getByRole('button', { name: 'Conferma' })
        
        await userEvent.click(confirmButton)
        
        await waitFor(async () => {
            const confirmationText = await canvas.findByText('Utente confermato')
            expect(confirmationText).toBeInTheDocument()
        }, { timeout: 3000 })
    }
}
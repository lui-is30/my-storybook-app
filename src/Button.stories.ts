import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: 'Click Me',
        onClick: () => alert('Clicked!'),
    },
};

/**
 * nuova storia per il bottone
 * modificare il componente Button per supportare la disabilitazione
 * Aggiungere una proprietà per disabilitarlo
 * Se la proprietà è null gestire all'onclick prima la disabilitazione
 * Simulare l'operazione del click con un setTimeOut di 5 secondi
 */

export const Second: Story = {
    args: {
      label: "Click Me",
      onClick: () => alert("Operazione completata!"),
      isDisabled: null,
    },
    play:async({canvasElement})=>{
        const canvas=within(canvasElement);
        const button=canvas.getByRole("button");
        await userEvent.click(button);
    },
  };
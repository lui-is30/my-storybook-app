import React, { useState } from 'react'
import { Button } from './Button'

type UserCardProps = {
    name: string
    email: string
    onConfirm: () => Promise<void>
}

export const UserCard: React.FC<UserCardProps> = ({name, email, onConfirm}) => {
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleConfirm = async () => {
        await onConfirm()
        setIsConfirmed(true)
    }

    return (
        <div style={{border: '1px solid #ccc', padding: '1rem'}}>
            <h3>{name}</h3>
            <p>{email}</p>
            <Button 
                label="Conferma" 
                onClick={handleConfirm}
                isDisabled={null} 
            />
            {isConfirmed && <p style={{color: 'green'}}>Utente confermato</p>}
        </div>
    );
}

/**
* Modifica del componente UserCard:
* 1. Aggiungere nel componente un bottone (Button) con la label
• "Conferma" che al click esegue una funzione asincrona
* 2. La funzione asincrona onClick passata a Button via props
• dovrà essere sinulata con setTimeout e al completamento visualizzare
• una scritta all'interno della UserCard con "Utente confermato"
* Creazione della storia:
1. Creare le storie necessarie per testare il componente
2. Solo dopo automatizzare con "play" alcune storie.
 */
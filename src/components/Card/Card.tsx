import React,{ useState } from 'react';
import { CardUI } from './CardUI';
import { OpenCard } from './OpenCard';


export interface useSearchProps {
    state: CardsProps[];
    isLoading: boolean;
    success: boolean;
    error: boolean;
}

export type CardsProps = {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: {
        rate: number;
        count: number;
    }
};

export interface CardProps {
    cards: CardsProps[];
}


export const Card: React.FC<CardProps> = ({cards}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [id, setId] = useState<number>(null)

    const openCard = (id:number) => {
        setId(id)
        setOpen(!open)
    }

    
    return <>
                <div className={`catalog__column catalog-items ${open ? 'hide': 'show'}`}>
                    {cards.map(card => 
                        <div key={card.id} className="items-card">
                            <CardUI 
                                card={card}
                                open={() => openCard(card.id)}
                            />
                        </div>
                            )
                    }
                </div>

                    <OpenCard 
                    id={id}
                    close={openCard}
                    open={open}
                    />
            </>
}
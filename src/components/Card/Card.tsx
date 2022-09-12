import React,{ useState } from 'react';
import { CardUI } from './CardUI';
import { OpenCard } from './OpenCard';


interface CardProps {
    cards: {
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
}

export const Card: React.FC<CardProps> = ({cards}) => {
    const [open, setOpen] = useState<Boolean>(false)
    const [id, setId] = useState<Number>(null)

    const openCard = (id:number) => {
        setId(id)
        setOpen(!open)
    }


    if(open) {
        return <OpenCard 
        id={id}
        close={openCard}
        />
    }
    return <div className="catalog__column catalog-items">
        {cards.map(card => 
                <div key={card.id} className="items-card">
                   <CardUI 
                    card={card}
                    open={setOpen}
                   />
                </div>
            )
        }
    </div>
}
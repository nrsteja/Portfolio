import React, { useState } from 'react';
import "./../MainCard/MainCard.css";
import Card from '../Card/Card';
import Back from '../Back/back';
import { useNavigate } from 'react-router-dom';
import DescriptionCard from '../DescriptionCard/DescriptionCard';

const MainCard = ({ card, type, navigation }) => {
    const navigate = useNavigate();
    const [showDescription, setShowDescription] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleNavigate = () => {
        navigate(navigation);
    };

    const openTab = (card) => {
        console.log(card.company);
        setSelectedCard(card);
        setShowDescription(true);
    };

    const closeDescription = () => {
        setShowDescription(false);
        setSelectedCard(null);
    };

    let firstThreeCards, lastTwoCards;
    if (card.length === 3) {
        firstThreeCards = card.slice(0, 2).map((card, index) => ({ ...card, uniqueKey: `first-${index}` }));
        lastTwoCards = card.slice(-1).map((card, index) => ({ ...card, uniqueKey: `last-${index}` }));
    } else {
        firstThreeCards = card.slice(0, 3).map((card, index) => ({ ...card, uniqueKey: `first-${index}` }));
        lastTwoCards = card.slice(-2).map((card, index) => ({ ...card, uniqueKey: `last-${index}` }));
    }
    const headerClassName = card.length === 3 ? 'main-card-exp-header' : 'main-card-header';
    const category = card.length === 3 ? 'exp' : 'proj';

    return (
        <>
            <div className={`main-card ${showDescription ? 'blurred' : ''}`}>
                <div className="main-card-container">
                    <div className="cloud main-card-front">
                        <span className="left-front" />
                        <span className="right-front" />
                    </div>
                    <span className="sun sunshine" />
                    <span className="sun" />
                    <div className="cloud main-card-back">
                        <span className="left-back" />
                        <span className="right-back" />
                    </div>
                </div>
                <div className={headerClassName}>
                    {firstThreeCards.map(card => (
                        <Card type={category} key={card.uniqueKey} {...card} onClick={() => openTab(card)} />
                    ))}
                    
                    {lastTwoCards.map(card => (
                        <Card type={category} key={card.uniqueKey} {...card} onClick={() => openTab(card)} />
                    ))}
                    <Back onClick={handleNavigate} />
                </div>
                
            </div>
            
            {showDescription && (
                <DescriptionCard type={type} card={selectedCard} onClose={closeDescription} />
            )}
        </>
    );
};

export default MainCard;

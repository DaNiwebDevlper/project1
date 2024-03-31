"use client"

import { useState } from 'react';
import Card from './Card';


const CardSlider = ({ cards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto relative overflow-hidden">
                <button
                    className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-white bg-opacity-50 px-4 py-2 rounded-full"
                    onClick={prevCard}
                >
                    Prev
                </button>
                <button
                    className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-white bg-opacity-50 px-4 py-2 rounded-full"
                    onClick={nextCard}
                >
                    Next
                </button>


                {/* //////////////---Card Component---/////////// */}
                <div className="flex transition-transform duration-300 ease-in-out transform">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`w-full ${index === currentCardIndex ? 'block' : 'hidden'
                                }`}
                        >
                            <Card title={card.title} image={card.profile} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSlider;

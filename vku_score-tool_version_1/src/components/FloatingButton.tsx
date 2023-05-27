import React, { ReactNode, MouseEvent } from 'react';

interface FloatingButtonProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, children }) => {
    return (
        <button className="floating-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default FloatingButton;

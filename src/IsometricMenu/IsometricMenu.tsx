import React, {FC, ReactNode} from 'react';
import './IsometricMenu.css'

export interface MenuItem {
    text?: string;
    onClick?: () => void;
    children?: ReactNode;
}

export interface IsometricMenuProps {
    menuItems: MenuItem[]
}

const IsometricMenu: FC<IsometricMenuProps> = ({ menuItems }) => {
    return (
        <div className="container">
            <ul>
                {menuItems.map((item, index) => <li
                    role="presentation"
                    key={index}
                    style={{zIndex:menuItems.length - index}}
                    onClick={item.onClick}
                >
                    {item.text}{item.children}
                </li>)}
            </ul>
        </div>
    );
};

export default IsometricMenu;
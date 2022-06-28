import React, {FC, ReactNode} from 'react';
import styles from './IsometricMenu.module.scss'

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
        <div className={styles.container}>
            <ul className={styles.ulWrapper}>
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
import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './ProductCard.module.scss';

export interface ProductCardProps {
    imageSrc: string;
    title: string;
    subTitle: string;
    description: string;
    param?: {
        name?: string;
        valuesArray?: string[];
        active?: string;
        setActive?: Dispatch<SetStateAction<string>>;
    };
    price: number;
    onClick: () => void;
}

const ProductCard: FC<ProductCardProps> = (props) => {
    return (
        <div className={styles.productCard}>
            <div className={styles.productCard__imgBox}>
                <img src={props.imageSrc} alt={props.title}/>
            </div>
            <div className={styles.productCard__details}>
                <h3>{props.title}<br/><span>{props.subTitle}</span></h3>
                <h4>Product details</h4>
                <p>{props.description}</p>
                <h4>{props?.param?.name}</h4>
                <div className={styles.productCard__details__size}>
                    {props.param?.valuesArray?.map(param =>
                        <li
                            key={param}
                            className={param === props.param?.active ? styles.productCard__details__size__active : ''}
                            // @ts-ignore
                            onClick={() => props.param?.setActive(param)}
                        >
                            {param}
                        </li>
                    )}
                </div>
                <div className={styles.productCard__details__group}>
                    <h2><sup>$</sup>{props.price.toString().split('.')[0]}<small>.{props.price.toString().split('.')[1] || '00'}</small></h2>
                    <button onClick={props.onClick}>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
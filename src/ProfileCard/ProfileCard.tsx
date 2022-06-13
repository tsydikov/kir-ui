import React, {FC, ReactNode} from 'react';
import './ProfileCard.css';

export interface ProfileCardProps {
    profileCardProps: {
        imgSrc: string;
        title: string;
        titleDesc: string;
        infoArray?: {
            title: string;
            titleDesc: string;
        }[];
        buttonsArray?: {
            title: string;
            style: string;
            onClick: () => void;
        }[],
    }
    children?: ReactNode;
}

const ProfileCard: FC<ProfileCardProps> = ({profileCardProps, children}) => {
    const childrenHeight = () => {
        if (profileCardProps.infoArray && profileCardProps.buttonsArray) return 0
        if (profileCardProps.infoArray && !profileCardProps.buttonsArray
            || !profileCardProps.infoArray && profileCardProps.buttonsArray) return '50px'
        return '100px'
    }
    return (
        <div className="card">
            <div className="imageBox">
                <img src={profileCardProps.imgSrc}/>
            </div>
            <div className="content">
                <div className="details">
                    <h2>
                        {profileCardProps.title}
                        <br/>
                        <span>
                            {profileCardProps.titleDesc}
                        </span>
                    </h2>
                    <div className="data">
                        {profileCardProps.infoArray && profileCardProps.infoArray.map((info) => (
                            <h3 key={info.title}>{info.title}<br/><span>{info.titleDesc}</span></h3>
                        ))}
                    </div>
                    <div className="actionButton">
                        {profileCardProps.buttonsArray && profileCardProps.buttonsArray.map((button) => (
                            <button
                                className={button?.style || ''}
                                onClick={button.onClick}
                                key={button.title}
                            >
                                {button.title}
                            </button>
                        ))}
                    </div>
                    <div style={{minHeight: childrenHeight()}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
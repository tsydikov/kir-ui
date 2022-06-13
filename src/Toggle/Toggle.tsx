import React, {FC} from 'react';
import './Toggle.css'

export interface ToggleProps {
    checked?: boolean;
    onChange?: () => void;
}

const Toggle: FC<ToggleProps> = (props) => {
    return (
        <label className="tg-con">
            <input type="checkbox" {...props} />
            <span/>
            <i className="indicator"/>
        </label>
    );
};

export default Toggle;
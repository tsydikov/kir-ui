import React, {FC} from 'react';
import './Checkbox.css';

export interface CheckboxProps {
    checked?: boolean;
    onChange?: () => void;
}

const Checkbox: FC<CheckboxProps> = (props) => {
    return (
        <label className="chb-con">
            <input type="checkbox" {...props} />
            <span className="btn" />
            <i className="fa fa-power-off"/>
        </label>
    );
};

export default Checkbox;
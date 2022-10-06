import './styles.css';
import React from "react";

function ResumeItem({title, Icon, value}) {
    return(
        <div className='resume-item'>
            <header>
                <div className='header-title'>
                <p>{title}</p>
                </div>
                <Icon/>
            </header>
            <span>{value}</span>
        </div>
    );
}

export default ResumeItem;
import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.wallpaper}
                     src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>
            </div>
            <div className={style.discriptionBlok}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;

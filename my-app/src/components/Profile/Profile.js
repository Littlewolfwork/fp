import React from 'react';
import c from './Profile.module.css';
import Posts from '../Posts/Posts.js';

const Profile = () => {
    return <div className={c.content}>
        <div>
            <img src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg" alt=""/>
        </div>
        <div>
            ava+desc
        </div>
        <Posts />
    </div>;
}

export default Profile;
import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userAvatar from "../../../assets/images/avatar.jpg";
import ProfileDataForm from "./ProfileDataFrom";

const ProfileInfo = ({profile, savePhoto, status, isOwner, updateStatus, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onUserAvatarSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }

    const onSubmit =  (formData) => {
        saveProfile(formData)
            .then( ()=> {
                setEditMode(false);
            });

    }


    return (
        <div>
            <div>
                <img className={style.wallpaper}
                     src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>
            </div>
            <div className={style.discriptionBlok}>
                <div><img src={profile.photos.large || userAvatar}
                          className={style.userAvatar}/></div>
                {isOwner && <input type={'file'} onChange={onUserAvatarSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    )
};


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={style.discript}>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div><b>Full Name</b>: {profile.fullName}</div>
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
        <div>
            <b>My skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>Contacts: {Object.keys(profile.contacts).map(key => {
                return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}</b>
        </div>
    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={style.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;

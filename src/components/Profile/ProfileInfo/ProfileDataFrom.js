import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import style from './ProfileInfo.module.css';
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div><b>Full Name</b>: {createField('Full Name', 'fullName', [], Input)}</div>
        <div><b>About me</b>: {profile.aboutMe}
            {createField('About me...', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Looking for a jobs</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div><b>My skills</b>: {createField('My skills...', 'lookingForAJobDescription', [], Textarea)}</div>
        <div>
            <b>Contacts: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contacts}>
                    <b>{key}</b>: {createField(key, 'contacts.' + key, [], Input)}
                </div>
            })}</b>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
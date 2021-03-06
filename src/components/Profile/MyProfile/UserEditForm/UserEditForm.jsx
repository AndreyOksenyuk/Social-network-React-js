import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../MyProfile.scss'
import MyNameForm from '../../../module/MyProfileEditForm/MyNameForm';
import LookingForAjobChecbox from '../../../module/MyProfileEditForm/LookingForAjobChecbox';
import MyScillsFormTextarea from '../../../module/MyProfileEditForm/MyScillsFormTextarea';
import AboutMyFormTextarea from '../../../module/MyProfileEditForm/AboutMyFormTextarea';
import MySocialLinkFormInput from '../../../module/MyProfileEditForm/MySocialLinkFormInput';

const UserEditForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div className="UserInform__data">
            <div className="UserInform__data-inner">
               <b>Имя: </b>
               <Field
                  name='fullName'
                  type='text'
                  component={MyNameForm}
               />
            </div>
            <div className="UserInform__data-inner">
               <b>Ищу работу: </b>
               <Field
                  name='lookingForAJob'
                  type='checkbox'
                  component={LookingForAjobChecbox}
               />
            </div>
            <div className="UserInform__data-inner UserInform-textArea">
               <b>Умения: </b>
               <Field
                  name='lookingForAJobDescription'
                  component={MyScillsFormTextarea}
               />
            </div>
            <div className="UserInform__data-inner UserInform-textArea">
               <b>Обо мне: </b>
               <Field
                  name='aboutMe'
                  type='text'
                  component={AboutMyFormTextarea}
               />
            </div>
            <div className="UserInform__data-contacts">
               <b>Контакты: </b>
               <div className="SocialLink">
                  <p>facebook</p>
                  <Field
                     name='contacts.facebook'
                     type='text'
                     component={MySocialLinkFormInput}
                  />
               </div>
               <div className="SocialLink">
                  <p>github</p>
                  <Field
                     name='contacts.github'
                     type='text'
                     component={MySocialLinkFormInput}
                  />
               </div>
               <div className="SocialLink">
                  <p>instagram</p>
                  <Field
                     name='contacts.instagram'
                     type='text'
                     component={MySocialLinkFormInput}
                  />
               </div>
               <div className="SocialLink">
                  <p>mainLink</p>
                  <Field
                     name='contacts.mainLink'
                     type='text'
                     component={MySocialLinkFormInput}
                  /></div>
               <div className="SocialLink">
                  <p>twitter</p>
                  <Field
                     name='contacts.twitter'
                     type='text'
                     component={MySocialLinkFormInput}
                  /></div>
               <div className="SocialLink">
                  <p>vk</p>
                  <Field
                     name='contacts.vk'
                     type='text'
                     component={MySocialLinkFormInput}
                  /></div>
               <div className="SocialLink">
                  <p>website</p>
                  <Field
                     name='contacts.website'
                     type='text'
                     component={MySocialLinkFormInput}
                  /></div>
               <div className="SocialLink">
                  <p>youtube</p>
                  <Field
                     name='contacts.youtube'
                     type='text'
                     component={MySocialLinkFormInput}
                  /></div>

            </div>
         </div>
         <button disabled={props.disableBtn} className="Button">
               {props.disableBtn ? <i className="fa fa-spinner fa-pulse"></i> : 'Сохранить'}
            </button>
         {props.error && <div className="formErrorProfile"><p>{props.error}</p></div>}
         {props.isPutData && <p className='formSuccesProfile'>Данные успешно обновлены</p>}
      </form>
   );
}

const UserEditReduxForm = reduxForm({
   form: 'UserEditForm',
})(UserEditForm)


export default UserEditReduxForm;


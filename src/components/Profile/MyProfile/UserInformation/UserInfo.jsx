import React, { useState } from 'react';
import UserStatus from './UserStatus';
import '../MyProfile.scss'
import UserEditReduxForm from '../UserEditForm/UserEditForm';
import UserInformData from './UserInformData';
import {
   RollbackOutlined,
   EditOutlined
} from '@ant-design/icons';

const UserInfo = React.memo(props => {

   let [openForm, setOpenForm] = useState(false)

   let onToggleForm = () => {
      setOpenForm(openForm = !openForm)
   }

   let onSaveUserData = (value) => {
      props.saveMyDataTC(value, props.user.userId)
   }

   return (
      <div className='UserInform_wrapper'>
         {openForm
            ? <i className='openFormBtn' onClick={onToggleForm}>назад <RollbackOutlined /></i>
            : <i className="openFormBtn" aria-hidden="true"
               title="Изменить данные"
               onClick={onToggleForm}>Изменить <EditOutlined />
            </i>
         }

         {openForm
            ? <UserEditReduxForm
               onSubmit={onSaveUserData}
               isPutData={props.isPutData}
               initialValues={props.user}
               disableBtn={props.disableBtn}
            />
            : <div className="UserInform">
               <h5 className='UserInform__name'>{props.user.fullName}</h5>
               <div className="UserInform__status">
                  <UserStatus
                     myStatus={props.myStatus}
                     changeValueMyStatus={props.changeValueMyStatus}
                  />
               </div>
               <UserInformData user={props.user} email={props.email} />
            </div>
         }
      </div>

   );
})

export default UserInfo;

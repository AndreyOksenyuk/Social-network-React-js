import React from 'react';
import s from './Profile.module.scss'
import AddPostContainer from './Posts/AddPost/AddPostContainer';
import User from './User/User';
import MapPostContainer from './Posts/MapPosts/MapPostContainer';
import img from '../../assets/Image/portfolio-01.jpg'

const Profile = (props) => {
   return (
      
      <div className={s.profile}>
         <div>
            <img src={img} alt="img" className={s.topImg}/>
         </div>  
         <User 
            {...props.User} 
            followedUser={props.followedUser}
            FollowToggle={props.FollowToggle}
            userStatus={props.userStatus}
            authorization={props.authorization}
         />

         <div className={s.posts}>
            <AddPostContainer />
            <MapPostContainer />
         </div>
      </div>
   )
}


export default Profile;
import React from 'react';
import MyProfile from './MyProfile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getUserProfileThankCreator, getUserStatus, changeValueMyStatus, saveMyPhotoTC } from '../../../Redux/profile-reducer';
import { authMeThankCreator } from '../../../Redux/auth-reducer';
import Preloader from '../../module/preloader'
import { getAuthMe } from '../../../api';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';

class MyProfileContainer extends React.Component {    
      state = {
         preloader: true,
      }
   componentDidMount(){
      getAuthMe().then(response => {
         if (response.resultCode === 0) {
            this.props.getMyProfile(response.data.id)
            this.props.getUserStatus(response.data.id)
            this.setState({preloader: false})
         }
      })
   }

   render() {     
      if (this.state.preloader) {
         return <Preloader />
      }
      return <MyProfile {...this.props}/>
   }
}

let mapStateToProps = (state) => {
   return {
      user: state.profilePage.User,
      myStatus: state.profilePage.userStatus,
      email: state.auth.email,
      fulfilled: state.auth.fulfilled,
   }
}


export default compose(
   withRouter,
   withAuthRedirect,
   connect(mapStateToProps, {
      getMyProfile: getUserProfileThankCreator,
      authMeThankCreator, getUserStatus, changeValueMyStatus, saveMyPhotoTC
   }),
)(MyProfileContainer)

/*import { UserAuthWrapper } from 'redux-auth-wrapper'
import { browserHistory } from 'react-router'
import { pathToJS } from 'react-redux-firebase'

const AUTHED_REDIRECT = 'AUTHED_REDIRECT'
const UNAUTHED_REDIRECT = 'UNAUTHED_REDIRECT'

 export const UserIsAuthenticated = UserAuthWrapper({
   wrapperDisplayName: 'UserIsAuthenticated',
   authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
   authenticatingSelector: ({ firebase }) =>
     pathToJS(firebase, 'isInitializing') === true ||
     pathToJS(firebase, 'auth') === undefined,
   predicate: auth => auth !== null,
   redirectAction: (newLoc) => (dispatch) => {
     browserHistory.replace(newLoc)
     // routerActions.replace // if using react-router-redux
     dispatch({
       type: 'UNAUTHED_REDIRECT',
       payload: { message: 'You must be authenticated.' },
     })
   },
 })

 export const UserIsNotAuthenticated = UserAuthWrapper({
   wrapperDisplayName: 'UserIsNotAuthenticated',
   allowRedirectBack: false,
   failureRedirectPath: '/movies',
   authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
   authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'isInitializing') === true,
   predicate: auth => auth === null,
   redirectAction: (newLoc) => (dispatch) => {
     browserHistory.replace(newLoc)
     dispatch({
       type: 'AUTHED_REDIRECT',
       payload: { message: 'User is authenticated. Redirecting home...' }
     })
   }
 })

export default {
  UserIsAuthenticated,
  UserIsNotAuthenticated
}
*/

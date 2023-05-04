import { useSelector } from 'react-redux';

import {
  selectUserEmail,
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsAuthError,
} from 'redux/auth/selectorsAuth';


export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
    const userEmail = useSelector(selectUserEmail);
    const userName = useSelector(selectUserName);
    const errorMessage = useSelector(selectIsAuthError);

  return {
    isLoggedIn,
    isRefreshing,
    userEmail,
    userName,
    errorMessage,
  };
};
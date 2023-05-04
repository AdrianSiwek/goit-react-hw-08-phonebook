 const selectIsLoggedIn = state => state.auth.data.isLoggedIn;

 const selectUserEmail = state => state.auth.data.user.email;

 const selectUserName = state => state.auth.data.user.name;

 const selectIsRefreshing = state => state.auth.isRefreshing;

const selectIsAuthError = state => state.auth.error;
 

export const authSelectors = {
    selectIsLoggedIn,
    selectUserEmail,
    selectUserName,
    selectIsRefreshing,
    selectIsAuthError,
}
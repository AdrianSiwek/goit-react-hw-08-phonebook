export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserEmail = state => state.auth.user.email;

export const selectUserName = state => state.auth.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsAuthError = state => state.auth.error;
 


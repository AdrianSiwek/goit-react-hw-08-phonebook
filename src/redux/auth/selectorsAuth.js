export const selectIsLoggedIn = state => state.auth.data.isLoggedIn;

export const selectUserEmail = state => state.auth.data.user.email;

export const selectUserName = state => state.auth.data.user.name;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsAuthError = state => state.auth.error;
 


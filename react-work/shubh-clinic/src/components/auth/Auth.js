export const isLoggedIn = ()=>{
    return !!sessionStorage.getItem("current-user"); // {}
}
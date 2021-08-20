export const goToTripsList = (history) => {
    history.push("/trips/list");
  };
  
  export const goToLogin = (history) => {
    history.push("/login");
  };
  
  export const goToApplication = (history) => {
    history.push("/trips/application");
  };
  
  export const goToAdminHome = (history) => {
    history.push("/admin/trips/list");
  };
  
  export const goToCreateTrip = (history) => {
    history.push("/admin/trips/create");
  };
  
  export const goToTripsDetails = (history, id) => {
    history.push(`/admin/trips/${id}`);
  };
  
  export const goToLastPage = (history) => {
    history.goBack();
  };
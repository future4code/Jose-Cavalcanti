export const goToTripList = (history) => {
    history.push("/trips/list");
};

export const gotToApplication = (history) => {
    history.push("/tripsapplication")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToAdminHome = (history) => {
    history.push("/admin/trips/list")
}

export const goToCreateTrip = (history) => {
    history.push("/admin/trips/create")
}

export const goToTripaDetails = (history, id) => {
    history.push(`admin/trips/${id}`)
}

export const goToLastPage = (history) => {
    history.goBack()
}
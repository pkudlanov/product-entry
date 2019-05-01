const listingApi = {
    save(listing) {
        const json = JSON.stringify(listing);
        localStorage.setItem('listing', json);
    },
    get() {
        const json = localStorage.getItem('listing');
        const listing = JSON.parse(json);
        return listing;
    }
};
export default listingApi;
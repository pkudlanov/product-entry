const listingApi = {
    storage: localStorage,
    save(listing) {
        const listings = listingApi.getAll();
        listings.push(listing);
        const json = JSON.stringify(listings);
        listingApi.storage.setItem('listings', json);
    },
    get() {
        const listings = listingApi.getAll();
        return listings[0];

    },
    getAll() {
        const json = listingApi.storage.getItem('listings');
        let listings = JSON.parse(json);
        if(!listings){
            listings = [];
        }

        return listings;
    }
};
export default listingApi;
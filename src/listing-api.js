const listingApi = {
    storage: localStorage,
    save(listing) {
        const listings = listingApi.getAll();
        listings.push(listing);
        const json = JSON.stringify(listings);
        listingApi.storage.setItem('listings', json);
    },
    get(year) {
        const listings = listingApi.getAll();

        for(let i = 0; i < listings.length; i++) {
            const listing = listings[i];
            if(listing.year === year) {
                console.log(listing);
                return listing;
            }
        }

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
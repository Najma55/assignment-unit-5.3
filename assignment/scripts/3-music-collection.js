console.log('***** Music Collection *****')
let collection =[];
function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}
addToCollection('The Writings On The Wall', 'Destinys Child', 1999);
console.log(collection[collection.length -1]);
addToCollection('Love and Life', 'Mary J Blige', 2003);
console.log(collection[collection.length -1]);
addToCollection('Trouble', 'Akon', 2004);
console.log(collection[collection.length -1]);
addToCollection('Silver Side up' , 'Nickelback' , 2001);
console.log(collection[collection.length -1]);
addToCollection('Comin From Where Im From' , 'Anthony Hamilton' , 2003);
console.log(collection[collection.length -1]);
addToCollection('Acid Rap' , 'Chance The Rapper' , 2013);
console.log(collection[collection.length -1]);

console.log(collection);

function showCollection(params) {
    console.log('Number of albums in collection,', (params.length));
    for(let album of params){
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
}showCollection(collection);


function findByArtist(artist) {
    let found = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            found.push(collection[i]); 
        }
    }
    return found; 
}

console.log('Find a Chance The Rapper album:', findByArtist('Chance The Rapper'));
console.log('Return an empty array:', findByArtist('Adele'));


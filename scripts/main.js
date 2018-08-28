// Listen for page load
window.addEventListener('load', fetchBookmarks);

// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark(e) {

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    // console.log(siteName);
    // console.log(siteUrl);

    var bookmark = {
        name: siteName,
        url: siteUrl
    };

    // localStorage.setItem('test', 'hello world');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');
    // console.log(localStorage.getItem('test'));

    // test if bookmarks exist
    if(localStorage.getItem('bookmarks') === null) {
        // init array
        var bookmarks = [];
        bookmarks.push(bookmark);
        // set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // get bookmarks from localstorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark to array
        bookmarks.push(bookmark);
        // reset back to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };

    fetchBookmarks();

    // prevent form submission
    e.preventDefault();
};

function fetchBookmarks() {

    var name, url;
    var bookmarkList = document.getElementById('bookmarksResults');

    // get bookmarks from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log('loaded');


    for(var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        // Find a better way of doing the "https" bit :) Currently 
        // works with no https in the original URL from the array
        bookmarkList.innerHTML += `
        <h3>${name}</h3>
        <p>${url}</p>
        <a href="https://${url}" class="btn">Visit</a>  
        <button onClick="remove()" class="btn">Remove</button>
        `
    };    
};

function remove() {
    console.log('remove it now!!!');
};
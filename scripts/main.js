// Listen for page load
window.addEventListener('load', fetchBookmarks);

// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//save bookmark
function saveBookmark(e) {

    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    // add in https 
    if(!siteUrl.indexOf('https://')) {
        
        siteUrl = 'https://' + siteUrl;
    }

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

    var name, url, bookmarks;
    var bookmarkList = document.getElementById('bookmarksResults');
    
    for(var i = 0; i < localStorage.length; i++) {
        // get bookmarks from localstorage
        bookmarks = JSON.parse(localStorage.getItem('bookmarks')),
        name = bookmarks[i].name,
        url = bookmarks[i].url;

        bookmarkList.innerHTML += `
        <h3>${name}</h3>
        <p>${url}</p>
        <a href="https://${url}" target="_blank" class="btn">Visit</a>  
        <button onClick="remove()" class="btn">Remove</button>
        `
    };    
};

function remove() {
    console.log('remove it now!!!');
};
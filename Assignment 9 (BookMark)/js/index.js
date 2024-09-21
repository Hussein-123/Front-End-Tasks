// select bookmark Name and URL
var bookmarkInputName = document.getElementById("bookmarkName");
var bookmarkInputUrl = document.getElementById("bookmarkUrl");
var tableContentMarks = document.getElementById("tableContent");
var bookmarkList = [];
// Local Storage
if (localStorage.getItem("ourBookmarkList") != null) {
    bookmarkList = JSON.parse(localStorage.getItem("ourBookmarkList"));
    displayBookmark();
}


// Add function
function addBookmark() {
    var bookmark = {
        bookmarkName: bookmarkInputName.value,
        bookmarkUrl: bookmarkInputUrl.value
    }
    bookmarkList.push(bookmark);
    displayBookmark();
    localStorage.setItem("ourBookmarkList", JSON.stringify(bookmarkList));
    resetAllInput();
}

// Display function
function displayBookmark() {
    var bookmarkString = ``;
    for (var i = 0; i < bookmarkList.length; i++) {
        bookmarkString += `<div class="col py-2 d-flex justify-content-center align-items-center">
                                <p>${i + 1}</p>
                            </div>
                            <div class="col py-2 d-flex justify-content-center align-items-center">
                                <p>${bookmarkList[i].bookmarkName}</p>
                            </div>
                            <div class="col py-2 d-flex justify-content-center align-items-center">
                                <button onclick="visitSite(${i})"
                                    class="btn visit-btn text-white d-flex flex-column flex-sm-row align-items-center gap-2 d-block">
                                    <i class="fa-solid fa-eye"></i>
                                    Visit
                                </button>
                            </div>
                            <div class="col py-2 d-flex justify-content-center align-items-center">
                                <button onclick="deleteSite(${i})"
                                    class="btn delete-btn text-white d-flex flex-column flex-sm-row align-items-center gap-2">
                                    <i class="fa-solid fa-trash-can"></i>
                                    Delete
                                </button>
                             </div>`
    }
    tableContentMarks.innerHTML = bookmarkString;
}

// Reset All input function
function resetAllInput() {
    bookmarkInputName.value = null;
    bookmarkInputUrl.value = null;
}

// Delete Site function
function deleteSite(deletedIndex) {
    bookmarkList.splice(deletedIndex, 1);
    displayBookmark();
    localStorage.setItem("ourBookmarkList", JSON.stringify(bookmarkList));
}

// Visit Site Function
function visitSite(VisitedIndex) {
    window.open(bookmarkList[VisitedIndex].bookmarkUrl, "_blank")
}
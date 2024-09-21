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
        bookmarkString += `<tr>
                            <td>${i + 1}</td>
                            <td>${bookmarkList[i].bookmarkName}</td>
                            <td>
                                <button onclick="visitSite(${i})" class="btn btn-visit text-white"><i class="fa-solid fa-eye pe-2"></i>Visit</button>
                            </td>
                            <td>
                                <button onclick="deleteSite(${i})" class="btn btn-delete text-white"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
                            </td>
                        </tr>`
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
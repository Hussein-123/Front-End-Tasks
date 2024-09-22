// select bookmark Name and URL
var bookmarkInputName = document.getElementById("bookmarkName");
var bookmarkInputUrl = document.getElementById("bookmarkUrl");
var tableContentMarks = document.getElementById("tableContent");
var bookmarkList = [];

var bookmarkRegex = {
    siteNameRegex: /^[a-zA-Z][a-zA-Z]{2,}$/,
    siteUrlRegex: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/
}
// Local Storage
if (localStorage.getItem("ourBookmarkList") != null) {
    bookmarkList = JSON.parse(localStorage.getItem("ourBookmarkList"));
    displayBookmark();
}


// Add function
function addBookmark() {
    if (isValidation(bookmarkRegex.siteNameRegex, bookmarkInputName) &
        isValidation(bookmarkRegex.siteUrlRegex, bookmarkInputUrl)) {
        var bookmark = {
            bookmarkName: bookmarkInputName.value,
            bookmarkUrl: bookmarkInputUrl.value
        }
        bookmarkList.push(bookmark);
        displayBookmark();
        localStorage.setItem("ourBookmarkList", JSON.stringify(bookmarkList));
        resetAllInput();
    }
    else {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }
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
    bookmarkInputName.classList.remove("is-valid", "is-invalid");
    bookmarkInputUrl.classList.remove("is-valid", "is-invalid");
}

// Delete Site function
function deleteSite(deletedIndex) {
    bookmarkList.splice(deletedIndex, 1);
    displayBookmark();
    localStorage.setItem("ourBookmarkList", JSON.stringify(bookmarkList));
}

// Visit Site function
function visitSite(VisitedIndex) {
    window.open(bookmarkList[VisitedIndex].bookmarkUrl, "_blank")
}

// Validation function
function isValidation(regex, bookmarkInput) {
    if (regex.test(bookmarkInput.value)) {
        bookmarkInput.classList.add("is-valid");
        bookmarkInput.classList.remove("is-invalid");
        return true;
    }
    else {
        bookmarkInput.classList.add("is-invalid");
        bookmarkInput.classList.remove("is-valid");
        return false;
    }
}
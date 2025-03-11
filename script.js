function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "student" && password === "1234") {
        window.location.href = "home.html";
    } else {
        alert("Invalid login details!");
    }
}

function addBook() {
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let bookList = document.getElementById("bookList");

    if (title && author) {
        let li = document.createElement("li");
        li.textContent = `${title} by ${author}`;
        bookList.appendChild(li);
    } else {
        alert("Please enter book title and author!");
    }
}

function submitFeedback() {
    let feedback = document.getElementById("feedback").value;
    let message = document.getElementById("feedbackMessage");

    if (feedback) {
        message.textContent = "Thank you for your feedback!";
        document.getElementById("feedback").value = "";
    } else {
        alert("Please enter feedback before submitting.");
    }
}

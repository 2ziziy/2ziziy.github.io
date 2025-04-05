let isOriginal = true;

document.getElementById("changeContentButton").addEventListener("click", function() {
    const originalContent = document.getElementById("originalContent");
    const newContent = document.getElementById("newContent");

    if (isOriginal) {
        originalContent.style.display = "none";
        newContent.style.display = "flex";
    } else {
        originalContent.style.display = "flex";
        newContent.style.display = "none";
    }

    isOriginal = !isOriginal;
});


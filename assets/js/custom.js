// Select all elements with the class 'overlay'
let elements = document.querySelectorAll(".overlay");

// Loop through each overlay element
elements.forEach(element => {
    element.addEventListener("click", function () {
        // Display the modal
        document.querySelector(".modal").style.display = "flex"

        // Get the image URL from the previous sibling (the img element)
        const img = element.parentElement.querySelector("img");
        const url = img.getAttribute("src");

        // Set the modal image source
        modalPhoto.setAttribute("src", url);

        modalProductName.innerText = element.parentElement.nextElementSibling.querySelector("h4").innerText;
        modalProductCaption.innerText = element.parentElement.nextElementSibling.querySelector("p").innerText;
    })
})

// Function to close the modal
function closeModal() {
    document.querySelector(".modal").style.display = "none"
}


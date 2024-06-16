// Get the modal
var modal = document.getElementById("myModal");
                    
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

function valider() {
    if (document.getElementById('PDF').checked) {
        window.open('files/CV_Paolo_TOÉ.pdf');
    } else if (document.getElementById('PNG').checked) {
        window.open("files/CV_Paolo_TOÉ.png");
    } else{
        window.open("files/CV_Paolo_TOÉ.jpg");
    }
}

/*smooth scrolling wont work*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
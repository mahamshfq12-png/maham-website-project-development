// Otto Cafe - script.js

// ---- Menu Filter ----
function filterMenu(category, clickedBtn) {
    var sections = ['coffee', 'food', 'drinks'];
    var buttons = document.querySelectorAll('.menu-filter .btn');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-filter');
        buttons[i].classList.add('btn-dark');
    }

    if (clickedBtn) {
        clickedBtn.classList.add('active-filter');
        clickedBtn.classList.remove('btn-dark');
    }

    if (category === 'all') {
        for (var i = 0; i < sections.length; i++) {
            var el = document.getElementById(sections[i]);
            if (el) el.style.display = 'block';
        }
    } else {
        for (var i = 0; i < sections.length; i++) {
            var el = document.getElementById(sections[i]);
            if (el) el.style.display = 'none';
        }
        var target = document.getElementById(category);
        if (target) target.style.display = 'block';
    }
}


// ---- Gallery Lightbox ----
function openLightbox(label, imgSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxLabel = document.getElementById('lightbox-label');
    var lightboxImg = document.getElementById('lightbox-img');

    if (lightbox) lightbox.classList.add('open');
    if (lightboxLabel) lightboxLabel.textContent = label;
    if (lightboxImg && imgSrc) lightboxImg.src = imgSrc;
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('open');
}

var lb = document.getElementById('lightbox');
if (lb) {
    lb.addEventListener('click', function(e) {
        if (e.target === lb) closeLightbox();
    });
}


// ---- Contact Form Validation ----
function sendMessage() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var formMsg = document.getElementById('form-msg');

    if (!name || !email || !message || !formMsg) return;

    if (name.value === '' || email.value === '' || message.value === '') {
        formMsg.textContent = 'Please fill in all required fields.';
        formMsg.style.color = '#cc0000';
        return;
    }

    if (email.value.indexOf('@') === -1) {
        formMsg.textContent = 'Please enter a valid email address.';
        formMsg.style.color = '#cc0000';
        return;
    }

    formMsg.textContent = 'Thank you! Your message has been sent.';
    formMsg.style.color = '#8b5e3c';

    name.value = '';
    email.value = '';
    document.getElementById('subject').value = '';
    message.value = '';
}

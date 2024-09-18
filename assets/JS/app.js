// ============= CURRENT YEAR ===========
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// ============ COUNTRY DROPDOWN ============

$(document).ready(function () {
    var instance = $("[name=number]").intlTelInput({
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
        initialCountry: "ca", // Set Canada as the default country
        separateDialCode: true,
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (
                resp
            ) {
                var countryCode = resp && resp.country ? resp.country : "us";
                success(countryCode);
            });
        },
    });

    $("[name=number]").on("blur", function () {
        var countryData = instance.intlTelInput("getSelectedCountryData");
    });
});

// ============ FROM INPUT ==============

function handleFormSubmit(event, formId, index) {
    event.preventDefault();
    $(".preloader").fadeIn(0);
    const form = document.getElementById(formId);
    // Clear input fields
    const formData = new FormData(form);
    // Check if all required fields are filled
    let isValid = true;
    formData.forEach((value, key) => {
        if (!value.trim()) {
            isValid = false;
            const label = document.querySelector(`label[for="${key}"]`);
            if (label) {
                label.classList.add("error");
            }
        }
    });
    if (!isValid) {
        return;
    }
    formData.forEach((value, key) => {
        if (key == "number") {
            code = form
                .querySelector("div.iti__selected-dial-code")
                .textContent.replace(/\+/g, "");
            console.log(code);
            send_params["phone"] = code + value;
        } else {
            send_params[key] = value;
        }
    });
    console.log(send_params);
    $.ajax({
        url: "lead.php",
        type: "post",
        data: {
            email: send_params["email"],
            first_name: send_params["first_name"],
            last_name: send_params["last_name"],
            password: "hSSzV3Dg",
            ip: send_params["ip"],
            phone: send_params["phone"],
            country_code: send_params["country_code"],
            city: send_params["city"],
            offer: send_params["offer"],
            url: send_params["url"],
            sub: send_params["sub"],
            engine: send_params["engine"],
            keyw: send_params["keyw"],
            pre: send_params["pre"],
            ver: send_params["ver"],
        },
        success: function (response) {
            data = JSON.parse(response);
            console.log(data);
            if (data.message == "" || data.message == null) {
                if (data.details.redirect && data.details.redirect.url) {
                    window.location.href = "thankyou.php";
                } else {
                    $("#failed_message").fadeIn();
                    console.log("Redirect URL not found.");
                }
            } else {
                if (
                    data &&
                    Array.isArray(data.errors) &&
                    data.errors.length > 0 &&
                    data.errors[0].message !== null
                ) {
                    error_mesage = data.errors[0].message;
                } else {
                    error_mesage = data.message;
                }
                $(".preloader").fadeOut(0);
                $(".error_answer").text(error_mesage);
                $(".error_answer").fadeIn();
                console.log("Something go wront");
            }
        },
        complete: function () {
            setTimeout(function () {
                $(".preloader").fadeOut();
            }, 2000);
        },
    });
    form.reset();
    const modal = document.querySelector(".modal");
    const modalInstance = bootstrap.Modal.getInstance(modal); // Get the Bootstrap modal instance
    //   modalInstance.hide(); // Close the modal
}

var url = "https://json.geoiplookup.io";

$.ajax({
    url: url,
    type: "get",
    success: function (response) {
        console.log(response);
        send_params["ip"] = response["ip"];
        send_params["city"] = response["city"];
        send_params["country_code"] = response["country_code"];

        phone1 = $("#number2");
        var util_url = "/inttel/js/utils.js";
        phone1.intlTelInput({ separateDialCode: true, utilsScript: util_url });
        phone1.intlTelInput("setCountry", response.country_code.toLowerCase());

        // phone2 = $('#phoneNumber')
        // var util_url = "/inttel/js/utils.js";
        // phone2.intlTelInput({ separateDialCode: true,utilsScript: util_url });
        // phone2.intlTelInput("setCountry", response.country_code.toLowerCase());

        phone3 = $("#Number");
        var util_url = "/inttel/js/utils.js";
        phone3.intlTelInput({ separateDialCode: true, utilsScript: util_url });
        phone3.intlTelInput("setCountry", response.country_code.toLowerCase());
    },
});

// ============== BACK TO TOP ===================
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTop");

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > 150) {
            scrollToTopButton.style.display = "flex";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    // Add event listener for scroll-to-top button click
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
// TOST SCRIPT
function showTostHandler() {
    Toastify({
        text: "Please Sign-up in order to add a comment or like.",
        duration: 3000,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#00A4FF",
        },
        onClick: function () { }, // Callback after click
    }).showToast();
}
// ==== LIKE CLICK SHOW TOASTIFY ==
function likeToastHandler() {
    showTostHandler();
}

// Run the following code when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("commentInput");
    const submitButton = document.getElementById("submitButton");
    const form = document.getElementById("commentForm");

    // Function to handle input events on the input field
    function handleInput(event) {
        if (event.target.value.trim() === "") {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }
    }

    // Function to handle form submission events
    function handleSubmit(event) {
        event.preventDefault();
        if (inputField.value.trim() !== "") {
            showTostHandler();
            inputField.value = "";
            submitButton.disabled = true;
        }
    }

    // Attach the handleInput function to the input event on the input field
    inputField.addEventListener("input", handleInput);
    // Attach the handleSubmit function to the submit event on the form
    form.addEventListener("submit", handleSubmit);
});
// =======video ==
document.addEventListener("DOMContentLoaded", function () {
    // Function to mute all videos except the one being clicked
    function muteAllExcept(videoId) {
        document.querySelectorAll("video").forEach((video) => {
            if (video.id !== videoId) {
                video.muted = true;
                const icon = document.querySelector(`[data-video-id="${video.id}"]`);
                if (icon) {
                    icon.src = "./assets/images/success-story/unmute.svg";
                }
            }
        });
    }

    // Function to toggle mute and change icon
    function toggleMute(videoId, iconId) {
        var video = document.getElementById(videoId);
        var icon = document.getElementById(iconId);
        var iconhero = document.querySelector(".hero_sound_icon");
        const soundText = document.querySelector(".hero_sound");

        if (video.muted) {
            muteAllExcept(videoId);
            video.muted = false;
            icon.src = "./assets/images/success-story/sound.svg";
            iconhero.src = "./assets/images/success-story/sound.svg";
            soundText.textContent = "Mute";
        } else {
            video.muted = true;
            icon.src = "./assets/images/success-story/unmute.svg";
            iconhero.src = "./assets/images/success-story/unmute.svg";
            soundText.textContent = "Unmute";
        }
    }

    // Add event listeners to sound icons
    document.querySelectorAll("[id^='soundIcon']").forEach((icon) => {
        icon.addEventListener("click", function () {
            const videoId = icon.getAttribute("data-video-id");
            toggleMute(videoId, icon.id);
        });
    });

    // Intersection Observer for autoplay on view
    var observerOptions = {
        threshold: 0.5,
    };

    var observerCallback = function (entries, observer) {
        entries.forEach((entry) => {
            var video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    };

    var observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all video elements
    document.querySelectorAll(".story_video, #video4").forEach((video) => {
        observer.observe(video);
    });
});

document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener("click", function () {
        const isActive = item.classList.contains("accordion_shadow");

        // Remove the accordion_shadow and accordion_border classes from all items
        document.querySelectorAll(".accordion-item").forEach((innerItem) => {
            innerItem.classList.remove("accordion_shadow");
            innerItem.classList.add("accordion_border");
        });

        if (!isActive) {
            // Use setTimeout to allow the browser to update the collapsed class before checking it
            setTimeout(() => {
                var button = item.querySelector(".accordion-button");
                if (!button.classList.contains("collapsed")) {
                    item.classList.add("accordion_shadow");
                    item.classList.remove("accordion_border");
                }
            }, 0);
        }
    });
});
$(document).ready(function () {
    $(".project-card").hover(
        function () {
            const description = $(this).data("description");
            $(this).append(`<p class="project-description">${description}</p>`);
        },
        function () {
            $(this).find(".project-description").remove();
        }
    );

    $("#contact-form").submit(function (event) {
        event.preventDefault();
        alert("Thank you for your message! I will get back to you soon.");
        $(this).trigger("reset");
    });

    function fadeInOnScroll() {
        $(".fade-in").each(function () {
            const elemTop = $(this).offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();
            if (windowBottom > elemTop + 50) {
                $(this).addClass("visible");
            }
        });
    }

    fadeInOnScroll();
    $(window).on("scroll", fadeInOnScroll);
});

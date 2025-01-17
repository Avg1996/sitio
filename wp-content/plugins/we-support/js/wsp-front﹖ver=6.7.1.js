jQuery(document).ready(function (jQuery) {
    // Open mailto links simulator
    jQuery("a[data-domain]").click(function() {
        var url = "mailto:" + jQuery(this).attr("data-username") + "@" + jQuery(this).attr("data-domain");
        window.open(url, "_blank");
    });

    // Handle close button for top box
    jQuery("#btn-wsp-close").click(function () {
        hideOperatorsWrapper();
    });

    // Hide supporters wrapper div and dependencies
    function hideOperatorsWrapper() {
        jQuery("#wsp-container").removeClass("wsp-show");

        setTimeout(function () {
            if (!jQuery("#wsp-container").hasClass("wsp-show")) {
                jQuery(".wsp-supporter.wsp-show").removeClass("wsp-show");
            }
        }, 1000);
    }


    // Handle toggle for main box
    jQuery(".btn-wsp-toggle").click(function () {
        var platforms = ["whatsapp", "messenger", "instagram", "telegram", "skype", "call", "sms", "email"];
        var clickedSocial = jQuery(this).attr("class").replace("btn-wsp-toggle btn-wsp-", "");
        var clickedSocialTheme = "wsp-theme-" + clickedSocial;
        var boxShowed = jQuery("#wsp-container").hasClass("wsp-show");
        var currentBoxClicked = jQuery("#wsp-container").hasClass(clickedSocialTheme);


        if (boxShowed && currentBoxClicked) {
            hideOperatorsWrapper();
        } else {
            jQuery("#wsp-container").addClass("wsp-show");

            for(i=0; i<platforms.length; i++){
                jQuery("#wsp-container").removeClass("wsp-theme-" + platforms[i]);
            }
            jQuery("#wsp-container").addClass(clickedSocialTheme);

            jQuery(".wsp-caption").removeClass("active");
            jQuery(".wsp-caption-" + clickedSocial).addClass("active");

            jQuery(".wsp-supporter").removeClass("wsp-show");
            jQuery("#wsp-container .wsp-" + clickedSocial).addClass("wsp-show");
        }

    });

    // Handleling open/close buttons box
    jQuery("#btn-wsp-toggle-buttons").click(function() {
        if(jQuery("#btn-wsp-toggle-buttons").hasClass("active")){
            hideOperatorsWrapper();

            jQuery("#btn-wsp-toggle-buttons").removeClass("active");
            jQuery("#wsp-chat-us").removeClass("wsp-hide");
            jQuery("#wsp-container").removeClass("wsp-toggle");
        }else{
            jQuery("#btn-wsp-toggle-buttons").addClass("active");
            jQuery("#wsp-chat-us").addClass("wsp-hide");
            jQuery("#wsp-container").addClass("wsp-toggle");
        }
    });
});
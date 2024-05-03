function loadHotjarScript() {
    var h = window;
    var o = document;
    var t = "//static.hotjar.com/c/hotjar-";
    var j = ".js?sv=";
    var a = o.getElementsByTagName("head")[0];
    var r = o.createElement("script");
    
    h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments);
    };
    
    h._hjSettings = { hjid: 465935, hjsv: 5 };
    
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    
    a.appendChild(r);
}

// Call the function to load the Hotjar script
loadHotjarScript();

// Create LocalBusiness schema object
var localBusinessSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "PhD Assistance",
    "image": "http://www.phdassistance.com/wp-content/uploads/2017/11/logo.png",
    "description": "PhD Assistance is world's reputed academic guidance provider for the past 15 years, having guided more than 4,500 Ph.D. scholars and 10,500 Masters Students across the globe. We support students, research scholars, entrepreneurs, and professionals from various organizations in providing consistently high-quality writing and data analytical services every time.",
    "brand": {
        "@type": "Thing",
        "name": "PhD Assistance"
    },
    "telephone": "India: 9694287578 UK : +44-1223926607 US: +1-9725029262",
    "email": "ritikyadaw9@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "#10, Kutty Street",
        "addressLocality": "Nungambakkam, Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India",
        "postalCode": "600034"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
    },
    "url": "http://www.phdassistance.com/",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "186"
    }
};

// Create BreadcrumbList schema object
var breadcrumbListSchema = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@id": "http://www.phdassistance.com/",
                "name": "PhD Assistance"
            }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@id": "http://www.phdassistance.com/about-us/",
                "name": "ABOUT US"
            }
        },
        {
            "@type": "ListItem",
            "position": 3,
            "item": {
                "@id": "http://www.phdassistance.com/services/",
                "name": "SERVICES"
            }
        },
        {
            "@type": "ListItem",
            "position": 4,
            "item": {
                "@id": "http://www.phdassistance.com/contact-us/",
                "name": "CONTACT US"
            }
        }
    ]
};

// Create Organization schema object
var organizationSchema = {
    "@type": "Organization",
    "name": "PhD Assistance",
    "url": "http://www.phdassistance.com",
    "sameAs": [
        "https://www.facebook.com/phdassistance",
        "https://twitter.com/phdassistance",
        "https://www.youtube.com/channel/UC-mKbdBTZNv5bBoXsMqxqkQ",
        "https://www.linkedin.com/company/phd-assistance/",
        "https://plus.google.com/+PhdAssistanceChennai/",
        "https://www.instagram.com/phdassistance/",
        "https://in.pinterest.com/phdassistance/"
    ]
};

// Convert schema objects to JSON strings
var localBusinessJson = JSON.stringify(localBusinessSchema);
var breadcrumbListJson = JSON.stringify(breadcrumbListSchema);
var organizationJson = JSON.stringify(organizationSchema);

// Output JSON strings
console.log(localBusinessJson);
console.log(breadcrumbListJson);
console.log(organizationJson);


// File: mfn-dnmc-config.js

//<![CDATA[
    window.mfn = {
        mobile_init: 1240,
        nicescroll: 40,
        parallax: "translate3d",
        responsive: 1,
        retina_js: 0,
      };
      
      window.mfn_prettyphoto = {
        disable: false,
        disableMobile: false,
        title: false,
        style: "pp_default",
        width: 0,
        height: 0,
      };
      
      window.mfn_sliders = {
        blog: 0,
        clients: 0,
        offer: 0,
        portfolio: 0,
        shop: 0,
        slider: 0,
        testimonials: 3000,
      };
      //]]>

    //   cData

      var pbLocalizeObj = {
        ajax: "https://www.phdassistance.com/wp-admin/admin-ajax.php",
        seconds: "seconds",
        thisWillClose: "This will close in",
        icons: {
          close_icon:
            '<svg class="ays_pb_material_close_icon" xmlns="https://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000" alt="Pop-up Close"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
          close_circle_icon:
            '<svg class="ays_pb_material_close_circle_icon" xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="36" alt="Pop-up Close"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',
          volume_up_icon:
            '<svg class="ays_pb_fa_volume" xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="36"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>',
          volume_mute_icon:
            '<svg xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 9v6h4l5 5V4l-5 5H7z"/></svg>',
        },
      };
            
      jQuery(window).on("elementor/frontend/init", function() {
        var previewIframe = jQuery("#elementor-preview-iframe").get(0);
    
        // Attach a load event listener to the preview iframe
        jQuery(previewIframe).on("load", function() {
            var tpg_selector = tpg_str_rev("nottub-tropmi-gpttr nottub-aera-noitces-dda-rotnemele");
    
            var logo = "https://www.phdassistance.com/wp-content/plugins/the-post-grid";
            var log_path = tpg_str_rev("gvs.04x04-noci/segami/stessa/");
    
            jQuery('<div class="' + tpg_selector + '" style="vertical-align: bottom;margin-left: 5px;"><img src="' + logo + log_path + '" alt="TPG"/></div>').insertBefore(".elementor-add-section-drag-title");
        });
    });

    
    //<![CDATA[
jQuery(window).load(function () {
    var retina = window.devicePixelRatio > 1 ? true : false;
    if (retina) {
        var retinaEl = jQuery("#logo img.logo-main");
        var retinaLogoW = retinaEl.width();
        var retinaLogoH = retinaEl.height();
       
        retinaEl
            .attr(
                "src",
                "https://www.phdassistance.com/wp-content/uploads/2017/11/logo.png"
            )
            .width(retinaLogoW)
            .height(retinaLogoH);
        var stickyEl = jQuery("#logo img.logo-sticky");
        var stickyLogoW = stickyEl.width();
        var stickyLogoH = stickyEl.height();
        stickyEl
            .attr(
                "src",
                "https://www.phdassistance.com/wp-content/uploads/2017/11/logo.png"
            )
            .width(stickyLogoW)
            .height(stickyLogoH);
        var mobileEl = jQuery("#logo img.logo-mobile");
        var mobileLogoW = mobileEl.width();
        var mobileLogoH = mobileEl.height();
        mobileEl
            .attr(
                "src",
                "https://www.phdassistance.com/wp-content/uploads/2017/11/logo.png"
            )
            .width(mobileLogoW)
            .height(mobileLogoH);
        var mobileStickyEl = jQuery("#logo img.logo-mobile-sticky");
        var mobileStickyLogoW = mobileStickyEl.width();
        var mobileStickyLogoH = mobileStickyEl.height();
        mobileStickyEl
            .attr(
                "src",
                "https://www.phdassistance.com/wp-content/uploads/2017/11/logo.png"
            )
            .width(mobileStickyLogoW)
            .height(mobileStickyLogoH);
    }
});
//]]>


function loadClarityScript() {
    // Check if the 'clarity' object exists in the global window object
    if (!window.clarity) {
        window.clarity = function () {
            // If clarity object does not exist, create an empty clarity object
            window.clarity.q = window.clarity.q || [];
            window.clarity.q.push(arguments);
        };
    }
    
    // Create a new <script> element
    var scriptElement = document.createElement('script');
    
    // Set the async attribute to true for non-blocking loading
    scriptElement.async = true;
    
    // Set the src attribute to the Clarity tracking script URL with a unique identifier
    scriptElement.src = 'https://www.clarity.ms/tag/a514kedzue';
    
    // Retrieve the first <script> element in the document
    var firstScript = document.getElementsByTagName('script')[0];
    
    // Insert the newly created <script> element before the first <script> element in the document
    firstScript.parentNode.insertBefore(scriptElement, firstScript);
}

// Call the function to load the Clarity script
loadClarityScript();

// <!-- Google Tag Manager -->


function loadGoogleTagManager() {
    // Check if the 'dataLayer' object exists in the global window object
    if (!window.dataLayer) {
        window.dataLayer = [];
    }
    
    // Push an event to the dataLayer indicating the start of GTM script loading
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    
    // Create a new <script> element
    var scriptElement = document.createElement('script');
    
    // Set the async attribute to true for non-blocking loading
    scriptElement.async = true;
    
    // Set the src attribute to the Google Tag Manager script URL with the provided container ID
    scriptElement.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NKFG2HR';
    
    // Retrieve the first <script> element in the document
    var firstScript = document.getElementsByTagName('script')[0];
    
    // Insert the newly created <script> element before the first <script> element in the document
    firstScript.parentNode.insertBefore(scriptElement, firstScript);
}

// Call the function to load Google Tag Manager
loadGoogleTagManager();

function initializeWhatsAppWidget() {
    var options = {
        whatsapp: "919176966446", // WhatsApp number
        call_to_action: "Message us", // Call to action
        position: "left", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol,
        host = "getbutton.io",
        url = proto + "//static." + host;
    var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.async = true;
    scriptElement.src = url + "/widget-send-button/js/init.js";
    scriptElement.onload = function () {
        WhWidgetSendButton.init(host, proto, options);
    };
    var firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(scriptElement, firstScript);
}

// Call the function to initialize the WhatsApp widget
initializeWhatsAppWidget();



function initializeZohoSalesIQ() {
    var $zoho = window.$zoho || {};
    $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "siqe7d7e30f29ad8fb4e773e1edfc1ed036e7058d9a7df66cc410f636c0f382f57c",
        values: {},
        ready: function () {}
    };
    var d = document;
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.id = "zsiqscript";
    s.defer = true;
    s.src = "https://salesiq.zohopublic.com/widget";
    var t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
}

// Call the function to initialize Zoho SalesIQ
initializeZohoSalesIQ();


(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-NKFG2HR");



//  facebook

{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PhD Assistance",
    "alternateName": "PhD assistance consultant",
    "url": "https://www.phdassistance.com/",
    "logo": "https://www.phdassistance.com/wp-content/uploads/2017/11/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 91769 66446",
      "contactType": "technical support",
      "areaServed": ["IN", "AE", "150", "US", "GB", "CA"],
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/phdassistance/",
      "https://twitter.com/phdassistance/",
      "https://www.instagram.com/phdassistance/",
      "https://www.youtube.com/channel/UC-mKbdBTZNv5bBoXsMqxqkQ",
      "https://www.linkedin.com/company/7595092/",
      "https://www.pinterest.co.uk/phdassistance1211/",
      "https://www.phdassistance.com/"
    ]
  }
  
  (function () {
    var w = window;
    var d = document;
    var u = "https://cdn.bitrix24.in/b25992183/crm/tag/call.tracker.js";
    var s = d.createElement("script");
    s.async = true;
    s.src = u + "?" + (Math.floor(Date.now() / 60000));
    var h = d.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s, h);
})();


var moove_frontend_gdpr_scripts = {
    ajaxurl: "https://www.phdassistance.com/wp-admin/admin-ajax.php",
    post_id: "108",
    plugin_dir: "https://www.phdassistance.com/wp-content/plugins/gdpr-cookie-compliance",
    show_icons: "all",
    is_page: "1",
    ajax_cookie_removal: "false",
    strict_init: "2",
    enabled_default: { third_party: 0, advanced: 0 },
    geo_location: "false",
    force_reload: "false",
    is_single: "",
    hide_save_btn: "false",
    current_user: "0",
    cookie_expiration: "365",
    script_delay: "2000",
    close_btn_action: "1",
    close_btn_rdr: "",
    scripts_defined: '{"cache":true,"header":"","body":"","footer":"","thirdparty":{"header":"","body":"","footer":""},"advanced":{"header":"","body":"","footer":""}}',
    gdpr_scor: "true",
    wp_lang: "",
};
var gdpr_consent__strict = "true";
var gdpr_consent__thirdparty = "false";
var gdpr_consent__advanced = "false";
var gdpr_consent__cookies = "strict";
var megamenu = { timeout: "300", interval: "100" };


// This script initializes tooltips and popovers using Bootstrap components and sets up event listeners.

// Initialize tooltips and popovers on document ready
$(document).ready(function () {
    // Initialize tooltips and popovers for elements with data-toggle attributes
    $("body").tooltip({ selector: "[data-toggle='tooltip']", container: "body" })
             .popover({ selector: "[data-toggle='popover']", container: "body", html: true });
});

// Initialize tooltips for elements with class tt_reg
$(".tt_reg").tooltip();

// Initialize tooltips with custom template for elements with class tt_large
$(".tt_large").tooltip({
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner large"></div></div>'
});

// Add event listener for wpcf7mailsent event (Contact Form 7 submission success)
document.addEventListener("wpcf7mailsent", function (event) {
    // Redirect to the specified URL upon form submission success
    location = "http://www.phdassistance.com/thank-you/";
}, false);

(function () {
  try {
    console.log("setting up google tag manager...");

    var TAG_ID = "GTM-KLGVBHH";

    // push gtm.start event - ideally this should be at the top of <head>, but we're not really trying to optimise tracking on docs
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", TAG_ID);

    // inject iframe to load gtm
    var gtm_ns_el = document.createElement("noscript");
    var gtm_iframe_el = document.createElement("iframe");
    gtm_iframe_el.setAttribute(
      "src",
      "https://www.googletagmanager.com/ns.html?id=" + TAG_ID
    );
    gtm_iframe_el.setAttribute("height", "0");
    gtm_iframe_el.setAttribute("width", "0");
    gtm_iframe_el.style["display"] = "none";
    gtm_iframe_el.style["visibility"] = "hidden";

    gtm_ns_el.appendChild(gtm_iframe_el);
    document.body.appendChild(gtm_ns_el);
  } catch (e) {
    console.error("error setting up google tag manager", e);
  }
})();

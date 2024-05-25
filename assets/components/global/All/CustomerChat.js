import { useEffect } from "react";

export const CustomerChat = () => {
  useEffect(() => {
    const loadTawkTo = () => {
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/6651af0d9a809f19fb3514e7/1hunh7jq5";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
      })();
    };

    if (!document.getElementById("tawk-js")) {
      loadTawkTo();
    }

    if (document.getElementById("tawk-js")) {
      console.log(document.getElementById("tawk-js"));
    }
  }, []);

  return null;
};

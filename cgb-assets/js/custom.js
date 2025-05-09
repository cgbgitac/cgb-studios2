function animateCounter(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let counter = entry.target;
            let target = parseInt(counter.getAttribute('data-count'));
            let speed = Math.ceil(target / 100); // Adjust speed
            let count = 0;

            let updateCount = () => {
                if (count < target) {
                    count += speed;
                    counter.innerText = count + "+";
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target + "+"; // Ensure it stops at exact number
                }
            };

            updateCount();
            observer.unobserve(counter); // Stop observing once animated
        }
    });
}

let options = { threshold: 0.5 }; // Trigger when 50% is visible
let observer = new IntersectionObserver(animateCounter, options);
document.querySelectorAll('.counter-box').forEach(counter => observer.observe(counter));

async function setPhoneNumberBasedOnLocation() {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
  
      const isIndia = data.country_name === "India";
      const phoneNumber = isIndia ? "+91 9888912909" : "+971505682557";
      const address = isIndia
        ? "2nd Floor, No.112, AKR Tech Park, 7th Mile Hosur Rd, Bengaluru, Karnataka-560068"
        : "Sultan Business Centre, Oud Mehta, Dubai, UAE. PO BOX - 554617";
  
      const telHref = `tel:${phoneNumber.replace(/\s+/g, "")}`;
  
      // Update all main phone links (still assuming only one)
      const phoneLink = document.getElementById("phone-link");
      if (phoneLink) {
        phoneLink.textContent = phoneNumber;
        phoneLink.href = telHref;
      }
  
      // Update address
      const addressEl = document.getElementById("address");
      if (addressEl) {
        addressEl.textContent = address;
      }
  
      // Update all <a class="phone-button">
      document.querySelectorAll(".phone-button").forEach((el) => {
        el.href = telHref;
      });
  
      // Update all <span class="phone-text">
      document.querySelectorAll(".phone-text").forEach((el) => {
        el.textContent = phoneNumber;
      });
  
      console.log("Detected Country:", data.country_name);
      console.log("Phone Number Selected:", phoneNumber);
  
    } catch (error) {
      console.error("Geolocation fetch error:", error);
  
      const defaultPhone = "+971505682557";
      const defaultAddress = "Sultan Business Centre, Oud Mehta, Dubai, UAE. PO BOX - 554617";
      const telDefault = `tel:${defaultPhone.replace(/\s+/g, "")}`;
  
      const phoneLink = document.getElementById("phone-link");
      if (phoneLink) {
        phoneLink.textContent = defaultPhone;
        phoneLink.href = telDefault;
      }
  
      const addressEl = document.getElementById("address");
      if (addressEl) {
        addressEl.textContent = defaultAddress;
      }
  
      // Update all <a class="phone-button">
      document.querySelectorAll(".phone-button").forEach((el) => {
        el.href = telDefault;
      });
  
      // Update all <span class="phone-text">
      document.querySelectorAll(".phone-text").forEach((el) => {
        el.textContent = defaultPhone;
      });
    }
  }
  
  window.addEventListener("DOMContentLoaded", setPhoneNumberBasedOnLocation);


  // =========common-sctipt-start========
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  fbq("init", "484744294627522");
  fbq("track", "PageView");
  
    // =========common-sctipt-start=END=======



  


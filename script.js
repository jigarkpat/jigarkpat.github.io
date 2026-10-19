/* Jigar Patel — site behavior
   1. Scroll reveals
   2. Scoreboard count-up
   3. Hero card tilt
   4. Skill card flip
   Honors prefers-reduced-motion: no tilt, no count-up, no reveal motion. */

(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Scroll reveals ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObs.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );
    reveals.forEach(function (el) {
      revealObs.observe(el);
    });
  }

  /* ---------- 2. Scoreboard count-up ---------- */
  var nums = document.querySelectorAll("[data-count]");

  function showFinal(el) {
    el.textContent = el.getAttribute("data-final");
  }

  function runCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var finalText = el.getAttribute("data-final");
    var duration = 1200;
    var start = performance.now();

    function frame(now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      var value = target * eased;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = finalText;
    }

    requestAnimationFrame(frame);
  }

  if (reduce || !("IntersectionObserver" in window)) {
    nums.forEach(showFinal);
  } else {
    var numObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCount(entry.target);
          numObs.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach(function (el) {
      numObs.observe(el);
    });
  }

  /* ---------- 3. Hero card tilt ----------
     Mouse only. Touch stays still. Reduced motion stays still. */
  var tilt = document.querySelector("[data-tilt]");
  var coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  if (tilt && !reduce && !coarsePointer && window.innerWidth >= 900) {
    tilt.addEventListener("mousemove", function (event) {
      tilt.classList.add("is-hot");
      var rect = tilt.getBoundingClientRect();
      var px = (event.clientX - rect.left) / rect.width;
      var py = (event.clientY - rect.top) / rect.height;
      var rotateX = (py - 0.5) * -10;
      var rotateY = (px - 0.5) * 12;
      tilt.style.transform =
        "rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" + rotateY.toFixed(2) + "deg)";
      tilt.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      tilt.style.setProperty("--my", (py * 100).toFixed(1) + "%");
    });

    tilt.addEventListener("mouseleave", function () {
      tilt.classList.remove("is-hot");
      tilt.style.transform = "rotateX(0deg) rotateY(0deg)";
      tilt.style.setProperty("--mx", "30%");
      tilt.style.setProperty("--my", "20%");
    });
  }

  /* ---------- 4. Skill card flip ----------
     Buttons, so Enter and Space activate them. */
  document.querySelectorAll(".flip-card").forEach(function (button) {
    button.addEventListener("click", function () {
      var flipped = button.classList.toggle("is-flipped");
      button.setAttribute("aria-pressed", flipped ? "true" : "false");
    });
  });
})();

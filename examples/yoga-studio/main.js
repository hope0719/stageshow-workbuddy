// 栖屿瑜伽 · 交互层
// 动效原则（Stageshow）：每个动作都有原因——揭示是引导视线，呼吸是呼应瑜伽本身。

(function () {
  "use strict";

  // 1) 导航：滚动后浮现毛玻璃底色
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 2) 滚动揭示：分批进入，制造节奏而非一次性闪现
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // 同组元素错落延迟，避免“扁平”的整齐划一
            const delay = (entry.target.dataset.delay || (i % 4) * 80);
            setTimeout(() => entry.target.classList.add("in"), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // 3) 移动端菜单
  const burger = document.getElementById("burger");
  const links = document.querySelector(".nav__links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  // 4) 预约表单：前端校验 + 温和反馈（这是 UI 演示，不真正提交）
  const form = document.getElementById("bookingForm");
  const hint = document.getElementById("bookingHint");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const course = form.course.value;
      if (!name) {
        hint.textContent = "先告诉我怎么称呼你吧 ☺";
        form.name.focus();
        return;
      }
      if (!/^1[3-9]\d{9}$/.test(phone)) {
        hint.textContent = "手机号格式好像不太对，再确认一下？";
        form.phone.focus();
        return;
      }
      hint.textContent = `${name}，已收到你对「${course}」的预约，顾问会在今天与你确认时间 🙏`;
      form.reset();
    });
  }

  // 5) 呼吸圆：随滚动轻微减速，离开视口即暂停，省电也省心
  const breath = document.getElementById("breath");
  if (breath && "IntersectionObserver" in window) {
    const vio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        breath.style.animationPlayState = en.isIntersecting ? "running" : "paused";
      });
    });
    vio.observe(breath);
  }
})();

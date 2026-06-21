// =============================
// عناصر الصفحات
// =============================

const splashScreen = document.getElementById("splashScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const planScreen = document.getElementById("planScreen");
const routeScreen = document.getElementById("routeScreen");

const planNumber = document.getElementById("planNumber");
const routeName = document.getElementById("routeName");

const searchBtn = document.getElementById("searchBtn");
const backBtn = document.getElementById("backBtn");
const startRouteBtn = document.getElementById("startRouteBtn");
const historyBtn = document.getElementById("historyBtn");

// =============================
// شاشة البداية
// =============================

window.onload = function () {

    setTimeout(() => {

        splashScreen.classList.add("hidden");

        welcomeScreen.classList.remove("hidden");

        setTimeout(() => {

            welcomeScreen.classList.add("hidden");

            planScreen.classList.remove("hidden");

        }, 2500);

    }, 2500);

};

// =============================
// البحث عن الخطة
// =============================

searchBtn.onclick = function () {

    const plan = planNumber.value.trim();

    if (plan === "") {

        alert("الرجاء إدخال رقم الخطة");

        return;

    }

    if (!plans[plan]) {

        alert("رقم الخطة غير موجود");

        return;

    }

    routeName.textContent = plans[plan].route;

    planScreen.classList.add("hidden");

    routeScreen.classList.remove("hidden");

};

// =============================
// الرجوع
// =============================

backBtn.onclick = function () {

    routeScreen.classList.add("hidden");

    planScreen.classList.remove("hidden");

};

// =============================
// بدء المسار
// =============================

startRouteBtn.onclick = function () {

    localStorage.setItem("planNumber", planNumber.value);

    localStorage.setItem("routeName", routeName.textContent);

    window.location.href = "mission.html";

};

// =============================
// سجل المسار
// =============================

historyBtn.onclick = function () {

    localStorage.setItem("planNumber", planNumber.value);

    window.location.href = "history.html";

};

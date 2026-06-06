function checkKey() {
    const input = document.getElementById("keyInput");
    const error = document.getElementById("error");

    error.textContent = "> verifying...";

    setTimeout(() => {
       if (input.value === "Timothy098") {

    error.style.color = "lime";
    error.textContent = "> access granted ✅";

    setTimeout(() => {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("loadingScreen").style.display = "flex";

        // FAKE LOADING TEXT
        const text = document.getElementById("loadingText");

        setTimeout(() => text.textContent = "> loading modules...", 500);
        setTimeout(() => text.textContent = "> starting interface...", 1000);

        setTimeout(() => {
            document.getElementById("loadingScreen").style.display = "none";
            document.getElementById("siteContent").style.display = "block";
        }, 1800);

    }, 500);
        } else {
            error.style.color = "red";
            error.textContent = "> access denied ❌";
        }
    }, 500);
}

document.getElementById("keyInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") checkKey();
});

function randomMsg() {
    const arr = ["🔥 Круто!", "😄 Молодець!", "🚀 Супер!", "💻 Продовжуй!"];
    document.getElementById("msg").textContent =
        arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    if (name.length < 2) {
        msg.style.color = "red";
        msg.textContent = "❌ Введіть ім’я правильно";
        return;
    }

    if (!email.includes("@")) {
        msg.style.color = "red";
        msg.textContent = "❌ Неправильний email";
        return;
    }

    if (message.length < 5) {
        msg.style.color = "red";
        msg.textContent = "❌ Повідомлення занадто коротке";
        return;
    }

    msg.style.color = "lime";
    msg.textContent = "✅ Повідомлення надіслано!";
    document.getElementById("contactForm").reset();
});
// TYPE EFFECT
const terminal = document.getElementById("terminal");

const bootText = [
    "> starting system...",
    "> loading modules...",
    "> ready",
    "",
    "> enter access key"
];

let line = 0;
let char = 0;

function typeEffect() {
    if (line < bootText.length) {
        if (char < bootText[line].length) {
            terminal.textContent += bootText[line][char];
            char++;
            setTimeout(typeEffect, 30);
        } else {
            terminal.textContent += "\n";
            line++;
            char = 0;
            setTimeout(typeEffect, 200);
        }
    }
}

typeEffect();
setInterval(() => {
    const states = ["Ready", "Working...", "Stable", "Processing"];
    document.getElementById("status").textContent =
        "System: " + states[Math.floor(Math.random()*states.length)];
}, 2000);
let startTime;

setTimeout(() => {
   const btn = document.getElementById("reactionBtn");
const result = document.getElementById("reactionResult");

let startTime;
let waiting = false;
let ready = false;

// START GAME
btn.onclick = () => {

    if (!waiting && !ready) {
        btn.textContent = "Wait...";
        btn.style.background = "gray";
        result.textContent = "";

        waiting = true;

        const delay = Math.random() * 3000 + 2000;

        setTimeout(() => {
            btn.textContent = "CLICK!";
            btn.style.background = "lime";

            startTime = Date.now();
            ready = true;
            waiting = false;

        }, delay);
    }

    else if (ready) {
        const time = Date.now() - startTime;

        let rating = "";
        if (time < 250) rating = "⚡ Pro";
        else if (time < 400) rating = "👍 Good";
        else rating = "🐢 Slow";

        result.textContent = `Reaction: ${time} ms (${rating})`;

        // RESET
        btn.textContent = "Try Again";
        btn.style.background = "";
        ready = false;
    }

    else if (waiting) {
        result.textContent = "❌ Too early!";
        btn.textContent = "Start";
        btn.style.background = "";
        waiting = false;
    }
};
}, Math.random()*3000 + 2000);
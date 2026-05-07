async function loadVisits() {
    try {
        const res = await fetch("/api/visits");
        const data = await res.json();

        document.getElementById("visits").innerText =
            data.visits;

    } catch (error) {
        console.error("Error loading visits:", error);
    }
}

async function addVisit() {
    try {
        const res = await fetch("/api/visits", {
            method: "POST"
        });

        const data = await res.json();

        const visitEl =
            document.getElementById("visits");

        visitEl.innerText = data.visits;

        // small animation effect
        visitEl.classList.add("pulse");

        setTimeout(() => {
            visitEl.classList.remove("pulse");
        }, 300);

    } catch (error) {
        console.error("Error adding visit:", error);
    }
}

async function getStatus() {
    try {
        const res = await fetch("/api/status");
        const data = await res.json();

        document.getElementById("status").innerText =
            `${data.status} | ${data.app}`;

        document.getElementById("time").innerText =
            new Date(data.time).toLocaleString();

    } catch (error) {
        document.getElementById("status").innerText =
            "Error fetching status";
    }
}

// Load data when page opens
loadVisits();
getStatus();
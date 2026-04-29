let visits = 0;

function addVisit() {
    visits++;
    document.getElementById("visits").innerText = visits;
}

async function getStatus() {
    try {
        const res = await fetch("/api/status");
        const data = await res.json();

        document.getElementById("status").innerText =
            `${data.status} | ${new Date(data.time).toLocaleString()}`;

        document.getElementById("time").innerText =
            new Date(data.time).toLocaleString();

    } catch (error) {
        document.getElementById("status").innerText = "Error fetching status";
    }
}

// load on start
getStatus();
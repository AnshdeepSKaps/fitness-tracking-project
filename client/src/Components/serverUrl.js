export let url = {
    url: "http://localhost:5000/",
    auth: async () => {
        const resp = await fetch(url.url + "login/session")
        const data = await resp.json()

        if (data.info == "no") {
            window.open('http://localhost:3000/login', "_self")
        }

    }
}
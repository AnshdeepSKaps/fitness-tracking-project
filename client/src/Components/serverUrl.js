export let url = {
    url: "https://fitness-tracking-project-32ag7ad0i-anshdeepskaps.vercel.app/",
    client: "https://dapper-capybara-688970.netlify.app/",
    // url: "http://localhost:5000/",
    // client: "http://localhost:3000/",
    auth: async () => {
        const res = await fetch(url.url + "page", {
            mode: 'cors',
            credentials: 'include',
        })

        const data = await res.json()

        if (data.status === "invalid") {
            window.location = url.client + "login"
        }
    }
}

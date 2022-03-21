const url = "https://aleyire.github.io/animales-salvajes/animales.json"
const getData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default getData

function getProducts () {
    return window.fetch('')
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {console.log(err)})
}

export default getProducts


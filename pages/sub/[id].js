export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    const paths = data.map(met => {
        return {
            params: { id: met.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async context => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()
    return {
        props: { met: data }
    }
}
const Detail = ({ met }) => {
    return (
        <div>
            <h1>User details</h1>
            <br />
            <h2>{met.name}</h2>
            <p><b>Username:</b> {met.username}</p>
            <p><b>Email:</b> {met.email}</p>
            <p><b>Phone:</b> {met.phone}</p>
            <hr /><br />
            <h3>Addresss</h3>
            <p><b>Street:</b> {met.address.street}</p>
            <p><b>Suite:</b> {met.address.suite}</p>
            <p><b>City:</b> {met.address.city}</p>
            <p><b>Zipcode:</b> {met.address.zipcode}</p>
            <p><b>Lat:</b> {met.address.geo.lat} <b>Lng:</b> {met.address.geo.lng}</p>
        </div>
    )
}

export default Detail
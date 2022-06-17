export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { demo: data }
    }
}

const DemoList = ({demo}) => {
    return (
        <div>
            <h1>All Demo</h1>
            {demo.map(demo => (
                <div key={demo.id}>
                    <a className='single'>
                        <h3>{demo.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default DemoList;
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { demo: data }
    }
}

const DemoList = ({ demo }) => {
    return (
        <div>
            <h1>All Demo</h1>
            {demo.map(demo => (
                <Link href={'/sub/' + demo.id} key={demo.id}>
                    <a className='single'>
                        <h4>{demo.name}</h4>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default DemoList;
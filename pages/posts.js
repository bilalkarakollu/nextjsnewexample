import Link from 'next/link'
export default function Posts({posts}){
    console.log(posts)
    const postWrite = () => {
        return posts.map((post) => (
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <Link href={`/post/${post.id}`}>
                    <button>Detail</button>
                </Link>

            </div>
        ))
    }
    return (
        <>
            post Page
            {postWrite()}
        </>
    )
}
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    const posts = await res.json()
    return {
        props:{
            posts:posts
        }
    }
}

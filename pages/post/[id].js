export default function Post({post}){
    return(
        <>
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </>
    )
}

export const getServerSideProps = async (context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()
    return {
        props:{
            post,
        }
    }
}

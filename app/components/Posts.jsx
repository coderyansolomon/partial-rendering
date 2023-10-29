import Post from "./Post"

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function Posts({delay}){
    await sleep(delay)

    const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2').then(res => res.json())

    return (
        <div>
            {posts.map((post) => <Post key={post.id} postData={post} />)}
        </div>
    )

}
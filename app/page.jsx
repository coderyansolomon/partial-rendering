import { Suspense } from 'react'
import Posts from './components/Posts'
import PostsSkeleton from './components/PostsSkeleton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Posts Page</h1>
      <Suspense fallback={<PostsSkeleton />}>
        <Posts delay={5000} />
      </Suspense>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores tempora reiciendis, dicta alias fugiat iusto debitis fuga voluptatibus similique, modi corrupti incidunt ipsam fugit eum dolorem! Cupiditate, ex tenetur.</p>
      <Suspense fallback={<PostsSkeleton />}>
        <Posts delay={10000} />
      </Suspense>
    </main>
  )
}

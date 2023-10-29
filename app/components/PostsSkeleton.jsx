function PostSkeleton(){
    return (
        <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
            {/* Skeleton for the title */}
            <div className="uppercase tracking-wide text-sm bg-gray-300 animate-pulse h-4 rounded"></div>
            
            {/* A little space between the title and body */}
            <div className="mt-2"></div>
            
            {/* Skeleton for the body */}
            <div className="bg-gray-300 animate-pulse h-4 rounded mb-2"></div>
            <div className="bg-gray-300 animate-pulse h-4 rounded mb-2"></div>
            <div className="bg-gray-300 animate-pulse h-4 rounded mb-2"></div>
        </div>
      </div>
    )
}

export default function PostsSkeleton(){
    return (
        <div className="w-full">
        {[...Array(2)].map((_, idx) => (
          <PostSkeleton key={idx} />
        ))}
      </div>
    )
}
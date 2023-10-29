export default function Post({postData}){
    return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{postData.title}</div>
          <p className="mt-2 text-gray-500">{postData.body}</p>
        </div>
      </div>
    )
}
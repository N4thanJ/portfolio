import prisma from "@/lib/db"
import Link from "next/link"

export default async function WorkPosts() {
    const posts = await prisma.post.findMany()
    return (
        <>
        {posts.map((post) => (
            <div key={post.id} className="bg-white flex flex-col w-[300px] p-6 rounded-2xl shadow-xl">
                <img className="w-16 mb-4" src={post.image_path} alt="" />
                <h2 className="font-extrabold text-xl">{post.title}</h2>
                <small className="text-grey font-semibold">{post.content}</small>
                <div className="flex gap-4 mt-8">
                    <Link className="bg-blue text-white px-3 py-2 rounded-full border-2 font-bold border-blue hover:bg-white hover:border-blue hover:text-black transition-all" href={post.website_url} target="_blank">Website</Link>
                    <Link className="bg-grey text-white px-3 py-2 rounded-full border-2 font-bold border-grey hover:bg-white hover:border-grey hover:text-black transition-all" href={post.contact_url} target="_blank">Contact</Link>
                </div>
            </div>
        ))}
        </>
    )
}
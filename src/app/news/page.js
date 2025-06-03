import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

const baseURL = process.env.NEXT_PUBLIC_PROD_API ?? "http://localhost:8000";

async function getPosts() {
  try {
    console.log("📡 Отправляем запрос на:", `${baseURL}/news`);
    const res = await fetch(`${baseURL}/news`);
    console.log("✅ Ответ получен (raw):", res);

    if (!res.ok) {
      console.error("❌ Сервер вернул ошибку:", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    console.log("📦 Полученные посты:", data);
    return data;
  } catch (error) {
    console.error("💥 Ошибка при fetch:", error);
    return [];
  }
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="w-screen p-10">
      <h1 className="text-3xl text-center uppercase font-bold mb-5 text-neutral-900 py-10">
        News
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-md shadow-md bg-white shadow-xl w-full "
          >
            <Link href={`/news/${post.slug}`}>
              <div className="flex justify-between items-center px-5 py-10">
                <Image
                  className="xl:w-2/5 w-24 flex-shrink-0"
                  src="/images/navbar-logo.png"
                  alt="Service"
                  loading="lazy"
                  width={700}
                  height={500}
                />

                <div className="pl-5">
                  <h2 className="text-xl font-semibold text-neutral-900 uppercase pb-4">
                    {post.title}
                  </h2>

                  <p className="text-gray-700">
                    {post.preview_block?.type === "text" &&
                      post.preview_block.content?.slice(0, 300)}

                    {post.preview_block?.type === "text-image" &&
                      post.preview_block.content?.text?.slice(0, 150)}

                    {!post.preview_block && (
                      <span className="italic text-gray-400">Нет превью</span>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

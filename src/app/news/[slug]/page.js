import { AreasService } from "@/components/ui/areas-block";
import { FormContact } from "@/components/ui/contact-form";
import { MainServices } from "@/components/ui/main-services";
import { ReviewBlock } from "@/components/ui/rewies";

export const dynamic = "force-dynamic";

const baseURL = process.env.NEXT_PUBLIC_PROD_API ?? "http://localhost:8000";

// 👇 Функция получения поста по slug
async function getPost(slug) {
  try {
    const res = await fetch(`${baseURL}/news/slug/${slug}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Ошибка загрузки поста:", err.message);
    return null;
  }
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        Пост не найден (404)
      </div>
    );
  }

  // ✅ Компоненты, которые будем вставлять каждые 2 блока
  const insertComponents = [
    <MainServices key="main" />,
    <FormContact key="form" />,
    <ReviewBlock key="review" />,
    <AreasService key="areas" />,
  ];

  const contentWithComponents = [];

  post.content.forEach((block, index) => {
    let renderedBlock = null;

    if (block.type === "text") {
      renderedBlock = (
        <div key={`block-${index}`} className="mb-6 p-10">
          <h2 className="text-2xl font-bold mb-2">{block.content.heading}</h2>
          <p className="text-lg">{block.content.text}</p>
        </div>
      );
    } else if (block.type === "image") {
      renderedBlock = (
        <img
          key={`block-${index}`}
          src={block.content}
          alt={`img-${index}`}
          className="rounded w-full"
        />
      );
    } else if (block.type === "text-image") {
      renderedBlock = (
        <div
          key={`block-${index}`}
          className="flex flex-col md:flex-row gap-4 px-4 py-6"
        >
          <div className="w-full md:w-1/2">{block.content.text}</div>
          <div className="w-full md:w-1/2">
            <img
              src={block.content.image}
              alt={`img-${index}`}
              className="rounded w-full"
            />
          </div>
        </div>
      );
    } else if (block.type === "split") {
      renderedBlock = (
        <div key={`block-${index}`} className="flex gap-4 px-4 py-6">
          <div className="w-1/2">{block.content[0]}</div>
          <div className="w-1/2">{block.content[1]}</div>
        </div>
      );
    }

    contentWithComponents.push(renderedBlock);

    if ((index + 1) % 2 === 0 && insertComponents.length > 0) {
      const nextComponent = insertComponents.shift();
      if (nextComponent) contentWithComponents.push(nextComponent);
    }
  });

  return (
    <div className="w-screen mx-auto py-10">
      <h1 className="text-4xl text-neutral-900 font-bold text-center mb-10">
        {post.title}
      </h1>
      {contentWithComponents}
    </div>
  );
}

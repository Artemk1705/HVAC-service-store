"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_PROD_API ?? "http://localhost:8000";
const blockTypes = ["text", "image", "text-image", "split"];

export function AdminPosts() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [blocks, setBlocks] = useState([]);
  const [previewBlock, setPreviewBlock] = useState({
    type: "text",
    content: "",
  });
  const [allPosts, setAllPosts] = useState([]);
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get(`${baseURL}/news`);
        setAllPosts(res.data);
      } catch (err) {
        console.error("❌ Ошибка загрузки постов:", err.message);
      }
    }

    fetchPosts();
  }, []);

  const handleRemoveBlock = (index) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index, 1);
    setBlocks(newBlocks);
  };

  const handleAddBlock = (type) => {
    const newBlock = {
      type,
      content:
        type === "split"
          ? ["", ""]
          : type === "text-image"
          ? { text: "", image: null }
          : type === "text"
          ? { heading: "", text: "" }
          : "",
    };
    setBlocks([...blocks, newBlock]);
  };

  const handleChange = (index, value, subIndex = null) => {
    const newBlocks = [...blocks];
    if (subIndex !== null) {
      newBlocks[index].content[subIndex] = value;
    } else {
      newBlocks[index].content = value;
    }
    setBlocks(newBlocks);
  };

  const handleSubmit = async () => {
    try {
      if (editingPostId) {
        await axios.put(`${baseURL}/news/${slug}`, {
          title,
          content: blocks,
          preview_block: previewBlock,
        });
        alert("Пост обновлён!");
      } else {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("slug", slug);
        formData.append("content", JSON.stringify(blocks));
        formData.append("preview_block", JSON.stringify(previewBlock));

        blocks.forEach((block, i) => {
          if (block.type === "text-image" && block.content.image) {
            formData.append(`image-${i}`, block.content.image);
          }
        });

        if (previewBlock.type === "text-image" && previewBlock.content.image) {
          formData.append("preview_image", previewBlock.content.image);
        }

        await axios.post(`${baseURL}/news`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Пост создан!");
      }

      setTitle("");
      setSlug("");
      setBlocks([]);
      setPreviewBlock({ type: "text", content: "" });
      setEditingPostId(null);

      const res = await axios.get(`${baseURL}/news`);
      setAllPosts(res.data);
    } catch (err) {
      console.error("❌ Ошибка при сохранении поста:", err.message);
      alert("Ошибка при сохранении поста");
    }
  };

  return (
    <div className="bg-neutral-900 text-white flex flex-col items-center py-20 px-6">
      <h1 className="text-2xl font-bold mb-4">Admin Posts Panel</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="placeholder-gray-600 xl:w-100 h-10 bg-white my-2 px-4 rounded-lg text-gray-900"
      />

      <input
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Slug (for URL)"
        className="placeholder-gray-600 xl:w-100 h-10 bg-white my-2 px-4 rounded-lg text-gray-900"
      />

      <h2 className="text-lg font-bold mt-4 mb-2">Preview Block</h2>
      <select
        value={previewBlock.type}
        onChange={(e) =>
          setPreviewBlock({ ...previewBlock, type: e.target.value })
        }
        className="placeholder-gray-500 xl:w-100 h-10 bg-white my-2 px-4 rounded-lg text-gray-600"
      >
        <option value="text">Text</option>
        <option value="text-image">Text + Image</option>
      </select>

      {previewBlock.type === "text" && (
        <textarea
          className="placeholder-gray-500 xl:w-1/2 h-20 bg-white my-2 py-2 px-4 rounded-lg text-gray-600"
          placeholder="Preview text"
          value={previewBlock.content}
          onChange={(e) =>
            setPreviewBlock({ ...previewBlock, content: e.target.value })
          }
        />
      )}

      {previewBlock.type === "text-image" && (
        <div className="flex flex-col gap-2 mb-4">
          <textarea
            className="w-full p-2 rounded text-black"
            placeholder="Preview text"
            value={previewBlock.content.text || ""}
            onChange={(e) =>
              setPreviewBlock({
                ...previewBlock,
                content: {
                  ...(previewBlock.content || {}),
                  text: e.target.value,
                },
              })
            }
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setPreviewBlock({
                ...previewBlock,
                content: {
                  ...(previewBlock.content || {}),
                  image: e.target.files[0],
                },
              })
            }
          />
          {previewBlock.content?.image && (
            <img
              src={URL.createObjectURL(previewBlock.content.image)}
              alt="Preview"
              className="w-40 h-auto rounded"
            />
          )}
        </div>
      )}

      <div className="py-6 flex gap-4 mb-6">
        {blockTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleAddBlock(type)}
            className="glass-button"
          >
            Add {type}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl flex flex-col gap-6">
        {blocks.map((block, index) => (
          <div key={index} className="bg-white/10 p-4 rounded">
            {block.type === "text" && (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="placeholder-gray-500 h-10 bg-white my-2 py-2 px-4 rounded-lg text-gray-600"
                  placeholder="Block Heading"
                  value={block.content.heading}
                  onChange={(e) =>
                    handleChange(index, {
                      ...block.content,
                      heading: e.target.value,
                    })
                  }
                />
                <textarea
                  className="placeholder-gray-500 bg-white my-2 py-2 px-4 rounded-lg text-gray-600"
                  placeholder="Text content"
                  value={block.content.text}
                  onChange={(e) =>
                    handleChange(index, {
                      ...block.content,
                      text: e.target.value,
                    })
                  }
                />
                <button
                  onClick={() => handleRemoveBlock(index)}
                  className="mt-4 px-3 h-10 w-1/4 py-1 text-neutral-900 text-sm bg-white rounded hover:bg-black hover:text-white"
                >
                  Remove
                </button>
              </div>
            )}

            {block.type === "image" && (
              <input
                type="text"
                className="w-full p-2 rounded text-black"
                placeholder="Image URL"
                value={block.content}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            )}

            {block.type === "text-image" && (
              <div className="flex flex-col gap-2">
                <textarea
                  className="w-full p-2 rounded text-black"
                  placeholder="Text for image block"
                  value={block.content.text}
                  onChange={(e) =>
                    handleChange(index, {
                      ...block.content,
                      text: e.target.value,
                    })
                  }
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleChange(index, {
                      ...block.content,
                      image: e.target.files[0],
                    })
                  }
                />
                {block.content.image && (
                  <img
                    src={URL.createObjectURL(block.content.image)}
                    alt="Preview"
                    className="w-40 h-auto rounded"
                  />
                )}
              </div>
            )}

            {block.type === "split" && (
              <div className="grid grid-cols-2 gap-4">
                <textarea
                  className="p-2 rounded text-black"
                  placeholder="Left column"
                  value={block.content[0]}
                  onChange={(e) => handleChange(index, e.target.value, 0)}
                />
                <textarea
                  className="p-2 rounded text-black"
                  placeholder="Right column"
                  value={block.content[1]}
                  onChange={(e) => handleChange(index, e.target.value, 1)}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} className="blur-white-button mt-8">
        {editingPostId ? "Update Post" : "Create Post"}
      </button>

      <h2 className="text-xl font-bold mt-14 mb-4">Все посты:</h2>
      <div className="w-full max-w-2xl bg-white/10 p-4 rounded text-white">
        {allPosts.map((post) => (
          <div key={post.id} className="flex justify-between items-center mb-2">
            <div>
              <strong>{post.title}</strong>{" "}
              <span className="text-sm">({post.slug})</span>
            </div>
            <button
              className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 text-sm"
              onClick={() => {
                setTitle(post.title);
                setSlug(post.slug);
                setBlocks(post.content);
                setPreviewBlock(post.preview_block);
                setEditingPostId(post.id);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

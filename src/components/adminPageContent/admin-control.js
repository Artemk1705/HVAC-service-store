import { useState } from "react";
import axios from "axios";

const blockTypes = ["text", "image", "split"];

export function AdminPosts() {
  const [title, setTitle] = useState("");
  const [blocks, setBlocks] = useState([]);

  const handleAddBlock = (type) => {
    const newBlock = {
      type,
      content: type === "split" ? ["", ""] : "",
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
    await axios.post("http://localhost:5000/posts", {
      title,
      blocks,
    });

    alert("Пост создан!");
    setTitle("");
    setBlocks([]);
  };

  return (
    <div>
      <h1>Admin Posts Panel</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <div>
        {blockTypes.map((type) => (
          <button key={type} onClick={() => handleAddBlock(type)}>
            Add {type}
          </button>
        ))}
      </div>

      {blocks.map((block, index) => (
        <div key={index}>
          {block.type === "text" && (
            <textarea
              placeholder="Text Block"
              value={block.content}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          )}
          {block.type === "image" && (
            <input
              placeholder="Image URL"
              value={block.content}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          )}
          {block.type === "split" && (
            <div style={{ display: "flex", gap: "10px" }}>
              <textarea
                placeholder="Left Column"
                value={block.content[0]}
                onChange={(e) => handleChange(index, e.target.value, 0)}
              />
              <textarea
                placeholder="Right Column"
                value={block.content[1]}
                onChange={(e) => handleChange(index, e.target.value, 1)}
              />
            </div>
          )}
        </div>
      ))}

      <button onClick={handleSubmit}>Create Post</button>
    </div>
  );
}

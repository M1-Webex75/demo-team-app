import { useState } from "react";

export default function Entry2() {
  const [memos, setMemos] = useState([]);
  const [input, setInput] = useState("");

  const addMemo = () => {
    const newMemos = memos.slice();
    newMemos.push(input);
    setMemos(newMemos);
    setInput("");
  };

  return (
    <>
      <div className="App">
        <h1>ごく簡単なメモアプリ</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="メモを入力してください"
        />
        <button onClick={addMemo}>追加</button>
        <ul>
          {memos.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

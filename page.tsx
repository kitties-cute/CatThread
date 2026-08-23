export default function Home() {
  const categories = [
    {
      title: 'Main Category',
      boards: [
        { name: 'General Discussion', desc: 'Talk about anything under the sun.', threads: 142, posts: 1205 },
        { name: 'The Lounge / Off-Topic', desc: 'Jokes, memes, and casual chat.', threads: 89, posts: 3410 },
      ],
    },
    {
      title: 'Hobbies & Gaming',
      boards: [
        { name: 'Video Games', desc: 'Discussing 2016 classics like Minecraft, Overwatch, and CS:GO.', threads: 230, posts: 4520 },
        { name: 'Creative Corner', desc: 'Show off signatures, avatars, and side projects.', threads: 45, posts: 312 },
      ],
    },
  ];

  return (
    <div>
      <div className="bg-[#f0f4f8] p-3 border border-[#bcd] mb-6 text-sm">
        📢 <b>Announcement:</b> Welcome to CatThread! Make sure to read the rules before posting. Enjoy your stay!
      </div>

      {categories.map((cat, idx) => (
        <div key={idx} className="mb-6 border border-[#999]">
          <div className="bg-[#3b5998] text-white px-3 py-2 font-bold text-sm">
            {cat.title}
          </div>
          <div>
            {cat.boards.map((board, bIdx) => (
              <div key={bIdx} className="flex justify-between items-center p-3 border-b border-[#ddd] hover:bg-[#f9f9f9]">
                <div>
                  <a href="#" className="font-bold text-[#1a0dab] hover:underline text-lg">{board.name}</a>
                  <p className="text-xs text-[#666] m-0">{board.desc}</p>
                </div>
                <div className="text-right text-xs text-[#555]">
                  <div><b>{board.threads}</b> threads</div>
                  <div><b>{board.posts}</b> posts</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

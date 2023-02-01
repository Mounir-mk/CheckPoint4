import PostCard from "./PostCard";

function PostSection() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
sit amet.`;

  return (
    <section id="posts" className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Récents Posts</h1>
        <h2>Voir Tous les Postes</h2>
      </div>
      <div className="w-full grid grid-cols-3 gap-8">
        <PostCard text={text} />
        <PostCard text={text} />
        <PostCard text={text} />
      </div>
    </section>
  );
}

export default PostSection;

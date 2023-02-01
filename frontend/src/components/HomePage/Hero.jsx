import avatar from "../../assets/avatar.png";

function Hero() {
  return (
    <section id="hero" className="flex justify-between">
      <article className="flex flex-col gap-6 justify-between py-4">
        <h1 className="text-3xl font-bold">Hello, I'm Mounir</h1>
        <p className="text-lg max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore.
        </p>
        <div id="socials" className="flex gap-4">
          <div className="h-6 w-6 bg-black rounded-full" />
          <div className="h-6 w-6 bg-black rounded-full" />
          <div className="h-6 w-6 bg-black rounded-full" />
        </div>
      </article>
      <img className="h-80 rounded-3xl" src={avatar} alt="avatar" />
    </section>
  );
}

export default Hero;

import { useState, useRef } from "react";
import avatar2 from "../../assets/avatar.png";

function DescriptionHandling() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [avatar, setAvatar] = useState();
  const avatarRef = useRef();
  const descriptionRef = useRef();

  const handleSubmitDescription = (e) => {
    e.preventDefault();
    const data = {};
    if (descriptionRef.current.value) {
      data.description = descriptionRef.current.value;
    }
    console.warn(data.description);
  };

  const handleSubmitAvatar = (e) => {
    e.preventDefault();
    const data = {};
    if (avatarRef.current.files[0]) {
      data.avatar = [avatarRef.current.files];
    }
    console.warn(data.avatar);
  };
  return (
    <section id="description" className="flex-grow">
      <div className="text-slate-200 mx-16">
        <h1 className="text-4xl my-10 pb-8 border-b-2 border-slate-200 font-bold">
          Editer la description
        </h1>
        <h2 className="text-2xl font-medium mb-8">Description actuelle :</h2>
        <p className="text-lg max-w-prose">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore."
        </p>
        <button
          type="button"
          className="bg-blue-500 text-slate-200 px-4 py-2 rounded-full my-8 hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Editer
        </button>
        <div className="flex items-center gap-16 mb-8">
          <h2 className="text-2xl font-medium mb-8 w-72">Avatar actuel :</h2>
          <img src={avatar2} alt="avatar" className="w-32 h-32 rounded-full" />
        </div>
        <div className="flex items-center gap-16">
          <div>
            <h2 className="text-2xl font-medium w-72 mb-4">Nouvel Avatar :</h2>
            <label
              htmlFor="file"
              className="bg-blue-500 text-slate-200 px-4 py-2 rounded-full hover:bg-blue-600 cursor-pointer"
            >
              Changer
            </label>
            <input
              type="file"
              name="file"
              id="file"
              ref={avatarRef}
              accept="image/*"
              className="hidden"
              onChange={() => {
                setAvatar(URL.createObjectURL(avatarRef.current.files[0]));
              }}
            />
            {avatar && (
              <button
                type="button"
                className="bg-green-500 text-slate-200 px-4 py-2 rounded-full hover:bg-green-600 block my-4"
                onClick={handleSubmitAvatar}
              >
                Valider
              </button>
            )}
          </div>
          <img
            src={avatar || null}
            alt={avatar ? "avatar" : null}
            className="w-32 h-32 rounded-full"
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex items-center justify-center">
          <div className="bg-slate-800 rounded-lg shadow flex flex-col items-center justify-center p-4 text-slate-200">
            <h1 className="text-3xl font-bold pb-10">
              Modifier la description
            </h1>
            <form className="flex flex-col items-center justify-center w-full p-6 gap-2">
              <label htmlFor="description" className="text-xl font-bold">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols="50"
                rows="15"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                className="bg-slate-900 text-slate-200 p-4 rounded max-w-prose"
                ref={descriptionRef}
              />
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-red-600 text-white font-bold p-2 mt-16 px-4 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold p-2 mt-16 px-4 rounded"
                  onClick={handleSubmitDescription}
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default DescriptionHandling;

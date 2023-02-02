import { useState } from "react";

function PostsHandling() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const array = new Array(100).fill(0);
  return (
    <section id="description" className="flex-grow h-screen">
      <div className="text-slate-200 mx-16">
        <h1 className="text-4xl my-10 pb-8 border-b-2 border-slate-200 font-bold">
          Gestion des Posts
        </h1>
        <h2 className="text-2xl font-medium mb-8">Posts actuels :</h2>
        <div className="overflow-auto h-96">
          <table className="w-full">
            <thead>
              <tr className="text-slate-200">
                <th className="text-center border-2 border-slate-200">Titre</th>
                <th className="text-center border-2 border-slate-200">
                  Description
                </th>
                <th className="text-center border-2 border-slate-200">
                  Date de création
                </th>
                <th className="text-center border-2 border-slate-200">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {array.map(() => (
                <tr className="text-slate-200">
                  <td className="border-2 border-slate-200 black px-4 py-2 text-center">
                    Titre du post
                  </td>
                  <td className="border-2 border-slate-200 black px-4 py-2 text-center">
                    Description du post
                  </td>
                  <td className="border-2 border-slate-200 black px-4 py-2 text-center">
                    01/01/2021
                  </td>
                  <td className="border-2 border-slate-200 black px-4 py-2 text-center">
                    <button
                      type="button"
                      className="bg-blue-500 text-slate-200 px-4 py-2 rounded-full hover:bg-blue-600"
                      onClick={() => setIsEditModalOpen(true)}
                    >
                      Editer
                    </button>
                    <button
                      type="button"
                      className="bg-red-500 text-slate-200 px-4 py-2 rounded-full hover:bg-red-600"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-500 text-slate-200 px-4 py-2 rounded-full my-8 hover:bg-blue-600 mx-auto"
            onClick={() => setIsAddModalOpen(true)}
          >
            Ajouter un post
          </button>
          {isAddModalOpen && (
            <div className="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex items-center justify-center">
              <div className="bg-slate-800 rounded-lg shadow flex flex-col items-center justify-center p-4 text-slate-200">
                <h1 className="text-3xl font-bold pb-10">
                  Ajouter un nouveau post
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
                  />
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="bg-red-600 text-white font-bold p-2 mt-16 px-4 rounded"
                      onClick={() => setIsAddModalOpen(false)}
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-bold p-2 mt-16 px-4 rounded"
                    >
                      Modifier
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          {isEditModalOpen && (
            <div className="absolute z-50 top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 flex items-center justify-center">
              <div className="bg-slate-800 rounded-lg shadow flex flex-col items-center justify-center p-4 text-slate-200">
                <h1 className="text-3xl font-bold pb-10">Editer le post</h1>
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
                  />
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="bg-red-600 text-white font-bold p-2 mt-16 px-4 rounded"
                      onClick={() => setIsEditModalOpen(false)}
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-bold p-2 mt-16 px-4 rounded"
                    >
                      Modifier
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default PostsHandling;

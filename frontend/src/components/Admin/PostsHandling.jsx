import React from "react";

function PostsHandling() {
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
          >
            Ajouter un post
          </button>
        </div>
      </div>
    </section>
  );
}

export default PostsHandling;

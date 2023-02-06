import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactPage() {
  const notify = () =>
    toast.success("Message envoyé avec succès", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const [errors, setErrors] = useState();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (firstNameRef.current.value.length < 2) {
      newErrors.firstname = "Le prénom doit contenir au moins 2 caractères";
    }

    if (lastNameRef.current.value.length < 2) {
      newErrors.lastname = "Le nom doit contenir au moins 2 caractères";
    }

    if (emailRef.current.value.length < 5) {
      newErrors.email = "L'email doit contenir au moins 5 caractères";
    }

    if (messageRef.current.value.length < 30) {
      newErrors.content = "Le message doit contenir au moins 30 caractères";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    const formData = {
      firstname: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      email: emailRef.current.value,
      content: messageRef.current.value,
    };

    try {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, formData);
      notify();

      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className="w-full h-[500px] flex flex-col justify-between my-8"
      onSubmit={submitHandler}
    >
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_firstname"
          id="floating_firstname"
          className="block py-2.5 px-0 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          ref={firstNameRef}
        />
        <label
          htmlFor="floating_firstname"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Prénom
        </label>
      </div>
      {errors?.firstname && (
        <p className="text-red-500 text-sm">{errors.firstname}</p>
      )}
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_lastname"
          id="floating_lastname"
          className="block py-2.5 px-0 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          ref={lastNameRef}
        />
        <label
          htmlFor="floating_lastname"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nom
        </label>
      </div>
      {errors?.lastname && (
        <p className="text-red-500 text-sm">{errors.lastname}</p>
      )}
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-1/2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          ref={emailRef}
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Adresse email
        </label>
      </div>
      {errors?.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm text-gray-900 dark:text-gray-400"
        >
          Votre message
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          defaultValue=""
          ref={messageRef}
        />
      </div>
      {errors?.content && (
        <p className="text-red-500 text-sm">{errors.content}</p>
      )}
      <div className="flex justify-center sm:justify-start mt-6">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default ContactPage;

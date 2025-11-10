import React, { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const ShowPassword = () => {
    alert("show password");
    if (ref.current.src.includes("icons/crosseye.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/crosseye.png";
    }
  };
  const savePassword = () => {
    // console.log(form)
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(...passwordArray, form);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div
        className=" bg-slate-50 mycontainer px-1 border-2 
      border-green-500 
      shadow-[0_0_20px_2px_rgba(168,85,247,0.8),inset_0_0_15px_2px_rgba(34,197,94,0.8)] h-[425px]"
      >
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-600"> &lt;</span>
          Passop
          <span className="text-green-600"> OP/&gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own password manager
        </p>
        <div className="text-black flex flex-col p-10 gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 p-4 py-1 w-full"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full gap-8 justify-between">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 p-4 py-1 w-full"
              type="text"
              name="username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 p-4 py-1 w-full"
                type="text"
                name="password"
              />
              <span className="absolute right-0 cursor-pointer">
                <img
                  width={35}
                  ref={ref}
                  className="p-1"
                  src="icons/eye.png"
                  alt="eye"
                  onClick={ShowPassword}
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center gap-2 items-center bg-green-500 hover:bg-green-600 rounded-full px-4 py-2 w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/ueoydrft.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
      <h1 className="mx-3 text-2xl mt-3 font-bold text-purple-600">Your Passwords :-</h1>
      <div className="passwords flex justify-center">
          
          <table className="table-auto w-auto bg-purple-200 rounded-md ">
            <thead className=" bg-purple-500 text-white">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Views</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Intro to CSS</td>
                <td className="border px-4 py-2">Adam</td>
                <td className="border px-4 py-2">858</td>
              </tr>

              <tr class="NameclassNamebg-gray-100">
                <td className="border px-4 py-2">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border px-4 py-2">Adam</td>
                <td className="border px-4 py-2">112</td>
              </tr>

              <tr>
                <td className="border px-4 py-2">Intro to JavaScript</td>
                <td className="border px-4 py-2">Chris</td>
                <td className="border px-4 py-2">1,280</td>
              </tr>
            </tbody>
          </table>
        
      </div>
    </>
  );
};

export default Manager;

import React, { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef()
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const ShowPassword = () => {
    passwordRef.current.type = 'text'
    if (ref.current.src.includes("icons/crosseye.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = 'text'
    } else {
      ref.current.src = "icons/crosseye.png";
      passwordRef.current.type = 'password'
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
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      <div
        className=" bg-slate-50 mycontainer px-1 border-2 
      border-green-500 
      shadow-[0_0_20px_2px_rgba(168,85,247,0.8),inset_0_0_15px_2px_rgba(34,197,94,0.8)] h-[425px]"
      >
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-600"> &lt;</span>
          Pass
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
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 p-4 py-1 w-full"
                type="password"
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
      <h1 className="mx-3 text-2xl mt-3 font-bold text-purple-600">
        Your Passwords :-
      </h1>
      <div className="passwords flex justify-center">
        {passwordArray.length === 0 && <div>No password to show</div>}
        {passwordArray.length != 0 && (
          <table className="table-auto w-full mx-44 bg-purple-200 rounded-md overflow-hidden">
            <thead className=" bg-purple-500 text-white">
              <tr>
                <th className="px-4 py-2">Site</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Password</th>
              </tr>
            </thead>

            <tbody>
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-center">
                      <a href={item.site} target="_blank">
                      {item.site}
                      </a>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {item.username}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {item.password}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Manager;

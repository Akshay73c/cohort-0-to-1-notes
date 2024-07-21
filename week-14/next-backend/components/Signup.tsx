"use client";

import { signup } from "@/app/actions/user";
import { useState } from "react";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border rounded ">
          <input
            className="p-2 m-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="username"
          ></input>{" "}
          <br />
          <input
            className="p-2 m-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="username"
          ></input>
          <br />
          <div className="mt-4 flex justify-center">
            <button
              onClick={async (e) => {
                await signup(email, password);
              }}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { supabase } from "@/services/supabaseClient";
import React, { useEffect } from "react";

function provider({ children }) {
  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      // Check if user exists
      let { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", user?.email);
      console.log(users);

      // If user exists, redirect to dashboard
      if (users?.length == 0) {
        const { data, error } = await supabase.from("users").insert([
          {
            name: user?.user_metadata?.name,
            email: user?.email,
            picture: user?.user_metadata?.picture,
          },
        ]);
        console.log(data);
      }
    });
  };
  return <div>{children}</div>;
}

export default provider;

"use client";
import { db } from "@/configus/db";
import { Users } from "@/configus/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      isNewUser();
    }
  }, [user]);

  const isNewUser = async () => {
    const email =
      user?.primaryEmailAddress?.emailAddress ||
      user?.emailAddresses?.emailAddress;

    // if (!email) {
    //   console.warn("User email not found");
    //   return;
    // }

    const result = await db.select().from(Users).where(eq(Users.email, email));

    if (!result[0]) {
      await db.insert(Users).values({
        name: user?.fullName || "",
        email: email,
        imageUrl: user?.profileImageUrl || "",
      });
    }
  };

  return <div>{children}</div>;
};

export default Provider;

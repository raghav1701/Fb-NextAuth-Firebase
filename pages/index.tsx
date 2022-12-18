import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Login from "../components/login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import React from "react";
import { getSession, GetSessionParams } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // Get User
//   const session = await getSession(context);

//   // const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

//   // const docs = posts.docs.map((post) => ({
//   //   id: post.id,
//   //   ...post.data(),
//   //   timestamp: null,
//   // }));

//   return {
//     props: { session },
//   };
// }

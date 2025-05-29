'use client'

// import { useEffect, useState } from "react";
// import { Amplify } from "aws-amplify";
// import {
//   signInWithRedirect,
//   signOut,
// } from "aws-amplify/auth";
// import {
//   configPoolA,
// } from "./configure"
// import { cookies } from "next/headers";
// import type { NextRequest } from 'next/server'

import { Amplify } from 'aws-amplify'
import { signInWithRedirect } from 'aws-amplify/auth'
// import { Hub } from "aws-amplify/utils";
import Link from 'next/link'

import { configPoolA } from './configure'

// const allCookies = request.cookies.getAll()
// console.log(allCookies);
import 'aws-amplify/auth/enable-oauth-listener'
//     const checkSession = async () => {
//       try {
//         const session = await fetchAuthSession();
//         console.log('ID Token:', session.tokens?.idToken);
//         console.log('Access Token:', session.tokens?.accessToken);
//       } catch (error) {
//         console.error('セッションの取得に失敗しましたわ:', error);
//       }
//     };

//     checkSession();
//   }, []);

// let session = await fetchAuthSession();
// console.log("session", session);
// if (
//   typeof session.tokens?.accessToken == "undefined" &&
//   typeof session.tokens?.idToken == "undefined"
// ) {
//   // Amplify.configure(configPoolA, {
//   //   ssr: true,
//   // });

//   // signInWithRedirect();
//   session = await fetchAuthSession();
//   console.log("%o", session);
// }

//   return <p>ログイン処理中ですわ…</p>;
// }
// Hub.listen("auth", async ({ payload }) => {
//   switch (payload.event) {
//     case "signInWithRedirect": {
//       const user = await getCurrentUser();
//       const userAttributes = await fetchUserAttributes();
//       console.log({ user, userAttributes });
//       break;
//     }
//     case "signInWithRedirect_failure":
//       signInWithRedirect();
//       break;
//     case "customOAuthState": {
//       const state = payload.data; // this will be customState provided on signInWithRedirect function
//       console.log(state);
//       break;
//     }
//   }
// });

// const session = await fetchAuthSession();
Amplify.configure(configPoolA, {
  ssr: true,
})

export default function Page() {
  signInWithRedirect()
  // console.log("id token", session.tokens?.idToken);
  // console.log("access token", session.tokens?.accessToken);
  // const jwtdata = localStorage.getItem("CognitoIdentityServiceProvider.68gum8efm44fbnotgqvq3651jq.oauthPKCE");
  //   const [user, setUser] = useState<string>("");
  //   const [session, setSession] = useState<string>("");
  //   const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  //   function signInA() {
  //     Amplify.configure(configPoolA);
  //     signInWithRedirect();
  //   }

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const user = await getCurrentUser();
  //       const session = await fetchAuthSession();
  //       setUser(JSON.stringify(user, null, 2));
  //       setSession(JSON.stringify(session, null, 2));
  //       setIsSignedIn(true);
  //     } catch {
  //       setIsSignedIn(false);
  //     }
  //   };
  //   init();
  // }, [setUser, setSession, setIsSignedIn]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="h-16">
        <h1 className="mt-10 text-3xl font-bold">提出サイトメニュー</h1>
      </div>
      <div className="m-10 flex flex-wrap justify-around">
        <div className="w-1/2 p-4">
          <Link href="/user-pool">
            <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
              <h2 className="title-font text-3xl font-medium text-white">
                ユーザー管理
              </h2>
              <p className="leading-relaxed text-white">
                ログイン方法など設定できる
              </p>
            </div>
          </Link>
        </div>
        <div className="w-1/2 p-4">
          <Link href="/file-upload">
            <div className="rounded-md px-4 py-6" />
          </Link>
        </div>
        <div className="w-1/2 p-4">
          <Link href="/file-upload">
            <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
              <h2 className="title-font text-3xl font-medium text-white">
                データアップロード
              </h2>
              <p className="leading-relaxed text-white">
                データファイルをアップロードしてください
              </p>
            </div>
          </Link>
        </div>
        <div className="w-1/2 p-4">
          <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
            <h2 className="title-font text-3xl font-medium text-white">
              🚧過去データダウンロード
            </h2>
            <p className="leading-relaxed text-white">
              過去のデータファイルをダウンロードできます
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
            <h2 className="title-font text-3xl font-medium text-white">
              🚧提出履歴確認
            </h2>
            <p className="leading-relaxed text-white">
              過去の提出履歴を確認できます
            </p>
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="rounded-lg rounded-md border-2 border-gray-200 bg-green-800 px-4 py-6 hover:bg-green-600">
            <h2 className="title-font text-3xl font-medium text-white">
              🚧取得ツールダウンロード
            </h2>
            <p className="leading-relaxed text-white">
              取得ツールダウンロード画面へ
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

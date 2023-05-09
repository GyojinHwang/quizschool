<<<<<<< HEAD
  import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useAuthState } from '../context/auth'
=======
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { Post, Sub } from '../types'
import axios from 'axios'
import { useAuthState } from '../context/auth'
import useSWRInfinite from 'swr/infinite';
import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
>>>>>>> 63a9535 (initial)

const webgl = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { authenticated } = useAuthState();

  return (
    <div className="h-100/100 flex flex-col justify-center pt-16">

      <iframe height="750pt" src="https://v6p9d9t4.ssl.hwcdn.net/html/6557049/index.html"></iframe>

    </div>


  )
}

export default webgl
<<<<<<< HEAD

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
      const cookie = req.headers.cookie;
      // 쿠키가 없다면 에러를 보내기
      if (!cookie) throw new Error("Missing auth token cookie");

      // 쿠키가 있다면 그 쿠키를 이용해서 백엔드에서 인증 처리하기 
      await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/auth/me`,
          { headers: { cookie } })
      return { props: {} }

  } catch (error) {
      // 백엔드에서 요청에서 던져준 쿠키를 이용해 인증 처리할 때 에러가 나면 /login 페이지로 이동
      res.writeHead(307, { Location: "/login" }).end()

      return { props: {} };
  }
}
=======
>>>>>>> 63a9535 (initial)

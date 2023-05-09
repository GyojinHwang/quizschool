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
import io from "socket.io-client";

const Students: NextPage = () => {


  const { authenticated } = useAuthState();

  const fetcher = async (url: string) => {
    return await axios.get(url).then(res => res.data)
  }


  const getKey = (pageIndex: number, previousPageData: Post[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/posts?page=${pageIndex}`;
  }

  const { data, error, size: page, setSize: setPage, isValidating, mutate } = useSWRInfinite<Post[]>(getKey);
  const isInitialLoading = !data && !error;
  const posts: Post[] = data ? ([] as Post[]).concat(...data) : [];

  const [observedPost, setObservedPost] = useState("");

  useEffect(() => {
    // 포스트가 없다면 return 
    if (!posts || posts.length === 0) return;
    // posts 배열안에 마지막 post에 id를 가져옵니다.
    const id = posts[posts.length - 1].identifier;
    // posts 배열에 post가 추가돼서 마지막 post가 바뀌었다면
    // 바뀐 post 중 마지막post를 obsevedPost로 
    if (id !== observedPost) {
      setObservedPost(id);
      observeElement(document.getElementById(id));
    }
  }, [posts])

  const observeElement = (element: HTMLElement | null) => {
    if (!element) return;
    // 브라우저 뷰포트(ViewPort)와 설정한 요소(Element)의 교차점을 관찰
    const observer = new IntersectionObserver(
      // entries는 IntersectionObserverEntry 인스턴스의 배열
      (entries) => {
        // isIntersecting: 관찰 대상의 교차 상태(Boolean)
        if (entries[0].isIntersecting === true) {
          console.log("마지막 게임에 왔습니다.");
          setPage(page + 1);
          observer.unobserve(element);
        }
      },
      { threshold: 1 }
    );
    // 대상 요소의 관찰을 시작
    observer.observe(element);
  }

  return (
    <div className='flex max-w-5xl px-4 pt-5 mx-auto'>
      {/* 포스트 리스트 */}
      <div className='w-full md:mr-3 md:w-8/12'>
        {isInitialLoading && <p className="text-lg text-center">로딩중입니다...</p>}
        {posts?.map(post => (
          <PostCard
            key={post.identifier}
            post={post}
            mutate={mutate}
          />
        ))}

      </div>
      {/* 사이드바 */}
      <div className='hidden w-4/12 ml-3 md:block'>
        <div className='bg-white border rounded'>
          <div className='p-4 border-b'>
            <p className='text-lg font-semibold text-center'></p>
          </div>

          {/* 학생 리스트 구현*/}


          {authenticated &&
            <div className='w-full py-6 text-center'>
              <Link href="/students/create">
                <a className='w-full p-2 text-center text-white bg-gray-400 rounded'>
                  신규 학생 등록
                </a>
              </Link>
            </div>
          }
        </div>
      </div>

    </div>
  )
}

export default Students

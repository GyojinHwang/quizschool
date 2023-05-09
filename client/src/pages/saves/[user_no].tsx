import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { Game, Question, User } from '../../types'
import axios from 'axios'
import { useAuthState } from '../../context/auth'
import useSWRInfinite from 'swr/infinite';
import PostCard from '../../components/PostCard'
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import moment from 'moment'


const Home: NextPage = () => {
  const { authenticated, user } = useAuthState();

  const myno = user?.user_no;
  const myname = user?.user_name;
  const [errors, setErrors] = useState<any>({});


  const fetcher = async (url: string) => {
    return await axios.get(url).then(res => res.data)
  }

  const address = `/games/top/${myno}`;

  const getKey = (pageIndex: number, previousPageData: Question[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/posts?page=${pageIndex}`;
  }

  const { data, error, size: page, setSize: setPage, isValidating, mutate } = useSWRInfinite<Question[]>(getKey);
  const isInitialLoading = !data && !error;
  const questions: Question[] = data ? ([] as Question[]).concat(...data) : [];
  const { data: topGames } = useSWR<Game[]>(address, fetcher)

  const [observedPost, setObservedPost] = useState("");




  useEffect(() => {
    // 포스트가 없다면 return 
    if (!questions || questions.length === 0) return;
    // posts 배열안에 마지막 post에 id를 가져옵니다.
    const id = questions[questions.length - 1].question_no;
    // posts 배열에 post가 추가돼서 마지막 post가 바뀌었다면
    // 바뀐 post 중 마지막post를 obsevedPost로 
    if (id !== observedPost) {
      setObservedPost(id);
      observeElement(document.getElementById(id));
    }
  }, [questions])

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

  const handleEdit = (id: string) => {
    Router.push(`/games/${id}`);
  }

  const handleDelete = async (id: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    try {
      const { data: game} = await axios.post<Game>(`/games/del/${id}`, {
        game_no: id
      })
      window.location.reload();
      console.log(game);
    } catch (error: any) {
      console.log(error);
      setErrors(error.response?.data || {});
    }
  }

  return (
    <div className='flex max-w-5xl px-4 pt-5 mx-auto'>

      {/* 사이드바 */}
      <div className='hidden w-full ml-3 md:block'>
        <div className='bg-white border rounded'>
          <div className='p-4 border-b'>
            <p className='text-lg font-semibold text-center'>생성한 게임</p>
          </div>

          {/* 게임 리스트 */}
          <div>
            <ul>
              {topGames?.map(game => (
                <li key={game.game_name}>
                  <img src={game.imageUrl} alt={game.game_name} />
                  <div>
                    <h3 style={{ textAlign: 'center' }}>{game.game_name}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <p>{myname}</p>
                        {/* <p>{game.createdAt}</p> */}
                        <p>{moment(game.createdAt).format('YYYY-MM-DD, hh:mm:ss')}</p>
                      </div>
                      <div>
                      <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                        <button className="open text-sm font-bold text-center text-gray-100" onClick={() => handleEdit(game.game_no)}>수정</button>
                        </div>
                        <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-orange-500 rounded-md">
                        <button className="open text-sm font-bold text-center text-gray-100" onClick={() => handleDelete(game.game_no)}>삭제</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home

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
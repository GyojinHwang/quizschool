import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'
import { Post, Sub } from '../../../types';

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { useAuthState } from '../../../context/auth';



const PostCreate = () => {

    const { authenticated } = useAuthState();

    const fetcher = async (url: string) => {
        return await axios.get(url).then(res => res.data)
    }
    const address = `/subs/sub/countSub`;

    const { data: countSub } = useSWR<Sub[]>(address, fetcher)

    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answerno, setAnswerno] = useState("");
    const [_id, set_Id] = useState("");
    const router = useRouter();
    const { post: subname } = router.query;

    const questionnumber = countSub?.map((posts) => {
        return posts.questionnumber;
    })
    
    const qnumb = Number(questionnumber);

    const answers =
        `번호: ${qnumb} 
        1번 답안: ${answer1} 
     2번 답안: ${answer2} 
     3번 답안: ${answer3} 
     4번 답안: ${answer4} 
     정답: ${answerno}
    
     `;


    const submitPost = async (e: FormEvent) => {
        e.preventDefault();
        if (question.trim() === "" || !subname) return;

        try {

            const { data: post } = await axios.post<Post>("/posts", {
                _id: qnumb,
                title: question.trim(),
                body: answers,
                question: question,
                answer1: answer1,
                answer2: answer2,
                answer3: answer3,
                answer4: answer4,
                answerno: answerno
            })
            router.push(`/r/${subname}`)
            console.log(post);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex flex-col justify-center pt-16'>
                    <div className='w-10/12 mx-auto md:w-96'>
                        <div className='p-4 bg-white rounded'>
                            <h1 className='mb-3 text-lg'>문제 생성하기</h1>
                            <form onSubmit={submitPost}>
                            <div className='relative mb-2'>

                                <input
                                    type="text"
                                    className='w-20 px-2 py-1 border text-sm border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                    value={questionnumber}
                                />번 문제
                                </div>
                                <div className='relative mb-2'>

                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                                        placeholder="질문"
                                        maxLength={20}
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                    />
                                    <div
                                        style={{ top: 10, right: 10 }}
                                        className="absolute mb-2 text-sm text-gray-400 select-none"
                                    >
                                        {question.trim().length}/20
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="답안 1:"
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                    value={answer1}
                                    onChange={(e) => setAnswer1(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="답안 2:"
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                    value={answer2}
                                    onChange={(e) => setAnswer2(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="답안 3:"
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                    value={answer3}
                                    onChange={(e) => setAnswer3(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="답안 4:"
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                    value={answer4}
                                    onChange={(e) => setAnswer4(e.target.value)}
                                />

                                <select onChange={(e) => setAnswerno(e.target.value)}>
                                    <option value="not_selected">정답을 선택하세요.</option>
                                    <option value="1">답안 1</option>
                                    <option value="2">답안 2</option>
                                    <option value="3">답안 3</option>
                                    <option value="4">답안 4</option>
                                </select>
                                <div className='p-3 flex justify-end'>
                                    <button
                                        className='px-4 py-2 text-sm font-semibold text-white bg-gray-400 border rounded'
                                    >
                                        생성하기
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

    )
}

export default PostCreate

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    try {
        const cookie = req.headers.cookie;
        if (!cookie) throw new Error("쿠키가 없습니다.")

        await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/auth/me`,
            { headers: { cookie } })
        return { props: {} }
    } catch (error) {
        res.writeHead(307, { Location: "/login" }).end()

        return { props: {} }
    }
}

function useSWRInfinite<T>(getKey: (pageIndex: number, previousPageData: Post[]) => string | null): { data: any; error: any; size: any; setSize: any; isValidating: any; mutate: any; } {
    throw new Error('Function not implemented.');
}

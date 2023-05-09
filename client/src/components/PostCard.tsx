import axios from 'axios'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useAuthState } from '../context/auth'
<<<<<<< HEAD
import { Question } from '../types'

interface PostCardProps {
    question: Question
    questionMutate?: () => void
=======
import { Post } from '../types'

interface PostCardProps {
    post: Post
    subMutate?: () => void
>>>>>>> 63a9535 (initial)
    mutate?: () => void
}

const PostCard = ({
<<<<<<< HEAD
    question: {
        question_no,
        question_title,
        body,
        game_no,
        createdAt,
        user_no,
        game,
        question_answer1,
        question_answer2,
        question_answer3,
        question_answer4,
        question_answer_no
    },
    mutate,
    questionMutate
}: PostCardProps) => {
    const router = useRouter()
    const isInSubPage = router.pathname === "/games/[game_no]"
=======
    post: {
        _id,
        identifier,
        slug,
        title,
        body,
        subname,
        createdAt,
        commentCount,
        url,
        username,
        sub,
        question,
        answer1,
        answer2,
        answer3,
        answer4,
        answerno
    },
    mutate,
    subMutate
}: PostCardProps) => {
    const router = useRouter()
    const isInSubPage = router.pathname === "/r/[sub]"
>>>>>>> 63a9535 (initial)

    const { authenticated } = useAuthState();


    return (
<<<<<<< HEAD
        <div className="bg-gray-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

                    <div
                        className='flex mb-4 bg-white rounded'
                        id={question_no}
                    >
                        <p className="my-1 text-lg font-bold">문항 {question_no}. {question_title}</p>
                        <p className="my-1 text-sm">1번 : {question_answer1}</p>
                        <p className="my-1 text-sm">2번 : {question_answer2}</p>
                        <p className="my-1 text-sm">3번 : {question_answer3}</p>
                        <p className="my-1 text-sm">4번 : {question_answer4}</p>
                        <p className="my-2 text-sm font-bold">정답 : {question_answer_no}번</p>

                        <div className="flex">
                        </div>
                    </div>
                

            </div>
=======
        <div
            className='flex mb-4 bg-white rounded'
            id={identifier}
        >
          
            {/* 포스트 데이터 부분 */}
            <div className="w-full p-2">
                <div className='flex items-center'>
                    {!isInSubPage && (
                        <div className='flex items-center'>
                            {/* <Link href={`/r/${subname}`}> */}
                                <a>
                                    <Image
                                        src={sub!.imageUrl}
                                        alt="sub"
                                        className='rounded-full cursor-pointer'
                                        width={12}
                                        height={12}
                                    />
                                </a>
                            {/* </Link> */}
                            {/* <Link href={`/r/${subname}`}> */}
                                <a className="ml-2 text-xs font-bold cursor-pointer hover:underline">
                                    {subname}
                                </a>
                            {/* </Link> */}
                            <span className="mx-1 text-xs text-gray-400">•</span>
                        </div>
                    )}

                    <p className="text-xs text-gray-400">
                        작성자: 
                        <Link href={`/u/${username}`}>
                            <a className="mx-1 hover:underline">{username}</a>
                        </Link>
                        {/* <Link href={url}> */}
                            <a className='mx-1 hover:underline'>
                                {dayjs(createdAt).format('YYYY-MM-DD HH:mm')}
                            </a>
                        {/* </Link> */}
                    </p>
                </div>

                {/* <Link href={url}> */}
                    <a className="my-1 text-lg font-medium">(문제{_id}) {title}</a>
                {/* </Link> */}
                {body && <p className="my-1 text-sm">1번: {answer1}</p>}
                <p className="my-1 text-sm">2번: {answer2}</p>
                <p className="my-1 text-sm">3번: {answer3}</p>
                <p className="my-1 text-sm">4번: {answer4}</p>
                <p className="my-1 text-sm">정답: {answerno}번</p>

                <div className="flex">
                    {/* <Link href={url}>
                        <a>
                            <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                            <span>{commentCount}</span>
                        </a>
                    </Link> */}

                </div>
            </div>
        </div>
>>>>>>> 63a9535 (initial)
    )
}

export default PostCard
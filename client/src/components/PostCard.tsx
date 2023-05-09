import axios from 'axios'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useAuthState } from '../context/auth'
import { Question } from '../types'

interface PostCardProps {
    question: Question
    questionMutate?: () => void
    mutate?: () => void
}

const PostCard = ({
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

    const { authenticated } = useAuthState();


    return (
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
    )
}

export default PostCard
import axios from 'axios'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { stringify } from 'querystring'
import React, { FormEvent, useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useAuthState } from '../context/auth'
import { Question, Sample } from '../types'

interface sampleListProps {
    sample: Sample
    userMutate?: () => void
    mutate?: () => void
}

const SampleList = ({
    sample: {
        sample_title,
        sample_answer1,
        sample_answer2,
        sample_answer3,
        sample_answer4,
        sample_answer_no,
        sample_chapter,
        sample_description,
        sample_grade,
        sample_subject
    },
    mutate,
    userMutate
}: sampleListProps) => {
    const [errors, setErrors] = useState<any>({});

    const router = useRouter()
    const isInSubPage = router.pathname === "/games/loadingquestions"

    const { authenticated, user } = useAuthState();
    const me = user?.user_name;


    // const AccountManagement = async (event: FormEvent) => {
    //     event.preventDefault();
    //     try {
    //         if (active === "1") {
    //             console.log("user active is 1");
    //         } else if (active === "2") {
    //             console.log("user active is 2");

    //         } else if (active === "3") {
    //             console.log("user active is 3");

    //         } else if (active === "4") {
    //             console.log("user active is 4");

    //         } else {
    //             console.log("Error Code 1: Something went wrong!");
    //         }
    //         // window.location.reload();
    //     } catch (error: any) {
    //         console.log('error', error);
    //         setErrors(error.response.data || {});
    //     }
    // }

    const preView = {

    }



    return (
        <div
            className='flex mb-4 bg-white rounded'
            id={sample_title}
        >
            <div className="w-full p-2">
                <input type="checkbox"></input>
                <a className="my-1 font-bold">{sample_title} <a className="font-thin">
                    {sample_answer_no === "1"
                    ? <a>{sample_answer1}</a>
                    : (sample_answer_no === "2"
                        ? <a>{sample_answer2}</a> :
                        (sample_answer_no === "3"
                            ? <a>{sample_answer3}</a>
                            : (sample_answer_no === "4"
                                ? <a>{sample_answer4}</a>
                                : <a>문제설정오류:관리자에게 문의하세요</a>
                            )))}
                </a><a className="font-thin"> ({sample_description})</a>
                </a>
            </div>
        </div>
    )
}

export default SampleList
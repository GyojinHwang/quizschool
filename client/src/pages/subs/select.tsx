import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import useSWR from 'swr';
import { Post, Sub } from '../../types'
import axios from 'axios'
import { useAuthState } from '../../context/auth'
import useSWRInfinite from 'swr/infinite';
import PostCard from '../../components/PostCard'
import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Select = () => {
    const { authenticated } = useAuthState();
    let router = useRouter();

    // const handleSubmit = async (event: FormEvent) => {
    //     event.preventDefault();

    //     try {
    //         router.push('/subs/create');
    //     } catch (error: any) {
    //         console.log(error);
    //     }
    // }

    return (
        <div className='p-2 w-full flex flex-col justify-center items-center  bg-white'>
            <div className="font-extrabold">
                <br>
                </br>
                <p className='text-3xl font-semibold text-center text-black'>학습게임모드 선택</p> <br></br>
            </div>
            {/* <form onSubmit={handleSubmit}> */}

                <div className="grid grid-cols-4 gap-1 justify-evenly">
                    <div className="my-6">
                        <Image
                            src="/game1.png"
                            alt="Game 1"
                            width={900}
                            height={900}
                        />
                        <div className="flex justify-center">

                            <button
                                className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30"
                                onClick={ () => router.push('/subs/create_1') }
                            >
                                게임 선택
                            </button>
                        </div>
                    </div>
                    <div className="my-6">
                        <Image
                            src="/game2.png"
                            alt="Game 2"
                            width={900}
                            height={900}
                        />
                        <div className="flex justify-center">

                            <button
                                className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30" 
                                onClick={ () => router.push('/subs/create_2') }
                                >
                                게임 선택
                            </button>
                        </div>
                    </div>
                    <div className="my-6">
                        <Image
                            src="/game3.png"
                            alt="Game 3"
                            width={900}
                            height={900}
                        />
                        <div className="flex justify-center">

                            <button
                                className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30"                        >
                                게임 선택
                            </button>
                        </div>
                    </div>
                    <div className="my-6">
                        <Image
                            src="/game4.png"
                            alt="Game 4"
                            width={900}
                            height={900}
                        />
                        <div className="flex justify-center">

                            <button
                                className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30"                        >
                                게임 선택
                            </button>
                        </div>
                    </div>
                    <div className="my-6">
                        <Image
                            src="/game5.png"
                            alt="Game 5"
                            width={900}
                            height={900}
                        />
                        <div className="flex justify-center">

                            <button
                                className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30"                        >
                                게임 선택
                            </button>
                        </div>
                    </div>
                    <div className="my-6">
                        <Image
                            src="/game6.png"
                            alt="Game 6"
                            width={900}
                            height={900}
                        />
                        <div className="flex justify-center">

                            <button
                                className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30"                        >
                                게임 선택
                            </button>
                        </div>
                    </div>
                    <div className="my-6">
                        <Image
                            src="/game7.png"
                            alt="Game 7"
                            width={900}
                            height={900}
                        />
                        <div className="flex justify-center">

                            <button
                                className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30"                        >
                                게임 선택
                            </button>
                        </div>
                    </div>
                    <div className="my-6">
                        <Image
                            src="/game8.png"
                            alt="Game 8"
                            width={900}
                            height={900}
                        />
                        <div className="flex justify-center">

                            <button
                                className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30"                        >
                                게임 선택
                            </button>
                        </div>
                    </div>
                </div>
            {/* </form> */}
        </div>
    )
}

export default Select

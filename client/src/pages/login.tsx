<<<<<<< HEAD
/* eslint-disable @next/next/link-passhref */
import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Image from 'next/image'

=======
import React, { FormEvent, useState } from 'react'
import InputGroup from '../components/InputGroup'
import Link from 'next/link'
import axios from 'axios';
>>>>>>> 63a9535 (initial)
import { useRouter } from 'next/router';
import { useAuthDispatch, useAuthState } from '../context/auth';

const Login = () => {
    let router = useRouter();
<<<<<<< HEAD
    const [user_id, setuser_id] = useState("");
=======
    const [username, setUsername] = useState("");
>>>>>>> 63a9535 (initial)
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});
    const { authenticated } = useAuthState();
    const dispatch = useAuthDispatch();

    if (authenticated) router.push("/");

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
<<<<<<< HEAD
            const res = await axios.post("/auth/login", { password, user_id }, { withCredentials: true })

            dispatch("LOGIN", res.data?.user);
=======
            const res = await axios.post("/auth/login", { password, username }, { withCredentials: true })

            dispatch("LOGIN", res.data?.user);

>>>>>>> 63a9535 (initial)
            router.push("/")
        } catch (error: any) {
            console.log(error);
            setErrors(error.response?.data || {})
        }
    }

    return (
<<<<<<< HEAD
        <form onSubmit={handleSubmit}>
            <div className=" bg-gray-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <div className="inline-flex flex-col space-y-12 items-center justify-center bg-white" style={{ width: 1440, height: 1024, }}>
                    <Link href="/"><Image src="/logo_dxp.png"
                        alt="DXP Logo"
                        width={320}
                        height={45}
                    /></Link>

                    <div className=" flex flex-col items-center justify-end w-80 h-12">

                        <p className="w-full h-5 font-bold">아이디</p>
                        <div className="w-full h-8">
                            <input className=" mt-2 p-4 flex-1 h-full w-full bg-white border rounded border-gray-300"
                                type="text"
                                placeholder="아이디를 입력하세요"
                                value={user_id}
                                onChange={(e) => setuser_id(e.target.value)}
                                onError={errors.user_id}
                            />
                            <small className='font-medium text-red-500'>{errors.user_id} </small>

                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-end w-80 h-12">
                        <p className="w-full h-5 font-bold">비밀번호<br /></p>
                        <div className="w-full h-8">

                            <input
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                className=" mt-2 p-4 flex-1 h-full w-full  bg-white border rounded border-gray-300"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onError={errors.password}
                            />
                            <small className='font-medium text-red-500'>{errors.password} </small>
                        </div>
                    </div>

                    <div className=" h-12 rounded-full w-80">
                        <button className="flex items-center justify-center flex-1 h-full py-3.5 px-6 bg-yellow-400 rounded font-bold w-full">
                            <p className="flex-1 text-lg text-center text-white">로그인하기</p>
                        </button>
                    </div>
                    <div className="inline-flex space-x-1.5 items-center justify-end w-auto h-5">
                        <input
                            type="checkbox"
                        />
                        <p className="w-24 text-xs font-bold">로그인 정보 저장<br /></p>
                        <p className="w-48 text-xs text-right font-bold">계정이 없으신가요?&nbsp;&nbsp;<a className="underline"><Link href="/register">교사 회원가입</Link></a></p>
                    </div>
                    <p className="text-xs text-center text-gray-500"><a className="underline"><Link href="terms">이용약관</Link></a><a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><a className="underline"><Link href="privacy">개인정보처리방침</Link></a>
                        <br /><br />COPYRIGHT @ DesignXPlay ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </form>
=======
        <div className='bg-white'>
            <div className='flex flex-col items-center justify-center h-screen p-6'>
                <div className='w-10/12 mx-auto md:w-96'>
                    <h1 className='mb-2 text-lg font-medium'>로그인</h1>
                    <form onSubmit={handleSubmit}>
                        <InputGroup
                            placeholder='Username'
                            value={username}
                            setValue={setUsername}
                            error={errors.username}
                        />
                        <InputGroup
                            placeholder='Password'
                            type="password"
                            value={password}
                            setValue={setPassword}
                            error={errors.password}
                        />
                        <button className='w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded'>
                            로그인
                        </button>
                    </form>
                    <small>
                        아직 아이디가 없나요?
                        <Link href="/register">
                            <a className='ml-1 text-blue-500 uppercase'>회원가입</a>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
>>>>>>> 63a9535 (initial)
    )
}

export default Login
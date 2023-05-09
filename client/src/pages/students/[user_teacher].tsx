/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import useSWR from 'swr';
import InputGroup from '../../components/InputGroup'
import { useAuthState } from '../../context/auth';
import { Stat, User } from '../../types';
import cls from "classnames";
import { Stats } from 'fs';
import { getEventListeners } from 'events';
import { GetServerSideProps } from 'next';

const StudentReg3 = () => {
    const [user_name, setUserName] = useState("");
    // const [user_id, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>({});
    // const [user_type, setUserType] = useState("");
    const { authenticated, user } = useAuthState();
    const user_type = "2";
    const active = "1";
    const user_teacher = user?.user_no;
    const user_email = "";

    const school = user?.school;
    const grade = user?.grade;

    let class_no;
    Number(user?.class_no) < 10
        ? String(class_no = "0" + String(user?.class_no))
        : class_no = String(user?.class_no);


    const fetcher = async (url: string) => {
        return await axios.get(url).then(res => res.data)
    };
    const address = '/auth/users/usernumber';
    const address2 = `/students/list/${user_teacher}`
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: userNumber } = useSWR<User[]>(address, fetcher);

    const userCount = userNumber?.map((user) => {
        return user.userCount;
    })



    let p_user_no;
    Number(userCount) < 10
        ? p_user_no = "0" + String(userCount)
        : p_user_no = Number(userCount);


    const p_user_teacher = Number(user_teacher);
    const pp_user_no = "S" + school + grade + class_no + p_user_no;
    const user_no = String(pp_user_no);
    const { data: studentList } = useSWR<User[], Stat[]>(address2, fetcher);


    let router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const res = await axios.post('/students/register', {
                user_type,
                user_no,
                active,
                password,
                // user_id,
                user_teacher,
                user_email,
                user_name
            })
            console.log('res', res);
            window.location.reload();
        } catch (error: any) {
            console.log('error', error);
            setErrors(error.response.data || {});
        }
    }

    const deleteStudent = async (user: User) => {
        const user_no = user.user_no;
    
        try {
            const res = await axios.post('/students/remove', {
                user_no: user_no
            })
            
            console.log('res', res);
            window.location.reload();
        } catch (error: any) {
            console.log('error', error);
            setErrors(error.response.data || {});
        } 

    }


    const passwordReset = async (user: User) => {
        
        const user_no = user.user_no;

        try {
            alert("비밀번호가 초기화되었습니다. (비밀번호: 1111)");
            const res = await axios.post('/students/resetpw', {
                user_no: user_no
            })
            console.log('res', res);
            window.location.reload();
        } catch (error: any) {
            console.log('error', error);
            setErrors(error.response.data || {});
        }
    }

//     const UserList = studentList?.map((user) => {
//         return JSON.stringify(user)
//     })
//

    return (
        <div className='bg-white'>
            <div className='flex flex-col items-center justify-center  p-6'>
                <div className='w-10/12 mx-auto md:w-96'>
                    <h1 className='mb-2 text-lg font-bold'>학생 정보 만들기</h1>
                </div>
                <div>
                    <div className="flex items-center text-center px-4 py-4 text-xs border-b border-cyan-600">
                   
                        <p className='w-44 ml-10 font-bold'>학생명</p>
                        <p className='w-44 ml-10 font-bold'>학생번호</p>
                        <p className='w-44 ml-10 font-bold'>학생ID</p>
                        <p className='w-44 ml-10 font-bold'>상태</p>
                        <p className='w-16 ml-10 font-bold'> </p>
                        <p className='w-16 ml-10 font-bold'> </p>
                    </div>
                </div>
                <div>
                    {studentList?.map((user) => (
                        <div
                            key={user.user_no}
                            className="flex items-center text-center px-4 py-2 text-xs"
                        >
                            <p className='w-44 ml-10'>{user.user_name}</p>
                            <p className='w-44 ml-10'>{user.user_no}</p>
                            <p className='w-44 ml-10'>{
                                user.user_id 
                                ? user.user_id
                                : <p>미등록</p>
                            }</p>

                            {/* <p className='w-44 ml-10'>{user.user_id}</p> */}
                            <p className='w-44 ml-10'>{
                                user.active === "1"
                                    ? <p>미등록</p>
                                    : (user.active === "2"
                                        ? <p>사용중계정</p>
                                        : <p>계정상태오류:관리자문의요망</p>
                                    )
                            }</p>

                            
                            <p className='ml-10 font-bold'><button className=' w-16 py-2 mb-1 text-xs font-bold border border-gray-400 rounded' id='account_man_button' onClick={() => deleteStudent(user)}>계정삭제
                            
                            </button></p>
                            <p className='ml-10 font-bold'><button className=' w-16 py-2 mb-1 text-xs font-bold border border-gray-400 rounded' onClick={()=> passwordReset(user)}>비번초기화</button></p>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center text-center">

                        <div>
                            <a className='w-48 font-bold'>
                                <input
                                    type="text"
                                    placeholder="학생 이름을 입력하세요."
                                    className="border border-gray-400 text-center"
                                    value={user_name}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </a>
                            <a className='w-48 font-bold'>
                                <input
                                    type="text"
                                    className="border border-gray-400 text-center"
                                    value={user_no}
                                />
                            </a>
                            {/* <a className='w-48  font-bold'>
                                <input
                                    type="text"
                                    placeholder="학생 ID를 입력하세요."
                                    className="border border-gray-400 text-center"
                                    value={user_id}
                                    onChange={(e) => setUserId(e.target.value)}
                                />
                            </a> */}
                            {/* <a className='w-48  font-bold'>
                                <input
                                    type="text"
                                    placeholder="비밀번호"
                                    className="border border-gray-400 text-center"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </a> */}
                            <a className=' w-48 font-bold'>
                                <input
                                    type="text"
                                    className="border border-gray-400 text-center"
                                    value="미등록"
                                />
                            </a>
                            <a className='ml-10 font-bold'><button className=' ml-6 w-16 py-2 mb-1 text-xs font-bold border border-gray-400 rounded'>추가</button></a>
                        </div>
                    </div>
                </form>
{/* 
                <a className='ml-10 font-bold'><button className=' w-16 py-2 mb-1 text-xs font-bold border border-gray-400 rounded'>저장</button></a> */}
            </div>
        </div>
    )
}

export default StudentReg3

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
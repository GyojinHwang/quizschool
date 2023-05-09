/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import axios from 'axios';
import { privateDecrypt } from 'crypto';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { off } from 'process';
import React, { FormEvent, useState } from 'react'
import useSWR from 'swr';
import { checkServerIdentity } from 'tls';
import InputGroup from '../components/InputGroup'
import { useAuthState } from '../context/auth';
import { User } from '../types';


const Register = () => {
    const [user_id, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCert, setPasswordCert] = useState("");
    const [school, setSchool] = useState("");
    const [grade, setGrade] = useState("");
    const [class_no, setClassNo] = useState("");
    const [phone_no, setPhoneNo] = useState("");
    const [user_name, setUserName] = useState("");
    const [errors, setErrors] = useState<any>({});
    const { authenticated } = useAuthState();
    const [check, setCheck] = useState("");
    const [marketingAccepted, setMarketingAccepted] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const user_type = "1";
    const active = "2";
    const fetcher = async (url: string) => {
        return await axios.get(url).then(res => res.data)
    };
    const address = '/auth/users/usernumber';
    const { data: userNumber } = useSWR<User[]>(address, fetcher)

    const userCount = userNumber?.map((user) => {
        return user.userCount;
    })
    const user_no = String(userCount);

    let router = useRouter();
    if (authenticated) router.push("/");

    const id_check = async (event: FormEvent) => {
        event.preventDefault();

        const res = await axios.post('/auth/id_check', {
            user_id
        }
        )
        console.log('res', res);
        setCheck(res.data);
        alert(res.data);
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!termsAccepted || !privacyAccepted) {
            alert("필수 항목에 동의해주세요.")
            return;
        }

        try {
            const user_teacher = user_no;
            if (!marketingAccepted) {
                const marketing = false;
                const res = await axios.post('/auth/register', {
                    user_type,
                    user_no,
                    active,
                    password,
                    passwordCert,
                    user_id,
                    user_teacher,
                    school,
                    grade,
                    class_no,
                    phone_no,
                    user_name,
                    check,
                    marketing
                })
                console.log('res', res);
                router.push("/login");
            }
            else if (marketingAccepted) {
                const marketing = true;

                const res = await axios.post('/auth/register', {
                    user_type,
                    user_no,
                    active,
                    password,
                    passwordCert,
                    user_id,
                    user_teacher,
                    school,
                    grade,
                    class_no,
                    phone_no,
                    user_name,
                    check,
                    marketing
                })
                console.log('res', res);
                router.push("/login");
            }

        } catch (error: any) {
            console.log('error', error);
            setErrors(error.response.data || {});
        }



    }


 

    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>

            <div className="inline-flex flex-col space-y-7 items-center justify-center bg-white" style={{ width: 1440, height: 900, }}>
                <div className="inline-flex space-x-2 items-end justify-end w-80 h-12"><Link href="/">
                    <img className="w-40 h-12" src="/quizschool_logo.png" /></Link>
                    <p className="w-1/2 h-6 text-lg font-extrabold">교사회원 신규가입</p>
                </div>

                <div className="flex flex-col space-y-2 items-center justify-end w-80 h-1/5">
                    <div className="flex flex-col items-center justify-end w-full h-16">
                        <p className="w-full text-xs font-bold">아이디</p>
                        <InputGroup
                            placeholder='아이디를 입력하세요'
                            value={user_id}
                            setValue={setUserId}
                            error={errors.user_id}
                        />
                        <form onSubmit={id_check}>
                            <div className="flex items-center justify-center flex-1 h-full py-2 px-6 bg-yellow-400 rounded">
                                <button className="flex-1 text-sm font-bold text-center text-white" >중복검사</button>
                            </div>
                        </form>
                    </div>



                    <div className="flex flex-col  items-center justify-end w-full h-16">
                        <p className="w-full text-xs font-bold">비밀번호</p>
                        <InputGroup
                            placeholder='비밀번호를 입력하세요'
                            type="password"
                            value={password}
                            setValue={setPassword}
                            error={errors.password}
                        />
                    </div>

                    <div className="flex flex-col items-center justify-end w-full h-16">
                        <p className="w-full text-xs font-bold">비밀번호 확인</p>
                        <InputGroup
                            placeholder='비밀번호 다시 입력하세요'
                            type="password"
                            value={passwordCert}
                            setValue={setPasswordCert}
                            error={errors.passwordCert}
                        />
                    </div>

                </div>

                <div className="relative" style={{ width: 320, height: 109, }}>
                    <div className="inline-flex flex-col items-center justify-end w-80 h-12 absolute left-0 top-0">
                        <p className="w-full text-xs font-bold">소속학교</p>
                        <InputGroup
                            placeholder='소속학교를 입력하세요'
                            value={school}
                            setValue={setSchool}
                            error={errors.school}
                        />
                    </div>
                    <div className="inline-flex flex-col items-center justify-end w-36 h-12 absolute left-0 bottom-0">
                        <p className="w-full h-5 text-xs font-bold">학년 </p>
                        <select className=" w-36 p-1 mt-1 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white hover:bg-white" onChange={(e) => setGrade(e.target.value)}>
                            <option value="">선택</option>
                            <option value="1">1학년</option>
                            <option value="2">2학년</option>
                            <option value="3">3학년</option>
                            <option value="4">4학년</option>
                            <option value="5">5학년</option>
                            <option value="6">6학년</option>
                        </select>
                        <small className='font-medium text-red-500'>{errors.grade} </small>
                    </div>
                    <div className="inline-flex flex-col items-center justify-end w-36 h-12 absolute right-0 bottom-0">
                        <p className="w-full h-5 text-xs font-bold">반</p>
                        <select className=" w-36 p-1 mt-1 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white hover:bg-white" onChange={(e) => setClassNo(e.target.value)}>
                            <option value="">선택</option>
                            <option value="1">1반</option>
                            <option value="2">2반</option>
                            <option value="3">3반</option>
                            <option value="4">4반</option>
                            <option value="5">5반</option>
                            <option value="6">6반</option>
                            <option value="7">7반</option>
                            <option value="8">8반</option>
                        </select>
                        <small className='font-medium text-red-500'>{errors.class_no} </small>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 items-center justify-end w-80 h-28">
                    <div className="flex flex-col items-center justify-end w-full h-12">
                        <p className="w-full h-5 text-xs font-bold">교사명</p>
                        <InputGroup
                            type="text"
                            placeholder='이름을 입력하세요'
                            value={user_name}
                            setValue={setUserName}
                            error={errors.user_name}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-end w-full h-12">
                        <p className="w-full h-5 text-xs font-bold">연락처</p>
                        <InputGroup
                            type="text"
                            placeholder='전화번호/휴대전화'
                            value={phone_no}
                            setValue={setPhoneNo}
                            error={errors.phone_no}
                        />
                    </div>
                </div>
                <div className="inline-flex space-x-1.5 items-center justify-end w-80 h-5">
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(event) => setTermsAccepted(event.target.checked)}
                    />                    <p className="w-72 h-5/6 text-xs">서비스 이용약관 동의 (필수)</p>
                </div>
                <div className="inline-flex space-x-1.5 items-center justify-end w-80 h-5">
                    <input
                        type="checkbox"
                        checked={privacyAccepted}
                        onChange={(event) => setPrivacyAccepted(event.target.checked)}
                    />
                    <p className="w-72 h-5/6 text-xs">개인정보 수집 및 이용 동의 (필수)</p>
                    {errors.privacyAccepted}
                </div>
                <div className="inline-flex space-x-1.5 items-center justify-end w-80 h-5">
                <input
                        type="checkbox"
                        checked={marketingAccepted}
                        onChange={(event) => setMarketingAccepted(event.target.checked)}
                    />
                    <p className="w-72 h-5/6 text-xs">마케팅 동의 (선택)</p>
                </div>



                <form onSubmit={handleSubmit}>
                    <div className="w-80 h-10 rounded-full">
                        <div className="flex items-center justify-center flex-1 h-full py-2 px-6 bg-yellow-400 rounded">
                            <button className="flex-1 text-lg font-bold text-center text-white">교사회원가입</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Register
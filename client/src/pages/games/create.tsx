import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Image from 'next/image'
import Link from "next/link";

const SubCreate = () => {

    let router = useRouter();

    const templateOne = async (event: FormEvent) => {
        event.preventDefault();
        router.push('/games/onwork');
    }

    const templateTwo = async (event: FormEvent) => {
        event.preventDefault();
        router.push('/games/onwork');
    }

    const bag2 = "/background1.png";

    return (
        <div className="bg-gray-100" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>

        <div className="relative bg-cover bg-center rounded-lg bg-opacity-80" style={{width: 1440, height: 744, backgroundImage: `url(${bag2})`, }}>
        <div className="inline-flex flex-col space-y-2.5 items-center justify-end absolute" style={{width: 456, height: 544, left: 754, top: 115,}}>
            <img className="rounded-2xl" style={{width: 456, height: 317.86,}} src="/game2.png"/>
            <p className="w-72 h-8 text-xl font-bold text-center">깃발빼앗기(팀전) 게임 템플릿</p>
            <p className="text-sm" style={{width: 448, height: 134,}}>깃발빼앗기(팀전) 게임템플릿은 반의 학생들이 4명씩 모둠을 이루어 정답 깃발을 먼저 가져오는 쪽이 승리하는 팀 경쟁모드 템플릿입니다.<br/>각 퀴즈 문항마다 6개의 모둠 중 3개의 모둠이 랜덤하게 선택되며  정답 깃발과 보너스 깃발을 본인 팀의 베이스로 가져오면 점수를 획득합니다.<br/>다른 팀의 깃발을 빼앗을 수 있습니다.</p>
            <div className="w-48 h-8 rounded-full">
                <div className="flex items-center justify-center flex-1 h-full py-1.5 px-6 bg-yellow-400 rounded">
                    <p className="flex-1 text-lg font-bold text-center text-white"><Link href="/games/input">템플릿 선택</Link></p>
                </div>
            </div>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-center justify-end absolute" style={{width: 456, height: 544, left: 220, top: 115,}}>
            <img className="rounded-2xl" style={{width: 456, height: 317.54,}} src="/game1.png"/>
            <p className="w-72 h-8 text-xl font-bold text-center">4지선다 게임 템플릿</p>
            <p className="text-sm" style={{width: 444, height: 134,}}>4지선다 게임 템플릿은 반의 학생들 각자가 문항별 다양한 환경(몬스터 사냥, 거대화, 얼음땡, 정전, 안개, 정답회전 등) 속에서 선생님이 출제한 4지선다 문제의 답을 맞추는 게임 템플릿입니다.<br/>한 반의 학생들이 동시에 문제를 풀어 점수를 획득하는 개인전 게임 템플릿으로, 선생님은 단지 4지선다 문제 10문제를 세팅하시기만 하면 됩니다.<br/></p>
            <div className="w-48 h-8 rounded-full">
                <div className="flex items-center justify-center flex-1 h-full py-1.5 px-6 bg-yellow-400 rounded">
                    <p className="flex-1 text-lg font-bold text-center text-white"><Link href="/games/input">템플릿 선택</Link></p>
                </div>
            </div>
        </div>
        <p className="absolute text-3xl font-bold text-center" style={{width: 1067, height: 30, left: 168, top: 48,}}>게임 템플릿 선택</p>
    </div>
    </div>
    )
}

export default SubCreate

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
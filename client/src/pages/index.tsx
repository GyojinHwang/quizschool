/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'

import axios from 'axios'
import { useAuthState } from '../context/auth'

const Home: NextPage = () => {
  const { authenticated } = useAuthState();

  const fetcher = async (url: string) => {
    return await axios.get(url).then(res => res.data)
  }
 

  return (
    <div className="bg-white" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>

<div className="relative bg-gray-100" style={{width: 1440, height: 744,}}>
    <div className="absolute" style={{width: 636, height: 482.54, left: 691, top: 100,}}>
        <img className="absolute right-0 bottom-0 rounded-2xl" style={{width: 456, height: 317.54,}} src="/game2.png"/>
        <img className="absolute left-0 top-0 rounded-2xl" style={{width: 456, height: 317.86,}} src="game1.png"/>
    </div>
    <p className="absolute text-3xl font-bold" style={{width: 516, height: 40.94, left: 104, top: 115,}}>쉬는시간보다 흥미로운 수업시간!</p>
    <p className="absolute text-2xl font-bold"  style={{width: 516, height: 40.94, left: 104, top: 530,}}>지금 바로 시작해 보세요.</p>
    <p className="absolute text-6xl font-extrabold" style={{width: 505, height: 268, left: 104, top: 185.79,}}>간단하게 <br/><a className=" text-amber-500">퀴즈를 세팅</a>하고<br/>즐기세요!</p>
    <div className="w-40 h-14 absolute" style={{left: 104, top: 578.26,}}>
        <div className="flex items-center justify-center flex-1 h-full pt-3 pb-4 bg-white border font-bold rounded-lg border-gray-900">
            <button className="flex-1 h-full text-xl font-boldf text-center" onClick={() => window.location.href = '/games/create'}>퀴즈 제작</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home

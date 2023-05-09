import axios from "axios";
import Image from "next/image";
import Link from "next/link"
import { FaSearch } from "react-icons/fa";
import { useAuthDispatch, useAuthState } from "../context/auth"

const NavBar: React.FC = () => {
    const { loading, authenticated, user } = useAuthState();
    const dispatch = useAuthDispatch();
    const myname = user?.user_no;

    const handleLogout = () => {
        axios.post("/auth/logout")
            .then(() => {
                dispatch("LOGOUT");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="border-b border-slate-300" style={{display: 'flex',  justifyContent:'center', alignItems:'center', }}>
        <div className="relative   bg-white" style={{width: 1440, height: 100, }}>
            <div className="inline-flex space-x-14 items-center justify-end absolute" style={{width: 633, height: 20, left: 291, top: 41, }}>
                <p className="w-1/6 h-full text-xl font-bold text-center text-gray-500"><Link href="/games/create">퀴즈 제작</Link></p>
                <p className="w-1/6 h-full text-xl font-bold text-center text-gray-500"><Link href={`/saves/${myname}`}>보관함</Link></p>
                <p className="w-1/5 h-full text-xl font-bold text-center text-gray-500"><Link href={`/students/${myname}`}>학생정보관리</Link></p>
            </div>
            <Link href="/">
                <img className="w-56 h-16 absolute" style={{ left: 14, top: 13, }} src="/quizschool_logo.png" /></Link>
            <div className="absolute left-0 bottom-0 border-gray-400" style={{ width: 1440, height: 1, }} />
            <div className="w-48 h-8 absolute rounded-full" style={{ left: 1210, top: 34, }}>
                <div className="flex items-center justify-center flex-1 h-full py-1.5 px-6 bg-yellow-400 rounded">
                    {!loading && (
                        authenticated ? (
                            <button
                                className="flex-1 text-lg font-bold text-center text-white"
                                onClick={handleLogout}
                            >
                                로그아웃
                            </button>
                        ) : (<>
                            <Link href="/login">
                                <a className="flex-1 text-lg font-bold text-center text-white">
                                    로그인
                                </a>
                            </Link>
                            {/* <Link href="/register">
                            <a className="w-20 px-2 pt-1 text-sm text-center text-white bg-gray-400 rounded h-7">
                                회원가입
                            </a>
                        </Link> */}
                        </>)
                    )}

                </div>
            </div>
        </div>
        </div>
    )
}

export default NavBar
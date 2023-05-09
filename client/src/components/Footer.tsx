import axios from "axios";
import Image from "next/image";
import Link from "next/link"
import { FaSearch } from "react-icons/fa";
import { useAuthDispatch, useAuthState } from "../context/auth"

const Footer: React.FC = () => {


    return (
        <div className="bg-white border-t border-slate-300" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <div className="relative bg-white" style={{ width: 1440, height: 180, }}>
                <div className="absolute border-gray-400" style={{ width: 1440, height: 1, left: 0, top: 1, }} />
                <p className="w-48 h-4 absolute font-bold text-gray-600" style={{ left: 900, top: 99, }}>개인정보처리방침</p>
                <p className="w-48 h-4 absolute font-bold text-gray-600" style={{ left: 900, top: 74, }}>이용약관</p>
                <p className="absolute " style={{ left: 39, top: 96, }}>주소 : 서울특별시 성북구 화랑로 211, 성북벤처창업센터 308호 <br />사업자등록번호 : 633-15-01365<br />서비스문의 : info@designxplay.com</p>
                <p className="w-48 h-3 absolute font-extrabold text-gray-600" style={{ left: 39, top: 70, }}>디자인엑스플레이</p>
                <img className="w-48 h-6 absolute" style={{ left: 30, top: 29, }} src="/logo_dxp.png" />
            </div>
        </div>
    )
}

export default Footer
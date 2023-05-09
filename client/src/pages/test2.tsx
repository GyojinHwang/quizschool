import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import InputGroup from "../components/InputGroup"

const SubCreate = () => {
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [errors, setErrors] = useState<any>({});

    let router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const res = await axios.post("/subs", { title, question, answer1, answer2, answer3, answer4 })

            router.push(`/r/${res.data.name}`);
        } catch (error: any) {
            console.log(error);
            setErrors(error.response.data);
        }
    }

    return (
        <div className="flex flex-col justify-center pt-16">
            <div className="w-10/12 p-4 mx-auto bg-white rounded md:w-96">
                <h1 className="mb-2  font-bold">
                    메타스쿨 학습던전 생성 에디터
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="my-6">
                        <p className="font-medium"></p>
                        <p className="mb-2 text-xs text-gray-400">
                        </p>
                        <InputGroup
                            placeholder="제목을 입력하세요"
                            value={title}
                            setValue={setTitle}
                            error={errors.title}
                        />
                    </div>
                    <div className="my-6">
                        <p className="font-medium"></p>
                        <p className="mb-2 text-xs text-gray-400">
                        </p>
                        <InputGroup
                            placeholder="질문을 입력하세요"
                            value={question}
                            setValue={setQuestion}
                            error={errors.question}
                        />
                    </div>
                    <div className="my-6">
                        <p className="font-medium"></p>
                        <p className="mb-2 text-xs text-gray-400">
                        </p>
                        <InputGroup
                            placeholder="답안 1을 입력하세요."
                            value={answer1}
                            setValue={setAnswer1}
                            error={errors.answer1}
                        />
                    </div>
                    <div className="my-6">
                        <p className="font-medium"></p>
                        <p className="mb-2 text-xs text-gray-400">
                        </p>
                        <InputGroup
                            placeholder="답안 2를 입력하세요."
                            value={answer2}
                            setValue={setAnswer2}
                            error={errors.answer2}
                        />
                    </div>
                    <div className="my-6">
                        <p className="font-medium"></p>
                        <p className="mb-2 text-xs text-gray-400">
                        </p>
                        <InputGroup
                            placeholder="답안 3을 입력하세요."
                            value={answer3}
                            setValue={setAnswer3}
                            error={errors.answer3}
                        />
                    </div>
                    <div className="my-6">
                        <p className="font-medium"></p>
                        <p className="mb-2 text-xs text-gray-400">
                        </p>
                        <InputGroup
                            placeholder="답안 4를 입력하세요."
                            value={answer4}
                            setValue={setAnswer4}
                            error={errors.answer4}
                        />
                    </div>
                    <button
                        className="px-4 py-1 text-lg font-semibold text-black bg-gray-400 border border-gray-900 rounded w-30"                        >
                        1번 문제 완료!
                    </button>
                </form>
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
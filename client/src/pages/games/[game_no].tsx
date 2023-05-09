/*eslint-disable*/
import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import { formattedQusetion, Game, Question } from '../../types';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useAuthState } from '../../context/auth';
import { GetServerSideProps } from 'next';




const EditQuiz= () => {
    const [winRef, setWinRef] = useState<Window | null>(null);
const [games, setGames] = useState<Game | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [formattedQuestion, setFormattedQuestion] = useState<formattedQusetion | null>(null);

    
    const [question1_title, setQuestion1Title] = useState("");
    const [question1_answer1, setQuestion1Answer1] = useState("");
    const [question1_answer2, setQuestion1Answer2] = useState("");
    const [question1_answer3, setQuestion1Answer3] = useState("");
    const [question1_answer4, setQuestion1Answer4] = useState("");
    const [question1_answer_no, setQuestion1AnswerNo] = useState("");
    const [question1_description, setQuestion1Description] = useState("");
    
    const [question2_title, setQuestion2Title] = useState("");
    const [question2_answer1, setQuestion2Answer1] = useState("");
    const [question2_answer2, setQuestion2Answer2] = useState("");
    const [question2_answer3, setQuestion2Answer3] = useState("");
    const [question2_answer4, setQuestion2Answer4] = useState("");
    const [question2_answer_no, setQuestion2AnswerNo] = useState("");
    const [question2_description, setQuestion2Description] = useState("");
    
    
    const [question3_title, setQuestion3Title] = useState("");
    const [question3_answer1, setQuestion3Answer1] = useState("");
    const [question3_answer2, setQuestion3Answer2] = useState("");
    const [question3_answer3, setQuestion3Answer3] = useState("");
    const [question3_answer4, setQuestion3Answer4] = useState("");
    const [question3_answer_no, setQuestion3AnswerNo] = useState("");
    const [question3_description, setQuestion3Description] = useState("");
    
    
    const [question4_title, setQuestion4Title] = useState("");
    const [question4_answer1, setQuestion4Answer1] = useState("");
    const [question4_answer2, setQuestion4Answer2] = useState("");
    const [question4_answer3, setQuestion4Answer3] = useState("");
    const [question4_answer4, setQuestion4Answer4] = useState("");
    const [question4_answer_no, setQuestion4AnswerNo] = useState("");
    const [question4_description, setQuestion4Description] = useState("");
    
    
    const [question5_title, setQuestion5Title] = useState("");
    const [question5_answer1, setQuestion5Answer1] = useState("");
    const [question5_answer2, setQuestion5Answer2] = useState("");
    const [question5_answer3, setQuestion5Answer3] = useState("");
    const [question5_answer4, setQuestion5Answer4] = useState("");
    const [question5_answer_no, setQuestion5AnswerNo] = useState("");
    const [question5_description, setQuestion5Description] = useState("");
    
    
    const [question6_title, setQuestion6Title] = useState("");
    const [question6_answer1, setQuestion6Answer1] = useState("");
    const [question6_answer2, setQuestion6Answer2] = useState("");
    const [question6_answer3, setQuestion6Answer3] = useState("");
    const [question6_answer4, setQuestion6Answer4] = useState("");
    const [question6_answer_no, setQuestion6AnswerNo] = useState("");
    const [question6_description, setQuestion6Description] = useState("");
    
    
    const [question7_title, setQuestion7Title] = useState("");
    const [question7_answer1, setQuestion7Answer1] = useState("");
    const [question7_answer2, setQuestion7Answer2] = useState("");
    const [question7_answer3, setQuestion7Answer3] = useState("");
    const [question7_answer4, setQuestion7Answer4] = useState("");
    const [question7_answer_no, setQuestion7AnswerNo] = useState("");
    const [question7_description, setQuestion7Description] = useState("");
    
    
    const [question8_title, setQuestion8Title] = useState("");
    const [question8_answer1, setQuestion8Answer1] = useState("");
    const [question8_answer2, setQuestion8Answer2] = useState("");
    const [question8_answer3, setQuestion8Answer3] = useState("");
    const [question8_answer4, setQuestion8Answer4] = useState("");
    const [question8_answer_no, setQuestion8AnswerNo] = useState("");
    const [question8_description, setQuestion8Description] = useState("");
    
    
    const [question9_title, setQuestion9Title] = useState("");
    const [question9_answer1, setQuestion9Answer1] = useState("");
    const [question9_answer2, setQuestion9Answer2] = useState("");
    const [question9_answer3, setQuestion9Answer3] = useState("");
    const [question9_answer4, setQuestion9Answer4] = useState("");
    const [question9_answer_no, setQuestion9AnswerNo] = useState("");
    const [question9_description, setQuestion9Description] = useState("");
    
    
    const [question10_title, setQuestion10Title] = useState("");
    const [question10_answer1, setQuestion10Answer1] = useState("");
    const [question10_answer2, setQuestion10Answer2] = useState("");
    const [question10_answer3, setQuestion10Answer3] = useState("");
    const [question10_answer4, setQuestion10Answer4] = useState("");
    const [question10_answer_no, setQuestion10AnswerNo] = useState("");
    const [question10_description, setQuestion10Description] = useState("");

const [done, setDone] = useState("");
    const [game_name, setGameName] = useState("");
    const [errors, setErrors] = useState<any>({});

    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const router = useRouter();
    const [ownGame, setOwnGame] = useState(false);
    const { authenticated, user } = useAuthState();
    
    const game_no = router.query.game_no;

    const { data: game } = useSWR(game_no ? `/games/${game_no}` : null);
    useEffect(() => {
        if (!game || !user) return;
        setOwnGame(authenticated && user.user_no === game.user_no);
    }, [authenticated, game, user])


    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await axios.get(`/questions/${game_no}`);
            setQuestions(response.data);
        };
        fetchQuestions();
    }, [game_no]);

    useEffect(() => {

        const fetchData = async () => {
            const response2 = await axios.get(`/games/count/${game_no}`)
          const response = await axios.get(`/formattedquestions/${game_no}`);
          setFormattedQuestion(Object.assign({}, ...response.data));
          setGames(Object.assign({}, ...response2.data));
        };
        fetchData();

        setGameName(String(games?.game_name));

        setQuestion1Title(String(formattedQuestion?.question1_title));
        setQuestion1Answer1(String(formattedQuestion?.question1_answer1));
        setQuestion1Answer2(String(formattedQuestion?.question1_answer2));
        setQuestion1Answer3(String(formattedQuestion?.question1_answer3));
        setQuestion1Answer4(String(formattedQuestion?.question1_answer4));
        setQuestion1AnswerNo(String(formattedQuestion?.question1_answer_no));
        setQuestion1Description(String(formattedQuestion?.question1_description));
        const question1AnswerNoElement = document.getElementById("question1_answer_no") as HTMLInputElement;

        if (question1AnswerNoElement) {
          question1AnswerNoElement.value = formattedQuestion?.question1_answer_no ?
            String(formattedQuestion.question1_answer_no) : "";
        }

        setQuestion2Title(String(formattedQuestion?.question2_title));
        setQuestion2Answer1(String(formattedQuestion?.question2_answer1));
        setQuestion2Answer2(String(formattedQuestion?.question2_answer2));
        setQuestion2Answer3(String(formattedQuestion?.question2_answer3));
        setQuestion2Answer4(String(formattedQuestion?.question2_answer4));
        setQuestion2AnswerNo(String(formattedQuestion?.question2_answer_no));
        setQuestion2Description(String(formattedQuestion?.question2_description));
        const question2AnswerNoElement = document.getElementById("question2_answer_no") as HTMLInputElement;

        if (question2AnswerNoElement) {
          question2AnswerNoElement.value = formattedQuestion?.question2_answer_no ?
            String(formattedQuestion.question2_answer_no) : "";
        }
        
        setQuestion3Title(String(formattedQuestion?.question3_title));
        setQuestion3Answer1(String(formattedQuestion?.question3_answer1));
        setQuestion3Answer2(String(formattedQuestion?.question3_answer2));
        setQuestion3Answer3(String(formattedQuestion?.question3_answer3));
        setQuestion3Answer4(String(formattedQuestion?.question3_answer4));
        setQuestion3AnswerNo(String(formattedQuestion?.question3_answer_no));
        setQuestion3Description(String(formattedQuestion?.question3_description));
        const question3AnswerNoElement = document.getElementById("question3_answer_no") as HTMLInputElement;

        if (question3AnswerNoElement) {
          question3AnswerNoElement.value = formattedQuestion?.question3_answer_no ?
            String(formattedQuestion.question3_answer_no) : "";
        }
          

        setQuestion4Title(String(formattedQuestion?.question4_title));
        setQuestion4Answer1(String(formattedQuestion?.question4_answer1));
        setQuestion4Answer2(String(formattedQuestion?.question4_answer2));
        setQuestion4Answer3(String(formattedQuestion?.question4_answer3));
        setQuestion4Answer4(String(formattedQuestion?.question4_answer4));
        setQuestion4AnswerNo(String(formattedQuestion?.question4_answer_no));
        setQuestion4Description(String(formattedQuestion?.question4_description));
        const question4AnswerNoElement = document.getElementById("question4_answer_no") as HTMLInputElement;

        if (question4AnswerNoElement) {
          question4AnswerNoElement.value = formattedQuestion?.question4_answer_no ?
            String(formattedQuestion.question4_answer_no) : "";
        }
           
    
        setQuestion5Title(String(formattedQuestion?.question5_title));
        setQuestion5Answer1(String(formattedQuestion?.question5_answer1));
        setQuestion5Answer2(String(formattedQuestion?.question5_answer2));
        setQuestion5Answer3(String(formattedQuestion?.question5_answer3));
        setQuestion5Answer4(String(formattedQuestion?.question5_answer4));
        setQuestion5AnswerNo(String(formattedQuestion?.question5_answer_no));
        setQuestion5Description(String(formattedQuestion?.question5_description));
        const question5AnswerNoElement = document.getElementById("question5_answer_no") as HTMLInputElement;

        if (question5AnswerNoElement) {
          question5AnswerNoElement.value = formattedQuestion?.question5_answer_no ?
            String(formattedQuestion.question5_answer_no) : "";
        }
        
        setQuestion6Title(String(formattedQuestion?.question6_title));
        setQuestion6Answer1(String(formattedQuestion?.question6_answer1));
        setQuestion6Answer2(String(formattedQuestion?.question6_answer2));
        setQuestion6Answer3(String(formattedQuestion?.question6_answer3));
        setQuestion6Answer4(String(formattedQuestion?.question6_answer4));
        setQuestion6AnswerNo(String(formattedQuestion?.question6_answer_no));
        setQuestion6Description(String(formattedQuestion?.question6_description));
        const question6AnswerNoElement = document.getElementById("question6_answer_no") as HTMLInputElement;

        if (question6AnswerNoElement) {
          question6AnswerNoElement.value = formattedQuestion?.question6_answer_no ?
            String(formattedQuestion.question6_answer_no) : "";
        }
        

        setQuestion7Title(String(formattedQuestion?.question7_title));
        setQuestion7Answer1(String(formattedQuestion?.question7_answer1));
        setQuestion7Answer2(String(formattedQuestion?.question7_answer2));
        setQuestion7Answer3(String(formattedQuestion?.question7_answer3));
        setQuestion7Answer4(String(formattedQuestion?.question7_answer4));
        setQuestion7AnswerNo(String(formattedQuestion?.question7_answer_no));
        setQuestion7Description(String(formattedQuestion?.question7_description));
        const question7AnswerNoElement = document.getElementById("question7_answer_no") as HTMLInputElement;

        if (question7AnswerNoElement) {
          question7AnswerNoElement.value = formattedQuestion?.question7_answer_no ?
            String(formattedQuestion.question7_answer_no) : "";
        }
            

        setQuestion8Title(String(formattedQuestion?.question8_title));
        setQuestion8Answer1(String(formattedQuestion?.question8_answer1));
        setQuestion8Answer2(String(formattedQuestion?.question8_answer2));
        setQuestion8Answer3(String(formattedQuestion?.question8_answer3));
        setQuestion8Answer4(String(formattedQuestion?.question8_answer4));
        setQuestion8AnswerNo(String(formattedQuestion?.question8_answer_no));
        setQuestion8Description(String(formattedQuestion?.question8_description));
        const question8AnswerNoElement = document.getElementById("question8_answer_no") as HTMLInputElement;

        if (question8AnswerNoElement) {
          question8AnswerNoElement.value = formattedQuestion?.question8_answer_no ?
            String(formattedQuestion.question8_answer_no) : "";
        }
              

        setQuestion9Title(String(formattedQuestion?.question9_title));
        setQuestion9Answer1(String(formattedQuestion?.question9_answer1));
        setQuestion9Answer2(String(formattedQuestion?.question9_answer2));
        setQuestion9Answer3(String(formattedQuestion?.question9_answer3));
        setQuestion9Answer4(String(formattedQuestion?.question9_answer4));
        setQuestion9AnswerNo(String(formattedQuestion?.question9_answer_no));
        setQuestion9Description(String(formattedQuestion?.question9_description));
        const question9AnswerNoElement = document.getElementById("question9_answer_no") as HTMLInputElement;

        if (question9AnswerNoElement) {
          question9AnswerNoElement.value = formattedQuestion?.question9_answer_no ?
            String(formattedQuestion.question9_answer_no) : "";
        }
        

        setQuestion10Title(String(formattedQuestion?.question10_title));
        setQuestion10Answer1(String(formattedQuestion?.question10_answer1));
        setQuestion10Answer2(String(formattedQuestion?.question10_answer2));
        setQuestion10Answer3(String(formattedQuestion?.question10_answer3));
        setQuestion10Answer4(String(formattedQuestion?.question10_answer4));
        setQuestion10AnswerNo(String(formattedQuestion?.question10_answer_no));
        setQuestion10Description(String(formattedQuestion?.question10_description));
        const question10AnswerNoElement = document.getElementById("question10_answer_no") as HTMLInputElement;

        if (question10AnswerNoElement) {
          question10AnswerNoElement.value = formattedQuestion?.question10_answer_no ?
            String(formattedQuestion.question10_answer_no) : "";
        }
        
    
    console.log(formattedQuestion);
        console.log(game_no);
      }, [formattedQuestion?.question1_title, ]);
        
      console.log(formattedQuestion?.question1_title);

      useEffect(() => {
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
      }, []);

    const handleMessage = (event: MessageEvent) => {

        if (event.data.type === 'LOAD_QUESTIONS') {
            setGameName(event.data.game_name);
            setQuestion1Title(event.data.question1_title);
            setQuestion1Answer1(event.data.question1_answer1);
            setQuestion1Answer2(event.data.question1_answer2);
            setQuestion1Answer3(event.data.question1_answer3);
            setQuestion1Answer4(event.data.question1_answer4);
            setQuestion1AnswerNo(event.data.question1_answer_no);
            setQuestion1Description(event.data.question1_description);
               setQuestion2Title(event.data.question2_title);
              setQuestion2Answer1(event.data.question2_answer1);
              setQuestion2Answer2(event.data.question2_answer2);
              setQuestion2Answer3(event.data.question2_answer3);
              setQuestion2Answer4(event.data.question2_answer4);
              setQuestion2AnswerNo(event.data.question2_answer_no);
              setQuestion2Description(event.data.question2_description);
              setQuestion3Title(event.data.question3_title);
              setQuestion3Answer1(event.data.question3_answer1);
              setQuestion3Answer2(event.data.question3_answer2);
              setQuestion3Answer3(event.data.question3_answer3);
              setQuestion3Answer4(event.data.question3_answer4);
              setQuestion3AnswerNo(event.data.question3_answer_no);
              setQuestion3Description(event.data.question3_description);
              setQuestion4Title(event.data.question4_title);
              setQuestion4Answer1(event.data.question4_answer1);
              setQuestion4Answer2(event.data.question4_answer2);
              setQuestion4Answer3(event.data.question4_answer3);
              setQuestion4Answer4(event.data.question4_answer4);
              setQuestion4AnswerNo(event.data.question4_answer_no);
              setQuestion4Description(event.data.question4_description);
              setQuestion5Title(event.data.question5_title);
              setQuestion5Answer1(event.data.question5_answer1);
              setQuestion5Answer2(event.data.question5_answer2);
              setQuestion5Answer3(event.data.question5_answer3);
              setQuestion5Answer4(event.data.question5_answer4);
              setQuestion5AnswerNo(event.data.question5_answer_no);
              setQuestion5Description(event.data.question5_description);
              setQuestion6Title(event.data.question6_title);
              setQuestion6Answer1(event.data.question6_answer1);
              setQuestion6Answer2(event.data.question6_answer2);
              setQuestion6Answer3(event.data.question6_answer3);
              setQuestion6Answer4(event.data.question6_answer4);
              setQuestion6AnswerNo(event.data.question6_answer_no);
              setQuestion6Description(event.data.question6_description);
              setQuestion7Title(event.data.question7_title);
              setQuestion7Answer1(event.data.question7_answer1);
              setQuestion7Answer2(event.data.question7_answer2);
              setQuestion7Answer3(event.data.question7_answer3);
              setQuestion7Answer4(event.data.question7_answer4);
              setQuestion7AnswerNo(event.data.question7_answer_no);
              setQuestion7Description(event.data.question7_description);
              setQuestion8Title(event.data.question8_title);
              setQuestion8Answer1(event.data.question8_answer1);
              setQuestion8Answer2(event.data.question8_answer2);
              setQuestion8Answer3(event.data.question8_answer3);
              setQuestion8Answer4(event.data.question8_answer4);
              setQuestion8AnswerNo(event.data.question8_answer_no);
              setQuestion8Description(event.data.question8_description);
              setQuestion9Title(event.data.question9_title);
              setQuestion9Answer1(event.data.question9_answer1);
              setQuestion9Answer2(event.data.question9_answer2);
              setQuestion9Answer3(event.data.question9_answer3);
              setQuestion9Answer4(event.data.question9_answer4);
              setQuestion9AnswerNo(event.data.question9_answer_no);
              setQuestion9Description(event.data.question9_description);
              setQuestion10Title(event.data.question10_title);
              setQuestion10Answer1(event.data.question10_answer1);
              setQuestion10Answer2(event.data.question10_answer2);
              setQuestion10Answer3(event.data.question10_answer3);
              setQuestion10Answer4(event.data.question10_answer4);
              setQuestion10AnswerNo(event.data.question10_answer_no);
              setQuestion10Description(event.data.question10_description);
          
            
          }
      

        if (event.data.type === 'SET_QUESTION1') {
          setQuestion1Title(event.data.question1_title);
          setQuestion1Answer1(event.data.question1_answer1);
          setQuestion1Answer2(event.data.question1_answer2);
          setQuestion1Answer3(event.data.question1_answer3);
          setQuestion1Answer4(event.data.question1_answer4);
          setQuestion1AnswerNo(event.data.question1_answer_no);
          setQuestion1Description(event.data.question1_description);
          
        }
    
        if (event.data.type === 'SET_QUESTION2') {
            setQuestion2Title(event.data.question2_title);
            setQuestion2Answer1(event.data.question2_answer1);
            setQuestion2Answer2(event.data.question2_answer2);
            setQuestion2Answer3(event.data.question2_answer3);
            setQuestion2Answer4(event.data.question2_answer4);
            setQuestion2AnswerNo(event.data.question2_answer_no);
            setQuestion2Description(event.data.question2_description);
          }
    
          if (event.data.type === 'SET_QUESTION3') {
            setQuestion3Title(event.data.question3_title);
            setQuestion3Answer1(event.data.question3_answer1);
            setQuestion3Answer2(event.data.question3_answer2);
            setQuestion3Answer3(event.data.question3_answer3);
            setQuestion3Answer4(event.data.question3_answer4);
            setQuestion3AnswerNo(event.data.question3_answer_no);
            setQuestion3Description(event.data.question3_description);
          }
    
          if (event.data.type === 'SET_QUESTION4') {
            setQuestion4Title(event.data.question4_title);
            setQuestion4Answer1(event.data.question4_answer1);
            setQuestion4Answer2(event.data.question4_answer2);
            setQuestion4Answer3(event.data.question4_answer3);
            setQuestion4Answer4(event.data.question4_answer4);
            setQuestion4AnswerNo(event.data.question4_answer_no);
            setQuestion4Description(event.data.question4_description);
          }
    
          if (event.data.type === 'SET_QUESTION5') {
            setQuestion5Title(event.data.question5_title);
            setQuestion5Answer1(event.data.question5_answer1);
            setQuestion5Answer2(event.data.question5_answer2);
            setQuestion5Answer3(event.data.question5_answer3);
            setQuestion5Answer4(event.data.question5_answer4);
            setQuestion5AnswerNo(event.data.question5_answer_no);
            setQuestion5Description(event.data.question5_description);
          }
    
          if (event.data.type === 'SET_QUESTION6') {
            setQuestion6Title(event.data.question6_title);
            setQuestion6Answer1(event.data.question6_answer1);
            setQuestion6Answer2(event.data.question6_answer2);
            setQuestion6Answer3(event.data.question6_answer3);
            setQuestion6Answer4(event.data.question6_answer4);
            setQuestion6AnswerNo(event.data.question6_answer_no);
            setQuestion6Description(event.data.question6_description);
          }
    
          if (event.data.type === 'SET_QUESTION7') {
            setQuestion7Title(event.data.question7_title);
            setQuestion7Answer1(event.data.question7_answer1);
            setQuestion7Answer2(event.data.question7_answer2);
            setQuestion7Answer3(event.data.question7_answer3);
            setQuestion7Answer4(event.data.question7_answer4);
            setQuestion7AnswerNo(event.data.question7_answer_no);
            setQuestion7Description(event.data.question7_description);
          }
    
          if (event.data.type === 'SET_QUESTION8') {
            setQuestion8Title(event.data.question8_title);
            setQuestion8Answer1(event.data.question8_answer1);
            setQuestion8Answer2(event.data.question8_answer2);
            setQuestion8Answer3(event.data.question8_answer3);
            setQuestion8Answer4(event.data.question8_answer4);
            setQuestion8AnswerNo(event.data.question8_answer_no);
            setQuestion8Description(event.data.question8_description);
          }
    
          if (event.data.type === 'SET_QUESTION9') {
            setQuestion9Title(event.data.question9_title);
            setQuestion9Answer1(event.data.question9_answer1);
            setQuestion9Answer2(event.data.question9_answer2);
            setQuestion9Answer3(event.data.question9_answer3);
            setQuestion9Answer4(event.data.question9_answer4);
            setQuestion9AnswerNo(event.data.question9_answer_no);
            setQuestion9Description(event.data.question9_description);
          }
    
          if (event.data.type === 'SET_QUESTION10') {
            setQuestion10Title(event.data.question10_title);
            setQuestion10Answer1(event.data.question10_answer1);
            setQuestion10Answer2(event.data.question10_answer2);
            setQuestion10Answer3(event.data.question10_answer3);
            setQuestion10Answer4(event.data.question10_answer4);
            setQuestion10AnswerNo(event.data.question10_answer_no);
            setQuestion10Description(event.data.question10_description);
          }
      };
    const windowFeatures = 'location=no,height=500,width=800,left=300,top=100,resizable,scrollbars,status';

    const template_no = "1";

    const fetcher = async (url: string) => {
        return await axios.get(url).then(res => res.data)
    };
    const address = `/games/game/number`;
    const { data: gameNumber } = useSWR<Game[]>(address, fetcher)

    const gameCount = gameNumber?.map((game) => {
        return game.gameNumber;
    })





    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post("/formattedquestions/update", {
                game_name,
                game_no,
                question1_title,
                question1_answer1,
                question1_answer2,
                question1_answer3,
                question1_answer4,
                question1_answer_no,
                question1_description,
                question2_title,
                question2_answer1,
                question2_answer2,
                question2_answer3,
                question2_answer4,
                question2_answer_no,
                question2_description,
                question3_title,
                question3_answer1,
                question3_answer2,
                question3_answer3,
                question3_answer4,
                question3_answer_no,
                question3_description,
                question4_title,
                question4_answer1,
                question4_answer2,
                question4_answer3,
                question4_answer4,
                question4_answer_no,
                question4_description,
                question5_title,
                question5_answer1,
                question5_answer2,
                question5_answer3,
                question5_answer4,
                question5_answer_no,
                question5_description,
                question6_title,
                question6_answer1,
                question6_answer2,
                question6_answer3,
                question6_answer4,
                question6_answer_no,
                question6_description,
                question7_title,
                question7_answer1,
                question7_answer2,
                question7_answer3,
                question7_answer4,
                question7_answer_no,
                question7_description,
                question8_title,
                question8_answer1,
                question8_answer2,
                question8_answer3,
                question8_answer4,
                question8_answer_no,
                question8_description,
                question9_title,
                question9_answer1,
                question9_answer2,
                question9_answer3,
                question9_answer4,
                question9_answer_no,
                question9_description,
                question10_title,
                question10_answer1,
                question10_answer2,
                question10_answer3,
                question10_answer4,
                question10_answer_no,
                question10_description,
            })
            console.log(response);
            if (response.status == 200) {

                const res = await axios.post("/games/update", { game_name, game_no })

                const { data: question } = await axios.post<Question>("/questions/update", {
                    game_no,

                    question1_no: "1",
                    question1_title: question1_title.trim(),
                    question1_answer1: question1_answer1,
                    question1_answer2: question1_answer2,
                    question1_answer3: question1_answer3,
                    question1_answer4: question1_answer4,
                    question1_answer_no: question1_answer_no,
                    question1_description: question1_description,


                    question2_no: "2",
                    question2_title: question2_title.trim(),
                    question2_answer1: question2_answer1,
                    question2_answer2: question2_answer2,
                    question2_answer3: question2_answer3,
                    question2_answer4: question2_answer4,
                    question2_answer_no: question2_answer_no,
                    question2_description: question2_description,


                    question3_no: "3",
                    question3_title: question3_title.trim(),
                    question3_answer1: question3_answer1,
                    question3_answer2: question3_answer2,
                    question3_answer3: question3_answer3,
                    question3_answer4: question3_answer4,
                    question3_answer_no: question3_answer_no,
                    question3_description: question3_description,


                    question4_no: "4",
                    question4_title: question4_title.trim(),
                    question4_answer1: question4_answer1,
                    question4_answer2: question4_answer2,
                    question4_answer3: question4_answer3,
                    question4_answer4: question4_answer4,
                    question4_answer_no: question4_answer_no,
                    question4_description: question4_description,


                    question5_no: "5",
                    question5_title: question5_title.trim(),
                    question5_answer1: question5_answer1,
                    question5_answer2: question5_answer2,
                    question5_answer3: question5_answer3,
                    question5_answer4: question5_answer4,
                    question5_answer_no: question5_answer_no,
                    question5_description: question5_description,


                    question6_no: "6",
                    question6_title: question6_title.trim(),
                    question6_answer1: question6_answer1,
                    question6_answer2: question6_answer2,
                    question6_answer3: question6_answer3,
                    question6_answer4: question6_answer4,
                    question6_answer_no: question6_answer_no,
                    question6_description: question6_description,


                    question7_no: "7",
                    question7_title: question7_title.trim(),
                    question7_answer1: question7_answer1,
                    question7_answer2: question7_answer2,
                    question7_answer3: question7_answer3,
                    question7_answer4: question7_answer4,
                    question7_answer_no: question7_answer_no,
                    question7_description: question7_description,

                    question8_no: "8",
                    question8_title: question8_title.trim(),
                    question8_answer1: question8_answer1,
                    question8_answer2: question8_answer2,
                    question8_answer3: question8_answer3,
                    question8_answer4: question8_answer4,
                    question8_answer_no: question8_answer_no,
                    question8_description: question8_description,


                    question9_no: "9",
                    question9_title: question9_title.trim(),
                    question9_answer1: question9_answer1,
                    question9_answer2: question9_answer2,
                    question9_answer3: question9_answer3,
                    question9_answer4: question9_answer4,
                    question9_answer_no: question9_answer_no,
                    question9_description: question9_description,


                    question10_no: "10",
                    question10_title: question10_title.trim(),
                    question10_answer1: question10_answer1,
                    question10_answer2: question10_answer2,
                    question10_answer3: question10_answer3,
                    question10_answer4: question10_answer4,
                    question10_answer_no: question10_answer_no,
                    question10_description: question10_description,
                })
                console.log(res);
                console.log(question);
                window.location.reload();

            } else {
                console.error(`Error with first axios.post call: ${response.data.message}`);
            }
        } catch (error: any) {
            console.log(error);
            // setErrors(error.response.data);
            setErrors(error.response?.data || {})
        }
    }

 

    return (

        <div className="bg-gray-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <div className="inline-flex flex-col items-center justify-start bg-white" style={{ width: 1440, height: 7000, }}>
                <div className="relative bg-white bg-opacity-80" style={{ width: 1440, height: 744, }}>
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>

                    <div className="relative" style={{ width: 689, height: 78, left: 10, top: 10, }}>
                            <div className="relative left-36 my-6 top-10">
                                <input
                                    type="text"
                                    placeholder="제목을 입력하세요"
                                    className="text-xl w-full underline"
                                    value={game_name}
                                    onChange={(e) => setGameName(e.target.value)}
                                    onError={errors.game_name}
                                />
                                <br />
                                <small className='font-medium text-red-500'>
                                    {errors.game_name}
                                </small>
                            </div>

                            <img className="w-32 h-20 absolute left-0 top-0" src="https://via.placeholder.com/127x78" />
                            <div className="absolute border-gray-800" style={{ width: 538, height: 1, left: 151, top: 63.49, }} />
                        </div>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-start px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 1.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample1`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="1번 문제: 질문을 입력하세요"
                                    id="question1_title"
                                    value={question1_title}
                                    onChange={(e) => setQuestion1Title(e.target.value)}
                                />
<small className='font-medium text-red-500'>
{errors.question1_title}
</small>
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>

                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question1_answer1}
                                        onChange={(e) => setQuestion1Answer1(e.target.value)}
                                        id="question1_answer1"

                                    />
                                    <small className='font-medium text-red-500'>
{errors.question1_answer1}
</small>
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>

                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question1_answer2}
                                        onChange={(e) => setQuestion1Answer2(e.target.value)}
                                        id="question1_answer2"
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question1_answer2}
</small>
                     
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
             
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question1_answer3}
                                        onChange={(e) => setQuestion1Answer3(e.target.value)}
                                        id="question1_answer3"
                                    />
                               <small className='font-medium text-red-500'>
{errors.question1_answer3}
</small>

                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
          
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question1_answer4}
                                        onChange={(e) => setQuestion1Answer4(e.target.value)}
                                        id="question1_answer4"
                                    />
   <small className='font-medium text-red-500'>
{errors.question1_answer4}
</small>

                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question1_description}
                                    onChange={(e) => setQuestion1Description(e.target.value)}
                                    id="question1_description"
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>

                            <select onChange={(e) => setQuestion1AnswerNo(e.target.value)}
                                id="question1_answer_no"
                                className="form-select">
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question1_answer_no}
</small>
                        </div>
                    </div>
                    .
           
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 2.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample2`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="2번 문제: 질문을 입력하세요"

                                    value={question2_title}
                                    onChange={(e) => setQuestion2Title(e.target.value)}
                                    id="question2_title"
                                />                   
                                <small className='font-medium text-red-500'>
{errors.question2_title}
</small>

                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question2_answer1}
                                        onChange={(e) => setQuestion2Answer1(e.target.value)}
                                        id="question2_answer1"
                                    />
            <small className='font-medium text-red-500'>
{errors.question2_answer1}
</small>
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
      
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question2_answer2}
                                        onChange={(e) => setQuestion2Answer2(e.target.value)}
                                        id="question2_answer2"
                                    />
            <small className='font-medium text-red-500'>
{errors.question2_answer2}
</small>

                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
       
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question2_answer3}
                                        onChange={(e) => setQuestion2Answer3(e.target.value)}
                                        id="question2_answer3"
                                    />
                  <small className='font-medium text-red-500'>
{errors.question2_answer3}
</small>
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
         
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question2_answer4}
                                        onChange={(e) => setQuestion2Answer4(e.target.value)}
                                        id="question2_answer4"
                                    />
                <small className='font-medium text-red-500'>
{errors.question2_answer4}
</small>

                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"
                                    id="question2_description"
                                    value={question2_description}
                                    onChange={(e) => setQuestion2Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion2AnswerNo(e.target.value)} id="question2_answer_no">
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question2_answer_no}
</small>
                        </div>
                    </div>
.
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 3.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample3`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="3번 문제: 질문을 입력하세요"
                                    id="question3_title"
                                    value={question3_title}
                                    onChange={(e) => setQuestion3Title(e.target.value)}
                                />                   
                                <small className='font-medium text-red-500'>
{errors.question3_title}
</small>
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
             
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question3_answer1}
                                        id="question3_answer1"
                                        onChange={(e) => setQuestion3Answer1(e.target.value)}
                                    />
                         <small className='font-medium text-red-500'>
{errors.question3_answer1}
</small>
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                  
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question3_answer2}
                                        id="question3_answer2"
                                        onChange={(e) => setQuestion3Answer2(e.target.value)}
                                    />
              <small className='font-medium text-red-500'>
{errors.question3_answer2}
</small>
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
            
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question3_answer3}
                                        id="question3_answer3"
                                        onChange={(e) => setQuestion3Answer3(e.target.value)}
                                    />
                      <small className='font-medium text-red-500'>
{errors.question3_answer3}
</small>

                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                     
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question3_answer4}
                                        id="question3_answer4"
                                        onChange={(e) => setQuestion3Answer4(e.target.value)}
                                    />
                            <small className='font-medium text-red-500'>
{errors.question3_answer4}
</small>

                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question3_description}
                                    id="question3_description"
                                    onChange={(e) => setQuestion3Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion3AnswerNo(e.target.value)} id="question3_answer_no">
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question3_answer_no}
</small>
                        </div>
                    </div>
.
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 4.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample4`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="4번 문제: 질문을 입력하세요"

                                    value={question4_title}
                                    id="question4_title"
                                    onChange={(e) => setQuestion4Title(e.target.value)}
                                />                    
                                <small className='font-medium text-red-500'>
{errors.question4_title}
</small>

                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                 
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question4_answer1}
                                        id="question4_answer1"
                                        onChange={(e) => setQuestion4Answer1(e.target.value)}
                                    />
                                   <small className='font-medium text-red-500'>
{errors.question4_answer1}
</small>
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question4_answer2}
                                        id="question4_answer2"
                                        onChange={(e) => setQuestion4Answer2(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question4_answer2}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question4_answer3}
                                        id="question4_answer3"
                                        onChange={(e) => setQuestion4Answer3(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question4_answer3}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question4_answer4}
                                        id="question4_answer4"
                                        onChange={(e) => setQuestion4Answer4(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question4_answer4}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question4_description}
                                    id="question4_description"
                                    onChange={(e) => setQuestion4Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion4AnswerNo(e.target.value)} id="question4_answer_no">
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question4_answer_no}
</small>
                        </div>
                    </div>
.
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 5.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample5`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="5번 문제: 질문을 입력하세요"

                                    value={question5_title}
                                    id="question5_title"
                                    onChange={(e) => setQuestion5Title(e.target.value)}
                                />                    
                                <small className='font-medium text-red-500'>
{errors.question5_title}
</small>
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question5_answer1}
                                        id="question5_answer1"
                                        onChange={(e) => setQuestion5Answer1(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question5_answer1}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question5_answer2}
                                        id="question5_answer2"
                                        onChange={(e) => setQuestion5Answer2(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question5_answer2}
</small>

                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question5_answer3}
                                        id="question5_answer3"
                                        onChange={(e) => setQuestion5Answer3(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question5_answer3}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question5_answer4}
                                        id="question5_answer4"
                                        onChange={(e) => setQuestion5Answer4(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question5_answer4}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question5_description}
                                    id="question5_description"
                                    onChange={(e) => setQuestion5Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion5AnswerNo(e.target.value)} id="question5_answer_no">
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question5_answer_no}
</small>
                        </div>
                    </div>
.
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 6.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample6`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="6번 문제: 질문을 입력하세요"

                                    value={question6_title}
                                    id="question6_title"
                                    onChange={(e) => setQuestion6Title(e.target.value)}
                                />             
                                
                                <small className='font-medium text-red-500'>
{errors.question6_title}
</small>
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question6_answer1}
                                        id="question6_answer1"
                                        onChange={(e) => setQuestion6Answer1(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question6_answer1}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question6_answer2}
                                        id="question6_answer2"

                                        onChange={(e) => setQuestion6Answer2(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question6_answer2}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question6_answer3}
                                        id="question6_answer3"

                                        onChange={(e) => setQuestion6Answer3(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question6_answer3}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question6_answer4}
                                        id="question6_answer4"

                                        onChange={(e) => setQuestion6Answer4(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question6_answer4}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question6_description}
                                    id="question6_description"

                                    onChange={(e) => setQuestion6Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion6AnswerNo(e.target.value)}                                     id="question6_answer_no"
>
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question6_answer_no}
</small>
                        </div>
                    </div>
.
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 7.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample7`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="7번 문제: 질문을 입력하세요"

                                    value={question7_title}
                                    id="question7_title"

                                    onChange={(e) => setQuestion7Title(e.target.value)}
                                />    
                                <small className='font-medium text-red-500'>
{errors.question7_title}
</small>                {/* <div className="border-gray-500" style={{width: 632.26, height: 1,}}/> */}
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question7_answer1}
                                        id="question7_answer1"

                                        onChange={(e) => setQuestion7Answer1(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question7_answer1}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question7_answer2}
                                        id="question7_answer2"

                                        onChange={(e) => setQuestion7Answer2(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question7_answer2}
</small>

                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question7_answer3}
                                        id="question7_answer3"

                                        onChange={(e) => setQuestion7Answer3(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question7_answer3}
</small>

                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question7_answer4}
                                        id="question7_answer4"

                                        onChange={(e) => setQuestion7Answer4(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question7_answer4}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question7_description}
                                    id="question7_description"

                                    onChange={(e) => setQuestion7Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion7AnswerNo(e.target.value)}                                         id="question7_answer_no"
>
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question7_answer_no}
</small>
                        </div>
                    </div>
.
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 8.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample8`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="8번 문제: 질문을 입력하세요"

                                    value={question8_title}
                                    id="question8_title"

                                    onChange={(e) => setQuestion8Title(e.target.value)}
                                />          
                                <small className='font-medium text-red-500'>
{errors.question8_title}
</small>
          {/* <div className="border-gray-500" style={{width: 632.26, height: 1,}}/> */}
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question8_answer1}
                                        id="question8_answer1"

                                        onChange={(e) => setQuestion8Answer1(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question8_answer1}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question8_answer2}
                                        id="question8_answer2"

                                        onChange={(e) => setQuestion8Answer2(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question8_answer2}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question8_answer3}
                                        id="question8_answer3"

                                        onChange={(e) => setQuestion8Answer3(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question8_answer3}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question8_answer4}
                                        id="question8_answer4"

                                        onChange={(e) => setQuestion8Answer4(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question8_answer4}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question8_description}
                                    id="question8_description"

                                    onChange={(e) => setQuestion8Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion8AnswerNo(e.target.value)} id="question8_answer_no">
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question8_answer_no}
</small>
                        </div>
                    </div>
.
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 9.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample9`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="9번 문제: 질문을 입력하세요"

                                    value={question9_title}
                                    id="question9_title"
                                    onChange={(e) => setQuestion9Title(e.target.value)}
                                />            
               <small className='font-medium text-red-500'>
{errors.question9_title}
</small>
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question9_answer1}
                                        id="question9_answer1"

                                        onChange={(e) => setQuestion9Answer1(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question9_answer1}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question9_answer2}
                                        id="question9_answer2"

                                        onChange={(e) => setQuestion9Answer2(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question9_answer2}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question9_answer3}
                                        id="question9_answer3"

                                        onChange={(e) => setQuestion9Answer3(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question9_answer3}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question9_answer4}
                                        id="question9_answer4"

                                        onChange={(e) => setQuestion9Answer4(e.target.value) }
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question9_answer4}
</small>

                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question9_description}
                                    id="question9_description"

                                    onChange={(e) => setQuestion9Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion9AnswerNo(e.target.value)} id="question9_answer_no"
>
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question9_answer_no}
</small>
                        </div>
                    </div>
.
                    <div className="relative absolute" style={{ width: 727, height: 520, left: 377, top: 62, }}>
                        <div className="inline-flex flex-col items-center justify-end absolute left-0 bottom-0" style={{ width: 727, height: 451, }}>
                            <div className="inline-flex space-x-3.5 items-center justify-end px-5 pt-1.5 pb-2.5 bg-gray-300 shadow rounded-tl-lg rounded-tr-lg" style={{ width: 727, height: 45, }}>
                                <p className="text-xl font-bold" style={{ width: 446, height: 21, }}>문항 10.</p>
                                <div className="flex items-center justify-center px-2.5 pt-0.5 pb-1 bg-purple-500 rounded-md">
                                    <button className="open text-sm font-bold text-center text-gray-100" onClick={() => window.open(`/saves/loadSample/sample10`, '_blank', windowFeatures)}>불러오기</button>
                                </div>
                                </div>

                            <div className="bg-white shadow rounded-bl-lg rounded-br-lg" style={{ width: 727, height: 350, }} />
                        </div>
                        <div className="inline-flex flex-col space-y-5 items-center justify-start absolute inset-x-0 bottom-0 mx-auto" style={{ width: 638, height: 315.62, }}>
                            <div className="flex flex-col" style={{ width: 632.26, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="10번 문제: 질문을 입력하세요"

                                    value={question10_title}
                                    id="question10_title"

                                    onChange={(e) => setQuestion10Title(e.target.value)}
                                />            
                                <small className='font-medium text-red-500'>
{errors.question10_title}
</small>
                            </div>
                            <div className="flex flex-col space-y-4 items-center justify-end" style={{ width: 638, height: 173, }}>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="1번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question10_answer1}
                                        id="question10_answer1"
                                        onChange={(e) => setQuestion10Answer1(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question10_answer1}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="2번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question10_answer2}
                                        id="question10_answer2"
                                        onChange={(e) => setQuestion10Answer2(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question10_answer2}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="3번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question10_answer3}
                                        id="question10_answer3"
                                        onChange={(e) => setQuestion10Answer3(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question10_answer3}
</small>

                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">
                                        </div>
                                    </div>
                                </div>
                                <div className="relative" style={{ width: 638, height: 30, }}>
                                    {/* <div className="absolute m-auto inset-0" style={{ width: 539.48, height: 36, }}>
                                        <div className="border rounded-lg border-gray-500" style={{ width: 539.48, height: 36, }} />
                                    </div> */}
                                    <input
                                        type="text"
                                        placeholder="4번: 보기를 입력하세요. "
                                        className=' w-full p-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                        value={question10_answer4}
                                        id="question10_answer4"
                                        onChange={(e) => setQuestion10Answer4(e.target.value)}
                                    />
                                    <small className='font-medium text-red-500'>
{errors.question10_answer4}
</small>
                                    {/* <div className="inline-flex items-center justify-center w-6 h-6 py-0.5 px-0.5 absolute bg-white" style={{ left: 18.17, top: 6, }}>
                                        <div className="flex-1 h-full border-2 rounded-full border-black" />
                                    </div> */}
                                    <div className="w-6 h-6 absolute" style={{ left: 58.35, top: 6, }}>
                                        <div className="flex-1 h-full">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 items-center justify-end" style={{ width: 635.13, height: 50, }}>
                                <input
                                    type="text"
                                    className="w-full underline text-lg"
                                    placeholder="해설을 입력하세요"

                                    value={question10_description}
                                    id="question10_description"
                                    onChange={(e) => setQuestion10Description(e.target.value)}
                                />                                              <div className="border-gray-500" style={{ width: 635.13, height: 10, }} />
                            </div>
                            <select onChange={(e) => setQuestion10AnswerNo(e.target.value)} id="question10_answer_no">
                                <option value="not_selected">정답을 선택하세요.</option>
                                <option value="1">답안 1</option>
                                <option value="2">답안 2</option>
                                <option value="3">답안 3</option>
                                <option value="4">답안 4</option>
                            </select>
                            <small className='font-medium text-red-500'>
{errors.question10_answer_no}
</small>

                        </div>
.
                        <form onSubmit={handleSubmit}>
                        <div className="w-48 h-11 rounded-full" style={{ left: 538}}>
                            <div className="flex items-center justify-center flex-1 h-full py-2.5 px-6 bg-yellow-400 rounded-lg">
                                <button className="flex-1 text-xl font-bold text-center text-white">출제완료</button>
                            </div>
                        </div>
                        </form>

                        <div className="w-48 h-11  rounded-full" style={{ left: 753, }}>
                            <div className="flex items-center justify-center flex-1 h-full py-2.5 px-6 bg-gray-400 rounded-lg">
                                <button className="flex-1 text-xl font-bold text-center text-white" onClick={() => {window.location.reload()}}>취소</button>
                            </div>
                        </div>
                        <img className="w-0.5 h-0.5  rounded-full" style={{ left: 817, }} src="https://via.placeholder.com/1x3" />
                    </div>
                </div>
            </div>
        </div>

    )
}

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

export default EditQuiz;
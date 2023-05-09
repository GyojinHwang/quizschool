import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Question, Sample } from '../../../types'
import { FaWindows } from 'react-icons/fa';



const SearchSampleQuestions: React.FC = () => {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const [grade, setGrade] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [chapter, setChapter] = useState<string>('');


  useEffect(() => {
    const fetchSamples = async () => {
      const response = await axios.get('/samples');
      setSamples(response.data);
    };

    fetchSamples();
  }, []);

  const handleRadioButtonChange = (sample: Sample) => {
    setSelectedSample(sample);
  };

  const handleSearch = async () => {
    const response = await axios.post('/samples/search', {
      grade, subject, chapter
    });
    setSamples(response.data);
  };


  const handleConfirm = () => {
    if (!selectedSample) {
      return;
    }
    window.opener.document.getElementById("question3_answer_no").value = selectedSample?.sample_answer_no;

    window.opener?.postMessage({
      type: 'SET_QUESTION3',
      question3_title: selectedSample?.sample_title || '',
      question3_answer1: selectedSample?.sample_answer1 || '',
      question3_answer2: selectedSample?.sample_answer2 || '',
      question3_answer3: selectedSample?.sample_answer3 || '',
      question3_answer4: selectedSample?.sample_answer4 || '',
      question3_answer_no: selectedSample?.sample_answer_no || '',
      question3_description: selectedSample?.sample_description || '',

    }, '*');
    window.close();
  };
  const handleCancel = () => {
    window.close();
  };

  return (

    <div>
      <div className="w-10/12 p-2">

        <div>
          <select value={grade} onChange={e => setGrade(e.target.value)}>
            <option value="">학년</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <select value={subject} onChange={e => setSubject(e.target.value)}>
            <option value="">과목</option>
            <option value="국어">국어</option>
            <option value="영어">영어</option>
            <option value="수학">수학</option>
            <option value="사회">사회</option>
            <option value="과학">과학</option>
          </select>
          <select value={chapter} onChange={e => setChapter(e.target.value)}>
            <option value="">단원</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <button onClick={handleSearch}>검색</button>
        </div>
        <table>
          <thead>
            <tr><th></th>
              <th>문제</th>
              <th>정답</th>
              <th>해설</th>
            </tr>
          </thead>
          <tbody>
            {samples.map(sample => (
              <tr key={sample.sample_title}>
                <td>

                  <input
                    type="radio"
                    checked={selectedSample === sample}
                    onChange={() => handleRadioButtonChange(sample)}
                  /> </td>
                <td>{sample.sample_title}</td>
                <td>{sample.sample_answer_no === "1" ? sample.sample_answer1
                  : sample.sample_answer_no === "2" ? sample.sample_answer2
                    : sample.sample_answer_no === "3" ? sample.sample_answer3
                      : sample.sample_answer4}</td>
                <td>{sample.sample_description}</td>

              </tr>
            ))}
          </tbody>
        </table>
        <div>

          <button onClick={handleCancel}>취소</button>
          <button onClick={handleConfirm}>확인</button>
        </div>
      </div>

    </div>

  );
};

export default SearchSampleQuestions;

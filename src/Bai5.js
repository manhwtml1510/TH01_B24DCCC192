import { useState } from "react";

function App() {
  const Question = [
    { q: "ReactJs dùng để làm gì?",
      options: ["Moblie App", "WebUI", "Hệ điều hành", "Cơ sở dữ liệu"],
      answer :"WebUI"

    },
    {
      q: "Props trong React là gì?",
      options: ["Trạng thái", "Thuộc tính truyền vào", "API", "CSS"],
      answer: "Thuộc tính truyền vào"
    },
    {
      q: "State dùng để?",
      options: ["Quản lý dữ liệu thay đổi", "Định nghĩa Component","Kết nối Backend","Trang trí giao diện"],
      answer: "Quản lý dữ liệu thay đổi"
    }
  ];
  const [S, setS] = useState(0);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const handleAnswer = (option) => {
    if (option === Question[S].answer) {
      setScore(score + 1);
      alert("Đáp án đúng");
    } else {
      alert("Đáp án sai");
    }
    if (S+1<Question.length) {
      setS(S+1);
    } else setShow(true);
  };
    return (
    <div>
      <h1>Bài 5: Quiz App</h1>
      {show ? (
        <p>Bạn trả lời đúng {score}/{Question.length} câu.</p>
      ) : (
        <>
          <h3>{Question[S].q}</h3>
          {Question[S].options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(opt)}>
              {opt}
            </button>
          ))}
        </>
      )}
    </div>
  );
}
export default App;

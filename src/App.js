//UI 왼쪽은 나 오른쪽은 컴퓨터 이름, 사진, 이기고짐
//가위바위 보 버튼
// 가위 바위 보 버튼 누르면 내가 낸 것을 표현
// 컴퓨터는 랜덤으로 제시를 해줘야한다.
// 결과에 따라서 누가 이기고 졌는지를 표시
// 아웃라인도 표현

import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

const selection = {
    rock: {
        name: "rock",
        img: "https://media.istockphoto.com/photos/stone-pebble-gray-picture-id1288973456?b=1&k=20&m=1288973456&s=170667a&w=0&h=GBGgp4yrZv4ooDBws8yHF24sJ3rkEpObYsBWpVNKFT8=",
    },
    paper: {
        name: "paper",
        img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    },
    scissor: {
        name: "scissor",
        img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
    },
};

console.log(selection);

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [judgement, setJudgement] = useState("");

    const play = (userChoice) => {
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        setUserSelect(selection[userChoice]);
        let result = judge(selection[userChoice], computerChoice);
        setJudgement(result);
    };

    const randomChoice = () => {
        let itemArray = Object.keys(selection);
        let randomNum = Math.floor(Math.random()*itemArray.length);
        return selection[itemArray[randomNum]];
    }

    const judge = (user,computer) => {
        if(user.name == computer.name){
            return "Tie";
        } else if(user.name == "rock") return computer.name == "scissor"?"Win":"Lose"
        else if(user.name == "paper") return computer.name == "rock"?"Win":"Lose"
        else if(user.name == "scissor") return computer.name == "paper"?"Win":"Lose"
    }

    return (
        <div className="App">
            <div className="box-area">
                <Box title="User" item={userSelect} judgement={judgement}/>
                <Box title="Computer" item={computerSelect} judgement={judgement}/>
            </div>
            <div className="button-area">
                <button onClick={() => play("rock")}>Rock</button>
                <button onClick={() => play("paper")}>Paper</button>
                <button onClick={() => play("scissor")}>Scissor</button>
            </div>
        </div>
    );
}

export default App;

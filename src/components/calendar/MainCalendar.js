<<<<<<< HEAD
import '../../App.css';
import React, {useState} from 'react';
import Calendar from 'react-calendar';
import { array } from 'prop-types';
// import moment from 'moment';
//import AddToDo from '../todolist/addToDo';
//import moment from 'moment';
// import axios from 'axios';
// import { array } from 'prop-types';
// import moment from 'moment';
=======
import "../../App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import AddToDo from "../todolist/addToDo";
import moment from "moment";
import axios from "axios";
>>>>>>> 903577b6b0ee9b22dcfe8adf1591590212c842ed
// import axios from 'axios';

function MainCalendar() {
	const [value, onChange] = useState(new Date());
	//하이라이트가 들어갈 날짜를 배열로 작성
	// const marks = [
	//   "2022-05-15",
	//   "2022-05-03",
	//   "2022-05-07",
	//   "2022-05-12",
	// ];
	axios({
		method: "post",
		url: "",
		data: {
			// 특정날짜 선택 시, 그 날짜에 대한 데이터를 요청하는 코드가 들어가야함
		},
	}).then((res) => {
		const data = res.data;
		const scheduleCart = data.data;
		const realdata = scheduleCart.schedules; //스케쥴 배열

<<<<<<< HEAD
  const [value, onChange] = useState(new Date());
  //  const [schedule, setSchedule] = useState("");

  const onActiveStartDateChange = ({ action, activeStartDate, value, view }) => {
    document.getElementById("amu").textContent = activeStartDate
  
    let FullDate = [];

    const yearMonth = FullDateasdf

    for (var i = 0; i<8; i++) {
      FullDate.concat(new array());
    }




    activeStartDate;
    
    // console.log(yearMonth);

    // document.writeln(yearMonth[0]);
    // document.writeln(yearMonth[1]);
    // document.writeln(yearMonth[2]);
    // document.writeln(yearMonth[3]);
  };

 

  //  const onClickDay = (value, event) => {
  //    document.getElementById("amu").textContent = value
  //  };

  return (
    <div>
      
      <Calendar

        onChange={onChange}
        // onClickMonth={onClickMonth}
        onActiveStartDateChange={onActiveStartDateChange}
        maxDetail="month"
        // onClickDay={onClickDay}
        // onClickMonth={onClickMonth}
        // view={onActiveStartDateChange}
        
        value={value}/>
        
        <h1 id="amu">

        </h1>
        <div>

        </div>
    </div>

    
    
  );
=======
		//console.log(realdata.split("T")[0].slice(-2));

		let calendar = [];

		for (var i = 0; i < 31; i++) {
			calendar.push(new Array());
		}

		realdata.forEach((schedule) => {
			calendar[schedule.targetDate.split("T")[0].slice(-2) - 1].push(schedule);
		});
	});

	return (
		<div>
      <div>
          <div class="b_all" id="b_red"></div>
          <div class="b_all" id="b_yel"></div>
          <div class="b_all" id="b_gre"></div>
          <Calendar
            onChange={onChange}
            value={value}
            //날짜 숫자 뒤에 '일'없앰
            formatDay={(locale, date) => moment(date).format("DD")}/>
        </div>
>>>>>>> 903577b6b0ee9b22dcfe8adf1591590212c842ed

			<div>여기에는 저장되어있던 데이터들(투두리스트-해당날짜에 맞는)이 불러와져야함.</div>
		</div>
	);
}

export default MainCalendar;

<<<<<<< HEAD
// axios({
  //   method:'post',
  //   url:'172.30.17.114:3001/todo',
  //   data: {
  //     targetYearMonth: schedule, // 202206

  //     // 특정날짜 선택 시, 그 날짜에 대한 데이터를 요청하는 코드가 들어가야함
  //   },
  // }).then(res => {
  //   const myData = res.data;
  //   const monthSchedule = myData.data;
  //   const daySchedule = monthSchedule.schedules //스케쥴 배열

  //   console.log(daySchedule.split("T")[0].slice(-2));

  //   let calendar = [];

  //   for (var i = 0; i<31; i++){
  //     calendar.concat(new array());
  //   }

  //   daySchedule.forEach((schedule)=>{
  //     calendar[schedule.targetDate.split("T")[0].slice(-2)-1].concat(schedule);
  //   })
  // })



  //하이라이트가 들어갈 날짜를 배열로 작성
  // const marks = [1
  //   "2022-05-15",
  //   "2022-05-03",
  //   "2022-05-07",
  //   "2022-05-12",
  // ]; 
=======
// formatDay={(locale, date) => moment(date).format("DD")}
// tileClassName={({ date, view }) => {// 날짜 타일에 컨텐츠 추가하기
//   if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
//     return "highlight";
//   }
// }}
// tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
//   // 추가할 html 태그를 변수 초기화
//   let html = [];
//   // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
//   if (marks.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
//     html.push(<div className="todo"></div>);
//   }
//   // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
//   return (
//     <>
//       <div className="flex justify-center items-center absoluteDiv">
//         {html}
//       </div>
//     </>
//   );
// }}
>>>>>>> 903577b6b0ee9b22dcfe8adf1591590212c842ed

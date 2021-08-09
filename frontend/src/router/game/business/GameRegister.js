import GameApi from 'api/GameApi'
import GymApi from 'api/GymApi'
import React, {useEffect, useState} from 'react'
import './GameRegister.css'

const GameRegister = () => {
  // 오늘 날짜
  const today = new Date()

  // 경기 등록 시 필요 데이터
  const [gymName, setGymName] = useState(null)
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth()+1)
  const [date, setDate] = useState(today.getDate())
  const [startHour, setStartHour] = useState(null)
  const [startMinute, setStartMinute] = useState(null)
  const [finishHour, setFinishHour] = useState(null)
  const [finishMinute, setFinishMinute] = useState(null)
  const [maxPeople, setMaxPeople] = useState(null)
  const [minPeople, setMinPeople] = useState(null)
  const [fee, setFee] = useState(null)

  // 체육관 목록
  const [gymList, setGymList] = useState([])


  // 로그인 한 비즈니스 유저의 체육관 표시
  useEffect(() => {
    const businessId = JSON.parse(localStorage.getItem('currentUserbusiness')).id

    const data = {businessId,}
    GymApi.myGymList(
      data,
      res => {
        const {data} = res
        setGymList(data)
      },
      err => {
        console.log(err)
      }
    )
  }, [])

  // 입력 데이터 업데이트
  const onChange = (e) => {
    const {target:{value, id}} = e
    if (id === "gymName") {
      setGymName(value)
    } else if (id === "year") {
      setYear(value)
    } else if (id === "month") {
      setMonth(value)
    } else if (id === "date") {
      setDate(value)
    } else if (id === "startHour") {
      setStartHour(value)
    } else if (id === "startMinute") {
      setStartMinute(value)
    } else if (id === "finishHour") {
      setFinishHour(value)
    } else if (id === "finishMinute") {
      setFinishMinute(value)
    } else if (id === "maxPeople") {
      setMaxPeople(value)
    } else if (id === "minPeople") {
      setMinPeople(value)
    } else if (id === "fee") {
      setFee(value)
    }
  }

  // 픽업 게임 백엔드 등록
  const registerGame = () => {
    const month_ = String(month).length < 2 ? "0"+String(month) : month
    const date_ = String(date).length < 2 ? "0"+String(date) : date
    const startHour_ = String(startHour).length < 2 ? "0"+String(startHour) : String(startHour)
    const startMinute_ = String(startMinute).length < 2 ? "0"+String(startMinute) : String(startMinute)
    const finishHour_ = String(finishHour).length < 2 ? "0"+String(finishHour) : String(finishHour)
    const finishMinute_ = String(finishMinute).length < 2 ? "0"+String(finishMinute) : String(finishMinute)
    const data = {
      gymName,
      date: String(year) + "-" + String(month_) + "-" + String(date_),
      startTime: startHour_ + ":" + startMinute_ + ":00",
      endTime: finishHour_ + ":" + finishMinute_ + ":00",
      maxPeople: Number(maxPeople),
      minPeople: Number(minPeople),
      participationFee: Number(fee),
    }
    
    GameApi.registerGame(
      data,
      res => {
        alert("날짜 : " + year + "." + month_ + "." + date_ +"\n" +
          "시간 : " + startHour_ + ":" + startMinute_ + " ~ " + finishHour_ + ":" + finishMinute_ + "\n" + 
          "픽업 게임이 생성되었습니다!"
        )
      },
      err => {
        console.log(err)
      }
    )

  }


  return (
    <div className="game_register_container">
      <h1>픽업 게임 등록</h1>
      <div className="game__container">
        <div className="gym_select_box">
          <h4>체육관을 선택해주세요</h4>
          <select id="gymName" onChange={onChange}>
            {gymList.map(gym => {
              return (
                <option key={gym.id}>{gym.name}</option>
              )
            })}
          </select>
        </div>
        <div className="date_select_box">
          <h4>날짜를 입력해주세요</h4>
          <input type="text" id="year" value={year} onChange={onChange} />
          <span>년</span>
          <input type="text" id="month" value={month} onChange={onChange} />
          <span>월</span>
          <input type="text" id="date" value={date} onChange={onChange} />
          <span>일</span>
        </div>
        <div className="time_select_box">
          <h4>시작 시간과 종료 시간을 정해주세요</h4>
          <div className="time_container">
            <div className="start_time">
              <h5>시작 시간</h5>
              <input type="text" id="startHour" onChange={onChange} />
              <span>:</span>
              <input type="text" id="startMinute" onChange={onChange} />
            </div>
            <p>~</p>
            <div className="finish_time">
              <h5>종료 시간</h5>
              <input type="text" id="finishHour" onChange={onChange} />
              <span>:</span>
              <input type="text" id="finishMinute" onChange={onChange} />
            </div>
          </div>
        </div>
        <div className="people_select_box">
          <h4>최소 인원과 최대 인원을 정해주세요</h4>
          <div className="people_container">
            <div className="min_people">
              <h5>최소 인원</h5>
              <input type="number" id="minPeople" onChange={onChange} /><span>명</span>
            </div>
            <p>~</p>
            <div className="max_people">
              <h5>최대 인원</h5>
              <input type="number" id="maxPeople" onChange={onChange} /><span>명</span>
            </div>
          </div>
        </div>
        <div className="fee_select_box">
          <h4>인당 요금을 정해주세요</h4>
          <input type="number" id="fee" onChange={onChange} />
          <span> 원</span>
        </div>
        <button onClick={registerGame}>등록하기</button>
      </div>
    </div>
  )
}

export default GameRegister
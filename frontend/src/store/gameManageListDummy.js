const today = new Date()
const tomorrow = new Date(today.getFullYear(),today.getMonth(),today.getDate()+1)
const day_after_tomorrow = new Date(today.getFullYear(),today.getMonth(),today.getDate()+2)

const gameManageListDummy = [
  {
    id: 0,
    date: today,
    start_time: "1100",
    end_time: "1300",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    gameparticipant: [
      {state: 0},
      {state: 1},
      {state: 1},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
    ],
  },
  {
    id: 1,
    date: today,
    start_time: "1600",
    end_time: "1900",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    gameparticipant: [
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
    ],
  },
  {
    id: 2,
    date: tomorrow,
    start_time: "1100",
    end_time: "1300",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    gameparticipant: [
      {state: 2},
      {state: 2},
      {state: 2},
    ],
  },
  {
    id: 3,
    date: tomorrow,
    start_time: "1600",
    end_time: "1800",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    gameparticipant: [
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
    ],
  },
  {
    id: 4,
    date: day_after_tomorrow,
    start_time: "1300",
    end_time: "1500",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    gameparticipant: [
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
    ],
  },
  {
    id: 5,
    date: day_after_tomorrow,
    start_time: "1700",
    end_time: "2000",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    gameparticipant: [
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
    ],
  },
  {
    id: 6,
    date: tomorrow,
    start_time: "2000",
    end_time: "2200",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    gameparticipant: [
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
      {state: 2},
    ],
  },
]
export default gameManageListDummy
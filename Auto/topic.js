var topic= [
    "春夏時裝介紹",
    "愛自己的哲學",
    "女權歷年流變",
    "讀者互動日",
    "作家專訪",
    "女權電影欣賞",
    "歡慶攜手度過半年特別活動"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21)


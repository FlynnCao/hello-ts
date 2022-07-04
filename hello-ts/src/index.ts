let employ: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Tony Stark",
  retire: (date: Date) => {
    console.log(date);
  },
};

type Employ = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let emp1: Employ = {
  id: 2,
  name: "Captain America ",
  retire: (date: Date) => {
    return console.log("date", date);
  },
};

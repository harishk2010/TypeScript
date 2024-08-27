let score: number | boolean | string = 3;

score = 44;
score = "44";
score = false;

//////

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let harish: User | Admin = { name: "harish", id: 123 };
harish = { username: "krishna", id: 321 };

//function

getDbId(3);
getDbId("3");
function getDbId(id: number | string) {
  // id.toLowerCase()//will show error
  if (typeof id === "string") {
    ///union narrowing
    id.toLowerCase();
  }
}

const data: (string | number)[] = [1, 2, 3, "4"];
const data1: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: string[] | number[] = [1, 2, 3, 4]; /// it can either be full number or full string array

let seatAllotment: 'aisle' | "middle"|"window"
seatAllotment="aisle"
// seatAllotment="crew"  // will show error

export {};

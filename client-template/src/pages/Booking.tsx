import { useState } from "react";

interface CollumsType {
  key: string;
  title: string;
}

interface DataType {
  booking_id: number;
  customer_username: string;
  girl_friend_name: string;
  dating: string;
  time: number;
  status: boolean;
}

const Booking = () => {
  const [choose, setChoose] = useState<number>(0);

  const collumns: CollumsType[] = [
    {
      key: "bookingid",
      title: "Booking Id",
    },
    {
      key: "customerusername",
      title: "Customer",
    },
    {
      key: "girlfriendname",
      title: "Girl Friend Name",
    },
    {
      key: "dating",
      title: "Dating",
    },
    {
      key: "time",
      title: "Time",
    },
    {
      key: "status",
      title: "Status",
    },
  ];

  const data: DataType[] = [
    {
      booking_id: 1554,
      customer_username: "kazuya123",
      girl_friend_name: "Mizuhara Chizuru",
      dating: "5/11/2023",
      time: 2,
      status: true,
    },
    {
      booking_id: 1248,
      customer_username: "kazuya123",
      girl_friend_name: "Mizuhara Chizuru",
      dating: "5/11/2023",
      time: 2,
      status: true,
    },
    {
      booking_id: 4412,
      customer_username: "kazuya123",
      girl_friend_name: "Mizuhara Chizuru",
      dating: "5/11/2023",
      time: 2,
      status: true,
    },
    {
      booking_id: 5512,
      customer_username: "kazuya123",
      girl_friend_name: "Mizuhara Chizuru",
      dating: "5/11/2023",
      time: 2,
      status: true,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white p-5">
      <table className="w-full my-5 bg-white">
        <thead>
          <tr className="h-[65px] text-white bg-[#FF8DD8]">
            {collumns.map((col) => {
              return <th key={col.key}>{col.title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr
                key={value.booking_id}
                className={`text-center h-[60px] ${
                  index % 2 !== 0 &&
                  choose !== value.booking_id &&
                  "bg-gray-100"
                } ${choose === value.booking_id && "bg-purple-400 text-white"}`}
                onClick={() => {
                  if (choose === value.booking_id) setChoose(0);
                  else setChoose(value.booking_id);
                }}
              >
                <td>{value.booking_id}</td>
                <td>{value.customer_username}</td>
                <td>{value.girl_friend_name}</td>
                <td>{value.dating}</td>
                <td>{value.time}</td>
                <td>{value.status === true ? "Done" : "None"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;

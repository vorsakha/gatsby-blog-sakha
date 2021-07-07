import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

const data = [
  {
    title: "Email",
    description: "help@email.com",
    link: "",
    icon: AiOutlineMail,
  },

  {
    title: "Address",
    description: "1234 June St. #120 San francisco, CA",
    link: false,
    icon: HiOutlineLocationMarker,
  },
  {
    title: "Telephone",
    description: "9 999 999 999",
    link: "",
    icon: IoCallOutline,
  },
];

export default data;

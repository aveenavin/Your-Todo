import style from "../moduleCss/Message.module.css"
import { FaRegSmileBeam } from "react-icons/fa";

let Message = function () {
        return (
                <p className={style.Messagee}>Hey there ! Your tasks has completed. <br /> <FaRegSmileBeam /></p>
        )
}
export default Message
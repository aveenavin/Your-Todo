import style from "../moduleCss/Message.module.css"
import { FaRegSmileBeam } from "react-icons/fa";

let Message = function () {
        return (
                <p className={style.Messagee}>Hai there! No tasks yet. Add your first task! <br /> <FaRegSmileBeam /></p>
        )
}
export default Message
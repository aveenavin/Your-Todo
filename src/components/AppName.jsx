import style from "../moduleCss/Appname.module.css";
import { RiCalendarTodoFill } from "react-icons/ri";


function AppName() {
        return (<h1 className={style.namestyle}> <RiCalendarTodoFill /> TODO <RiCalendarTodoFill /></h1>)
}
export default AppName;
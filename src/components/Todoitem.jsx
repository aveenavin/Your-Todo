import style from "../moduleCss/Deletetodo.module.css"
import { RiDeleteBinFill } from "react-icons/ri";

function Todoitem({ todoname, tododate, deletebtn }) {

    return (
        <>
            <div className="container">
                <div className="row go">
                    <div className="col-4">{todoname}</div>
                    <div className="col-4">{tododate}</div>
                    <div className="col-1"><button type="button" onClick={() => deletebtn(todoname)}
                        className={`btn btn-danger ${style.red}`}><RiDeleteBinFill />  </button></div>
                </div>
            </div>
        </>
    )
}
export default Todoitem;



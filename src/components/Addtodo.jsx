import { useState } from "react"; import Styleji from "../moduleCss/Addtodo.module.css";

function Addtodo({ onBehavoir }) {

    let [nameji, setNameji] = useState("")   // ((((()))))
    let [dateji, setDateji] = useState("")      // ((((()))))

    let behviorName = function (e) {
        setNameji(e.target.value);
    }
    let behviorDate = function (e) {
        setDateji(e.target.value);
    }

    let passBehviorOFnameDate = function () {

        if (nameji.trim() === "" || dateji.trim() === "") {
            alert("please enter both task and date before adding")
            return
        }

        onBehavoir(nameji, dateji)
        setNameji("")
        setDateji("")
    }

    return (
        <>
            <div className="container">
                <div className="row_take">
                    <input type="text" onChange={behviorName} value={nameji} placeholder=" Enter here" className={`col-5 ${Styleji.add}`}/>
                   <input type="date"  onChange={behviorDate} value={dateji} className={`col-3 ${Styleji.add}`} />
                     <button type="button"  onClick={passBehviorOFnameDate} className={` col-1  btn btn-success ${Styleji.addbtn}`} >ADD</button>
                </div>
            </div>
        </>
    )
}
export default Addtodo;
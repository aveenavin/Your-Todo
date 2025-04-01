import Todoitem from "./Todoitem";

function TodoitemsComponent({ todoitems, deletebtn }) {


    return (
        <>
            <div className="itemsContainer">
                {todoitems.map((item, index) => <Todoitem deletebtn={deletebtn} todoname={item.nameji} tododate={item.date} 
                                                 key={index}></Todoitem>)}
            </div>
        </>
    )

}

export default TodoitemsComponent;


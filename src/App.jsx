import AppName from "./components/AppName"; import Addtodo from "./components/Addtodo"; import TodoitemsComponent from "./components/TodoitemsComponent"; import Message from "./components/Message";
import { useState } from "react";

function App() {

  let [todoitems, updateTodoitems] = useState([]) 
  // =-=-=-=-=-=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  let handleBehavoir = function (finalName, finalDate) {
    let extraItems = [
      { nameji: finalName, date: finalDate },
      ...todoitems]

    updateTodoitems(extraItems)
  }
  // =-=-=-=-=-=-==-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  let deleteBehvoir = function (Deletetodoname) {
    let newArry = todoitems.filter( (item) => (item.nameji !== Deletetodoname) )

    updateTodoitems(newArry)
  }

  return (
    <div >
<center>
        <AppName ></AppName>
        <Addtodo onBehavoir={handleBehavoir}></Addtodo>
        {!todoitems.length && <Message ></Message>}
        <TodoitemsComponent todoitems={todoitems} deletebtn={deleteBehvoir}></TodoitemsComponent>
</center>

    </div>

  )

}

export default App;


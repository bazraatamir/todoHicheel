import React, {useState, useEffect} from "react";
import TodoItem from "./todoItem";
import Todofrom from "./todofrom";

// todo жагсаалт
const TodoWrapper = () => {
  const [TodoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=10")
      .then((res) => res.json())
      .then((data) => setTodoList([...TodoList, ...data.todos]));
  }, []);
  console.log(TodoList);
  //  компонентийн төлөвийг шинчлэх зориолго той функц
  const AddTodo = (text) => {
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        todo: text,
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then(console.log);

    // хэрэглэгчээс теёт аваад түүнийг обедтийн техт болгоод төлөв дээр хадгалж өгнө
    // setTodoList([
    // төлөвийг задлаад доторх өгөгдөл дээр шинэ өгөгдөл нэмээд төлөвийг шинэчилнэ
    //   ...TodoList,
    //   {
    //     "todo": text,
    //     "completed": false,
    //     "userId": 5
    //   }
    // ]);
  };
  const editTodo = (text, id) => {
    // төлөв дотроос хэрэглэгчийн засах гэж байгаа өгөгдлийг хайж олоод өгөглийн засна
    let editData = TodoList.filter((element) => {
      return id === element.id;
    });
    editData[0].text = text;
  };
  // хэрэглэгчийн засаг довч дарсан өгөгдлийн isEditing:false гэдэг утгыг солино
  const handleEditToggle = (id) => {
    console.log(id);
    setTodoList(
      TodoList.map((el) => (el.id == id ? {...el, isEditing: true} : el))
    );
  };

  const deleteTodo = () => {};
  return (
    <div className='flex flex-col rounded-xl gap-[80px] bg-[#000] p-[40px]'>
      {/* хэрэглэгчээс өгөдөл оруулж ирээд төлөв дээр хадгалж өгөх компонент */}
      <Todofrom saveTodo={AddTodo} />
      <ul>
        {TodoList.map((el) =>
          // isEditing:true байгаа өгөдлийн олж комдонетийн форм компонентеер солино
          // пробёоор editTodo болон тухайн өгөгдлийн өөрийг нь дамжуулна
          el.isEditing ? (
            <Todofrom todo={el} edit={editTodo} />
          ) : (
            // бусад өгөгдлүүд item  компонент хэвээр байна
            // пропсоор нь өгөгдөл болон handleEditToggle дамжуулна
            <TodoItem data={el} edit={handleEditToggle} />
          )
        )}
      </ul>
    </div>
  );
};

export default TodoWrapper;

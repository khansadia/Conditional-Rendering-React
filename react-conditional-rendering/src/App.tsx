import { useState } from "react";

export function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState("Do the laundry");

  // This is an early return
  // if (isLoading) {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);

  //   return (
  //     <>
  //       <h1>Loading...</h1>
  //     </>
  //   );
  // }

  const handleOnClick = () => {
    setIsEditing((preVal) => !preVal);
  };

  // // ########## Use case with ternary inside JSX ##########
  // return (
  //   <>
  //     <h1>App Component is Ready</h1>
  //     <p>Editing: {isEditing ? "true" : "false"}</p>

  //     <div>
  //       {isEditing ? (
  //         <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
  //       ) : (
  //         <p>{todo}</p>
  //       )}
  //     </div>

  //     <button onClick={handleOnClick}>{isEditing ? "Ok" : "Edit"}</button>
  //   </>
  // );

  // ########## Use case with local variabels and ternary ##########
  const inputField = (
    <div>
      <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
    </div>
  );

  const pTag = <p>{todo}</p>;

  return (
    <>
      <h1>App Component is Ready</h1>
      <p>Editing: {isEditing ? "true" : "false"}</p>
      <div>{isEditing ? inputField : pTag}</div>
      <button onClick={handleOnClick}>{isEditing ? "Ok" : "Edit"}</button>
    </>
  );

  // // ########## Use case with local variabels and switch ##########
  // let element: JSX.Element;

  // switch (isEditing) {
  //   case true:
  //     element = (
  //       <div>
  //         <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
  //       </div>
  //     );
  //     break;

  //   case false:
  //     element = <p>{todo}</p>;
  // }

  // return (
  //   <>
  //     <h1>App Component is Ready</h1>
  //     <p>Editing: {isEditing ? "true" : "false"}</p>
  //     <div>{element}</div>
  //     <button onClick={handleOnClick}>{isEditing ? "Ok" : "Edit"}</button>
  //   </>
  // );

  // // ########## Use case with if checks and returns ##########
  // if (isEditing) {
  //   return (
  //     <>
  //       <h1>App Component is Ready</h1>
  //       <p>Editing: {isEditing ? "true" : "false"}</p>
  //       <div>
  //         <input onChange={(e) => setTodo(e.target.value)} value={todo} type="text" />
  //       </div>
  //       <button onClick={handleOnClick}>{isEditing ? "Ok" : "Edit"}</button>
  //     </>
  //   );
  // }

  // return (
  //   <>
  //     <h1>App Component is Ready</h1>
  //     <p>Editing: {isEditing ? "true" : "false"}</p>
  //     <div>
  //       <p>{todo}</p>
  //     </div>
  //     <button onClick={handleOnClick}>{isEditing ? "Ok" : "Edit"}</button>
  //   </>
  // );
}
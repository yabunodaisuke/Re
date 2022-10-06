import {  useState } from "react";
import Header from "@/components/Header";



// const Home: React.FC = () => (

    
//   <main className='mx-auto max-w-5xl py-6 bg-gray-700'>
//     <h1 className='sm:text-base md:text-2xl  text-center  py-20 text-lg font-semi-bold text-orange'>
//     ログインフォーム
//     </h1>

//    <button>click</button>
//    <div id='overlay'>
//      <div id='content' className="bg-white w-1/2 h-32 mx-auto text-center pt-10"> 
//      <p>モーダル</p>
//      <button className="border-2">close</button>
//      </div>
//    </div>

//     <Header />
//    <Modal />
 
//   </main>
// );


// export default Home;


export default function Home() {
const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState<Todo[]>([]);


type Todo = {
  inputValue: string;
  id: number;
  checked: boolean;
}
 
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // eslint-disable-next-line no-console
  // console.log(e.target.value);
  setInputValue(e.target.value);
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const newTodo: Todo = {
    inputValue: inputValue,
    id: todos.length,
    checked: false,
  }

   setTodos([newTodo,...todos]);
   setInputValue("");
};

  return (

  //   <div className="mx-auto max-w-5xl py-6 bg-gray-700">
  //     <button>click</button>
  //     <div id='content' className="bg-white w-1/2 h-32 mx-auto text-center pt-10"> 
  // <p>モーダル</p>
  // <button className="border-2">close</button>
  //  </div>
  <div>
   <Header/>
<div>
  <h2 className="text-xl">to do　リスト</h2>
<form onSubmit={(e) => handleSubmit(e)} >
  <input className="border-2" type='text' onChange={(e) => handleChange(e)}  /> 
<input type='submit' value='作成' className="border-2  bg-gray-50 ml-10 px-5"/>
</form>
</div>
    </div>
  )
}




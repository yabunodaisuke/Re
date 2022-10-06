// eslint-disable-next-line import/no-default-export
export default function Header () {
  return (
    <div id='card' className=" text-center ">
     
 <div id='card' className="bg-darkblue mt-5 py-5  w-full  max-w-md  mx-auto">
 
 <input id='UserName' className=" mb-5 bg-lightyellow hover:bg-primary-500 text-white font-bold py-5 md:px-10  rounded-full text-center " placeholder="UserName"></input>
 <div >
 <input id='PassWord' className="mb-5 bg-lightyellow hover:bg-primary-500 text-white font-bold py-5 md:px-10 rounded-full text-center" placeholder="PassWord"></input>

 </div>
 <div>
   <button className="mb-5 bg-gray-700 hover:bg-primary-500 text-white font-bold py-5 px-20 rounded-full text-center">Login</button>
 </div>
<p className="text-white"> <a href='https://docs.google.com/forms/d/e/1FAIpQLSc0hnxu1-O5BCn6dAJH-4srrGY_TKPveMGxwHplF3VvEj9gCw/viewform?usp=sf_link'>未登録の方はこちら</a></p>
 </div>

    </div>
   
    
  )
}
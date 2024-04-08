import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import MainContainer from './components/MainContainer'
function App() {

  return (
    <>
   <main className='min-h-screen bg-black'>
   <Header/>
   <div className='mx-1 gap-0 flex justify-between lg:gap-5 w-auto lg:mx-3 px-3 '>
   <div className="bg-[#ffffff12] rounded-md flex-none lg:flex-1 sidebar-container">
   <SideBar/>
   </div>
   <div className='text-white rounded-md flex-[5] main-container'>
    <MainContainer/>
   </div>
   </div>
   </main>
    </>
  )
}

export default App

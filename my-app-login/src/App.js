import React from 'react'
import Profile from "./components/Adding_styles"
import CountSeperately from './components/CountSeperately'
import AdminPanel from './components/ConditionalRender/AdminPanel'
import Conditional_Rendering from './components/ConditionalRender/Conditional_Rendering'
import CreatingNesting from './components/CreatingNesting'
import CountTogether from './components/CountTogether'
import AboutPage from './components/Markupjsx'
import ShoppingList from './components/RenderingLists'
import Respondingevents from './components/Respondingevents'
import TaskManager from './components/TaskManager'
import TicTacToe from './components/TicTacToe'
import Database from './components/Database'
import Taskapi from './components/Taskapi'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
    </BrowserRouter>
    // <div>
    //     <Login/>
    //     <Taskapi/>
    //     <Database />
    //     <TicTacToe/>
    //     <TaskManager />
    //     <Profile/>
    //     <CountSeperately />
    //     <Conditional_Rendering />
    //     <CreatingNesting />
    //     <CountTogether />
    //     <AboutPage />
    //     <ShoppingList />
    //     <Respondingevents />
    // </div>
  );
}

export default App
import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import React from 'react'
import AdminLogin from './pages/AdminLogin';
import Clients from './pages/Clients';
import ContactForm from './pages/ContactForm';
import CreateAccount from './pages/CreateAccount';
import EditClient from './pages/EditClient';
import HomePage from './pages/HomePage';
import Labels from './pages/Labels';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import TestSheet from './pages/TestSheet';
import Header from "./components/Layout/Header";
import UploadCsv from "./pages/UploadCsv";
import TemplateList from "./components/Label/Template/TemplateList";
import TemplateDetails from "./components/Label/Template/TemplateDetails";
import CsvUpload from "./components/CsvUpload/CsvUpload";
import LabelDetails from "./components/Label/Label/LabelDetails";





const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Navigate replace to='/home' />} />
            <Route path="/templates" element={<TemplateList/>} exact />
            <Route path='/templates/:templateId' element={<TemplateDetails/>} />
            <Route path="/home" element={<HomePage/>} exact />
            <Route path='/sheet' element={<TestSheet />} />
            <Route path='/labels' element={<Labels />} />
            <Route path='/labels/:labelId' element={<LabelDetails/>} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/clients/:id' element={<EditClient/>} />
            <Route path='/create-account' element={<CreateAccount/>} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/upload' element={<CsvUpload />} />
            <Route path='/adjkd67asd' element={<AdminLogin />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;


// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Master from "./components/Master";
// import CreateItem from "./components/CreateItem";
// import User from "./components/User";
// import Navigation from "./components/Header/Navigation";
//
//
// const AppRouter = () => (
//     <BrowserRouter>
//         <Navigation/>
//         <Routes>
//             <Route path="/" element={<Master/>} exact />
//             <Route path="/create" element={<CreateItem/>}/>
//             <Route path="/user" element={<User/>} exact/>
//         </Routes>
//     </BrowserRouter>
// );
//
// export default AppRouter;

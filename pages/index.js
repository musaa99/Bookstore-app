/* eslint-disable react/jsx-key */
// import {useState} from 'react';
// import BookstoreApp from './BookStore';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Link from "next/link";
import { AddBook } from "./component/addBook";
import BookForm from "./component/BookForm";
import Homepage from "./component/home";
import BookList from "./component/BookList";
// import axios from 'axios';

export default function Home() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/home" component={Homepage} />
    //      <Route path="/booklist" component={BookList} /> 
    //   </Switch>
    // </Router>
	<div>
		<AddBook/>
	</div>
  );
}

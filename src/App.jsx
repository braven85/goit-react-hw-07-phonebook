import "./App.css";
import React, { useEffect } from "react";

import { Repository } from "./components/Repository/Repository";
import HorizontalLine from "./components/HorizontalLine/HorizontalLine";

import ContactForm from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactsList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./services/api";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div className="App">
      <Repository />
      <HorizontalLine />
      <h1>Phonebook</h1>
      <ContactForm />
      <HorizontalLine />
      <h1>Contacts</h1>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;

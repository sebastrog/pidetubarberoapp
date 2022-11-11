import { People } from '@/data/people';
import { addPeople } from '@/redux/states';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components/PeopleTable';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <div>
    <PeopleTable />
  </div>
};

export default Home;

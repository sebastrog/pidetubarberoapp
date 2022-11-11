import { LocalStorageKeys, Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface PeopleTableInterface { }

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const dispatch = useDispatch();
  const statePeople = useSelector((store: AppStore) => store[LocalStorageKeys.PEOPLE]);
  const favoritePeople = useSelector((store: AppStore) => store[LocalStorageKeys.FAVORITES]);

  useEffect(() => {
    setSelectedPeople(favoritePeople);
  }, [favoritePeople]);

  const findPerson = (person: Person) => !!favoritePeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) => favoritePeople.filter((p) => p.id !== person.id);

  /**
   * If the person is already in the list of selected people, remove them from the list, otherwise add
   * them to the list
   * @param {Person} person - Person - this is the person that was selected or deselected
   */
  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  const columns = [
    {
      field: 'actions',
      headerName: '',
      type: 'actions',
      sortable: false,
      filterable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => {
        return <>
          <Checkbox size='small' checked={findPerson(params.row)} onChange={() => handleChange(params.row as Person)} />
        </>
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Category',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    }

  ]
  return <DataGrid
    disableColumnSelector
    disableSelectionOnClick
    autoHeight
    pageSize={5}
    rowsPerPageOptions={[5]}
    rows={statePeople}
    columns={columns}
    getRowId={(row) => row.id}
  />;
};

export default PeopleTable;

import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export interface FavoriteTableInterface { }

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleChange = (person: Person) => {
    dispatch(removeFavorite(person));
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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleChange(params.row)}
          >
            <DeleteIcon />
          </IconButton>
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
    rows={stateFavorites}
    columns={columns}
    getRowId={(row) => row.id}
  />;
};

export default FavoriteTable;

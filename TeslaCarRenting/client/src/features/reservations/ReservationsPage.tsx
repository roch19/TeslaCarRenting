import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { BorderColor } from '@mui/icons-material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'dateStart',
        headerName: 'Date Start',
        width: 150,
        editable: true,
    },
    {
        field: 'dateEnd',
        headerName: 'Date End',
        width: 150,
        editable: true,
    },
    {
        field: 'rentPlace',
        headerName: 'Pick up place',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'returnPlace',
        headerName: 'Where to return',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        //valueGetter: (params: GridValueGetterParams) =>
        //    `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, dateStart: '20.03.2022', dateEnd: '23.03.2022', rentPlace: "Airport" },
    
];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: 400, width: '100%'  }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
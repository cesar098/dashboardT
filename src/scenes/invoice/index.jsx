import { Box, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';

import Header from "../../components/Header";
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';

const Invoice = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode); 

	const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
    },
  ];
	return (
    <Box m="20px">
      <Header title="Invoice" subtitle="hola aqui estoy de vuelta" />
      <Box
        m="40px 0 0 0"
        height="76vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-cell": {
            color: colors.greenAccent[300],
            fontSize: colors,
          },
          "& .MuiDataGrid-columnHeader": {
            background: colors.blueAccent[700],
          },
          "& .muiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};

export default Invoice;
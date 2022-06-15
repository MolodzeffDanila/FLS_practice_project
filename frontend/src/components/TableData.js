import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TablePagination} from "@material-ui/core";

function TableData(props) {
    const [rowsPerPage, setRowsPerPage ] = useState(7);
    const [page, setPage] = useState(0)
    const columns = [
            {
                field: 'datasets',
                headerName: 'Country',
                width: 200,
            },
            {
                field: 'status',
                headerName: 'Year',
                type: 'number',
                width: 60,
            },
            {
                field: 'message',
                headerName: 'Value',
                type: 'number',
                width: 60,
            },
        ]

    const [tableRows, setRows] = useState([]);

    function handleChangePage(event, newPage){
        setPage(newPage)
    }

    function handleChangeRowsPerPage(event){
        setPage(0);
        setRowsPerPage(+event.target.value)
    }

    useEffect(()=>{
        let tmp_rows=[];
        for(let country of props.data){
            for(let year of country.years){
                tmp_rows.push({
                    country_name:country.country_name,
                    year: year.year,
                    value: year.value
                })
            }
        }
        setRows(tmp_rows);
    }, [props.data])


    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell width={column.width} key={column.field} align='left'
                                           sx={{backgroundColor: "#1f7bdc",
                                                color:"white",
                                               fontSize:'14pt',
                                               border: 2,
                                               borderRadius: 2
                                           }}>
                                    {column.headerName}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                            <>
                                <TableRow key={item.country_name}>
                                    <TableCell>{item.country_name} </TableCell>
                                    <TableCell>{item.year} </TableCell>
                                    <TableCell>{item.value} </TableCell>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[7, 10, tableRows.length]}
                component="div"
                count={tableRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
}

export default TableData;
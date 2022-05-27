import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TablePagination} from "@material-ui/core";

function TableData(props) {
    const { data } = props
    const [selected, setSelected] = useState([]);
    const [selectedData, setSelectedData] = useState([]);

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

    useEffect(() => {
        const newSelectedData = []
        selected.forEach((year) => newSelectedData.push(data.find((item) => item.date === year)))
        setSelectedData(newSelectedData)
    }, [selected, data])

    function handleChangePage(event, newPage){
        setPage(newPage)
    }

    function handleChangeRowsPerPage(event){
        setPage(0);
        setRowsPerPage(+event.target.value)
    }

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
                        {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => ( //создание строк в таблице
                            <TableRow key={item.date}>
                                <TableCell>{item.country.value} </TableCell>
                                <TableCell>{item.date} </TableCell>
                                <TableCell>{item.value} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[7, 10, data.length]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
}

export default TableData;
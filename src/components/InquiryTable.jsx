import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const InquiryTable = ({inquiries}) => {
  const inquiryRows = inquiries.map((item) => {
    return (
      <TableRow>
        <TableCell>{item.company}</TableCell>
        <TableCell>{item.email}</TableCell>
        <TableCell>{item.start_date}</TableCell>
        <TableCell>{item.inquired_at}</TableCell>
      </TableRow>
    )
  })
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat</TableCell>
            <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
            <TableCell align='right'>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InquiryTable

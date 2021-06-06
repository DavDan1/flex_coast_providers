import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useSelector } from 'react-redux'

const InquiryTable = () => {
  const { inquiries } = useSelector((state) => state)

  const inquiryRows = inquiries.map((item) => {
    return (
      <TableRow key={item.id}>
        <TableCell data-cy='company'>{item.company}</TableCell>
        <TableCell data-cy='email'>{item.email}</TableCell>
        <TableCell data-cy='start-date'>{item.start_date}</TableCell>
        <TableCell data-cy='inquired-at'>{item.inquired_at}</TableCell>
      </TableRow>
    )
  })
  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Start Date</TableCell>
            <TableCell align='right'>Recived At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{inquiryRows}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default InquiryTable

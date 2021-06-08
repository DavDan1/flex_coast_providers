import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import Inquiries from '../modules/Inquiries'
import InquiryRows from './InquiryRows'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import FilterListIcon from '@material-ui/icons/FilterList'
import Popover from '@material-ui/core/Popover'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const InquiryTable = () => {
  const { inquiries } = useSelector((state) => state)
  const [sortDate, setSortDate] = useState(true)
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState({
    pending: true,
    started: true,
    done: true,
  })
  const isSmall = useMediaQuery('(max-width:600px)')

  const buttonEl = useRef(null)

  useEffect(() => {
    Inquiries.index()
  }, [])

  const handleStatusChange = (event) => {
    setStatus({ ...status, [event.target.name]: event.target.checked })
  }

  const inquiryRows = inquiries.map((item) => {
    return <InquiryRows key={item.id} item={item} />
  })
  return (
    <TableContainer className='table' component={Paper} elevation={3}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow className='table-header'>
            <TableCell>Company</TableCell>
            <TableCell>
              Inquiry date{' '}
              <IconButton onClick={() => setSortDate(!sortDate)}>
                {sortDate ? (
                  <ArrowDownwardIcon className='date-switch' />
                ) : (
                  <ArrowUpwardIcon className='date-switch' />
                )}
              </IconButton>
            </TableCell>
            {!isSmall && (
              <>
                <TableCell>Email</TableCell>
                <TableCell>Move in date</TableCell>
                <TableCell>
                  Status{' '}
                  <IconButton ref={buttonEl} onClick={() => setOpen(true)}>
                    <FilterListIcon />
                  </IconButton>
                  <Popover
                    anchorEl={buttonEl.current}
                    open={open}
                    onClose={() => setOpen(false)}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={status.pending}
                            onChange={handleStatusChange}
                            name='pending'
                          />
                        }
                        label='Pending'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={status.started}
                            onChange={handleStatusChange}
                            name='started'
                          />
                        }
                        label='Started'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={status.done}
                            onChange={handleStatusChange}
                            name='done'
                          />
                        }
                        label='Done'
                      />
                    </FormGroup>
                  </Popover>
                </TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>{sortDate ? inquiryRows : inquiryRows.reverse()}</TableBody>
      </Table>
    </TableContainer>
  )
}

export default InquiryTable

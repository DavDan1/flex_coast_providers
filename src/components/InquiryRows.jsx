import React, { useState } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Collapse from '@material-ui/core/Collapse'

const InquiryRows = ({ item }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <TableRow
        onClick={() => setOpen(!open)}
        hover
        data-cy='inquiry'
        key={item.id}>
        <TableCell data-cy='company'>{item.company}</TableCell>
        <TableCell data-cy='email'>{item.email}</TableCell>
        <TableCell data-cy='start-date'>{item.start_date}</TableCell>
        <TableCell data-cy='inquiry-date'>{item.inquiry_date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          className='collapsible-cell'
          data-cy='inquiry-collapsible-cell'>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <div>
              <p data-cy='company'>{item.company}</p>
              <p data-cy='size'>{item.size}</p>
              <p data-cy='office-type'>{item.office_type}</p>
              <p data-cy='peers'>{item.peers ? 'yes' : 'no'}</p>
              <p data-cy='flexible'>{item.flexible ? 'yes' : 'no'}</p>
              <p data-cy='locations'>{item.locations.join(', ')}</p>
              <p data-cy='start-date'>{item.start_date}</p>
              <p data-cy='inquiry-date'>{item.inquiry_date}</p>
              <p data-cy='email'>{item.email}</p>
              <p data-cy='phone'>{item.phone}</p>
            </div>
            <div></div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default InquiryRows

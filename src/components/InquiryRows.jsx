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
          colSpan={4}
          className='collapsible-cell'
          data-cy='inquiry-collapsible-cell'>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <div className='wrapper'>
              <div className='info-container'>
                <p data-cy='size'>Amount of employees: {item.size}</p>
                <p data-cy='office-type'>Office type: {item.office_type}</p>
                <p data-cy='peers'>
                  Would {!item.peers && 'not'}like to sit with peers
                </p>
                <p data-cy='flexible'>
                  Flexible or fulltime:{' '}
                  {item.flexible ? 'flexible' : 'full time'}
                </p>
                <p data-cy='locations'>
                  Locations: {item.locations.join(', ')}
                </p>
                <p data-cy='phone'>Phone number: {item.phone}</p>
              </div>
              <div className='notes-container'></div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default InquiryRows

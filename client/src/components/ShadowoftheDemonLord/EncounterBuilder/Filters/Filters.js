import React, { useState } from 'react'
import { Button, Collapse, Col, Row } from 'react-bootstrap'

import SelectBuilder from '../../../SelectBuilder/SelectBuilder'
import filterIcon from '../../../../imgs/icons/190-menu.svg'
import xIcon from '../../../../imgs/icons/272-cross.svg'

const Filters = ({ options, onSelectValueChange }) => {
  const [open, setOpen] = useState(false);

  const filterImage = () => {
    if (open) {
      return <img src={xIcon} className="d-inline-block align-top" alt="Close filter icon" />
    } else {
      return <img src={filterIcon} className="d-inline-block align-top" alt="Open filter icon" />
    }
  }

  console.log('Options in Filters')
  console.log(options)

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="beastiary-filter-collapse"
        aria-expanded={open}
        className='beastiary-filter-collapse'
      >
        {filterImage()}
      </Button>
      <Collapse in={open}>
        <div id="beastiary-filter-collapse">
          <Row className='text-left mb-3'>
            <Col>
              <h3>Difficult Rating</h3>
              <SelectBuilder options={options} selected={10} onSelectValueChange={onSelectValueChange} />
            </Col>
            <Col>
              <h3>Descriptor</h3>
            </Col>
            <Col>
              <h3>Source</h3>
            </Col>
          </Row>
        </div>
      </Collapse>
    </>
  );
}

export default Filters
import React from 'react'
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer
} from '@chakra-ui/react'
import Pagination from 'react-bootstrap/Pagination';


export default function ActionList({ ActionListData }) {
  return (
    <TableContainer className="action-list">
      <Table variant='simple'>
        <Tbody>
          {
            ActionListData.map(item =>
            (<Tr key={item.id}>
              <Td>
                <div className='d-flex'>
                  <img src={item.img} className="list-icon" style={{ backgroundColor: item.icon_color }} />
                  <div className='ms-3'>
                    <p>{item.title}</p>
                    <span>{item.body}</span>
                  </div>
                </div>
              </Td>
              <Td isNumeric >
                <p className={item.income ? "text-success" : ""}>{item.total}</p>
                <span>{item.date}</span>
              </Td>
            </Tr>)
            )
          }
        </Tbody>
      </Table>
      <div className='pagination'>
        <Pagination>
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        </Pagination>
      </div>
    </TableContainer>
  )
}

import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import PieChart from './PieChart'
import BarChart from './BarChart'
import LineChart from './LineChart'
import { useState } from 'react'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Lorem', 159, 6.0, 24, 4.0),
  createData('Ipsum', 237, 9.0, 37, 4.3),
  createData('Dolor', 262, 16.0, 24, 6.0),
  createData('Sit', 305, 3.7, 67, 4.3),
  createData('Amet', 356, 16.0, 49, 3.9),
]

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

export default function BasicTabs() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label='Cuadrícula' />
        <Tab label='Gráfico Bars' />
        <Tab label='Gráfico Pie' />
        <Tab label='Gráfico Line' />
      </Tabs>

      <TabPanel value={value} index={0}>
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 0,
            boxShadow: 'none',
            border: '1px solid rgb(160, 160, 160)',
          }}
        >
          <Table sx={{ minWidth: 450 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>La tabla</TableCell>
                <TableCell align='right'>Lorem</TableCell>
                <TableCell align='right'>Ipsum</TableCell>
                <TableCell align='right'>Dolor</TableCell>
                <TableCell align='right'>Sit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BarChart chartID='bar1' />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PieChart chartID='pie1' />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LineChart chartID='line1' />
      </TabPanel>
    </>
  )
}

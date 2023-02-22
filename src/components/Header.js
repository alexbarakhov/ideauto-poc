import Stack from './Stack'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'
import AnimIconArrow from './icons/AnimIconArrow'
import AnimIconFolder from './icons/AnimIconFolder'
import AnimIconDisk from './icons/AnimIconDisk'
import AnimIconShare from './icons/AnimIconShare'
import AnimIconSave from './icons/AnimIconSave'
import { Button, Tooltip } from '@mui/material'

function Header() {
  const [cubos, setCubos] = useState('')

  const handleChange = event => {
    setCubos(event.target.value)
  }

  return (
    <header className='header'>
      <Stack wrap>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Cubos</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={cubos}
              label='Cubos'
              onChange={handleChange}
              sx={{ borderRadius: 0 }}
            >
              <MenuItem value={10}>Cubo 1</MenuItem>
              <MenuItem value={20}>Cubo 2</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Tooltip
          title='Carpetica'
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: '#003057',
              },
            },
          }}
        >
          <Button sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <AnimIconFolder width='56' height='56' />
          </Button>
        </Tooltip>

        <Tooltip
          title='Volver'
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: '#003057',
              },
            },
          }}
        >
          <Button sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <AnimIconArrow width='56' height='56' />
          </Button>
        </Tooltip>

        <Tooltip
          title='Guardar'
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: '#003057',
              },
            },
          }}
        >
          <Button sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <AnimIconDisk width='56' height='56' />
          </Button>
        </Tooltip>

        <Tooltip
          title='Descargar'
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: '#003057',
              },
            },
          }}
        >
          <Button sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <AnimIconSave width='56' height='56' />
          </Button>
        </Tooltip>

        <Tooltip
          title='Descargar'
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: '#003057',
              },
            },
          }}
        >
          <Button sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <AnimIconShare width='56' height='56' />
          </Button>
        </Tooltip>
      </Stack>
    </header>
  )
}

export default Header

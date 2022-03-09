import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function SelectField() {
  return (
    <Box mt={3} width="100%">
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <Select value={value}>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

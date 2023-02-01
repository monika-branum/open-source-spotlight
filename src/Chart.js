import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { XAxis, YAxis, Tooltip, Bar, BarChart } from 'recharts';

const data = [
  { type: 'Predynastic', length: 2850, rulers: 7, eras: 2 },
  { type: 'Old Kingdom', length: 499, rulers: 29, eras: 4 },
  { type: 'First Intermediate Period', length: 120, rulers: 17, eras: 3.5 },
  { type: 'Middle Kingdom', length: 390, rulers: 63, eras: 3 },
  { type: 'Second Intermediate Period', length: 100, rulers: 71, eras: 4 },
  { type: 'New Kingdom', length: 480, rulers: 33, eras: 3 },
  { type: 'Third Intermediate Period', length: 357, rulers: 33, eras: 5 },
  { type: 'Late Period', length: 380, rulers: 44, eras: 8 },
  { type: 'Roman Empire', length: 671, rulers: 30, eras: 1 },
];
export default function Chart() {
  const [dataKey, setDataKey] = useState('length');
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="select-label">Dynasties</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={dataKey}
          label="Data Key"
          onChange={(e) => setDataKey(e.target.value)}
        >
          <MenuItem value="length">Length</MenuItem>
          <MenuItem value="rulers">Number of Rulers</MenuItem>
          <MenuItem value="eras">Dynasties in this Era</MenuItem>
        </Select>
      </FormControl>

      <BarChart width={800} height={600} data={data}>
        <Bar dataKey={dataKey} fill="#886672" />
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </>
  );
}

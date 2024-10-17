import { createSlice } from '@reduxjs/toolkit'

const installState = {
  cars: ['Model S', 'Model 3', 'Model X', 'Model Y'],
}
const carSlice = createSlice({
  name: 'car',
  initialState: installState,
  redcers: {}
})

export const selectCars = state => state.car.cars
export default carSlice.reducer
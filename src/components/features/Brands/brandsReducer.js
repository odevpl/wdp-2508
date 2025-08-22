import React from 'react';
import { useSelector } from 'react-redux';
const initialState = [
  { id: 1, name: 'Brand 1', image: '/images/brands/brand1.png' },
  { id: 2, name: 'Brand 2', image: '/images/brands/brand2.png' },
  { id: 3, name: 'Brand 3', image: '/images/brands/brand3.png' },
];

export default function brandsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

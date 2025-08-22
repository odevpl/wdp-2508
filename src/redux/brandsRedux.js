import React from 'react';
import { useSelector } from 'react-redux';

const initialState = [
  { id: 1, name: 'Brand 1', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 2, name: 'Brand 2', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 3, name: 'Brand 3', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 4, name: 'Brand 4', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 5, name: 'Brand 5', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 6, name: 'Brand 6', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 7, name: 'Brand 7', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 8, name: 'Brand 8', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 9, name: 'Brand 9', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 10, name: 'Brand 10', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 11, name: 'Brand 11', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 12, name: 'Brand 11', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 13, name: 'Brand 12', image: 'https://i.imgur.com/z8BGkzc.png' },
  { id: 14, name: 'Brand 12', image: 'https://i.imgur.com/z8BGkzc.png' },
];

export default function brandsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

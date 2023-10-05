import React from 'react'

export const CustomUnorderedList = (props: { children: React.ReactNode }) => (
  <ul className='list-disc list-outside ms-4 mb-4 text-xl'>{props.children}</ul>
)

export const CustomOrderedList = (props: { children: React.ReactNode }) => (
  <ol className='list-decimal list-outside ms-4 mb-4 text-medium'>
    {props.children}
  </ol>
)

export const CustomListItem = (props: { children: React.ReactNode }) => (
  <li className='mb-1 ml-2 pl-1'>
    <span className='text-base'>{props.children}</span>
  </li>
)

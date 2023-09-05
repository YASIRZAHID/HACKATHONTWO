'use client'
import { SessionProvider } from '@/app/CONTEXT/USER'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export const GProvider = (props:Props) => {
  return (
    <SessionProvider>{props.children}</SessionProvider>
  )
}

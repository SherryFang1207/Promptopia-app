'use client';
import React from 'react'

import { SessionProvider } from 'next-auth/react';

// Continue here to create Google Auth: 1:15:50
const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
import React from 'react'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
    </RecoilRoot>
  )
}

import React, { FC } from 'react'
import tw from 'twin.macro'

export type AlertStatus = 'info' | 'warning' | 'success' | 'error'

type AlertIconProps = {
  status: AlertStatus
}

export const AlertIcon: FC<AlertIconProps> = ({ status }) => {
  let svgColor
  let svgPath
  switch (status) {
    case 'error':
      svgColor = tw`text-red-400`
      svgPath = (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      )
      break
    case 'success':
      svgColor = tw`text-green-400`
      svgPath = (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      )
      break
    case 'warning':
      svgColor = tw`text-yellow-400`
      svgPath = (
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      )
      break
    default:
      svgColor = tw`text-blue-400`
      svgPath = (
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      )
      break
  }
  return (
    <div css={tw`flex-shrink-0`}>
      <svg
        css={[tw`h-5 w-5`, svgColor]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        {svgPath}
      </svg>
    </div>
  )
}

type AlertProps = {
  message: string
  status: AlertStatus
}

export const Alert: FC<AlertProps> = ({ message, status, children }) => {
  let bgColor
  let color
  switch (status) {
    case 'error':
      bgColor = tw`bg-red-50`
      color = tw`text-red-800`
      break
    case 'success':
      bgColor = tw`bg-green-50`
      color = tw`text-green-800`
      break
    case 'warning':
      bgColor = tw`bg-yellow-50`
      color = tw`text-yellow-800`
      break
    default:
      bgColor = tw`bg-blue-50`
      color = tw`text-blue-800`
      break
  }
  return (
    <div css={[tw`rounded-md p-4 mb-6 bg-red-50`, bgColor]}>
      <div css={tw`flex`}>
        {children}
        <div css={tw`ml-3`}>
          <p css={[tw`text-sm font-medium`, color]}>{message}</p>
        </div>
      </div>
    </div>
  )
}

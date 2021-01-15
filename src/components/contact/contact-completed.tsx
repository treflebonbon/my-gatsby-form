import React, { FC } from 'react'
import tw from 'twin.macro'

export const ContactLoading: FC = () => {
  return (
    <div css={tw`rounded-md bg-blue-50 p-4 mb-6`}>
      <div css={tw`flex`}>
        <div css={tw`flex-shrink-0`}>
          <svg
            css={tw`h-5 w-5 text-blue-400`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div css={tw`ml-3`}>
          <p css={tw`text-sm font-medium text-blue-800`}>送信中...</p>
        </div>
      </div>
    </div>
  )
}

export const ContactFailed: FC = () => {
  return (
    <div css={tw`rounded-md bg-red-50 p-4 mb-6`}>
      <div css={tw`flex`}>
        <div css={tw`flex-shrink-0`}>
          <svg
            css={tw`h-5 w-5 text-red-400`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div css={tw`ml-3`}>
          <p css={tw`text-sm font-medium text-red-800`}>
            送信できませんでした。
          </p>
        </div>
      </div>
    </div>
  )
}

export const ContactCompleted: FC = () => {
  return (
    <div css={tw`rounded-md bg-green-50 p-4 mb-6`}>
      <div css={tw`flex`}>
        <div css={tw`flex-shrink-0`}>
          <svg
            css={tw`h-5 w-5 text-green-400`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div css={tw`ml-3`}>
          <p css={tw`text-sm font-medium text-green-800`}>送信しました。</p>
        </div>
      </div>
    </div>
  )
}

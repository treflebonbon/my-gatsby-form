import tw, { styled } from 'twin.macro'

const buttonCss = tw`inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`

export const SubmitButton = styled.input`
  ${buttonCss}
`

export const Button = styled.button`
  ${buttonCss}
`

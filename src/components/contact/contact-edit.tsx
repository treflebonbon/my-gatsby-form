import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import {
  resolver,
  Inputs,
  FormMode,
  inputsState,
  formModeState,
} from 'src/store/contact'
import { SubmitButton } from 'src/components/shared'

const labelCss = tw`sr-only`
const inputCss = tw`block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md`

export const ContactEdit: FC = () => {
  const [inputs, setInputs] = useRecoilState(inputsState)
  const [, setFormMode] = useRecoilState(formModeState)
  const { errors, register, handleSubmit } = useForm({
    defaultValues: inputs,
    resolver,
  })

  const onSubmit = (data: Inputs) => {
    console.log(data)
    setInputs(data)
    setFormMode(FormMode.Confirmation)
  }

  return (
    <div css={tw`max-w-lg mx-auto lg:max-w-none`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        css={tw`grid grid-cols-1 gap-y-6`}
      >
        <div>
          <label htmlFor="name" css={labelCss}>
            氏名
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            css={inputCss}
            placeholder="氏名"
            ref={register}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="content" css={labelCss}>
            内容
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            css={inputCss}
            placeholder="内容"
            ref={register}
          ></textarea>
          {errors.content?.message && <p>{errors.content.message}</p>}
        </div>
        <div>
          <SubmitButton type="submit" value="確認" />
        </div>
      </form>
    </div>
  )
}

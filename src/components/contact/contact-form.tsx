import React, { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useMutation } from 'react-query'

import { inputsState, Inputs, formModeState, FormMode } from 'src/store/contact'
import {
  ContactCompleted,
  ContactFailed,
  ContactLoading,
} from './contact-completed'
import { ContactConfirmation } from './contact-confirmation'
import { ContactEdit } from './contact-edit'
import { Button } from 'src/components/shared'

export const ContactForm: FC = () => {
  const [formMode, setFormMode] = useRecoilState(formModeState)
  const inputs = useRecoilValue(inputsState)
  const { mutate, isLoading, isError } = useMutation(
    (newInputs: Inputs) => {
      return fetch('http://localhost:9000/.netlify/functions/contact/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInputs),
      })
    },
    {
      onSuccess: () => {
        setFormMode(FormMode.Completed)
      },
    }
  )

  const onBack = () => {
    setFormMode(FormMode.Edit)
  }
  const onSend = () => {
    mutate(inputs)
  }

  if (formMode === FormMode.Completed) {
    return (
      <>
        <ContactCompleted />
        <ContactEdit />
      </>
    )
  }

  if (formMode === FormMode.Confirmation) {
    return isLoading ? (
      <ContactLoading />
    ) : (
      <>
        {isError && <ContactFailed />}
        <ContactConfirmation />
        <div>
          <Button onClick={onBack}>戻る</Button>
          <Button onClick={onSend}>送信</Button>
        </div>
      </>
    )
  }

  return <ContactEdit />
}

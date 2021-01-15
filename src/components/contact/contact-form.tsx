import React, { FC } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useMutation } from 'react-query'

import { inputsState, Inputs, formModeState, FormMode } from 'src/store/contact'
import { ContactConfirmation } from './contact-confirmation'
import { ContactEdit } from './contact-edit'
import { Button, Alert, AlertIcon } from 'src/components/shared'

export const ContactForm: FC = () => {
  const [formMode, setFormMode] = useRecoilState(formModeState)
  const inputs = useRecoilValue(inputsState)
  const { mutate, isLoading, isError, isSuccess } = useMutation(
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
      onSettled: () => setFormMode(FormMode.Edit),
    }
  )

  const onBack = () => {
    setFormMode(FormMode.Edit)
  }
  const onSend = () => {
    mutate(inputs)
  }

  if (formMode === FormMode.Confirmation) {
    return isLoading ? (
      <Alert status="info" message="送信中...">
        <AlertIcon status="info" />
      </Alert>
    ) : (
      <>
        <ContactConfirmation />
        <div>
          <Button onClick={onBack}>戻る</Button>
          <Button onClick={onSend}>送信</Button>
        </div>
      </>
    )
  }

  return (
    <>
      {isError && (
        <Alert status="error" message="送信できませんでした。">
          <AlertIcon status="error" />
        </Alert>
      )}
      {isSuccess && (
        <Alert status="success" message="送信しました。">
          <AlertIcon status="success" />
        </Alert>
      )}
      <ContactEdit />
    </>
  )
}

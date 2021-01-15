import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'

import { inputsState } from 'src/store/contact'

function nl2br(value: string | undefined): string {
  return value ? value.replace(/\n/g, '<br />') : ''
}

export const ContactConfirmation: FC = () => {
  const inputs = useRecoilValue(inputsState)
  return (
    <div>
      <div>{inputs.name}</div>
      <div dangerouslySetInnerHTML={{ __html: nl2br(inputs.content) }} />
    </div>
  )
}

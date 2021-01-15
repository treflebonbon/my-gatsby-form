import { atom } from 'recoil'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  name: z.string().nonempty({ message: '必須' }),
  content: z.string().nonempty({ message: '必須' }),
})

export const resolver = zodResolver(schema)

export type Inputs = z.infer<typeof schema>

export const FormMode = {
  Edit: 'edit',
  Confirmation: 'confirmation',
  Completed: 'completed',
} as const
export type FormMode = typeof FormMode[keyof typeof FormMode]

export const inputsState = atom<Inputs>({
  key: 'inputsState',
  default: {
    name: '',
    content: '',
  },
})

export const formModeState = atom<FormMode>({
  key: 'formModeState',
  default: FormMode.Edit,
})

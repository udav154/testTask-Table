export interface IInputProps {
  variantClass: string
  type?: string
  value: string | number
  error?: boolean
  step?: string
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
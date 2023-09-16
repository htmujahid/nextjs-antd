import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';

interface ButtonProps extends AntdButtonProps {
  children: React.ReactNode
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <AntdButton {...props} >
      {children}
    </AntdButton>
  )
}
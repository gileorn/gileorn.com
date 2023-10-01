import clsx from 'clsx'

export const CustomPre = (props: {
  children: React.ReactNode
  className: string
}) => (
  <pre className={clsx(props.className, 'overflow-x-scroll')}>
    {props.children}
  </pre>
)

import {FC} from 'react'

interface Props {
  title: string
}
const SubTitle: FC<Props> = ({title}) => {
  return (
    <h2 style={{textAlign: 'left', marginBottom: '18px', marginTop: '48px'}}>{title}</h2>
  )
}
export default SubTitle
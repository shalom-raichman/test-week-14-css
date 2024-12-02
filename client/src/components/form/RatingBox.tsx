import { useState } from 'react'
import { MilitaryFormKeys } from '../../model'

interface Props {
  rate: number
  setDataFunc: (newFild: string | number | Date, fildNAme: MilitaryFormKeys) => void
  fildName: MilitaryFormKeys
}

const RatingBox = ({ rate, setDataFunc, fildName }: Props) => {
  console.log(JSON.stringify(setDataFunc))
  console.log(JSON.stringify(fildName))
  const [selcted, setSelcted] = useState<boolean>(rate == 1)
  const handelClick = () => {
    setSelcted(!selcted)
  }
  return (
    <div onClick={handelClick} className={`chose-box ${selcted && 'selected'}`}>
      {rate}
    </div>
  )
}

export default RatingBox

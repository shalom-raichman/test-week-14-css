import { v4 } from 'uuid'
import RatingBox from './RatingBox'
import { MilitaryFormKeys } from '../../model'

interface Props {
  setDataFunc: (newFild: string | number | Date, fildNAme: MilitaryFormKeys) => void
  fildName: MilitaryFormKeys
}

const RatingBoxes = ({ setDataFunc, fildName }: Props) => {
  const rats = [1, 2, 3, 4, 5]
  return (
    <div className='rating-boxes'>
      {rats.map((r) => (
        <RatingBox fildName={fildName} setDataFunc={setDataFunc} key={v4()} rate={r} />
      ))}
    </div>
  )
}

export default RatingBoxes

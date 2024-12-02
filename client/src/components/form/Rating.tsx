import { v4 } from 'uuid'
import { MilitaryFormKeys } from '../../model'
import RatingBoxes from './RatingBoxes'

interface Props {
  setDataFunc: (newFild: string | number | Date, fildNAme: MilitaryFormKeys) => void
  choices: string[]
  header: string
  fildName: MilitaryFormKeys
}

const Rating = ({setDataFunc, choices, header, fildName}:Props) => {
  return (
    <div className='instatraction'>
      <div className='instatraction-l box-h'>
        <p>{header}</p>
      </div>
      {choices.map(c => <div key={v4()} className='wraper'> <p>{c}</p> <RatingBoxes fildName={fildName} setDataFunc={setDataFunc} key={v4()}/></div>)}
    </div>
  )
}

export default Rating
import { useState } from 'react'
import Instatraction from './Instatraction'
import Rating from './Rating'
import MilitaryForm, { MilitaryFormKeys } from '../../model'

const Form = () => {
  const [data, setData] = useState<MilitaryForm | {}>({})
  const combetRoles = ['גולני', 'שריון', 'תותחנים', 'חילוץ והצלה']
  const supportRoles = ['מש"ק ממטרות', 'רס"ר בנימרודי', 'טבח', 'ממלא מקרר בסנדוויצים']
  const TechRoles = ['מפתח פולסטאק', 'מפתח דאטא', 'מפתח דבאופס', 'תורן']

  const setDataFunc = (newFild: string | number | Date, fildNAme: MilitaryFormKeys) => {
    setData({ ...(data as MilitaryForm), [fildNAme]: newFild })
  }
  return (
    <div className='form'>
      <p>{JSON.stringify(data)}</p>

      <div className='name-inp-div'>
        <label htmlFor='name'>שם מלא</label>
        <input
          name='name'
          className='name-input'
          type='text'
          onChange={(e) => setDataFunc(e.target.value, MilitaryFormKeys.name)}
        />
      </div>
      <Instatraction />
      <Rating
        fildName={MilitaryFormKeys.combatPreferences}
        setDataFunc={setDataFunc}
        choices={combetRoles}
        header={'רצון לשרת כלוחם בזרוע היבשה'}
      />
      <Rating
        fildName={MilitaryFormKeys.supportPreferences}
        setDataFunc={setDataFunc}
        choices={supportRoles}
        header={"רצון לשרת כג'ובניק"}
      />
      <Rating
        fildName={MilitaryFormKeys.techPreferences}
        setDataFunc={setDataFunc}
        choices={TechRoles}
        header={'רצון לשרת בתכנית קודקוד'}
      />

      <div className='note-inp-div'>
        <label htmlFor='note'>הערות אישיות</label>
        <input
          name='note'
          className='note-input'
          type='text'
          onChange={(e) => setDataFunc(e.target.value, MilitaryFormKeys.personalNote)}
        />
      </div>
      <button className='sbt-btn'>שלח טופס</button>
    </div>
  )
}

export default Form

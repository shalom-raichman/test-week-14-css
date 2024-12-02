const Instatraction = () => {
  return (
    <div className='instatraction'>
      <div className='instatraction-l'>
        <img src='src\assets\warning.svg' alt='w' />
        <p>הנחיות למילוי המנילה</p>
      </div>

      <div className='instatraction-l'>
        <span>5</span>
        <input className='exam-r' type='range' />
        <span>1</span>
        <div className='exam'>
          <span>5 - רוצה מאוד</span>
          <span>1 - לא רוצה בכלל</span>
        </div>
      </div>
      <p className='instatraction-l'>
        צה"ל אינו מתחייב לשבץ אתכם על פי העדפותיכם, אך אנו עושים מאמץ להתחשב בהן
      </p>
      <p className='instatraction-l nonbtto'>
        מילוי הערות אישיות מגדיל את הסיכוי שנוכל להתאים את השיבוץ להעדפותיכם
      </p>
    </div>
  )
}

export default Instatraction

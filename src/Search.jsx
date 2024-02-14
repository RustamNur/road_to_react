import React from 'react'

const Search = (props) => {
   const {text,onSearchChange} = props

  return (
    <div>
          <form>
              <input
                  name='search'
                  placeholder='which technology?'
                  value={text}
                  onChange={onSearchChange}
              />
          </form> 
    </div>
  )
}

export default Search

/**
 * React PROPS farqli o'laroq, React STATE ilovalarni interaktiv qilish uchun ishlatiladi. Har ikkala tushuncha, PROPS va STATE aniq belgilangan maqsadlarga ega: PROPSlar ma'lumotni komponentlar daraxti bo'ylab uzatish uchun ishlatiladi, STATE esa vaqt o'tishi bilan ma'lumotni o'zgartirish uchun ishlatiladi. Ikkalasi ham qo'l bilan ishlashlari mumkin. Bu nimani anglatishini keyingi bo'limlarda ko'rib chiqamiz.
 */
/**
 * Props => immutable data , ya'ni readonly deyiladi, bu ma'lumotlar faqatgina component tree orqaligina (ya'ni parentdan childga uzatilinadigan data) yuboriladigan , aksar holatda backenddan kelgan ma'lumot hisoblanadi
 * 
 * State => mutable (o'zgaruvchan) data, vaqt o'tishi bilan o'zgatirsa bo'ladigan ma'lumot ya'ni asosan UI qismida biron bir amal ustida o'zgaritirilishi mumkun bo'lgan data hisoblanadi. 
 * 
 * 
 * Bu ikkisini yuqoridagi misollarimizda ko'rishimiz mumkun, props orqali biz App componentidan kelgan ma'lumotlarni Search'ga olsak useState react hooki orqali biz uni browser ekranida ko'rish imkoniga ega qiladi. Bu misolimizda Event Handler function lar yordamida UI qismida Inputga yozilgan ma'lumotlarni ekranda korish imkoni topilgan
 */

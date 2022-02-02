
import React,{ FC, useState,FormEvent } from 'react'
import { contactWithUs } from '../utils/fetching';
import { Section } from '../types/common';

const ContactForm: FC<{ path:string }> = ({ path }) => {
  const [send,setSend] = useState<boolean>(true)

  const [name,setName] = useState<string>('')
  const [email,setEmail] = useState<string>('')
  const [phone,setPhone] = useState<string>('')
  const [message,setMessage] = useState<string>('')

  const submit = async (e:FormEvent) => {
    e.preventDefault()
    console.log(path)
    if(name && email && phone && message && message) {
      await contactWithUs(path,{
        name,
        email,
        phone,
        message,
        date:new Date().toISOString().split('T')[0]
      })
      setSend(false)
      setTimeout(()=> setSend(true),3000)
      
    }
  }

  return (
                <form onSubmit={(e) => submit(e)}>
                  <h3>Контакты</h3>
                  <div className='contact__section'>
                    <div className='contact__row'>
                      <div>ИИН:</div>
                      <div>345345353453453</div>
                    </div>
                    <div className='contact__row'>
                      <div>ИИН:</div>
                      <div>345345353453453</div>
                    </div>
                    <div className='contact__row'>
                      <div>ИИН:</div>
                      <div>345345353453453</div>
                    </div>
                    <div className='contact__row'>
                      <div>ИИН:</div>
                      <div>345345353453453</div>
                    </div>
                  </div>
                  <input type="text" required={true} placeholder="Ваше ФИО" className="box" onChange={(e) => setName(e.target.value)} />
                  <input type="email" required={true} placeholder="Ваше email" className="box" onChange={(e) => setEmail(e.target.value)} />
                  <input type="text" required={true} placeholder="Ваш номер" className="box"  onChange={(e) => setPhone(e.target.value)} />
                  <textarea required={true} placeholder='Ваше обращение' className="box"  onChange={(e) => setMessage(e.target.value)}></textarea>
                  <button className="btn sendBtn" style={{background: ((!send && '#009b13') as string),color: ((!send && 'white') as string)}}>
                    {send ? 'Отправить сообщение' : 'Спасибо ! Мы с вами скоро свяжемся.'}
                  </button>
                </form>    
    )
}

export default ContactForm


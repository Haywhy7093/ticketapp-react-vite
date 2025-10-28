import React, {useEffect, useState} from 'react'
const STATUS = ['open','in_progress','closed']
export default function Tickets({navigate}){
  const [tickets, setTickets] = useState([])
  const [form, setForm] = useState({title:'',status:'open',description:''})
  const [editIndex, setEditIndex] = useState(null)
  const [msg, setMsg] = useState('')
  useEffect(()=> load(),[])
  function load(){ setTickets(JSON.parse(localStorage.getItem('ticketapp_tickets')||'[]')) }
  function save(){
    if(!form.title) return setMsg('Title is required')
    if(!STATUS.includes(form.status)) return setMsg('Invalid status')
    const data = JSON.parse(localStorage.getItem('ticketapp_tickets')||'[]')
    if(editIndex!=null){
      data[editIndex] = {...data[editIndex], ...form}
      setMsg('Ticket updated')
    } else {
      data.unshift({...form, id:Date.now()})
      setMsg('Ticket created')
    }
    localStorage.setItem('ticketapp_tickets', JSON.stringify(data))
    setForm({title:'',status:'open',description:''})
    setEditIndex(null)
    load()
    setTimeout(()=>setMsg(''),2000)
  }
  function remove(i){
    if(!confirm('Delete this ticket?')) return
    const data = JSON.parse(localStorage.getItem('ticketapp_tickets')||'[]')
    data.splice(i,1)
    localStorage.setItem('ticketapp_tickets', JSON.stringify(data))
    load()
  }
  function startEdit(i){
    setEditIndex(i)
    setForm({...tickets[i]})
  }
  return (
    <main className="container">
      <div className="topbar">
        <h1>Tickets</h1>
        <div><button onClick={()=>navigate('/dashboard')}>Back</button></div>
      </div>

      <section className="ticket-form card">
        <h3>{editIndex!=null ? 'Edit Ticket' : 'Create Ticket'}</h3>
        <label>Title<input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} /></label>
        <label>Status
          <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}>
            {STATUS.map(s=> <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label>Description
          <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})}></textarea>
        </label>
        <div className="actions">
          <button onClick={save}>{editIndex!=null ? 'Save' : 'Create'}</button>
        </div>
        {msg && <div className="toast">{msg}</div>}
      </section>

      <section className="ticket-list">
        {tickets.length===0 && <div className="card">No tickets yet</div>}
        {tickets.map((t,i)=>(
          <article key={t.id||i} className="ticket card">
            <div className="ticket-head">
              <h4>{t.title}</h4>
              <span className={'tag '+t.status}>{t.status}</span>
            </div>
            <p>{t.description}</p>
            <div className="ticket-actions">
              <button onClick={()=>startEdit(i)}>Edit</button>
              <button onClick={()=>remove(i)}>Delete</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

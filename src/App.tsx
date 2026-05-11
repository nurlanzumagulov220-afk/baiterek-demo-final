import { useState } from 'react'

const services = [
  {
    id: 'leasing_wagons_ind',
    title: 'Приобретение вагонов в лизинг (I этап)',
    category: 'Лизинг',
    description:
      'Первичная заявка на лизинг вагонов для предпринимателей. Включает предварительный анализ и сбор документов.',
    organization: 'АО «НИХ «Байтерек»',
    deadline: 'до 30 дней',
    trustScore: 87,
  },
  {
    id: 'leasing_wagons_exp',
    title: 'Приобретение вагонов в лизинг (II этап)',
    category: 'Лизинг',
    description:
      'Финальное оформление договора лизинга вагонов. Расчёт графика платежей и подписание.',
    organization: 'АО «НИХ «Байтерек»',
    deadline: 'до 45 дней',
    trustScore: 91,
  },
  {
    id: 'leasing_aircraft',
    title: 'Приобретение авиатранспорта в лизинг',
    category: 'Лизинг',
    description:
      'Лизинг самолётов и вертолётов для казахстанских компаний. Полный цикл от заявки до передачи.',
    organization: 'АО «НИХ «Байтерек»',
    deadline: 'до 60 дней',
    trustScore: 85,
  },
]

export default function App() {
  const [selected, setSelected] = useState<typeof services[0] | null>(null)

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20, fontFamily: 'Arial' }}>
      <h1>Единый портал поддержки бизнеса</h1>
      <p>
        <strong>70+ услуг Холдинга «Байтерек»</strong> &middot; Объём финансирования: ₸500 млрд
        &middot; Поддержано 15 000+ компаний
      </p>

      <h2>Каталог услуг</h2>
      <div style={{ display: 'grid', gap: 16 }}>
        {services.map((s) => (
          <div
            key={s.id}
            onClick={() => setSelected(s)}
            style={{
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 12,
              cursor: 'pointer',
              background: selected?.id === s.id ? '#f0f8ff' : 'white',
            }}
          >
            <strong>{s.title}</strong>
            <div style={{ fontSize: 14, color: '#555' }}>{s.organization}</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>{s.description}</div>
            <div style={{ fontSize: 12, marginTop: 6, color: '#888' }}>
              Срок: {s.deadline} &middot; Trust Score: {s.trustScore}%
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          style={{
            marginTop: 24,
            padding: 16,
            background: '#f9f9f9',
            borderRadius: 8,
          }}
        >
          <h3>{selected.title}</h3>
          <p>{selected.description}</p>
          <p>Организация: {selected.organization}</p>
          <p>Срок: {selected.deadline}</p>
          <p>Trust Score: {selected.trustScore}%</p>
          <button
            style={{
              marginTop: 8,
              padding: '8px 16px',
              background: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onClick={() => alert('Функция подачи заявки будет доступна после подключения бэкенда')}
          >
            Подать заявку
          </button>
        </div>
      )}
    </div>
  )
}

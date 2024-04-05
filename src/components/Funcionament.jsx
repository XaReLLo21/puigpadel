import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Funcionament = () => {
  const [openSections, setOpenSections] = useState([])

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((item) => item !== index))
    } else {
      setOpenSections([...openSections, index])
    }
  }

  const isSectionOpen = (index) => openSections.includes(index)

  const sectionsData = [
    {
      question: 'Quants equips com a màxim poden participar en el torneig?',
      answer: '16 parelles màxim (2 grups de 8) ',
    },
    {
      question: 'Com es classifiquen els equips per a la fase eliminatòria?',
      answer:
        'Es classifiquen els 4 primers de cada grup per la fase eliminatòria.',
    },
    {
      question:
        "Quin és el cost d'inscripció per a cada parella i com es pot pagar?",
      answer:
        'Inscripcions 20€ per parella (efectiu o Bizum als organitzadors) és per garantir el compromís de les parelles, el pressupost s’invertirà íntegrament per a premis i obsequis.',
    },
    {
      question: 'Quin obsequi rebran tots els participants?',
      answer:
        'Obsequi per tots/es els/les participants (un pot de pilotes nou).',
    },
    {
      question:
        'Quants sets es jugaran en cada partit i quin és el criteri per guanyar',
      answer: ' Partits al millor de tres sets (guanyar dos). ',
    },
    {
      question: 'Què passa si un partit arriba a 40-40?',
      answer:
        'Si s’arriba a 40-40 es farà punt d’or. Tenir en compte que es tenen 90 minuts per acabar el partit.',
    },
    {
      question: 'Hi haurà arbitratges en els partits?',
      answer:
        'No hi ha arbitratges, es confia amb la bona fe dels participants.',
    },
    {
      question:
        'Com es coordinaran les parelles per a trobar un horari de partit que els sigui convenient?',
      answer:
        'Les parelles queden amb els seus rivals per buscar un horari que els hi vagi bé a tots/es i faran la reserva adient. No ens podem responsabilitzar de les dificultats de trobar horaris entre parelles.',
    },
    {
      question:
        'Qui és la persona de contacte per enviar els resultats dels partits?',
      answer:
        'S’envien els resultats de cada partit al WhatsApp (Àlex 661706985). Cada diumenge s’actualitzaran els resultats.',
    },
    {
      question:
        'Quants punts es guanyen en un partit guanyat, perdut o no jugat?',
      answer:
        'Partit guanyat 3 punts, partit perdut 1 punt, partit no jugat 0 punts.',
    },
    {
      question: 'Com es resoldran possibles empats en la classificació?',
      answer: 'Es contaran els sets guanyats per possibles empats a punts.',
    },
  ]

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <section style={{ color: '#718096' }} id='fragor'>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            paddingTop: '8px',
            paddingBottom: '8px',
            paddingLeft: '4px',
            paddingRight: '16px',
          }}
        >
          <div
            style={{
              marginTop: '4px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            {sectionsData.map((section, index) => (
              <div
                style={{ marginBottom: '1px', position: 'relative' }}
                key={index}
              >
                <h4 style={{ marginBottom: '0px' }}>
                  <button
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      padding: '8px',
                      fontWeight: '500',
                      textAlign: 'left',
                      transition: 'all 0.3s ease-in',
                      borderBottom: '1px solid #CBD5E0',
                      cursor: 'pointer',
                      borderRadius: '0.375rem',
                      color: '#1c1d1f',
                    }}
                    onClick={() => toggleSection(index)}
                  >
                    <span>{section.question}</span>
                    {isSectionOpen(index) ? (
                      <FaChevronUp
                        style={{
                          position: 'absolute',
                          right: '10',
                          paddingTop: '1px',
                          fontSize: '12px',
                        }}
                      />
                    ) : (
                      <FaChevronDown
                        style={{
                          position: 'absolute',
                          right: '10',
                          paddingTop: '1px',
                          fontSize: '12px',
                        }}
                      />
                    )}
                  </button>
                </h4>
                <div
                  style={{
                    height: isSectionOpen(index) ? 'auto' : '0',
                    overflow: 'hidden',
                    transition: 'height 0.3s ease-in-out',
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      fontSize: '1rem',
                      lineHeight: '1.25',
                      color: '#000000',
                    }}
                  >
                    {section.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Funcionament

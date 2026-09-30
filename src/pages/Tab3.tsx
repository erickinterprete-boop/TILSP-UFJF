import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useState } from 'react';

type EscalaItem = {
  dia: string;
  horario: string;
  disciplina: string;
  alunos: string[];
  faculdade?: string;
  sala?: string;
};

const equipe: Record<string, EscalaItem[]> = {
  Aline: [
    {
      dia: 'Segunda-feira',
      horario: '08h–12h',
      disciplina: 'PU Inglês',
      alunos: ['Ana Lua'],
    },
    {
      dia: 'Terça-feira',
      horario: '08h–12h',
      disciplina: 'Alfabetização',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      dia: 'Sexta-feira',
      horario: '08h–12h',
      disciplina: 'Racial',
      alunos: ['Maria Laysa', 'Thais'],
    },
  ],

  Andreia: [
    {
      dia: 'Segunda-feira',
      horario: '21h–23h',
      disciplina: 'Computação',
      alunos: ['Gyde'],
      faculdade: 'ICE Novo',
      sala: '209',
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'Linguística 1',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '2045',
    },
    {
      dia: 'Quarta-feira',
      horario: '19h–21h',
      disciplina: 'Tradução',
      alunos: [],
      faculdade: 'Faculdade de Letras',
      sala: '2007',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PU Espanhol',
      alunos: ['Ana Lua'],
      faculdade: 'Faculdade de Letras',
      sala: '2037',
    },
  ],

  Camila: [
    {
      dia: 'Segunda-feira',
      horario: '19h–21h',
      disciplina: 'Introdução aos Estudos Surdos',
      alunos: ['Rosani', 'Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1034A',
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'PGA Libras',
      alunos: ['Ketlyn'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      dia: 'Quarta-feira',
      horario: '21h–23h',
      disciplina: 'Introdução aos Estudos Surdos',
      alunos: ['Rosani', 'Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1034A',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PGA Libras',
      alunos: ['Ketlyn'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      dia: 'Sexta-feira',
      horario: '19h–23h',
      disciplina: 'PU Francês',
      alunos: ['Ana Lua'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
  ],

  Cristina: [
    {
      dia: 'Terça-feira',
      horario: '16h–18h',
      disciplina: 'TCC',
      alunos: [],
    },
    {
      dia: 'Quarta-feira',
      horario: '16h–18h',
      disciplina: 'Laboratório de Química Orgânica',
      alunos: [],
      faculdade: 'ICE Novo',
      sala: 'L201',
    },
    {
      dia: 'Quinta-feira',
      horario: '16h–18h',
      disciplina: 'TCC Ana Lua',
      alunos: ['Ana Lua'],
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'Linguística 1',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '2045',
    },
  ],

  Débora: [
    {
      dia: 'Quinta-feira',
      horario: '08h–12h',
      disciplina: 'Escolares',
      alunos: ['Maria Laysa', 'Thais'],
    },
  ],

  Erick: [
    {
      dia: 'Segunda-feira',
      horario: '19h–21h',
      disciplina: 'Introdução aos Estudos Surdos',
      alunos: ['Rosani', 'Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1034A',
    },
    {
      dia: 'Terça-feira',
      horario: '19h–21h',
      disciplina: 'Escrita de Sinais',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      dia: 'Quarta-feira',
      horario: '21h–23h',
      disciplina: 'Introdução aos Estudos Surdos',
      alunos: ['Rosani', 'Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1034A',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PU Espanhol',
      alunos: ['Ana Lua'],
      faculdade: 'Faculdade de Letras',
      sala: '2037',
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Escrita de Sinais',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
  ],

  Fabiano: [
    {
      dia: 'Quarta-feira',
      horario: '14h–16h',
      disciplina: 'TCC Ana Lua',
      alunos: ['Ana Lua'],
    },
    {
      dia: 'Sexta-feira',
      horario: '08h–12h',
      disciplina: 'Racial',
      alunos: ['Maria Laysa', 'Thais'],
    },
  ],

  Gabriel: [
    {
      dia: 'Terça-feira',
      horario: '16h–18h',
      disciplina: 'TCC',
      alunos: [],
    },
    {
      dia: 'Quarta-feira',
      horario: '16h–18h',
      disciplina: 'Laboratório de Química Orgânica',
      alunos: [],
      faculdade: 'ICE Novo',
      sala: 'L201',
    },
    {
      dia: 'Quinta-feira',
      horario: '16h–18h',
      disciplina: 'TCC Ana Lua',
      alunos: ['Ana Lua'],
    },
    {
      dia: 'Sexta-feira',
      horario: '16h–18h',
      disciplina: 'TCC Carol',
      alunos: ['Carolina'],
    },
  ],

  Karina: [
    {
      dia: 'Segunda-feira',
      horario: '08h–12h',
      disciplina: 'PU Inglês',
      alunos: ['Ana Lua'],
    },
    {
      dia: 'Terça-feira',
      horario: '08h–12h',
      disciplina: 'Alfabetização',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      dia: 'Sexta-feira',
      horario: '08h–12h',
      disciplina: 'Racial',
      alunos: ['Maria Laysa', 'Thais'],
    },
  ],

  Laiza: [
    {
      dia: 'Segunda-feira',
      horario: '19h–22h',
      disciplina: 'Química das Soluções',
      alunos: ['Ana Cleia'],
      faculdade: 'ICE Novo',
      sala: '302',
    },
    {
      dia: 'Quarta-feira',
      horario: '14h–16h',
      disciplina: 'TCC Ana Lua',
      alunos: ['Ana Lua'],
    },
    {
      dia: 'Sexta-feira',
      horario: '16h–18h',
      disciplina: 'TCC Carol',
      alunos: ['Carolina'],
    },
  ],

  Luciana: [
    {
      dia: 'Quarta-feira',
      horario: '08h–12h',
      disciplina: 'Infantil',
      alunos: ['Maria Laysa', 'Thais'],
    },
  ],

  Marcela: [
    {
      dia: 'Segunda-feira',
      horario: '08h–10h',
      disciplina: 'Química',
      alunos: ['Ana Cleia'],
    },
    {
      dia: 'Terça-feira',
      horario: '08h–10h',
      disciplina: 'Física 1B',
      alunos: ['Ana Cleia'],
    },
    {
      dia: 'Quarta-feira',
      horario: '08h–10h',
      disciplina: 'Extraclasse Química',
      alunos: ['Ana Cleia'],
    },
    {
      dia: 'Quinta-feira',
      horario: '08h–10h',
      disciplina: 'Física 1B',
      alunos: ['Ana Cleia'],
    },
    {
      dia: 'Sexta-feira',
      horario: '10h–12h',
      disciplina: 'Química',
      alunos: ['Ana Cleia'],
    },
  ],

  Nathalia: [
    {
      dia: 'Segunda-feira',
      horario: '08h–12h',
      disciplina: 'Escolares',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      dia: 'Quinta-feira',
      horario: '08h–12h',
      disciplina: 'Escolares',
      alunos: ['Maria Laysa', 'Thais'],
    },
  ],

  Paula: [
    {
      dia: 'Quarta-feira',
      horario: '08h–12h',
      disciplina: 'Infantil',
      alunos: ['Maria Laysa', 'Thais'],
    },
  ],

  Raissa: [
    {
      dia: 'Segunda-feira',
      horario: '08h–12h',
      disciplina: 'Escolares',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      dia: 'Quarta-feira',
      horario: '08h–12h',
      disciplina: 'Infantil',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      dia: 'Quinta-feira',
      horario: '08h–12h',
      disciplina: 'Escolares',
      alunos: ['Maria Laysa', 'Thais'],
    },
  ],

  Rodrigo: [
    {
      dia: 'Quarta-feira',
      horario: '19h–21h',
      disciplina: 'Tradução',
      alunos: [],
      faculdade: 'Faculdade de Letras',
      sala: '2007',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'Linguística 1',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '2045',
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Escrita de Sinais',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      dia: 'Sexta-feira',
      horario: '19h–23h',
      disciplina: 'PU Francês',
      alunos: ['Ana Lua'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
  ],

  Thayrine: [
    {
      dia: 'Segunda-feira',
      horario: '21h–23h',
      disciplina: 'Computação',
      alunos: ['Gyde'],
      faculdade: 'ICE Novo',
      sala: '209',
    },
    {
      dia: 'Terça-feira',
      horario: '19h–21h',
      disciplina: 'Escrita de Sinais',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'PGA Libras',
      alunos: ['Ketlyn'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PGA Libras',
      alunos: ['Ketlyn'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Computação',
      alunos: ['Gyde'],
      faculdade: 'ICE Novo',
      sala: '209',
    },
  ],

  Vanessa: [
    {
      dia: 'Segunda-feira',
      horario: '08h–10h',
      disciplina: 'Química',
      alunos: ['Ana Cleia'],
    },
    {
      dia: 'Terça-feira',
      horario: '08h–10h',
      disciplina: 'Física 1B',
      alunos: ['Ana Cleia'],
    },
    {
      dia: 'Quarta-feira',
      horario: '08h–10h',
      disciplina: 'Extraclasse Química',
      alunos: ['Ana Cleia'],
    },
    {
      dia: 'Quinta-feira',
      horario: '08h–10h',
      disciplina: 'Física 1B',
      alunos: ['Ana Cleia'],
    },
    {
      dia: 'Sexta-feira',
      horario: '10h–12h',
      disciplina: 'Química',
      alunos: ['Ana Cleia'],
    },
  ],

  Wellington: [
    {
      dia: 'Segunda-feira',
      horario: '19h–22h',
      disciplina: 'Química das Soluções',
      alunos: ['Ana Cleia'],
      faculdade: 'ICE Novo',
      sala: '302',
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'Linguística 1',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '2045',
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Computação',
      alunos: ['Gyde'],
      faculdade: 'ICE Novo',
      sala: '209',
    },
  ],
};

const Tab3: React.FC = () => {
  const [aberto, setAberto] = useState<string | null>(null);

  const nomes = Object.keys(equipe).sort((a, b) =>
    a.localeCompare(b, 'pt-BR')
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Equipe</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: '16px' }}>

          {nomes.map((nome) => {
            const estaAberto = aberto === nome;

            return (
              <IonCard key={nome}>

                <IonCardHeader>
                  <IonCardTitle>
                    {nome}
                  </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>

                  <IonButton
                    fill="outline"
                    onClick={() =>
                      setAberto(
                        estaAberto ? null : nome
                      )
                    }
                  >
                    {estaAberto
                      ? 'Fechar'
                      : 'Ver escala'}
                  </IonButton>

                  {estaAberto && (
                    <div style={{ marginTop: '16px' }}>

                      {equipe[nome].map(
                        (item, index) => (
                          <div
                            key={index}
                            style={{
                              marginBottom: '20px',
                              paddingBottom: '15px',
                              borderBottom:
                                '1px solid var(--ion-color-medium)',
                            }}
                          >

                            <p>
                              <strong>
                                📅 {item.dia}
                              </strong>
                            </p>

                            <p>
                              🕐 {item.horario}
                            </p>

                            <p>
                              📚 {item.disciplina}
                            </p>

                            {item.faculdade && (
                              <>
                                <p>
                                  🏛️ {item.faculdade}
                                </p>

                                <p>
                                  🚪 Sala {item.sala}
                                </p>
                              </>
                            )}

                            {item.alunos.length > 0 && (
                              <>
                                <p>
                                  <strong>
                                    🎓 Alunos surdos:
                                  </strong>
                                </p>

                                {item.alunos.map(
                                  (aluno) => (
                                    <p key={aluno}>
                                      • {aluno}
                                    </p>
                                  )
                                )}
                              </>
                            )}

                          </div>
                        )
                      )}

                    </div>
                  )}

                </IonCardContent>
              </IonCard>
            );
          })}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
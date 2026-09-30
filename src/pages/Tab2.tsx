import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
} from '@ionic/react';

import { useState } from 'react';

import './Tab2.css';

const escala = {
  'Segunda-feira': [
    {
      disciplina: 'Química',
      horario: '08h–10h',
      interpretes: 'Marcela e Vanessa',
      alunos: ['Ana Cleia'],
    },
    {
      disciplina: 'Escolares',
      horario: '08h–12h',
      interpretes: 'Raissa e Nathalia',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      disciplina: 'PU Inglês',
      horario: '08h–12h',
      interpretes: 'Karina e Aline',
      alunos: ['Ana Lua'],
    },
    {
      disciplina: 'Introdução aos Estudos Surdos',
      horario: '19h–21h',
      interpretes: 'Erick e Camila',
      alunos: ['Rosani', 'Vera'],
    },
    {
      disciplina: 'Química das Soluções',
      horario: '19h–22h',
      interpretes: 'Wellington e Laiza',
      alunos: ['Ana Cleia'],
    },
    {
      disciplina: 'Computação',
      horario: '21h–23h',
      interpretes: 'Thayrine e Andreia',
      alunos: ['Gyde'],
    },
  ],

  'Terça-feira': [
    {
      disciplina: 'Física 1B',
      horario: '08h–10h',
      interpretes: 'Vanessa e Marcela',
      alunos: ['Ana Cleia'],
    },
    {
      disciplina: 'Alfabetização',
      horario: '08h–12h',
      interpretes: 'Karina e Aline',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      disciplina: 'TCC',
      horario: '16h–18h',
      interpretes: 'Gabriel e Cristina',
      alunos: [],
    },
    {
      disciplina: 'Escrita de Sinais',
      horario: '19h–21h',
      interpretes: 'Thayrine e Erick',
      alunos: ['Vera'],
    },
    {
      disciplina: 'PGA Libras',
      horario: '21h–23h',
      interpretes: 'Thayrine e Camila',
      alunos: ['Ketlyn'],
    },
    {
      disciplina: 'Linguística 1',
      horario: '21h–23h',
      interpretes: 'Wellington e Andreia',
      alunos: ['Vera'],
    },
  ],

  'Quarta-feira': [
    {
      disciplina: 'Extraclasse Química',
      horario: '08h–10h',
      interpretes: 'Vanessa e Marcela',
      alunos: ['Ana Cleia'],
    },
    {
      disciplina: 'Infantil',
      horario: '08h–12h',
      interpretes: 'Luciana, Paula e Raissa',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      disciplina: 'TCC Ana Lua',
      horario: '14h–16h',
      interpretes: 'Fabiano e Laiza',
      alunos: ['Ana Lua'],
    },
    {
      disciplina: 'Laboratório de Química Orgânica',
      horario: '16h–18h',
      interpretes: 'Cristina e Gabriel',
      alunos: [],
    },
    {
      disciplina: 'Tradução',
      horario: '19h–21h',
      interpretes: 'Rodrigo e Andreia',
      alunos: [],
    },
    {
      disciplina: 'Introdução aos Estudos Surdos',
      horario: '21h–23h',
      interpretes: 'Erick e Camila',
      alunos: ['Rosani', 'Vera'],
    },
  ],

  'Quinta-feira': [
    {
      disciplina: 'Física 1B',
      horario: '08h–10h',
      interpretes: 'Vanessa e Marcela',
      alunos: ['Ana Cleia'],
    },
    {
      disciplina: 'Escolares',
      horario: '08h–12h',
      interpretes: 'Raissa, Nathalia e Débora',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      disciplina: 'TCC Ana Lua',
      horario: '16h–18h',
      interpretes: 'Gabriel e Cristina',
      alunos: ['Ana Lua'],
    },
    {
      disciplina: 'Linguística 1',
      horario: '19h–21h',
      interpretes: 'Rodrigo e Cristina',
      alunos: ['Vera'],
    },
    {
      disciplina: 'PGA Libras',
      horario: '19h–21h',
      interpretes: 'Camila e Thayrine',
      alunos: ['Ketlyn'],
    },
    {
      disciplina: 'PU Espanhol',
      horario: '19h–21h',
      interpretes: 'Andreia e Erick',
      alunos: ['Ana Lua'],
    },
    {
      disciplina: 'Computação',
      horario: '21h–23h',
      interpretes: 'Thayrine e Wellington',
      alunos: ['Gyde'],
    },
    {
      disciplina: 'Escrita de Sinais',
      horario: '21h–23h',
      interpretes: 'Rodrigo e Erick',
      alunos: ['Vera'],
    },
  ],

  'Sexta-feira': [
    {
      disciplina: 'Racial',
      horario: '08h–12h',
      interpretes: 'Fabiano, Karina e Aline',
      alunos: ['Maria Laysa', 'Thais'],
    },
    {
      disciplina: 'Química',
      horario: '10h–12h',
      interpretes: 'Vanessa e Marcela',
      alunos: ['Ana Cleia'],
    },
    {
      disciplina: 'TCC Carol',
      horario: '16h–18h',
      interpretes: 'Gabriel e Laiza',
      alunos: ['Carolina'],
    },
    {
      disciplina: 'PU Francês',
      horario: '19h–23h',
      interpretes: 'Rodrigo e Camila',
      alunos: ['Ana Lua'],
    },
  ],
};

const Tab2: React.FC = () => {
  const [alunosAbertos, setAlunosAbertos] =
    useState<string | null>(null);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Escala</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        {Object.entries(escala).map(
          ([dia, atividades]) => (

            <IonCard key={dia}>

              <IonCardHeader>
                <IonCardTitle>
                  {dia}
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>

                <IonList>

                  {atividades.map(
                    (atividade, index) => {

                      const chave =
                        `${dia}-${index}`;

                      return (
                        <div key={chave}>

                          <IonItem>

                            <IonLabel>

                              <h2>
                                {atividade.disciplina}
                              </h2>

                              <p>
                                {atividade.horario}
                              </p>

                              <p>
                                Intérpretes:{' '}
                                {atividade.interpretes}
                              </p>

                              {atividade.alunos.length > 0 && (
                                <IonButton
                                  fill="clear"
                                  size="small"
                                  onClick={() =>
                                    setAlunosAbertos(
                                      alunosAbertos === chave
                                        ? null
                                        : chave
                                    )
                                  }
                                >
                                  {alunosAbertos === chave
                                    ? 'Ocultar alunos'
                                    : 'Ver alunos'}
                                </IonButton>
                              )}

                              {alunosAbertos === chave && (
                                <div>

                                  <p>
                                    <strong>
                                      🎓 Alunos surdos:
                                    </strong>
                                  </p>

                                  {atividade.alunos.map(
                                    (aluno) => (
                                      <p key={aluno}>
                                        • {aluno}
                                      </p>
                                    )
                                  )}

                                </div>
                              )}

                            </IonLabel>

                          </IonItem>

                        </div>
                      );
                    }
                  )}

                </IonList>

              </IonCardContent>

            </IonCard>

          )
        )}

        <IonCard>

          <IonCardHeader>
            <IonCardTitle>
              Eventos
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <IonList>

              <IonItem>
                <IonLabel>

                  <h2>
                    Setembro Surdo
                  </h2>

                  <p>
                    28/09
                  </p>

                </IonLabel>
              </IonItem>

            </IonList>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Tab2;
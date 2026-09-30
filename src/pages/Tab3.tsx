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

import './Tab3.css';

const equipe = [
  'Aline',
  'Andreia',
  'Camila',
  'Cristina',
  'Débora',
  'Erick',
  'Fabiano',
  'Gabriel',
  'Karina',
  'Laiza',
  'Luciana',
  'Marcela',
  'Nathalia',
  'Paula',
  'Raissa',
  'Rodrigo',
  'Thayrine',
  'Vanessa',
  'Wellington',
];

const escalas = {
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
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'Linguística 1',
      alunos: ['Vera'],
    },
    {
      dia: 'Quarta-feira',
      horario: '19h–21h',
      disciplina: 'Tradução',
      alunos: [],
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PU Espanhol',
      alunos: ['Ana Lua'],
    },
  ],

  Camila: [
    {
      dia: 'Segunda-feira',
      horario: '19h–21h',
      disciplina: 'Introdução aos Estudos Surdos',
      alunos: ['Rosani', 'Vera'],
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'PGA Libras',
      alunos: ['Ketlyn'],
    },
    {
      dia: 'Quarta-feira',
      horario: '21h–23h',
      disciplina: 'Introdução aos Estudos Surdos',
      alunos: ['Rosani', 'Vera'],
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PGA Libras',
      alunos: ['Ketlyn'],
    },
    {
      dia: 'Sexta-feira',
      horario: '19h–23h',
      disciplina: 'PU Francês',
      alunos: ['Ana Lua'],
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
    },
    {
      dia: 'Terça-feira',
      horario: '19h–21h',
      disciplina: 'Escrita de Sinais',
      alunos: ['Vera'],
    },
    {
      dia: 'Quarta-feira',
      horario: '21h–23h',
      disciplina: 'Introdução aos Estudos Surdos',
      alunos: ['Rosani', 'Vera'],
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PU Espanhol',
      alunos: ['Ana Lua'],
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Escrita de Sinais',
      alunos: ['Vera'],
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
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'Linguística 1',
      alunos: ['Vera'],
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Escrita de Sinais',
      alunos: ['Vera'],
    },
    {
      dia: 'Sexta-feira',
      horario: '19h–23h',
      disciplina: 'PU Francês',
      alunos: ['Ana Lua'],
    },
  ],

  Thayrine: [
    {
      dia: 'Segunda-feira',
      horario: '21h–23h',
      disciplina: 'Computação',
      alunos: ['Gyde'],
    },
    {
      dia: 'Terça-feira',
      horario: '19h–21h',
      disciplina: 'Escrita de Sinais',
      alunos: ['Vera'],
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'PGA Libras',
      alunos: ['Ketlyn'],
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PGA Libras',
      alunos: ['Ketlyn'],
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Computação',
      alunos: ['Gyde'],
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
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'Linguística 1',
      alunos: ['Vera'],
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Computação',
      alunos: ['Gyde'],
    },
  ],
};

const Tab3: React.FC = () => {
  const [pessoaSelecionada, setPessoaSelecionada] =
    useState<string | null>(null);

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Equipe</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Equipe
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>

          <IonCardHeader>
            <IonCardTitle>
              Equipe TILSP-UFJF
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <IonList>

              {equipe.map((nome) => (

                <div key={nome}>

                  <IonItem>

                    <IonLabel>
                      <h2>{nome}</h2>
                      <p>Intérprete de Libras</p>
                    </IonLabel>

                    <IonButton
                      slot="end"
                      fill="outline"
                      onClick={() =>
                        setPessoaSelecionada(
                          pessoaSelecionada === nome
                            ? null
                            : nome
                        )
                      }
                    >
                      {pessoaSelecionada === nome
                        ? 'Fechar'
                        : 'Ver escala'}
                    </IonButton>

                  </IonItem>

                  {pessoaSelecionada === nome && (

                    <IonCard>

                      <IonCardHeader>
                        <IonCardTitle>
                          Escala de {nome}
                        </IonCardTitle>
                      </IonCardHeader>

                      <IonCardContent>

                        {escalas[
                          nome as keyof typeof escalas
                        ].length === 0 ? (

                          <p>
                            Nenhuma disciplina cadastrada
                            para esta pessoa.
                          </p>

                        ) : (

                          <IonList>

                            {escalas[
                              nome as keyof typeof escalas
                            ].map((item, index) => (

                              <IonItem key={index}>

                                <IonLabel>

                                  <h2>
                                    {item.disciplina}
                                  </h2>

                                  <p>
                                    {item.dia}
                                  </p>

                                  <p>
                                    🕐 {item.horario}
                                  </p>

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

                                </IonLabel>

                              </IonItem>

                            ))}

                          </IonList>

                        )}

                      </IonCardContent>

                    </IonCard>

                  )}

                </div>

              ))}

            </IonList>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Tab3;
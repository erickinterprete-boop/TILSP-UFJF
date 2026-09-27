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
  'Andreia',
  'Camila',
  'Cristina',
  'Débora',
  'Erick',
  'Gabriel',
  'Laiza',
  'Rodrigo',
  'Thayrine',
  'Wellington',
];

const escalas = {
  Andreia: [
    {
      dia: 'Quarta-feira',
      horario: '19h–21h',
      disciplina: 'Estudos da Tradução',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–22h30',
      disciplina: 'PU Espanhol 3',
    },
  ],

  Camila: [
    {
      dia: 'Segunda-feira',
      horario: '19h–21h',
      disciplina: 'Introdução aos Estudos Surdos',
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'PGA Libras',
    },
    {
      dia: 'Quarta-feira',
      horario: '21h–23h',
      disciplina: 'Introdução aos Estudos Surdos',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PGA Libras',
    },
    {
      dia: 'Sexta-feira',
      horario: '19h–22h',
      disciplina: 'PU Francês 1',
    },
  ],

  Cristina: [
    {
      dia: 'Segunda-feira',
      horario: '15h–16h',
      disciplina: 'PIBID',
    },
  ],

  Débora: [
  {
    dia: 'Quarta-feira',
    horario: '10h–12h',
    disciplina: 'Química',
  },
  {
    dia: 'Quinta-feira',
    horario: '10h–12h',
    disciplina: 'Escolares',
  },
],

  Erick: [
    {
      dia: 'Segunda-feira',
      horario: '19h–21h',
      disciplina: 'Introdução aos Estudos Surdos',
    },
    {
      dia: 'Terça-feira',
      horario: '19h–21h',
      disciplina: 'Escrita de Sinais',
    },
    {
      dia: 'Quarta-feira',
      horario: '21h–23h',
      disciplina: 'Introdução aos Estudos Surdos',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–22h30',
      disciplina: 'PU Espanhol 3',
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Escrita de Sinais',
    },
  ],

  Gabriel: [
  {
    dia: 'Sexta-feira',
    horario: '16h–18h',
    disciplina: 'TCC Carolina',
  },
],

Laiza: [
  {
    dia: 'Sexta-feira',
    horario: '16h–18h',
    disciplina: 'TCC Carolina',
  },
],

  Rodrigo: [
    {
      dia: 'Quarta-feira',
      horario: '19h–21h',
      disciplina: 'Estudos da Tradução',
    },
    {
      dia: 'Quinta-feira',
      horario: '21h–23h',
      disciplina: 'Escrita de Sinais',
    },
    {
      dia: 'Sexta-feira',
      horario: '19h–22h',
      disciplina: 'PU Francês 1',
    },
  ],

  Thayrine: [
    {
      dia: 'Terça-feira',
      horario: '19h–21h',
      disciplina: 'Escrita de Sinais',
    },
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'PGA Libras',
    },
    {
      dia: 'Quinta-feira',
      horario: '19h–21h',
      disciplina: 'PGA Libras',
    },
  ],

  Wellington: [
    {
      dia: 'Terça-feira',
      horario: '21h–23h',
      disciplina: 'Linguística 1',
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
            <IonTitle size="large">Equipe</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Equipe TILSP-UFJF</IonCardTitle>
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
                          pessoaSelecionada === nome ? null : nome
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

                        {escalas[nome as keyof typeof escalas]
                          .length === 0 ? (
                          <p>
                            Nenhuma disciplina cadastrada para esta
                            pessoa.
                          </p>
                        ) : (
                          <IonList>
                            {escalas[
                              nome as keyof typeof escalas
                            ].map((item, index) => (
                              <IonItem key={index}>
                                <IonLabel>
                                  <h2>{item.disciplina}</h2>
                                  <p>{item.dia}</p>
                                  <p>🕐 {item.horario}</p>
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
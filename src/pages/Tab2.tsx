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

type Atividade = {
  horario: string;
  disciplina: string;
  interpretes: string;
  alunos: string[];
  faculdade?: string;
  sala?: string;
};

const escala: Record<string, Atividade[]> = {
  Segunda: [
    { horario: '08h–10h', disciplina: 'Química', interpretes: 'Marcela e Vanessa', alunos: ['Ana Cleia'] },
    { horario: '08h–12h', disciplina: 'Escolares', interpretes: 'Raissa e Nathalia', alunos: ['Maria Laysa', 'Thais'] },
    { horario: '08h–12h', disciplina: 'PU Inglês', interpretes: 'Karina e Aline', alunos: ['Ana Lua'] },
    {
      horario: '19h–21h',
      disciplina: 'Introdução aos Estudos Surdos',
      interpretes: 'Erick e Camila',
      alunos: ['Rosani', 'Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1034A',
    },
    {
      horario: '19h–22h',
      disciplina: 'Química das Soluções',
      interpretes: 'Wellington e Laiza',
      alunos: ['Ana Cleia'],
      faculdade: 'ICE Novo',
      sala: '302',
    },
    {
      horario: '21h–23h',
      disciplina: 'Computação',
      interpretes: 'Thayrine e Andreia',
      alunos: ['Gyde'],
      faculdade: 'ICE Novo',
      sala: '209',
    },
  ],

  Terça: [
    { horario: '08h–10h', disciplina: 'Física 1B', interpretes: 'Vanessa e Marcela', alunos: ['Ana Cleia'] },
    { horario: '08h–12h', disciplina: 'Alfabetização', interpretes: 'Karina e Aline', alunos: ['Maria Laysa', 'Thais'] },
    { horario: '16h–18h', disciplina: 'TCC', interpretes: 'Gabriel e Cristina', alunos: [] },
    {
      horario: '19h–21h',
      disciplina: 'Escrita de Sinais',
      interpretes: 'Thayrine e Erick',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      horario: '21h–23h',
      disciplina: 'PGA Libras',
      interpretes: 'Thayrine e Camila',
      alunos: ['Ketlyn'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      horario: '21h–23h',
      disciplina: 'Linguística 1',
      interpretes: 'Wellington e Andreia',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '2045',
    },
  ],

  Quarta: [
    { horario: '08h–10h', disciplina: 'Extraclasse Química', interpretes: 'Vanessa e Marcela', alunos: ['Ana Cleia'] },
    { horario: '08h–12h', disciplina: 'Infantil', interpretes: 'Luciana, Paula e Raissa', alunos: ['Maria Laysa', 'Thais'] },
    { horario: '14h–16h', disciplina: 'TCC Ana Lua', interpretes: 'Fabiano e Laiza', alunos: ['Ana Lua'] },
    {
      horario: '16h–18h',
      disciplina: 'Laboratório de Química Orgânica',
      interpretes: 'Cristina e Gabriel',
      alunos: [],
      faculdade: 'ICE Novo',
      sala: 'L201',
    },
    {
      horario: '19h–21h',
      disciplina: 'Tradução',
      interpretes: 'Rodrigo e Andreia',
      alunos: [],
      faculdade: 'Faculdade de Letras',
      sala: '2007',
    },
    {
      horario: '21h–23h',
      disciplina: 'Introdução aos Estudos Surdos',
      interpretes: 'Erick e Camila',
      alunos: ['Rosani', 'Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1034A',
    },
  ],

  Quinta: [
    { horario: '08h–10h', disciplina: 'Física 1B', interpretes: 'Vanessa e Marcela', alunos: ['Ana Cleia'] },
    { horario: '08h–12h', disciplina: 'Escolares', interpretes: 'Raissa, Nathalia e Débora', alunos: ['Maria Laysa', 'Thais'] },
    { horario: '16h–18h', disciplina: 'TCC Ana Lua', interpretes: 'Gabriel e Cristina', alunos: ['Ana Lua'] },
    {
      horario: '19h–21h',
      disciplina: 'Linguística 1',
      interpretes: 'Rodrigo e Cristina',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '2045',
    },
    {
      horario: '19h–21h',
      disciplina: 'PGA Libras',
      interpretes: 'Camila e Thayrine',
      alunos: ['Ketlyn'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
    {
      horario: '19h–21h',
      disciplina: 'PU Espanhol',
      interpretes: 'Andreia e Erick',
      alunos: ['Ana Lua'],
      faculdade: 'Faculdade de Letras',
      sala: '2037',
    },
    {
      horario: '21h–23h',
      disciplina: 'Computação',
      interpretes: 'Thayrine e Wellington',
      alunos: ['Gyde'],
      faculdade: 'ICE Novo',
      sala: '209',
    },
    {
      horario: '21h–23h',
      disciplina: 'Escrita de Sinais',
      interpretes: 'Rodrigo e Erick',
      alunos: ['Vera'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
  ],

  Sexta: [
    { horario: '08h–12h', disciplina: 'Racial', interpretes: 'Fabiano, Karina e Aline', alunos: ['Maria Laysa', 'Thais'] },
    { horario: '10h–12h', disciplina: 'Química', interpretes: 'Vanessa e Marcela', alunos: ['Ana Cleia'] },
    { horario: '16h–18h', disciplina: 'TCC Carol', interpretes: 'Gabriel e Laiza', alunos: ['Carolina'] },
    {
      horario: '19h–23h',
      disciplina: 'PU Francês',
      interpretes: 'Rodrigo e Camila',
      alunos: ['Ana Lua'],
      faculdade: 'Faculdade de Letras',
      sala: '1040',
    },
  ],
};

const Tab2: React.FC = () => {
  const [alunosAbertos, setAlunosAbertos] = useState<string | null>(null);

  const renderAtividade = (
    atividade: Atividade,
    identificador: string
  ) => {
    const aberto = alunosAbertos === identificador;

    return (
      <IonCard key={identificador}>
        <IonCardHeader>
          <IonCardTitle>
            {atividade.disciplina}
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p>
            <strong>🕐 Horário:</strong>{' '}
            {atividade.horario}
          </p>

          <p>
            <strong>👥 Intérpretes:</strong>{' '}
            {atividade.interpretes}
          </p>

          {atividade.faculdade && (
            <>
              <p>
                <strong>🏛️ Faculdade:</strong>{' '}
                {atividade.faculdade}
              </p>

              <p>
                <strong>🚪 Sala:</strong>{' '}
                {atividade.sala}
              </p>
            </>
          )}

          {atividade.alunos.length > 0 && (
            <>
              <IonButton
                fill="clear"
                size="small"
                onClick={() =>
                  setAlunosAbertos(
                    aberto ? null : identificador
                  )
                }
              >
                {aberto
                  ? 'Ocultar alunos'
                  : 'Ver alunos'}
              </IonButton>

              {aberto && (
                <div>
                  <p>
                    <strong>
                      🎓 Alunos surdos:
                    </strong>
                  </p>

                  {atividade.alunos.map((aluno) => (
                    <p key={aluno}>
                      • {aluno}
                    </p>
                  ))}
                </div>
              )}
            </>
          )}
        </IonCardContent>
      </IonCard>
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Escala</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: '16px' }}>

          {Object.entries(escala).map(
            ([dia, atividades]) => (
              <div key={dia}>

                <h1>{dia}</h1>

                {atividades.map(
                  (atividade, index) =>
                    renderAtividade(
                      atividade,
                      `${dia}-${index}`
                    )
                )}

              </div>
            )
          )}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
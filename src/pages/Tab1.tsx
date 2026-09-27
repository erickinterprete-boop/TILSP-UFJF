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
  IonDatetime,
  IonButton,
  IonIcon,
} from '@ionic/react';

import {
  moon,
  sunny,
} from 'ionicons/icons';

import { useEffect, useState } from 'react';

import '@ionic/react/css/palettes/dark.class.css';

import './Tab1.css';

const escalaSemanal = {
  1: [
    {
      horario: '15h–16h',
      disciplina: 'PIBID',
      interpretes: 'Cristina e Fabiano',
    },
    {
      horario: '19h–21h',
      disciplina: 'Introdução aos Estudos Surdos',
      interpretes: 'Erick e Camila',
    },
  ],

  2: [
    {
      horario: '19h–21h',
      disciplina: 'Escrita de Sinais',
      interpretes: 'Erick e Thayrine',
    },
    {
      horario: '21h–23h',
      disciplina: 'PGA Libras',
      interpretes: 'Camila e Thayrine',
    },
    {
      horario: '21h–23h',
      disciplina: 'Linguística 1',
      interpretes: 'Wellington e Andreia',
    },
  ],

  3: [
    {
      horario: '10h–12h',
      disciplina: 'Química',
      interpretes: 'Débora',
    },
    {
      horario: '19h–21h',
      disciplina: 'Estudos da Tradução',
      interpretes: 'Andreia e Rodrigo',
    },
    {
      horario: '21h–23h',
      disciplina: 'Introdução aos Estudos Surdos',
      interpretes: 'Erick e Camila',
    },
  ],

  4: [
    {
      horario: '10h–12h',
      disciplina: 'Escolares',
      interpretes: 'Débora',
    },
    {
      horario: '19h–21h',
      disciplina: 'PGA Libras',
      interpretes: 'Camila e Thayrine',
    },
    {
      horario: '19h–22h30',
      disciplina: 'PU Espanhol 3',
      interpretes: 'Erick e Andreia',
    },
    {
      horario: '21h–23h',
      disciplina: 'Escrita de Sinais',
      interpretes: 'Rodrigo e Erick',
    },
  ],

  5: [
    {
      horario: '16h–18h',
      disciplina: 'TCC Carolina',
      interpretes: 'Gabriel e Laiza',
    },
    {
      horario: '19h–22h',
      disciplina: 'PU Francês 1',
      interpretes: 'Camila e Rodrigo',
    },
  ],
};

const eventos: {
  [data: string]: {
    titulo: string;
    tipo: string;
  };
} = {
  '2026-09-28': {
    titulo: 'Setembro Surdo',
    tipo: 'Evento',
  },
};

const obterDiaSemana = (data: string): number => {
  const [ano, mes, dia] = data
    .substring(0, 10)
    .split('-')
    .map(Number);

  const dataObj = new Date(ano, mes - 1, dia);

  const diaJS = dataObj.getDay();

  if (diaJS === 0) {
    return 7;
  }

  return diaJS;
};

const formatarData = (data: string): string => {
  const [ano, mes, dia] = data
    .substring(0, 10)
    .split('-');

  return `${dia}/${mes}/${ano}`;
};

const gerarDatasMarcadas = () => {
  const datas = [];

  const inicio = new Date(2026, 8, 28);
  const fim = new Date(2026, 11, 31);

  const dataAtual = new Date(inicio);

  while (dataAtual <= fim) {
    const diaSemana = dataAtual.getDay();

    if (diaSemana >= 1 && diaSemana <= 5) {
      const ano = dataAtual.getFullYear();

      const mes = String(
        dataAtual.getMonth() + 1
      ).padStart(2, '0');

      const dia = String(
        dataAtual.getDate()
      ).padStart(2, '0');

      const data = `${ano}-${mes}-${dia}`;

      datas.push({
        date: data,
        textColor: '#ffffff',
        backgroundColor:
          data === '2026-09-28'
            ? '#f39c12'
            : '#3498db',
      });
    }

    dataAtual.setDate(
      dataAtual.getDate() + 1
    );
  }

  return datas;
};

const datasMarcadas = gerarDatasMarcadas();

const Tab1: React.FC = () => {
  const [dataSelecionada, setDataSelecionada] =
    useState<string>('2026-09-28');

  const [temaEscuro, setTemaEscuro] =
    useState<boolean>(false);

  const [horaAtual, setHoraAtual] =
    useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const alternarTema = () => {
    const novoTema = !temaEscuro;

    setTemaEscuro(novoTema);

    document.documentElement.classList.toggle(
      'ion-palette-dark',
      novoTema
    );
  };

  const data = dataSelecionada.substring(0, 10);

  const diaSemana = obterDiaSemana(data);

  const atividadesDoDia =
    escalaSemanal[
      diaSemana as keyof typeof escalaSemanal
    ] || [];

  const eventoDoDia = eventos[data];

  const horaFormatada =
    horaAtual.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

  const diaSemanaAtual =
    horaAtual.toLocaleDateString('pt-BR', {
      weekday: 'long',
    });

  const dataAtualFormatada =
    horaAtual.toLocaleDateString('pt-BR');

  return (
    <IonPage>

      <IonHeader>

        <IonToolbar>

          <IonTitle>
            Início
          </IonTitle>

          <IonButton
            slot="end"
            fill="clear"
            onClick={alternarTema}
          >
            <IonIcon
              slot="icon-only"
              icon={
                temaEscuro
                  ? sunny
                  : moon
              }
            />
          </IonButton>

        </IonToolbar>

      </IonHeader>

      <IonContent fullscreen>

        <IonCard>

          <IonCardHeader>

            <IonCardTitle>
              TILSP-UFJF
            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent>
            Escala da equipe de intérpretes de Libras.
          </IonCardContent>

        </IonCard>

        <IonCard>

          <IonCardHeader>

            <IonCardTitle>
              Calendário
            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent>

            <div className="calendario-relogio">

              <div className="area-calendario">

                <IonDatetime
                  presentation="date"
                  value={dataSelecionada}
                  min="2026-09-28"
                  max="2026-12-31"
                  highlightedDates={datasMarcadas}
                  onIonChange={(event) => {

                    const valor =
                      event.detail.value;

                    if (
                      typeof valor === 'string'
                    ) {
                      setDataSelecionada(valor);
                    }

                  }}
                />

              </div>

              <div className="relogio-card">

                <div className="relogio-icone">
                  🕐
                </div>

                <div className="relogio-hora">
                  {horaFormatada}
                </div>

                <div className="relogio-dia">
                  {diaSemanaAtual}
                </div>

                <div className="relogio-data">
                  {dataAtualFormatada}
                </div>

              </div>

            </div>

          </IonCardContent>

        </IonCard>

        <IonCard>

          <IonCardHeader>

            <IonCardTitle>
              📅 {formatarData(data)}
            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent>

            {eventoDoDia && (

              <IonCard>

                <IonCardHeader>

                  <IonCardTitle>
                    📢 {eventoDoDia.titulo}
                  </IonCardTitle>

                </IonCardHeader>

                <IonCardContent>

                  <p>
                    <strong>
                      Tipo:
                    </strong>{' '}

                    {eventoDoDia.tipo}
                  </p>

                </IonCardContent>

              </IonCard>

            )}

            {atividadesDoDia.length > 0 ? (

              <IonCard>

                <IonCardHeader>

                  <IonCardTitle>
                    📚 Escala do dia
                  </IonCardTitle>

                </IonCardHeader>

                <IonCardContent>

                  {atividadesDoDia.map(
                    (atividade, index) => (

                      <div key={index}>

                        <h3>
                          {atividade.horario}
                          {' — '}
                          {atividade.disciplina}
                        </h3>

                        <p>
                          Intérpretes:{' '}
                          {atividade.interpretes}
                        </p>

                        {index <
                          atividadesDoDia.length - 1 && (
                          <hr />
                        )}

                      </div>

                    )
                  )}

                </IonCardContent>

              </IonCard>

            ) : (

              <p>
                Não há escala cadastrada para este dia.
              </p>

            )}

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;
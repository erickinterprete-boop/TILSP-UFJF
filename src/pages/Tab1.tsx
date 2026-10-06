import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle, 
  IonContent, 
  IonDatetime, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
} from '@ionic/react'; 
 
import { moon, sunny } from 'ionicons/icons'; 
import { useEffect, useState } from 'react'; 
import './Tab1.css'; 
 
type Atividade = { 
  horario: string; 
  disciplina: string; 
  interpretes: string; 
  alunos: string[]; 
  faculdade?: string; 
  sala?: string; 
}; 
 
const escalaSemanal: Record<number, Atividade[]> = { 
  1: [ 
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
 
  2: [ 
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
 
  3: [ 
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
 
  4: [ 
    { horario: '08h–10h', disciplina: 'Física 1B', interpretes: 'Vanessa e Marcela', alunos: ['Ana Cleia'] }, 
    { 
      horario: '08h–12h', 
      disciplina: 'Escolares', 
      interpretes: 'Raissa, Nathalia e Débora', 
      alunos: ['Maria Laysa', 'Thais'], 
    }, 
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
 
  5: [ 
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
 
const nomesDias: Record<number, string> = { 
  1: 'Segunda-feira', 
  2: 'Terça-feira', 
  3: 'Quarta-feira', 
  4: 'Quinta-feira', 
  5: 'Sexta-feira', 
}; 
 
const getDiaSemana = (data: Date) => { 
  const dia = data.getDay(); 
  return dia === 0 ? 7 : dia; 
}; 
 
const formatarData = (data: Date) => { 
  return data.toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric', 
  }); 
}; 
 
const Tab1: React.FC = () => { 
  const [dataSelecionada, setDataSelecionada] = useState( 
    new Date().toISOString().split('T')[0] 
  ); 
 
  const [horaAtual, setHoraAtual] = useState(new Date()); 
 
  const [modoEscuro, setModoEscuro] = useState( 
    document.body.classList.contains('dark') 
  ); 
 
  const [alunosAbertos, setAlunosAbertos] = useState<string | null>(null); 
 
  useEffect(() => { 
    const intervalo = setInterval(() => { 
      setHoraAtual(new Date()); 
    }, 1000); 
 
    return () => clearInterval(intervalo); 
  }, []); 
 
  const alternarModo = () => { 
    document.body.classList.toggle('dark'); 
    setModoEscuro(document.body.classList.contains('dark')); 
  }; 
 
  const data = new Date(`${dataSelecionada}T12:00:00`); 
  const diaSemana = getDiaSemana(data); 
 
  const escalaDoDia = 
    diaSemana >= 1 && diaSemana <= 5 
      ? escalaSemanal[diaSemana] 
      : []; 
 
  const hoje = new Date(); 
  const inicioSemana = new Date(hoje); 
 
  const diaAtual = hoje.getDay() === 0 ? 7 : hoje.getDay(); 
 
  inicioSemana.setDate( 
    hoje.getDate() - diaAtual + 1 
  ); 
 
  const renderAtividade = ( 
    atividade: Atividade, 
    identificador: string 
  ) => { 
    const aberto = alunosAbertos === identificador; 
 
    return ( 
      <div 
        key={identificador} 
        style={{ 
          marginBottom: '20px', 
        }} 
      > 
        <strong>{atividade.horario}</strong> 
 
        <br /> 
 
        {atividade.disciplina} 
 
        <br /> 
 
        👥 {atividade.interpretes} 
 
        {atividade.faculdade && ( 
          <> 
            <br /> 
            🏛️ {atividade.faculdade} 
            <br /> 
            🚪 Sala {atividade.sala} 
          </> 
        )} 
 
        {atividade.alunos.length > 0 && ( 
          <> 
            <br /> 
 
            <IonButton 
              fill="clear" 
              size="small" 
              onClick={() => 
                setAlunosAbertos( 
                  aberto ? null : identificador 
                ) 
              } 
            > 
              {aberto ? 'Ocultar alunos' : 'Ver alunos'} 
            </IonButton> 
 
            {aberto && ( 
              <div> 
                <p> 
                  <strong>🎓 Alunos surdos:</strong> 
                </p> 
 
                {atividade.alunos.map((aluno) => ( 
                  <p key={aluno}>• {aluno}</p> 
                ))} 
              </div> 
            )} 
          </> 
        )} 
      </div> 
    ); 
  }; 
 
  return ( 
    <IonPage> 
      <IonHeader> 
        <IonToolbar> 
          <IonTitle className="titulo-tilsp">TILSP-UFJF</IonTitle> 
 
          <IonButton 
            slot="end" 
            fill="clear" 
            onClick={alternarModo} 
          > 
            <IonIcon 
              icon={modoEscuro ? sunny : moon} 
            /> 
          </IonButton> 
        </IonToolbar> 
      </IonHeader> 
 
      <IonContent fullscreen> 
        <div style={{ padding: '16px' }}> 
 
          <IonCard> 
            <IonCardHeader> 
              <IonCardTitle> 
                Intérpretes de Libras – UFJF 
              </IonCardTitle> 
            </IonCardHeader> 
 
            <IonCardContent> 
              Bem-vindo ao aplicativo TILSP-UFJF. 
              Aqui você pode consultar a escala de 
              intérpretes, os horários, os alunos surdos 
              e as salas. 
            </IonCardContent> 
          </IonCard> 
 
          <div className="calendario-relogio"> 
 
            <div className="area-calendario"> 
              <IonDatetime 
                presentation="date" 
                value={dataSelecionada} 
                min="2026-09-28" 
                max="2026-12-31" 
                firstDayOfWeek={1} 
                onIonChange={(e) => { 
                  if (e.detail.value) { 
                    setDataSelecionada( 
                      String(e.detail.value).split('T')[0] 
                    ); 
                  } 
                }} 
              /> 
            </div> 
 
            <div className="relogio-card"> 
 
              <div className="relogio-icone"> 
                🕐 
              </div> 
 
              <div className="relogio-hora"> 
                {horaAtual.toLocaleTimeString('pt-BR')} 
              </div> 
 
              <div className="relogio-dia"> 
                {horaAtual.toLocaleDateString('pt-BR', { 
                  weekday: 'long', 
                })} 
              </div> 
 
              <div className="relogio-data"> 
                {horaAtual.toLocaleDateString('pt-BR')} 
              </div> 
 
            </div> 
 
          </div> 
 
          <IonCard> 
            <IonCardHeader> 
              <IonCardTitle> 
                Semana atual 
              </IonCardTitle> 
            </IonCardHeader> 
 
            <IonCardContent> 
 
              {Array.from({ length: 5 }).map((_, index) => { 
                const numeroDia = index + 1; 
 
                const dataDia = new Date(inicioSemana); 
 
                dataDia.setDate( 
                  inicioSemana.getDate() + index 
                ); 
 
                const atividades = 
                  escalaSemanal[numeroDia]; 
 
                return ( 
                  <div 
                    key={numeroDia} 
                    style={{ 
                      marginBottom: '24px', 
                      paddingBottom: '16px', 
                      borderBottom: 
                        '1px solid var(--ion-color-medium)', 
                    }} 
                  > 
                    <h2> 
                      {nomesDias[numeroDia]} 
                    </h2> 
 
                    <p> 
                      {dataDia.toLocaleDateString('pt-BR')} 
                    </p> 
 
                    {atividades.map( 
                      (atividade, indexAtividade) => 
                        renderAtividade( 
                          atividade, 
                          `semana-${numeroDia}-${indexAtividade}` 
                        ) 
                    )} 
                  </div> 
                ); 
              })} 
 
            </IonCardContent> 
          </IonCard> 
 
          <IonCard> 
            <IonCardHeader> 
              <IonCardTitle> 
                Escala de {formatarData(data)} 
              </IonCardTitle> 
            </IonCardHeader> 
 
            <IonCardContent> 
 
              {escalaDoDia.length === 0 ? ( 
                <p> 
                  Não há escala para este dia. 
                </p> 
              ) : ( 
                escalaDoDia.map((atividade, index) => 
                  renderAtividade( 
                    atividade, 
                    `dia-${dataSelecionada}-${index}` 
                  ) 
                ) 
              )} 
 
            </IonCardContent> 
          </IonCard> 
 
        </div> 
      </IonContent> 
    </IonPage> 
  ); 
}; 
 
export default Tab1;
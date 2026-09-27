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
} from '@ionic/react';

import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Escala</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        {/* SEGUNDA-FEIRA */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Segunda-feira</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>

              <IonItem>
                <IonLabel>
                  <h2>PIBID</h2>
                  <p>15h–16h</p>
                  <p>Intérpretes: Cristina e Fabiano</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <h2>Introdução aos Estudos Surdos</h2>
                  <p>19h–21h</p>
                  <p>Intérpretes: Erick e Camila</p>
                </IonLabel>
              </IonItem>

            </IonList>
          </IonCardContent>
        </IonCard>


        {/* TERÇA-FEIRA */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Terça-feira</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>

              <IonItem>
                <IonLabel>
                  <h2>Escrita de Sinais</h2>
                  <p>19h–21h</p>
                  <p>Intérpretes: Erick e Thayrine</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <h2>PGA Libras</h2>
                  <p>21h–23h</p>
                  <p>Intérpretes: Camila e Thayrine</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <h2>Linguística 1</h2>
                  <p>21h–23h</p>
                  <p>Intérpretes: Wellington e Andreia</p>
                </IonLabel>
              </IonItem>

            </IonList>
          </IonCardContent>
        </IonCard>


        {/* QUARTA-FEIRA */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Quarta-feira</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>

              <IonItem>
                <IonLabel>
                  <h2>Estudos da Tradução</h2>
                  <p>19h–21h</p>
                  <p>Intérpretes: Andreia e Rodrigo</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <h2>Introdução aos Estudos Surdos</h2>
                  <p>21h–23h</p>
                  <p>Intérpretes: Erick e Camila</p>
                </IonLabel>
              </IonItem>

            </IonList>
          </IonCardContent>
        </IonCard>


        {/* QUINTA-FEIRA */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Quinta-feira</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>

              <IonItem>
                <IonLabel>
                  <h2>PGA Libras</h2>
                  <p>19h–21h</p>
                  <p>Intérpretes: Camila e Thayrine</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <h2>PU Espanhol 3</h2>
                  <p>19h–22h30</p>
                  <p>Intérpretes: Erick e Andreia</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <h2>Escrita de Sinais</h2>
                  <p>21h–23h</p>
                  <p>Intérpretes: Rodrigo e Erick</p>
                </IonLabel>
              </IonItem>

            </IonList>
          </IonCardContent>
        </IonCard>


        {/* SEXTA-FEIRA */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sexta-feira</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>

              <IonItem>
                <IonLabel>
                  <h2>TCC Carolina</h2>
                  <p>16h–18h</p>
                  <p>Intérpretes: Gabriel e Laiza</p>
                </IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>
                  <h2>PU Francês 1</h2>
                  <p>19h–22h</p>
                  <p>Intérpretes: Camila e Rodrigo</p>
                </IonLabel>
              </IonItem>

            </IonList>
          </IonCardContent>
        </IonCard>


        {/* EVENTOS */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Eventos</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>

              <IonItem>
                <IonLabel>
                  <h2>Setembro Surdo</h2>
                  <p>28/09</p>
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
import { Navigate, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import { ellipse, square, triangle } from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />} />
          <Route path="/tab3" element={<Tab3 />} />
          <Route path="/" element={<Navigate to="/tab1" replace />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Início</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Escala</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Equipe</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
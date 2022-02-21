import { IonButton, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonImg, IonRow } from "@ionic/react";
import { camera, notifications, people } from 'ionicons/icons';
import { usePhotoGallery } from '../hooks/usePhotoGallery';

import './ButtonBar.css'

export const ButtonBar: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <>
      <div className="buttonBar">
        <IonButton color="light" className="btnCircle">
          <IonIcon icon={notifications} slot="icon-only" />
        </IonButton>
        <IonButton color="light" className="btnCircle" onClick={takePhoto}>
          <IonIcon icon={camera} slot="icon-only" />
        </IonButton>
        <IonButton color="light" className="btnCircle">
          <IonIcon icon={people} slot="icon-only" />
        </IonButton>
      </div>
      <div>
        <IonContent className="img-viewer">
          <IonGrid>
            <IonRow>
              {photos.map((photo, index) => (
                <IonCol size="6" key={index}>
                  <IonImg src={photo.webviewPath} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </div>
    </>
  );
}

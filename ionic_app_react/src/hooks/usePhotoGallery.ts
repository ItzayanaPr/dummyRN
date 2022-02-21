import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Capacitor } from '@capacitor/core';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  let base64Data: string;

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + '.jpeg';
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    console.log(isPlatform('hybrid'))
    if (isPlatform('hybrid')) {
      console.log('isHybrid')
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    }
    setPhotos(newPhotos);
  };

  return {
    photos,
    takePhoto,
  };
}

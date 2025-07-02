import { Redirect } from 'expo-router';

export default function IndexPage() {
  // Si tu intención es que la ruta raíz '/' redirija a '/home',
  // este archivo es el correcto para definir la ruta raíz.
  return <Redirect href="/home" />;
}
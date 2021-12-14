import { createApp } from 'frint';

import HeroComponent from '../components/Hero/Hero';
import ButtonComponent from '../components/Button/Button';

export default createApp({
  name: 'App',
  providers: [
    {
      name: 'heroComponent',
      useValue: HeroComponent,
    },
    {
      name: 'buttonComponent',
      useValue: ButtonComponent,
    }
  ],
});

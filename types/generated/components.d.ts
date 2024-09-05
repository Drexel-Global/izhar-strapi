import type { Schema, Attribute } from '@strapi/strapi';

export interface MainPageHeroMainPageHero extends Schema.Component {
  collectionName: 'components_main_page_hero_main_page_heroes';
  info: {
    displayName: 'main-page-hero';
    icon: 'alien';
  };
  attributes: {
    mainHeading: Attribute.String;
    mainSubHeading: Attribute.String;
    heroImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main-page-hero.main-page-hero': MainPageHeroMainPageHero;
    }
  }
}

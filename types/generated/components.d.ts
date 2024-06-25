import type { Schema, Attribute } from '@strapi/strapi';

export interface MapSiteItem extends Schema.Component {
  collectionName: 'components_map_site_items';
  info: {
    displayName: 'Item';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface MapSiteListItems extends Schema.Component {
  collectionName: 'components_map_site_list_items';
  info: {
    displayName: 'ListItems';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    items: Attribute.Component<'map-site.item', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'map-site.item': MapSiteItem;
      'map-site.list-items': MapSiteListItems;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaqBlock extends Schema.Component {
  collectionName: 'components_faq_faq_blocks';
  info: {
    displayName: 'FAQBlock';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String;
    faqItems: Attribute.Component<'faq.faq-item', true>;
  };
}

export interface FaqFaqItem extends Schema.Component {
  collectionName: 'components_faq_faq_items';
  info: {
    displayName: 'FAQItem';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

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
      'faq.faq-block': FaqFaqBlock;
      'faq.faq-item': FaqFaqItem;
      'map-site.item': MapSiteItem;
      'map-site.list-items': MapSiteListItems;
    }
  }
}

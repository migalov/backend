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

export interface PageBlocksHtmlBlock extends Schema.Component {
  collectionName: 'components_page_blocks_html_blocks';
  info: {
    displayName: 'HTML Block';
    icon: 'code';
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
    iconsBlock: Attribute.Component<'page-blocks.icon', true>;
    bgColor: Attribute.Enumeration<['yellow', 'green']>;
  };
}

export interface PageBlocksIcon extends Schema.Component {
  collectionName: 'components_page_blocks_icons';
  info: {
    displayName: 'Icon';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    src: Attribute.String;
    url: Attribute.String;
    width: Attribute.Integer;
  };
}

export interface PageBlocksIconsBlock extends Schema.Component {
  collectionName: 'components_page_blocks_icons_blocks';
  info: {
    displayName: 'IconsBlock';
    icon: 'apps';
  };
  attributes: {
    iconsBlock: Attribute.Component<'page-blocks.icon', true>;
  };
}

export interface PageBlocksImage extends Schema.Component {
  collectionName: 'components_page_blocks_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String;
    src: Attribute.String;
  };
}

export interface PageBlocksMap extends Schema.Component {
  collectionName: 'components_page_blocks_maps';
  info: {
    displayName: 'IFrame';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    src: Attribute.String;
  };
}

export interface PageBlocksTwoColumn extends Schema.Component {
  collectionName: 'components_page_blocks_two_columns';
  info: {
    displayName: 'TwoColumn';
    icon: 'dashboard';
  };
  attributes: {
    firstColumn: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
    secondColumn: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faq-block': FaqFaqBlock;
      'faq.faq-item': FaqFaqItem;
      'map-site.item': MapSiteItem;
      'map-site.list-items': MapSiteListItems;
      'page-blocks.html-block': PageBlocksHtmlBlock;
      'page-blocks.icon': PageBlocksIcon;
      'page-blocks.icons-block': PageBlocksIconsBlock;
      'page-blocks.image': PageBlocksImage;
      'page-blocks.map': PageBlocksMap;
      'page-blocks.two-column': PageBlocksTwoColumn;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuItem extends Schema.Component {
  collectionName: 'components_menu_items';
  info: {
    displayName: 'item';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ProductPrice extends Schema.Component {
  collectionName: 'components_product_prices';
  info: {
    displayName: 'Price';
    icon: 'priceTag';
  };
  attributes: {
    quantity: Attribute.Integer;
    value: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.item': MenuItem;
      'product.price': ProductPrice;
    }
  }
}

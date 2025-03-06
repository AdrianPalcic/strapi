import type { Schema, Struct } from '@strapi/strapi';

export interface BlogContent extends Struct.ComponentSchema {
  collectionName: 'components_blog_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    Text: Schema.Attribute.RichText;
  };
}

export interface BlogContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_content_blocks';
  info: {
    description: '';
    displayName: 'Content-block';
  };
  attributes: {
    BodyImage: Schema.Attribute.Media<'images', true>;
    Bodytext: Schema.Attribute.Blocks;
    Content: Schema.Attribute.Enumeration<['Text', 'Image']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Text'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.content': BlogContent;
      'blog.content-block': BlogContentBlock;
    }
  }
}

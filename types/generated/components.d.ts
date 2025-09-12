import type { Schema, Struct } from '@strapi/strapi';

export interface FormFormFields extends Struct.ComponentSchema {
  collectionName: 'components_form_form_fields';
  info: {
    description: 'Single form field';
    displayName: 'form-field';
    icon: 'inputText';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String;
    required: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    type: Schema.Attribute.Enumeration<
      ['text', 'email', 'password', 'number']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface FormLoginForm extends Struct.ComponentSchema {
  collectionName: 'components_form_login_forms';
  info: {
    displayName: 'login-form';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Login'>;
    fields: Schema.Attribute.Component<'form.form-fields', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form.form-fields': FormFormFields;
      'form.login-form': FormLoginForm;
    }
  }
}

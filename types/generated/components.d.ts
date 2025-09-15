import type { Schema, Struct } from '@strapi/strapi';

export interface FormFormComponent extends Struct.ComponentSchema {
  collectionName: 'components_form_form_components';
  info: {
    description: 'A complete form component with fields and settings';
    displayName: 'Form Component';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    componentDescription: Schema.Attribute.Text;
    componentKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    componentTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    errorMessage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'There was an error submitting the form. Please try again.'>;
    formFields: Schema.Attribute.Component<'form.form-field', true> &
      Schema.Attribute.Required;
    resetButtonText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<'Reset'>;
    showResetButton: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    submitButtonText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<'Submit'>;
    successMessage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'Form submitted successfully!'>;
    validationMode: Schema.Attribute.Enumeration<
      ['onChange', 'onBlur', 'onSubmit']
    > &
      Schema.Attribute.DefaultTo<'onSubmit'>;
  };
}

export interface FormFormField extends Struct.ComponentSchema {
  collectionName: 'components_form_form_fields';
  info: {
    description: 'A simple form field component';
    displayName: 'Form Field';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    errorMessage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    fieldKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    fieldLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    fieldOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    fieldType: Schema.Attribute.Enumeration<
      ['text', 'email', 'password', 'number', 'textarea', 'select', 'checkbox']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
    helpText: Schema.Attribute.Text;
    isDisabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    maxLength: Schema.Attribute.Integer;
    maxValue: Schema.Attribute.Integer;
    minLength: Schema.Attribute.Integer;
    minValue: Schema.Attribute.Integer;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    selectOptions: Schema.Attribute.Text;
  };
}

export interface FormFormSettings extends Struct.ComponentSchema {
  collectionName: 'components_form_form_settings';
  info: {
    description: 'Simple settings for forms';
    displayName: 'Form Settings';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    adminEmail: Schema.Attribute.Email;
    confirmationEmailSubject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'Thank you for your submission'>;
    emailSubject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }> &
      Schema.Attribute.DefaultTo<'New Form Submission'>;
    errorMessage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'There was an error submitting the form. Please try again.'>;
    resetButtonText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<'Reset'>;
    sendConfirmationEmail: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    sendEmailNotification: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showResetButton: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    submitButtonText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }> &
      Schema.Attribute.DefaultTo<'Submit'>;
    successMessage: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'Form submitted successfully!'>;
  };
}

export interface FormFormStyling extends Struct.ComponentSchema {
  collectionName: 'components_form_form_stylings';
  info: {
    description: 'Styling options for forms';
    displayName: 'Form Styling';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    borderRadius: Schema.Attribute.String & Schema.Attribute.DefaultTo<'4px'>;
    customCSS: Schema.Attribute.Text;
    fontFamily: Schema.Attribute.String;
    fontSize: Schema.Attribute.String & Schema.Attribute.DefaultTo<'16px'>;
    primaryColor: Schema.Attribute.String;
    spacing: Schema.Attribute.String & Schema.Attribute.DefaultTo<'16px'>;
    textColor: Schema.Attribute.String;
    theme: Schema.Attribute.Enumeration<
      ['default', 'minimal', 'modern', 'classic']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface UserProfilesStatisticsCard extends Struct.ComponentSchema {
  collectionName: 'components_user_profiles_statistics_cards';
  info: {
    description: 'Configure a statistics card';
    displayName: 'Statistics Card';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    cardColor: Schema.Attribute.Enumeration<
      ['green', 'blue', 'purple', 'orange', 'red']
    > &
      Schema.Attribute.DefaultTo<'green'>;
    cardDescription: Schema.Attribute.String;
    cardTitle: Schema.Attribute.String & Schema.Attribute.Required;
    dataType: Schema.Attribute.Enumeration<
      [
        'totalUsers',
        'activeSellers',
        'activeBuyers',
        'pendingUsers',
        'suspendedUsers',
      ]
    > &
      Schema.Attribute.Required;
    displayOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface UserProfilesTableColumn extends Struct.ComponentSchema {
  collectionName: 'components_user_profiles_table_columns';
  info: {
    description: 'Configure a table column';
    displayName: 'Table Column';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    columnName: Schema.Attribute.String & Schema.Attribute.Required;
    columnWidth: Schema.Attribute.String & Schema.Attribute.DefaultTo<'auto'>;
    dataField: Schema.Attribute.Enumeration<
      [
        'name',
        'email',
        'type',
        'company',
        'country',
        'status',
        'orders',
        'joinDate',
      ]
    > &
      Schema.Attribute.Required;
    displayOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    isSortable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface UserProfilesUserForm extends Struct.ComponentSchema {
  collectionName: 'components_user_profiles_user_forms';
  info: {
    description: 'Flexible form configuration for creating/editing users';
    displayName: 'User Form';
  };
  options: {
    timestamps: false;
  };
  attributes: {
    dialogWidth: Schema.Attribute.Enumeration<['sm', 'md', 'lg', 'xl', '2xl']> &
      Schema.Attribute.DefaultTo<'2xl'>;
    errorMessage: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'There was an error. Please try again.'>;
    formDescription: Schema.Attribute.Text;
    formFields: Schema.Attribute.Component<'form.form-field', true> &
      Schema.Attribute.Required;
    formTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Add New User'>;
    submitButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Create User'>;
    successMessage: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'User created successfully!'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form.form-component': FormFormComponent;
      'form.form-field': FormFormField;
      'form.form-settings': FormFormSettings;
      'form.form-styling': FormFormStyling;
      'user-profiles.statistics-card': UserProfilesStatisticsCard;
      'user-profiles.table-column': UserProfilesTableColumn;
      'user-profiles.user-form': UserProfilesUserForm;
    }
  }
}

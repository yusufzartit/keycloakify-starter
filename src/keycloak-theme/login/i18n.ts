import {createUseI18n} from "keycloakify/login";

export const {useI18n} = createUseI18n({
    // NOTE: Here you can override the default i18n messages
    en: {
        // alphanumericalCharsOnly: "Only alphanumerical characters",
        // gender: "Gender",
        // // Here we overwrite the default english value for the message "doForgotPassword"
        // // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
        // doForgotPassword: "I forgot my password",
        // invalidUserMessage: "Invalid username or password. (this message was overwrite in the theme)"
        userRole: "User Role",
        company: "Company",
        customer: "Customer"
    },
    de: {
        userRole: "Benutzerrolle",
        company: "Unternehmen",
        customer: "Kunde"
    }
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;

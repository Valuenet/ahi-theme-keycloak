/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
                                    .withThemeName<ThemeName>()
                                    .withCustomTranslations({
                                        "pt-BR": {
                                            "error-user-attribute-required": "Campo de preenchimento obrigatório",
                                            "registerTitle": "Cadastre-se",
                                            "usernameOrEmail": "CPF ou E-mail",
                                            "username": "CPF",
                                            "emailExistsMessage": "Já existe uma conta com este endereço de e-mail.",
                                            "acceptTerms": "Aceito os termos e condições",
                                            "invalidUsernameMessage": "Nome de usuário inválido.",
                                            "invalidUsernameOrEmailMessage": "Nome de usuário ou e-mail inválido."
                                        }
                                    })
                                    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };

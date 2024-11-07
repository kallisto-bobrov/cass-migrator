import React from 'react';
import styled from 'styled-components';
import { btnSecodarySkin } from '../../../atoms/Button/Button.skins';
import type { DefaultFormProps } from '../__types__/NewsletterMaatooForm.type';
import preventScriptInjection from '../../../../helpers/preventScriptInjection/preventScriptInjection';
import mq from '@/styles/mediaQueries/mediaQueries';

const FormWrapper = styled.div<{ $formName?: string }>`
  #mauticform_${(props) => props.$formName}_email2 {
    display: none;
  }

  &&& {
    strong {
      font-weight: bold;
    }

    .flexWrapper {
      justify-content: space-between;
      align-items: flex-end;
    }

    .mauticform-row {
      width: 46%;

      @media (${mq.smDown}) {
        width: 100%;
      }
    }

    .mauticform-row--100 {
      width: 100%;
    }

    .mauticform-row--0 {
      width: auto;
      flex: 1 0 auto;
    }

    .mauticform-input {
      width: 100%;
    }

    .mauticform-input--no-underline {
      border-bottom: none;
    }

    .mauticform-button {
      ${btnSecodarySkin};
      padding: 9px 20px;
    }

    .mauticform-errormsg {
      position: absolute;
      min-height: 25px;
    }

    label {
      @media (${mq.smDown}) {
        font-size: 16px;
      }
    }
  }
`;

const DefaultForm = ({
  id,
  formName,
  labelEmail,
  labelFirstName,
  labelName,
  cta,
}: DefaultFormProps) => (
  <FormWrapper
    $formName={formName}
    dangerouslySetInnerHTML={{
      __html: `
          <div id="mauticform_wrapper_${formName}" class="mauticform_wrapper">
            <form autocomplete="false" role="form" method="post" action="https://cassini.maatoo.io/form/submit?formId=${id}" id="mauticform_${formName}" data-mautic-form="${formName}" target="mauticiframe_${formName}" enctype="multipart/form-data">
              <div class="mauticform-innerform">
                <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">

                <div class="flexWrapper flexWrapper--wrap">
                  <div id="mauticform_${formName}_nachname" class="mauticform-row mauticform-text mauticform-field-3">
                    <label id="mauticform_label_${formName}_nachname" for="mauticform_input_${formName}_nachname" class="mauticform-label">${preventScriptInjection(
                      labelName!,
                    )}</label>
                    <input id="mauticform_input_${formName}_nachname" name="mauticform[nachname]" value="" class="mauticform-input" type="text">
                    <span class="mauticform-errormsg" style="display: none;"></span>
                  </div>

                  <div id="mauticform_${formName}_vorname" class="mauticform-row mauticform-text mauticform-field-2">
                    <label id="mauticform_label_${formName}_vorname" for="mauticform_input_${formName}_vorname" class="mauticform-label">${preventScriptInjection(
                      labelFirstName!,
                    )}</label>
                    <input id="mauticform_input_${formName}_vorname" name="mauticform[vorname]" value="" class="mauticform-input" type="text">
                    <span class="mauticform-errormsg" style="display: none;"></span>
                  </div>
                </div>

                <div class="flexWrapper">
                  <div id="mauticform_${formName}_emailadresse" data-validate="emailadresse" data-validation-type="email" class="mauticform-row mauticform-row--100 mauticform-email mauticform-field-1 mauticform-required">
                    <label id="mauticform_label_${formName}_emailadresse" for="mauticform_input_${formName}_emailadresse" class="mauticform-label">${preventScriptInjection(
                      labelEmail!,
                    )}</label>
                    <input id="mauticform_input_${formName}_emailadresse" name="mauticform[emailadresse]" value="" class="mauticform-input mauticform-input--no-underline" type="email">
                    <span class="mauticform-errormsg" style="display: none;">Bitte eine gültige Emailadresse eingeben</span>
                  </div>

                  <input id="mauticform_input_newsletteranmeldung_source1" name="mauticform[source1]" value="Newsletter" class="mauticform-hidden" type="hidden">
                  <br />

                  <div id="mauticform_${formName}_email2" class="mauticform-row mauticform-email mauticform-field-5">
                    <label id="mauticform_label_${formName}_email2" for="mauticform_input_${formName}_email2" class="mauticform-label">email2</label>
                    <input id="mauticform_input_${formName}_email2" name="mauticform[email2]" value="" class="mauticform-input" type="email">
                    <span class="mauticform-errormsg" style="display: none;"></span>
                  </div>

                  <div id="mauticform_${formName}_submit" class="mauticform-row mauticform-row--0 mauticform-button-wrapper mauticform-field-6">
                    <button type="submit" name="mauticform[submit]" id="mauticform_input_${formName}_submit" value="" class="mauticform-button btn btn-default"><span>${preventScriptInjection(
                      cta!,
                    )}</span></button>
                  </div>
                </div>

                </div>
              </div>

              <div class="mauticform-error" id="mauticform_${formName}_error"></div>
              <div class="mauticform-message" id="mauticform_${formName}_message"></div>

              <input type="hidden" name="mauticform[formId]" id="mauticform_${formName}_id" value=${id}>
              <input type="hidden" name="mauticform[return]" id="mauticform_${formName}_return" value="">
              <input type="hidden" name="mauticform[formName]" id="mauticform_${formName}_name" value="${formName}">

            </form>
          </div>
          `,
    }}
  />
);

export default DefaultForm;

import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  strong {
    font-weight: bold;
  }
`;

type Props = {
  id: string;
};

const CassiniForm = ({ id }: Props) => (
  <FormWrapper
    dangerouslySetInnerHTML={{
      __html: `
            <script>
              function handleMauticError() {
                setTimeout(function() {
                  const errorClass = document.getElementsByClassName('mauticform-has-error')[0];
                  if (errorClass) {
                    errorClass.scrollIntoView();
                  }
                }, 250);
              };
            </script>

            <div id="mauticform_wrapper_bewerbung" class="mauticform_wrapper">
              <form autocomplete="false" role="form" method="post" action="https://cassini.maatoo.io/form/submit?formId=2" id="mauticform_bewerbung"  data-mautic-form="bewerbung" enctype="multipart/form-data">
              <div class="mauticform-innerform">
                <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                  <div class="personalDetails">
                    <div id="mauticform_bewerbung_f_name"  data-validate="f_name" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-3 mauticform-required">
                      <label id="mauticform_label_bewerbung_f_name" for="mauticform_input_bewerbung_f_name" class="mauticform-label">Name*</label>
                      <input id="mauticform_input_bewerbung_f_name" name="mauticform[f_name]" value="" class="mauticform-input" type="text" />
                      <span class="mauticform-errormsg" style="display: none;">Bitte geben Sie ihren Namen ein.</span>
                    </div>

                    <div id="mauticform_bewerbung_vorname"  data-validate="vorname" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-4 mauticform-required">
                      <label id="mauticform_label_bewerbung_vorname" for="mauticform_input_bewerbung_vorname" class="mauticform-label">Vorname*</label>
                      <input id="mauticform_input_bewerbung_vorname" name="mauticform[vorname]" value="" class="mauticform-input" type="text" />
                      <span class="mauticform-errormsg" style="display: none;">Bitte geben Sie ihren Vornamen ein.</span>
                    </div>

                    <div id="mauticform_bewerbung_email"  data-validate="email" data-validation-type="email" class="mauticform-row mauticform-email mauticform-field-5 mauticform-required">
                      <label id="mauticform_label_bewerbung_email" for="mauticform_input_bewerbung_email" class="mauticform-label">E-Mail*</label>
                      <input id="mauticform_input_bewerbung_email" name="mauticform[email]" value="" class="mauticform-input" type="email" />
                      <span class="mauticform-errormsg" style="display: none;">Bitte eine gültige E-Mail Adresse angeben</span>
                    </div>

                    <div id="mauticform_bewerbung_telefonnummer"  class="mauticform-row mauticform-number mauticform-field-6">
                      <label id="mauticform_label_bewerbung_telefonnummer" for="mauticform_input_bewerbung_telefonnummer" class="mauticform-label">Telefonnummer</label>
                      <input id="mauticform_input_bewerbung_telefonnummer" name="mauticform[telefonnummer1]" value="" class="mauticform-input" type="tel" />
                      <span class="mauticform-errormsg" style="display: none;"></span>
                    </div>

                    <div id="mauticform_bewerbung_anhang"  data-validate="anhang" data-validation-type="file" class="mauticform-row mauticform-file mauticform-field-7 mauticform-required">
                      <label id="mauticform_label_bewerbung_anhang" for="mauticform_input_bewerbung_anhang" class="mauticform-label">Anhang*</label>
                      <input id="mauticform_input_bewerbung_anhang" name="mauticform[anhang]" value="" class="mauticform-input" type="file" multiple />
                      <div class="inputComment">
                      Hinweis: Bitte füge Deine deutschsprachigen Bewerbungsunterlagen inklusive eines Anschreibens an. Erstelle hierfür bitte <strong>eine PDF-Datei (max. 5 MB)</strong>, die alle Unterlagen beinhaltet.
                       Du findest unsere Datenschutzbestimmungen <a href="/datenschutz">hier</a>.
                    </div>
                      <span class="mauticform-errormsg" style="display: none;">Bitte eine Datei zum Hochladen auswählen.</span>
                    </div>
                  </div>

                  <div id="mauticform_bewerbung_optin"  data-validate="optin" data-validation-type="checkboxgrp" class="mauticform-row mauticform-checkboxgrp mauticform-field-8 mauticform-required mtStandard">
                    <div class="mauticform-checkboxgrp-row">
                      <label id="mauticform_checkboxgrp_label_optin_true0" for="mauticform_checkboxgrp_checkbox_optin_true0"  class="mauticform-checkboxgrp-label">
                        <input  class="mauticform-checkboxgrp-checkbox" name="mauticform[optin][]" id="mauticform_checkboxgrp_checkbox_optin_true0" type="checkbox" value="true" />
                        Ich stimme den Datenschutzbestimmungen zu.
                        Diese findest Du <a href="/datenschutz">hier</a>.
                        <div class="customElm"></div>
                      </label>
                    </div>
                    <span class="mauticform-errormsg" style="display: none;">Bitte den Datenschutzbestimmungen zustimmen.</span>
                  </div>

                  <input id="mauticform_input_bewerbung_bewerbungsid" name="mauticform[bewerbungsid]" value="${id}" class="mauticform-hidden" type="hidden">

                  <div id="mauticform_bewerbung_position" class="mauticform-row mauticform-text mauticform-position-2 mauticform-field-8 mauticform-required">
                    <label id="mauticform_label_bewerbung_position" htmlFor="mauticform_input_bewerbung_position" class="mauticform-label">Ihre Position*</label>
                    <input id="mauticform_input_bewerbung_position" name="mauticform[position]" value="" class="mauticform-input" type="text">
                    <span class="mauticform-errormsg" style="display: none;">Dieses Feld ist Pflicht.</span>
                  </div>


                  <div id="mauticform_bewerbung_submit"  class="mauticform-row mauticform-button-wrapper mauticform-field-9" onclick="handleMauticError()">
                    <button type="submit" name="mauticform[submit]" id="mauticform_input_bewerbung_submit" name="mauticform[submit]" value="" class="mauticform-button btn btn-default" value="1">
                      <span>Absenden</span>
                    </button>
                  </div>
                </div>
              </div>
              <input type="hidden" name="mauticform[formId]" id="mauticform_bewerbung_id" value="2">
              <input type="hidden" name="mauticform[return]" id="mauticform_bewerbung_return" value="">
              <input type="hidden" name="mauticform[formName]" id="mauticform_bewerbung_name" value="bewerbung">
              <div class="mauticform-error" id="mauticform_bewerbung_error"></div>
              <div class="mauticform-message" id="mauticform_bewerbung_message"></div>
            </form>
          </div>
          `,
    }}
  />
);

export default CassiniForm;

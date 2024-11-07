import preventScriptInjection from '../../../../helpers/preventScriptInjection/preventScriptInjection';
import { FormProps } from '@/components/organisms/EventregistrationMaatooForm/__types__/EventregistrationMaatooForm.type';

export default ({
  formName,
  eventId,
  id,
  cta,
  labelFirstName,
  labelName,
  labelCompany,
  labelPhone,
  labelEmail,
  labelRequest,
  firstDisclaimerText,
  secondDisclaimerText,
  labelJobtitle,
}: FormProps) => `
<div id="mauticform_wrapper_${formName}" class="mauticform_wrapper">
  <form
    autocomplete="false"
    role="form"
    method="post"
    action="https://cassini.maatoo.io/form/submit?formId=${id}"
    class=""
    target="mauticiframe_${formName}"
    id="mauticform_${formName}"
    data-mautic-form="${formName}"
    enctype="multipart/form-data"
  >
    <div class="mauticform-innerform">
      <div
        class="mauticform-page-wrapper mauticform-page-1"
        data-mautic-form-page="1"
      >
        <div
          id="mauticform_${formName}_vorname"
          data-validate="vorname"
          data-validation-type="text"
          class="
            mauticform-row
            mauticform-text
            mauticform-field-1
            mauticform-required
          "
        >
          <label
            id="mauticform_label_${formName}_vorname"
            for="mauticform_input_${formName}_vorname"
            class="mauticform-label"
            >${preventScriptInjection(labelFirstName || '')}</label
          >
          <input
            id="mauticform_input_${formName}_vorname"
            name="mauticform[vorname]"
            value=""
            class="mauticform-input"
            type="text"
          />
          <span class="mauticform-errormsg" style="display: none"
            >Bitte geben Sie ihren Vornamen an</span
          >
        </div>
        <div
          id="mauticform_${formName}_nachname"
          data-validate="nachname"
          data-validation-type="text"
          class="
            mauticform-row
            mauticform-text
            mauticform-field-2
            mauticform-required
          "
        >
          <label
            id="mauticform_label_${formName}_nachname"
            for="mauticform_input_${formName}_nachname"
            class="mauticform-label"
            >${preventScriptInjection(labelName || '')}</label
          >
          <input
            id="mauticform_input_${formName}_nachname"
            name="mauticform[nachname]"
            value=""
            class="mauticform-input"
            type="text"
          />
          <span class="mauticform-errormsg" style="display: none"
            >Bitte geben Sie ihren Nachnamen an</span
          >
        </div>
        <div
          id="mauticform_${formName}_jobtitel"
          class="
            mauticform-row
            mauticform-text
            mauticform-field-3
          "
        >
          <label
            id="mauticform_label_${formName}_jobtitel"
            for="mauticform_input_${formName}_jobtitel"
            class="mauticform-label"
            >${preventScriptInjection(labelJobtitle || '')}</label
          >
          <input
            id="mauticform_input_${formName}_jobtitel"
            name="mauticform[jobtitel]"
            value=""
            class="mauticform-input"
            type="text"
          />
        </div>
        <div
          id="mauticform_${formName}_unternehmen"
          class="
            mauticform-row
            mauticform-text
            mauticform-field-4
          "
        >
          <label
            id="mauticform_label_${formName}_unternehmen"
            for="mauticform_input_${formName}_unternehmen"
            class="mauticform-label"
            >${preventScriptInjection(labelCompany || '')}</label
          >
          <input
            id="mauticform_input_${formName}_unternehmen"
            name="mauticform[unternehmen]"
            value=""
            class="mauticform-input"
            type="text"
          />
        </div>
        <div
          id="mauticform_${formName}_telefonnummer"
          class="
            mauticform-row
            mauticform-text
            mauticform-field-5
          "
        >
          <label
            id="mauticform_label_${formName}_telefonnummer"
            for="mauticform_input_${formName}_telefonnummer"
            class="mauticform-label"
            >${preventScriptInjection(labelPhone || '')}</label
          >
          <input
            id="mauticform_input_${formName}_telefonnummer"
            name="mauticform[telefonnummer]"
            value=""
            class="mauticform-input"
            type="text"
          />
        </div>
        <div
          id="mauticform_${formName}_emailadresse"
          data-validate="emailadresse"
          data-validation-type="email"
          class="
            mauticform-row
            mauticform-email
            mauticform-field-6
            mauticform-required
          "
        >
          <label
            id="mauticform_label_${formName}_emailadresse"
            for="mauticform_input_${formName}_emailadresse"
            class="mauticform-label"
            >${preventScriptInjection(labelEmail || '')}</label
          >
          <input
            id="mauticform_input_${formName}_emailadresse"
            name="mauticform[emailadresse]"
            value=""
            class="mauticform-input"
            type="email"
          />
          <span class="mauticform-errormsg" style="display: none"
            >Bitte eine gültige Emailadresse eingeben</span
          >
        </div>
        <div
          id="mauticform_${formName}_anfrage"
          data-validate="anfrage"
          data-validation-type="textarea"
          class="mauticform-row mauticform-text mauticform-field-6 mauticform-required"
        >
          <label
            id="mauticform_label_${formName}_anfrage"
            for="mauticform_input_${formName}_anfrage"
            class="mauticform-label"
            >${preventScriptInjection(labelRequest || '')}</label
          >
          <textarea
            id="mauticform_input_${formName}_anfrage"
            name="mauticform[anfrage]"
            class="mauticform-textarea"
          ></textarea>
          <span class="mauticform-errormsg" style="display: none"
            >Bitte fügen Sie Ihre Anfrage ein</span
          >
        </div>

        <div class="checkbox-group">
            <div id="mauticform_${formName}_newsletternamledung" class="mauticform-row mauticform-checkboxgrp mauticform-field-7">
                <div class="mauticform-checkboxgrp-row">
                <label id="mauticform_checkboxgrp_label_newsletternamledung_true0" for="mauticform_checkboxgrp_checkbox_newsletternamledung_true0" class="mauticform-checkboxgrp-label">
                    <input class="mauticform-checkboxgrp-checkbox" name="mauticform[newsletternamledung][]" id="mauticform_checkboxgrp_checkbox_newsletternamledung_true0" type="checkbox" value="true">
                    ${preventScriptInjection(firstDisclaimerText)}
                    <div class="customElm"></div>
                </label>
                </div>
                <span class="mauticform-errormsg" style="display: none;"></span>
            </div>

            <div id="mauticform_${formName}_datenschutz" data-validate="datenschutz" data-validation-type="checkboxgrp" class="mauticform-row mauticform-checkboxgrp mauticform-field-8 mauticform-required">
                <div class="mauticform-checkboxgrp-row">
                <label id="mauticform_checkboxgrp_label_datenschutz_true0" for="mauticform_checkboxgrp_checkbox_datenschutz_true0" class="mauticform-checkboxgrp-label">
                    <input class="mauticform-checkboxgrp-checkbox" name="mauticform[datenschutz][]" id="mauticform_checkboxgrp_checkbox_datenschutz_true0" type="checkbox" value="true">
                    ${preventScriptInjection(secondDisclaimerText)}
                    <div class="customElm"></div>
                    <span class="mauticform-errormsg" style="display: none;">Bitte stimmen Sie der Nutzung Ihrer Daten zu.</span>
                </label>
                </div>
            </div>
        </div>

        <input
          id="mauticform_input_${formName}_source"
          name="mauticform[source]"
          value="${eventId}"
          class="mauticform-hidden"
          type="hidden"
        />

        <div id="mauticform_${formName}_position" class="mauticform-row mauticform-text mauticform-position-2 mauticform-field-8 mauticform-required">
          <label id="mauticform_label_${formName}_position" htmlFor="mauticform_input_${formName}_position" class="mauticform-label">Ihre Position*</label>
          <input id="mauticform_input_${formName}_position" name="mauticform[position]" value="" class="mauticform-input" type="text">
          <span class="mauticform-errormsg" style="display: none;">Dieses Feld ist Pflicht.</span>
        </div>

        <div
          id="mauticform_${formName}_submit"
          class="mauticform-row mauticform-button-wrapper mauticform-field-9"
        >
          <button
            type="submit"
            name="mauticform[submit]"
            id="mauticform_input_${formName}_submit"
            value=""
            class="mauticform-button btn btn-default"
          >
            ${preventScriptInjection(cta || '')}
          </button>
        </div>
      </div>
    </div>
    <input
      type="hidden"
      name="mauticform[formId]"
      id="mauticform_${formName}_id"
      value="${id}"
    />
    <input
      type="hidden"
      name="mauticform[return]"
      id="mauticform_${formName}_return"
      value=""
    />
    <input
      type="hidden"
      name="mauticform[formName]"
      id="mauticform_${formName}_name"
      value="${formName}"
    />
    <div class="mauticform-error" id="mauticform_${formName}_error"></div>
    <div class="mauticform-message" id="mauticform_${formName}_message"></div>
  </form>
</div>
`;

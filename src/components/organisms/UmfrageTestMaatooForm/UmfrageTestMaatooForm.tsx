import React from 'react';
import styled from 'styled-components';
import { UmfrageTestMaatooFormType } from './__types__/UmfrageTestMaatooForm.type';
import MaatooFormStyles from '../JobsMaatooForm/components/Styles.JobsMaatooForm';
import { gridGutterHalf } from '../../grid/Container/Container';
import mq from '@/styles/mediaQueries/mediaQueries';

const FormWrapper = styled.div`
  ${MaatooFormStyles};

  padding: 0;
  margin: 0;

  @media (${mq.smDown}) {
    padding: 0 ${`${gridGutterHalf}px`};
  }

  .mauticform-checkboxgrp-row {
    margin-top: 35px;
  }

  #mauticform_input_umfragetest_summary {
    display: none;
  }
`;

const UmfrageTestMaatooForm = ({
  umfrage_test_id,
  score,
  summary,
}: UmfrageTestMaatooFormType) => (
  <FormWrapper
    dangerouslySetInnerHTML={{
      __html: `
          <div id="mauticform_wrapper_umfragetest" class="mauticform_wrapper" xmlns="http://www.w3.org/1999/html">
              <form autocomplete="false" role="form" method="post" action="https://cassini.maatoo.io/form/submit?formId=15" class="" id="mauticform_umfragetest" data-mautic-form="umfragetest" enctype="multipart/form-data">
                  <div class="mauticform-innerform">
                    <div class="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                      <div id="mauticform_umfragetest_f_name" data-validate="f_name" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-1 mauticform-required">
                          <label id="mauticform_label_umfragetest_f_name" for="mauticform_input_umfragetest_f_name" class="mauticform-label">Name*</label>
                          <input id="mauticform_input_umfragetest_f_name" name="mauticform[f_name]" value="" class="mauticform-input" type="text">
                          <span class="mauticform-errormsg" style="display: none;">Bitte geben Sie ihren Nachnamen an</span>
                      </div>

                      <div id="mauticform_umfragetest_vorname" data-validate="vorname" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-2 mauticform-required">
                          <label id="mauticform_label_umfragetest_vorname" for="mauticform_input_umfragetest_vorname" class="mauticform-label">Vorname*</label>
                          <input id="mauticform_input_umfragetest_vorname" name="mauticform[vorname]" value="" class="mauticform-input" type="text">
                          <span class="mauticform-errormsg" style="display: none;">Bitte geben Sie ihren Vornamen an</span>
                      </div>

                      <div id="mauticform_umfragetest_email" data-validate="email" data-validation-type="email" class="mauticform-row mauticform-email mauticform-field-3 mauticform-required">
                          <label id="mauticform_label_umfragetest_email" for="mauticform_input_umfragetest_email" class="mauticform-label">E-Mail*</label>
                          <input id="mauticform_input_umfragetest_email" name="mauticform[email]" value="" class="mauticform-input" type="email">
                          <span class="mauticform-errormsg" style="display: none;">Bitte eine gültige Emailadresse eingeben</span>
                      </div>

                      <div id="mauticform_umfragetest_unternehmen" data-validate="unternehmen" data-validation-type="text" class="mauticform-row mauticform-text mauticform-field-4 mauticform-required">
                          <label id="mauticform_label_umfragetest_unternehmen" for="mauticform_input_umfragetest_unternehmen" class="mauticform-label">Unternehmen*</label>
                          <input id="mauticform_input_umfragetest_unternehmen" name="mauticform[unternehmen]" value="" class="mauticform-input" type="text">
                          <span class="mauticform-errormsg" style="display: none;">Bitte ein Unternehmen eingeben</span>
                      </div>

                      <div id="mauticform_umfragetest_newsletternamledung" class="mauticform-row mauticform-checkboxgrp mauticform-field-10">
                        <div class="mauticform-checkboxgrp-row">
                            <label id="mauticform_checkboxgrp_label_newsletternamledung_true0" for="mauticform_checkboxgrp_checkbox_newsletternamledung_true0" class="mauticform-checkboxgrp-label">
                                <input class="mauticform-checkboxgrp-checkbox" name="mauticform[newsletternamledung][]" id="mauticform_checkboxgrp_checkbox_newsletternamledung_true0" type="checkbox" value="true">
                                  Ja, ich bin damit einverstanden, dass mir die Cassini Consulting AG darüber hinaus weitere Informationen über entsprechende Themen aus der Welt der digitalen Transformation, Veranstaltungen und ähnliches per E-Mail regelmäßig zukommen lässt.
                                <div class="customElm"></div>
                                <span class="mauticform-errormsg" style="display: none;"></span>
                            </label>
                          </div>
                      </div>

                      <div id="mauticform_umfragetest_datenschutz" data-validate="datenschutz" data-validation-type="checkboxgrp" class="mauticform-row mauticform-checkboxgrp mauticform-field-5 mauticform-required">
                          <div class="mauticform-checkboxgrp-row">
                            <label id="mauticform_checkboxgrp_label_datenschutz_true0" for="mauticform_checkboxgrp_checkbox_datenschutz_true0" class="mauticform-checkboxgrp-label">
                                <input class="mauticform-checkboxgrp-checkbox" name="mauticform[datenschutz][]" id="mauticform_checkboxgrp_checkbox_datenschutz_true0" type="checkbox" value="true">
                                  Ich stimme den Datenschutzbestimmungen zu. Diese finden Sie <a href="/datenschutz">hier</a>.
                                <div class="customElm"></div>
                                <span class="mauticform-errormsg" style="display: none;">Bitte stimmen Sie der Nutzung Ihrer Daten zu.</span>
                            </label>
                          </div>
                      </div>

                      <input id="mauticform_input_umfragetest_score" name="mauticform[score]" value="${score}" class="mauticform-hidden" type="hidden">

                      <input id="mauticform_input_umfragetest_f_id" name="mauticform[f_id]" value="${umfrage_test_id}" class="mauticform-hidden" type="hidden">

                      <div id="mauticform_umfragetest_position" class="mauticform-row mauticform-text mauticform-position-2 mauticform-field-8 mauticform-required">
                          <label id="mauticform_label_umfragetest_position" for="mauticform_input_umfragetest_position" class="mauticform-label">Position*</label>
                          <input id="mauticform_input_umfragetest_position" name="mauticform[position]" value="" class="mauticform-input" type="text">
                          <span class="mauticform-errormsg" style="display: none;">Dieses Feld ist Pflicht.</span>
                      </div>

                      <div id="mauticform_umfragetest_summary" class="mauticform-row mauticform-text mauticform-field-9">
                        <textarea id="mauticform_input_umfragetest_summary" name="mauticform[summary]" class="mauticform-textarea">${JSON.stringify(summary, null, 2)}</textarea>
                        <span class="mauticform-errormsg" style="display: none;"></span>
                      </div>

                      <div class="mauticform-error" id="mauticform_umfragetest_error"></div>

                      <div class="mauticform-message" id="mauticform_umfragetest_message"></div>

                      <div id="mauticform_umfragetest_submit" class="mauticform-row mauticform-button-wrapper mauticform-field-9">
                          <button type="submit" name="mauticform[submit]" id="mauticform_input_umfragetest_submit" value="" class="mauticform-button btn btn-default">Absenden</button>
                      </div>
                    </div>
                  </div>

                  <input type="hidden" name="mauticform[formId]" id="mauticform_umfragetest_id" value="15">
                  <input type="hidden" name="mauticform[return]" id="mauticform_umfragetest_return" value="">
                  <input type="hidden" name="mauticform[formName]" id="mauticform_umfragetest_name" value="umfragetest">
              </form>
          </div>
        `,
    }}
  />
);

export default UmfrageTestMaatooForm;

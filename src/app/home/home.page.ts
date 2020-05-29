import { Component } from '@angular/core';
import * as Survey from 'survey-angular';
import * as widgets from 'surveyjs-widgets';

widgets.nouislider(Survey);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async ionViewWillEnter() {

    const questionnaire = {
      elements: [
        {
            type: 'nouislider',
            name: 'range',
            title: 'Please select a value',
            'orientation': 'vertical',
            'direction': 'rtl',
            'indent': 5,
        }
      ]
    };

    const survey = new Survey.Model(questionnaire);

    Survey.SurveyNG.render('surveyElement', {
      model: survey,
    });
  }

}

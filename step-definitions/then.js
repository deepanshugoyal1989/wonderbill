var {Then} = require('cucumber');
import jsonHelper from './../helpers/json.helper'

Then(/^I should display payment details in json format for all accounts$/, function () {

    console.log(jsonHelper.jsonString);

});
import {returnNumeral} from './scripts.js';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    $("#result").hide();
    var numberInput = parseInt($("#integer-input").val());
    var result = returnNumeral(numberInput);
    $(".conversion").text(result);
    $("#result").show(result);
  });
});

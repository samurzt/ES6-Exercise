"use strict";
import * as converterScript from './converterScript.js';
import * as inputOutputScript from './inputOutputScript.js';

document.getElementById('btn_km_to_mi').onclick = function() {
    inputOutputScript.InputOutputElementSetter('km_mi_result', converterScript.convert.kmtomile, 'km_mi_para');
};

document.getElementById('btn_mi_to_km').onclick = function() {
    inputOutputScript.InputOutputElementSetter('km_mi_result', converterScript.convert.miletokm, 'km_mi_para');
};

document.getElementById('btn_in_to_ft').onclick = function() {
    inputOutputScript.InputOutputElementSetter('in_ft_result', converterScript.convert.inchtofeet, 'in_ft_para');
};

document.getElementById('btn_ft_to_in').onclick = function() {
    inputOutputScript.InputOutputElementSetter('in_ft_result', converterScript.convert.feettoinch, 'in_ft_para');
};


    
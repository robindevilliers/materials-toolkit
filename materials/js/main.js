import $ from "jquery";

import "bootstrap/js/dist/util.js";
import "bootstrap/js/dist/modal.js";
import "bootstrap/js/dist/carousel.js";
import "bootstrap/js/dist/alert.js";
import "bootstrap/js/dist/tooltip.js";
import "bootstrap/js/dist/toast.js";
import "bootstrap/js/dist/tab.js";
import "bootstrap/js/dist/scrollspy.js";
import "bootstrap/js/dist/dropdown.js";
import "bootstrap/js/dist/collapse.js";
import "bootstrap/js/dist/button.js";
import "./colorPicker.js";
import "./selectPanel.js";
import "./fontPicker.js";

document.documentElement.className = "js-enabled"

$(function () {

    $(':radio[data-mw-blind]').each(function () {
        if ($(this).is(":checked")) {
            $('#value-panel-' + $(this).attr('id')).animate({height: 'show'});
        }
    });

    $(':checkbox[data-mw-blind]').each(function () {
        if ($(this).is(":checked")) {
            $('#value-panel-' + $(this).attr('id')).animate({height: 'show'});
        }
    });

    $('select').each(function () {

        let values = $(this).val();
        if (!Array.isArray(values)) {
            values = [values];
        }

        const id = $(this).attr('id');
        $(this).find('option[data-mw-blind]').each(function () {
            const val = $(this).attr('value');
            if (values.includes(val)) {
                $('#value-panel-' + id + '-' + $(this).data('mw-blind')).animate({height: 'show'});
            }
        });
    });

    $(':radio').change(function () {
        $(':radio[data-mw-blind][name=' + $(this).attr('name') + ']').each(function () {
            $('#value-panel-' + $(this).attr('id')).animate({height: 'hide'});
        });
        if ($(this).is("[data-mw-blind]")) {
            if ($(this).is(":checked")) {
                $('#value-panel-' + $(this).attr('id')).animate({height: 'show'});
            } else {
                $('#value-panel-' + $(this).attr('id')).animate({height: 'hide'});
            }
        }
    });

    $(':checkbox').change(function () {
        if ($(this).is("[data-mw-blind]")) {
            if ($(this).is(":checked")) {
                $('#value-panel-' + $(this).attr('id')).animate({height: 'show'});
            } else {
                $('#value-panel-' + $(this).attr('id')).animate({height: 'hide'});
            }
        }
    });

    $('select').change(function () {

        let values = $(this).val();
        if (!Array.isArray(values)) {
            values = [values];
        }

        const id = $(this).attr('id');
        $(this).find('option[data-mw-blind]').each(function () {
            const val = $(this).attr('value');
            if (values.includes(val)) {
                $('#value-panel-' + id + '-' + $(this).data('mw-blind')).animate({height: 'show'});
            } else {
                $('#value-panel-' + id + '-' + $(this).data('mw-blind')).animate({height: 'hide'});
            }
        });
    });

    $('.currency-field').keypress(function (event) {
        const val = event.target.value;
        const index = val.indexOf(".");
        if (index > -1) {
            const decimals = val.substring(index + 1);
            if (decimals.length > 1) {
                return false;
            }
        }
        return true;
    });
})

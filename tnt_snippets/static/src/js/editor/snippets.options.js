odoo.define('tours.snippets.options',function(require) {
	'use strict';
    var core = require('web.core');
    var Dialog = require('web.Dialog');
    var Widget = require('web.Widget');
    var weContext = require('web_editor.context');
    var widget = require('web_editor.widget');
	var options = require('web_editor.snippets.options');

	options.registry.snippet_change_image_options = options.Class.extend({
		onFocus: function () {
		    console.log("focus me!!!");
		},
        onClone: function (options) {
		    console.log(options);
		    this.$target.find('a.btn').attr("data-target","")
		},
		/**
         * Handles a background change.
         *
         * @see this.selectClass for parameters
         */
        background: function (previewMode, value, $li) {
            this.$("img").attr("src","");
        },
		chooseImage: function (previewMode, value, $li) {
            // Put fake image in the DOM, edit it and use it as background-image
            var $image = $('<img/>', {class: 'hidden', src: value}).appendTo(this.$target);

            var _editor = new widget.MediaDialog(this, {}, null, $image[0]).open();
            _editor.opened(function () {
                _editor.$('[href="#editor-media-video"], [href="#editor-media-icon"]').addClass('hidden');
            });

            _editor.on('save', this, function () {
                this.$("img").attr("src",$image.attr('src'));
            });
            _editor.on('closed', this, function () {
                $image.remove();
            });
        },
	});
});
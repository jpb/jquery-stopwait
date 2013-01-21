!function ($) {

	"use strict"; // jshint ;_;

	var Stopwait = function (element, options) {
		this.options = $.extend({}, $.fn.stopwait.defaults, options)
		this.$element = $(element)
		this.$element.on('click.stopwait.data-api', {stopwaitObject: this}, this.activate)
		this.$element.on('submit.stopwait.data-api', {stopwaitObject: this}, this.activate)
	}

	Stopwait.prototype = {

		constructor: Stopwait

		, activate: function (e) {
			var $this = e.data.stopwaitObject
			, $cursorWaitElement = $( $this.options.cursorWaitElement )
			, $disableElements = ($this.options.disableElements) ? $( $this.options.disableElements ) : $this

			$disableElements.attr("disabled","disabled")
			$cursorWaitElement.css("cursor", "wait")

			return false
		}
	}

	$.fn.stopwait = function (option) {
		return this.each(function () {
			var $this = $(this)
			, data = $this.data('stopwait')
			, options = typeof option == 'object' && option
			if (!data) $this.data('stopwait', (data = new Stopwait(this, options)))
			if (typeof option == 'string') data[option]()
		})
	}

	$.fn.stopwait.Constructor = Stopwait

	$.fn.stopwait.defaults = {
		disableElements: "input[type='submit']"
		, cursorWaitElement: "body"
	}

}(window.jQuery);
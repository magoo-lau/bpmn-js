'use strict';

var is = require('../../util/ModelUtil').is;

var inherits = require('inherits');

var forEach = require('lodash/collection/forEach');

var AutoResizeProvider = require('diagram-js/lib/features/auto-resize/AutoResizeProvider');

/**
 * This module is a provider for automatically resizing parent BPMN elements
	当前模块是自动调整父元素大小
 */
function BpmnAutoResizeProvider(eventBus, modeling) {
  AutoResizeProvider.call(this, eventBus);

  this._modeling = modeling;
}

inherits(BpmnAutoResizeProvider, AutoResizeProvider);

BpmnAutoResizeProvider.$inject = [ 'eventBus', 'modeling' ];

module.exports = BpmnAutoResizeProvider;


/**
 * Check if the given target can be expanded
	检查是否可以执行自动调整大小
 *
 * @param  {djs.model.Shape} target
 *
 * @return {boolean}
 */
BpmnAutoResizeProvider.prototype.canResize = function(elements, target) {

  if (!is(target, 'bpmn:Participant') && !is(target, 'bpmn:Lane') && !(is(target, 'bpmn:SubProcess'))) {
    return false;
  }

  var canResize = true;

  forEach(elements, function(element) {

    if (is(element, 'bpmn:Lane') || element.labelTarget) {
      canResize = false;
      return;
    }
  });

  return canResize;
};

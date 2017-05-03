module.exports = {
  __depends__: [
    require('diagram-js/lib/features/align-elements'),
    require('diagram-js/lib/features/editor-actions'),
	  //手移动工具
    require('diagram-js/lib/features/hand-tool'),
		//套索工具
    require('diagram-js/lib/features/lasso-tool'),
		//隔开工具
    require('diagram-js/lib/features/space-tool'),
    require('../global-connect'),
    require('../copy-paste'),
    require('../distribute-elements'),
    require('../search'),
    require('../modeling')
  ],
  editorActions: [ 'type', require('./BpmnEditorActions') ]
};

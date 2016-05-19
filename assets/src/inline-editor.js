
var css = require('./inline-editor.css');

var InlineContentEditor = (function () {
    function InlineContentEditor() {
        var items = [];
        var dialog = [];
        this.closeDialog = function () {
            for (var i = 0; i < dialog.length; i++) {
                var element = dialog[i];
                element.outerHTML = "";
            }
            dialog.splice(0, dialog.length);
        }

        this.openDialog = function (formUri) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('id', 'inline-content-editor--edit-form')
            newDiv.innerHTML = "<a id=\"inline-content-editor--edit-form-close\">[x] закрыть</a><iframe id=\"inline-content-editor--form-holder\" src=\"" + formUri + "\">";

            var background = document.createElement("div");
            background.setAttribute('id', 'inline-content-editor--background')

            document.body.appendChild(newDiv);
            document.body.appendChild(background);
            dialog.push(newDiv);
            dialog.push(background);

            newDiv.querySelector('#inline-content-editor--edit-form-close')
                    .addEventListener('click', this.closeDialog);
            background.addEventListener('click', this.closeDialog);

        }
        this.register = function (query) {
            items.push(query);
            var item = document.querySelector(query);
            var formUri = item.getAttribute('data-edit-form');
            item.addEventListener('dblclick', (function (_this) {
                return (function () {
                    return _this.openDialog(formUri);
                });
            })(this));
        }
        window.addEventListener('close-inline-editor-frame', (function (_this) {
            return (function () {
                _this.closeDialog();
                location.reload();
            });
        })(this));
    }

    return InlineContentEditor;

})();

module.exports = new InlineContentEditor();

'use babel';

import RxjsReduxSnippetsView from './rxjs-redux-snippets-view';
import { CompositeDisposable } from 'atom';

export default {

  rxjsReduxSnippetsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.rxjsReduxSnippetsView = new RxjsReduxSnippetsView(state.rxjsReduxSnippetsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.rxjsReduxSnippetsView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'rxjs-redux-snippets:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.rxjsReduxSnippetsView.destroy();
  },

  serialize() {
    return {
      rxjsReduxSnippetsViewState: this.rxjsReduxSnippetsView.serialize()
    };
  },

  toggle() {
    console.log('RxjsReduxSnippets was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

  
};
